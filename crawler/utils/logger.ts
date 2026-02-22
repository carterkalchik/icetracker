const isCI = !!process.env.CI

function timestamp(): string {
  return new Date().toISOString().slice(11, 19)
}

export function info(msg: string): void {
  console.log(`[${timestamp()}] ${msg}`)
}

export function warn(msg: string): void {
  if (isCI) {
    console.log(`::warning::${msg}`)
  } else {
    console.warn(`[${timestamp()}] WARN: ${msg}`)
  }
}

export function error(msg: string): void {
  if (isCI) {
    console.log(`::error::${msg}`)
  } else {
    console.error(`[${timestamp()}] ERROR: ${msg}`)
  }
}

export function group(title: string): void {
  if (isCI) {
    console.log(`::group::${title}`)
  } else {
    console.log(`\n--- ${title} ---`)
  }
}

export function groupEnd(): void {
  if (isCI) {
    console.log('::endgroup::')
  }
}
