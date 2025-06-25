import { useDispatch } from 'react-redux';
import { setSearch } from '../store/filterSlice';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';

export default function SearchBar() {
  const dispatch = useDispatch();
  const debounced = useCallback(
    debounce(val=>dispatch(setSearch(val)),300),
    [dispatch]
  );

  return (
    <input
      type="text"
      placeholder="Search by industry…"
      onChange={e => debounced(e.target.value)}
      className="search-input"
    />
  );
}
