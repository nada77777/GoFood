import React from 'react';
import styles from './small_button.module.css';
const SmallButton = (props) => {
    return (
        <button className={styles.button}>{props.children}</button>
    );
};

export default SmallButton;