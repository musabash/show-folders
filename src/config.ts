import type { SortableKeys } from "./types";

export const sortOrderMap = { desc: '↓', asc: '↑' };

export const headers: { title: string, key: SortableKeys | 'type' }[] = [
  { title: 'Name', key: 'name' },
  { title: 'Type', key: 'type'},
  { title: 'Date added', key: 'added' },
  { title: 'Size', key: 'size' }
];

