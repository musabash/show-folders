export type ItemType = 'doc' | 'pdf'| 'mov' | 'png' | 'csv';

export interface Item {
  type: ItemType;
  name: string;
  added: string;
  size: number;
};

export interface Folder {
  type: 'folder';
  name: string;
  files: (Item | Folder)[];
};

export type SortableKeys = 'name' | 'added' | 'size';