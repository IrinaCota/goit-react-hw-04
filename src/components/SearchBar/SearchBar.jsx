import { BsSearch } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

export default function SearchBar({ onSearch }) {
    const handleSubmit = event => {
        event.preventDefault();
        const query = event.target.elements.searchQuery.value;
        query.trim() === '' ? toast.error('Input cannot be empty!') : onSearch(query);
        event.target.reset();
    };

    return (
        <header className={css.header}>
            <Toaster />
            <form className={css.searchForm} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    name="searchQuery"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.searchBtn} type="submit">
                    <BsSearch className={css.searchIcon} />
                </button>
            </form>
        </header>
    );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};