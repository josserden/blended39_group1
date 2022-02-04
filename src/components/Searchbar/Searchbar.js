import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
