import Anthropic from '@anthropic-ai/sdk'
import { CLAUDE_MODEL, CLAUDE_RATE_LIMIT_MS, CLAUDE_MAX_RETRIES } from '../config.js'
import type { ClaudeSummary } from '../types.js'
import * as log from './logger.js'

const client = new Anthropic()

let lastCallTime = 0

async function rateLimit(): Promise<void> {
  const now = Date.now()
  const elapsed = now - lastCallTime
  if (elapsed < CLAUDE_RATE_LIMIT_MS) {
    await new Promise((resolve) => setTimeout(resolve, CLAUDE_RATE_LIMIT_MS - elapsed))
  }
  lastCallTime = Date.now()
}

async function callWithRetry<T>(fn: () => Promise<T>): Promise<T> {
  for (let attempt = 1; attempt <= CLAUDE_MAX_RETRIES; attempt++) {
    try {
      await rateLimit()
      return await fn()
    } catch (err) {
      if (attempt === CLAUDE_MAX_RETRIES) throw err
      const delay = 1000 * Math.pow(2, attempt)
      log.warn(`Claude API attempt ${attempt} failed, retrying in ${delay}ms: ${err}`)
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  }
  throw new Error('Unreachable')
}

interface KnownEntities {
  skaters: string[]
  elements: string[]
  competitions: string[]
}

function buildEntityFilterSet(knownEntities: KnownEntities): Set<string> {
  return new Set([
    ...knownEntities.skaters,
    ...knownEntities.elements,
    ...knownEntities.competitions,
  ])
}

function parseClaudeResponse(responseText: string, allKnown: Set<string>): ClaudeSummary {
  const parsed = JSON.parse(responseText) as ClaudeSummary
  if (!parsed.summary || !Array.isArray(parsed.entities)) {
    throw new Error('Invalid response structure from Claude')
  }
  parsed.entities = parsed.entities.filter((e) => allKnown.has(e.id))
  return parsed
}

/**
 * Summarizes an article from its full body text and extracts entity references.
 */
export async function summarizeArticle(
  title: string,
  text: string,
  knownEntities: KnownEntities,
): Promise<ClaudeSummary> {
  const prompt = `You are a figure skating news assistant. Summarize this article and identify entities.

ARTICLE TITLE: ${title}

ARTICLE TEXT:
${text}

KNOWN ENTITY IDS (only use these exact IDs):
Skaters: ${knownEntities.skaters.join(', ')}
Elements: ${knownEntities.elements.join(', ')}
Competitions: ${knownEntities.competitions.join(', ')}

Respond with ONLY valid JSON in this exact format (no markdown, no code fences):
{
  "summary": "2-3 sentence summary of the article focused on the key figure skating news",
  "entities": [
    {"type": "skater", "id": "exact-id-from-list-above"},
    {"type": "element", "id": "exact-id-from-list-above"},
    {"type": "competition", "id": "exact-id-from-list-above"}
  ]
}

Rules:
- Summary should be 2-3 sentences, informative and neutral
- Only include entities that are MENTIONED in the article
- Only use entity IDs from the provided lists — do NOT invent new IDs
- If no known entities match, return an empty entities array
- Return ONLY the JSON object, nothing else`

  const allKnown = buildEntityFilterSet(knownEntities)

  return callWithRetry(async () => {
    const response = await client.messages.create({
      model: CLAUDE_MODEL,
      max_tokens: 512,
      messages: [{ role: 'user', content: prompt }],
    })

    const block = response.content[0]
    if (block.type !== 'text') {
      throw new Error('Unexpected response type from Claude')
    }

    return parseClaudeResponse(block.text, allKnown)
  })
}

/**
 * Summarizes an article from its headline only (for Google News items
 * where the article URL is not resolvable).
 * Uses a more constrained prompt since we have less context.
 */
export async function summarizeFromTitle(
  title: string,
  source: string,
  knownEntities: KnownEntities,
): Promise<ClaudeSummary> {
  const prompt = `You are a figure skating news assistant. Based ONLY on the headline below, write a brief summary and identify entities.

HEADLINE: ${title}
SOURCE: ${source}

KNOWN ENTITY IDS (only use these exact IDs):
Skaters: ${knownEntities.skaters.join(', ')}
Elements: ${knownEntities.elements.join(', ')}
Competitions: ${knownEntities.competitions.join(', ')}

Respond with ONLY valid JSON in this exact format (no markdown, no code fences):
{
  "summary": "1-2 sentence summary based strictly on what the headline states",
  "entities": [
    {"type": "skater", "id": "exact-id-from-list-above"},
    {"type": "competition", "id": "exact-id-from-list-above"}
  ]
}

Rules:
- Summary must be based ONLY on what the headline says — do not add details not in the headline
- Keep it to 1-2 sentences
- Only include entities clearly referenced in the headline
- Only use entity IDs from the provided lists — do NOT invent new IDs
- Return ONLY the JSON object, nothing else`

  const allKnown = buildEntityFilterSet(knownEntities)

  return callWithRetry(async () => {
    const response = await client.messages.create({
      model: CLAUDE_MODEL,
      max_tokens: 256,
      messages: [{ role: 'user', content: prompt }],
    })

    const block = response.content[0]
    if (block.type !== 'text') {
      throw new Error('Unexpected response type from Claude')
    }

    return parseClaudeResponse(block.text, allKnown)
  })
}
