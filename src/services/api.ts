export async function api<T>(path: string): Promise<T> {
  const res = await fetch(`/api${path}`)
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(body ? `API ${res.status}: ${path} - ${body}` : `API ${res.status}: ${path}`)
  }
  return res.json()
}
