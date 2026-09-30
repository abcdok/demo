/** 将标识符格式化为标题样式 */
export function formatTitle(id: string): string {
  return id.charAt(0).toUpperCase() + id.slice(1)
}

export function clampLines(text: string, maxLines: number): string {
  const lines = text.split('\n')
  if (lines.length <= maxLines) {
    return text
  }
  return lines.slice(0, maxLines).join('\n') + '\n…'
}
