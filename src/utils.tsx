export function getSortedArray<T, K extends keyof T>(arr: T[], key?: K, sortOrder: 'asc' | 'desc' = 'asc'): T[] {
  if (!key) return arr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  const result = arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
  return sortOrder === 'asc' ? result : result.reverse();
}