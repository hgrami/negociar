// SearchBar.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <motion.form
      className="w-full max-w-sm mx-auto"
      onSubmit={handleSearch}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
      />
    </motion.form>
  );
};

export default SearchBar;