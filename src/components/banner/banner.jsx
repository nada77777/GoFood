import React from 'react';
import Card from '../../UI/card/card';
import styles from './banner.module.css';
const Banner = (props) => {
    return (
        <Card>
            <div className={styles.banner}>
                <div>
                    <h1 className={styles.title}>Hi Mingg</h1>
                    <p className={styles.dep}> Recommended menu of the day</p>
                </div>
                <img className={styles.img} src='imgs/banner.png' alt='banner_img' />
            </div>
        </Card>
    );
};

export default Banner;