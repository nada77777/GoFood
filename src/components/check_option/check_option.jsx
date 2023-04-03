import React, { useState } from 'react';
import styles from './check_option.module.css';

const CheckOption = ({ getType }) => {
    const [select, setSelect] = useState('small');
    const onChange = (event) => {
        const value = event.target.value;
        setSelect(value);
        getType(value);
    };
    return (
        <div className={styles.checkOption}>
            <form className={styles.form}>
                <h1 className={styles.title}>Type</h1>
                <div className={styles.inputLabel}>
                    <input value='small' onChange={onChange} checked={select === 'small'} type="radio" /><label>Small</label>
                </div>
                <div className={styles.inputLabel}>
                    <input value='medium' onChange={onChange} checked={select === 'medium'} type="radio" /><label>Medium</label>
                </div>
                <div className={styles.inputLabel}>
                    <input value='large' onChange={onChange} checked={select === 'large'} type="radio" /><label>Large</label>
                </div>
            </form>
        </div>
    );
};

export default CheckOption;