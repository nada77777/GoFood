import React from 'react';
import MainItem from '../main_item/main_item';
import styles from './main_items.module.css';
const MainItems = (props) => {
    const items = [
        {
            title: 'Chicken',
            image: '/imgs/chicken.webp',
        },
        {
            title: 'Pizza',
            image: '/imgs/pizza.jpg'
        },
        {
            title: 'Sandwich',
            image: '/imgs/sandwich.webp'
        },
        {
            title: 'Hamburger',
            image: '/imgs/hamburger.jpg'
        },
        {
            title: 'Chocolate',
            image: '/imgs/chocolate.jpg'
        },
        {
            title: 'Dessert',
            image: '/imgs/dessert.jpg'
        },

    ];
    return (
        <section className={styles.mainItems}>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.items}>
                {items.map((item, index) => <MainItem key={index} title={item.title} image={item.image} />)}
            </div>
        </section>
    );
};

export default MainItems;