import React from 'react';


import ContentsTableHeader from './ContentsTableHeader';

import type { Item, Folder, SortableKeys } from '../types';
import { headers } from '../config';

interface ContentsTableProps {
  data: (Item | Folder)[];
  showNavigatToParent?: boolean;
  sortKey: SortableKeys;
  sortOrder: 'asc' | 'desc';
  handleFolderClick: (files: (Item | Folder)[], name: string) => void;
  handleNavigateToParent: () => void;
  handleSort: (sortKey: SortableKeys) => void;
}
const ContentsTable: React.FC<ContentsTableProps> = (props) => {
  const { data, sortKey, sortOrder, handleFolderClick, handleNavigateToParent, handleSort, showNavigatToParent } = props;

  return (
    <table className="table-auto border-collapse w-full">
      <ContentsTableHeader {...{ handleSort, headers, sortOrder, sortKey }} />
      <tbody>
        {showNavigatToParent && <td className="px-3 text-left align-baseline"> <button onClick={handleNavigateToParent}>..</button></td>}
        {data?.map((item) => {
          return item?.type === 'folder' ? (
            <tr key={item.name}>
              <td className="px-3 text-left align-baseline">
                <button className="cursor-pointer font-medium" onClick={() => handleFolderClick(item.files, item.name)}>
                  {item.name}
                </button>
              </td>
              <td className="px-3 text-left align-baseline">{item.type}</td>
            </tr>
          ) : (
            <tr key={item.name}>
              <td className="px-3 text-left align-baseline">{item.name}</td>
              <td className="px-3 text-left align-baseline">{item.type}</td>
              <td className="px-3 text-left align-baseline">{item.added}</td>
              <td className="px-3 text-left align-baseline">{item.size}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContentsTable;
