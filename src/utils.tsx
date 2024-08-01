import { Folder, Item } from "./types";

export function getSortedArray<T, K extends keyof T>(arr: T[], key?: K, sortOrder: 'asc' | 'desc' = 'asc'): T[] {
  if (!key) return arr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  const result = arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
  return sortOrder === 'asc' ? result : result.reverse();
}

export const searchFiles = (data: (Item | Folder)[], query: string): (Item | Folder)[] => {
  let results: (Item | Folder)[] = [];

  data.forEach((item) => {
    if (item.name.toLowerCase().includes(query.toLowerCase())) { results.push(item); }
    if (item.type === 'folder') { results = results.concat(searchFiles(item.files, query)); }
  });

  return results;
};
