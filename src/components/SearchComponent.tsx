import React, { useState } from 'react';

import type { Folder, Item } from '../types';
import { sampleData } from '../temp';
import { searchFiles } from '../utils';

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<(Item | Folder)[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    const searchResults = searchFiles(sampleData, value);
    setResults(searchResults);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search files and folders"
        className="p-2 border rounded mb-4 w-full"
      />
      <div className="space-y-2">
        {query && results.map((item) => (
          <div key={`${item.type}-${item.name}`} className="p-2 border rounded">
            {item.type === 'folder' ? (
              <span>📁 {item.name}</span>
            ) : (
              <span>📄 {item.name} ({item.type})</span>
            )}
          </div>
        ))}
        {query && !results.length &&
          <div className="p-2 font-semibold">
            No results found!
          </div>
        }
      </div>
    </div>
  );
};

export default SearchComponent;
