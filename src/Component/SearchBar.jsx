import React from 'react';

function SearchBar({ setSearchQuery }) {
    return (
        <input 
            type="text" 
            onChange={(e) => setSearchQuery(e.target.value)} 
            placeholder="Search tasks" 
        />
    );
}

export default SearchBar;
