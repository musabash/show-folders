import React from 'react';

import { sortOrderMap } from '../config';
import { SortableKeys } from 'src/types';

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
        {headers.map(({ title, key }) => (
          <th {...{ key }} className="relative px-3 align-baseline text-left">
            {sortKey === key && <div className="absolute left-0">{sortOrderMap[sortOrder]}</div>}
            {key === 'type' ? title : <button onClick={() => handleSort(key as SortableKeys)}>{title}</button>}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default ContentsTableHeader;
