import { execSync } from 'node:child_process'
import * as log from './logger.js'

function run(cmd: string): string {
  log.info(`$ ${cmd}`)
  return execSync(cmd, { encoding: 'utf-8', timeout: 30_000 }).trim()
}

/**
 * Stage files, commit, and push to main.
 * Used by the news crawler for auto-commits.
 */
export function commitAndPush(files: string[], message: string): void {
  if (files.length === 0) return

  for (const f of files) {
    run(`git add "${f}"`)
  }

  // Check if there are actually staged changes
  try {
    run('git diff --cached --quiet')
    log.info('No staged changes, skipping commit.')
    return
  } catch {
    // Non-zero exit = there are changes, which is what we want
  }

  run(`git commit -m "${message.replace(/"/g, '\\"')}" --author "BladeTracker Crawler <crawler@bladetracker.app>"`)
  run('git push origin main')
  log.info('Committed and pushed to main.')
}

/**
 * Create a branch, commit changes, push, and open a PR.
 * Used by results/skater crawlers.
 */
export function createPR(opts: {
  branch: string
  files: string[]
  title: string
  body: string
  labels?: string[]
}): string | null {
  if (opts.files.length === 0) return null

  // Check if branch already exists remotely (avoid duplicate PRs)
  try {
    const existing = run(`gh pr list --head "${opts.branch}" --state open --json number --jq length`)
    if (existing !== '0') {
      log.info(`PR already exists for branch ${opts.branch}, skipping.`)
      return null
    }
  } catch {
    // gh CLI not available or no existing PRs — continue
  }

  // Create and checkout branch
  try {
    run(`git checkout -b "${opts.branch}"`)
  } catch {
    run(`git checkout "${opts.branch}"`)
  }

  // Stage and commit
  for (const f of opts.files) {
    run(`git add "${f}"`)
  }

  try {
    run('git diff --cached --quiet')
    log.info('No staged changes, skipping PR.')
    run('git checkout main')
    return null
  } catch {
    // There are changes
  }

  run(`git commit -m "${opts.title.replace(/"/g, '\\"')}" --author "BladeTracker Crawler <crawler@bladetracker.app>"`)
  run(`git push -u origin "${opts.branch}"`)

  // Create PR
  const labelArgs = opts.labels?.map((l) => `--label "${l}"`).join(' ') || ''
  const prUrl = run(
    `gh pr create --title "${opts.title.replace(/"/g, '\\"')}" --body "${opts.body.replace(/"/g, '\\"')}" ${labelArgs}`,
  )

  // Return to main
  run('git checkout main')

  log.info(`Created PR: ${prUrl}`)
  return prUrl
}
