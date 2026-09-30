import { formatTitle } from './utils/format'

/** 演示用问候逻辑 */
export function greet(name: string): string {
  const safe = name.trim() || 'RepoKit'
  return `${formatTitle('demo')}: Hello, ${safe}!`
}
