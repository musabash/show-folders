import React, { useMemo, useState } from 'react';

import type { Item, Folder, SortableKeys } from './types';
import ContentsTable from './components/ContentsTable';
import { sampleData } from './temp';
import SearchComponent from './components/SearchComponent';
import { getSortedArray } from './utils';

const App: React.FC = () => {
  const [selectedData, setSelectedData] = useState<(Item | Folder)[]>(sampleData);
  const [browseHistory, setBrowseHistory] = useState<(Item | Folder)[][]>([]);
  const [address, setAddress] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<SortableKeys>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleFolderClick = (files: (Item | Folder)[], name: string): void => {
    setSelectedData(files);
    setAddress(prev => [...prev, name]);
    setBrowseHistory(prev => [...prev, files]);
  };

  const handleNavigateToParent = (): void => {
    setBrowseHistory(prev => {
      const parent = prev.slice(0, -1)[0] || sampleData;
      setAddress(prev => prev.slice(0, -1));
      setSelectedData(parent);
      return prev.slice(0, -1);
    });
  };

  const handleSort = (sortKey: SortableKeys) => {
    setSortKey(prev => {
      prev !== sortKey ? setSortOrder('asc') : setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
      return sortKey;
    });

  };

  const sortedData = useMemo(() => {
    const folders = selectedData.filter(item => item.type === 'folder') as Folder[];
    const filteredData = selectedData.filter(item => item.type !== 'folder') as Item[];
    const result = sortOrder === 'asc' ? [...getSortedArray(folders, 'name', sortOrder), ...getSortedArray(filteredData, sortKey, sortOrder)] : [...getSortedArray(filteredData, sortKey, sortOrder), ...getSortedArray(folders, 'name', sortOrder)];
    return result;
  }, [sortKey, sortOrder, selectedData]);

  return (
    <div className="flex flex-col items-center m-8">
      <div className="m-8 rounded-md bg-gray-100 p-8 font-mono">
        <div>Musa Bas - Frontend Developer - 05/07/2024</div>
        <ul className="list-disc pl-8 text-xs">
          <li>Displays the files/folders</li>
          <li>Allows users to open a folder and view its contents</li>
          <li>Sortable by name/size/date</li>
          <li>Filtering functionality not added</li>
        </ul>
      </div>

      <div className="p-8 rounded-md w-fit h-fit border min-h-[250px] min-w-[500px] shadow border-gray-100 font-mono">
        <SearchComponent />
        <h2 className="px-3">{`/${address?.join('/')}`}</h2>
        <ContentsTable data={sortedData} showNavigatToParent={browseHistory?.length > 0} {...{ sortKey, sortOrder, handleFolderClick, handleSort, handleNavigateToParent }} />
      </div>
    </div>
  );
};

export default App;
