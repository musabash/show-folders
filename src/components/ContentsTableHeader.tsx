import React from 'react';

import type { SortableKeys } from '../types';
import { sortOrderMap } from '../config';

interface ContentsTableHeaderProps {
  sortKey: SortableKeys;
  sortOrder: 'asc' | 'desc';
  headers: { title: string, key: string; }[];
  handleSort: (sortKey: SortableKeys) => void;
}

const ContentsTableHeader: React.FC<ContentsTableHeaderProps> = ({ handleSort, headers, sortKey, sortOrder }) => {
  return (
    <thead className="border-separate space-x-0 border-b border-gray-300 border-spacing-4">
      <tr>
        {headers.map(header => (
          <th key={header.key} className="relative px-3 align-baseline text-left">
            {sortKey === header.key && <div className="absolute left-0">{sortOrderMap[sortOrder]}</div>}
            <button onClick={() => handleSort(header.key as SortableKeys)}>{header.title}</button>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default ContentsTableHeader;
