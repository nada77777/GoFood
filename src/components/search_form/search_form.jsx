import React from 'react';
import styles from './search_form.module.css';
import { BiSearch } from 'react-icons/bi';
const SearchForm = (props) => {
    return (
        <form className={styles.form}>
            <span className={styles.icon}>
                <BiSearch />
            </span>
            <input type="text" placeholder='Restaurant name or a dish' />
        </form>
    );
};

export default SearchForm;