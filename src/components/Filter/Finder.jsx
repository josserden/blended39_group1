import PropTypes from 'prop-types';
import { useState } from 'react';

export function Finder({ handleOnSubmit }) {
  const [query, setQuery] = useState('');

  const onChange = event => {
    setQuery(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    handleOnSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          name="filter"
          value={query}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChange}
          placeholder={' Find movie'}
          required
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
}

Finder.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
};
