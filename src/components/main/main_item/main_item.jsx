import React from 'react';
import Card from '../../../UI/card/card';
import styles from './main_item.module.css';
const MainItem = ({ title, image }) => {
    return (
        <Card className={styles.mainCard}>
            <div className={styles.mainItem}>
                <img className={styles.img} src={image} alt='main_item_img' />
                <span className={styles.title}>{title}</span>
            </div>
        </Card>
    );
};

export default MainItem;