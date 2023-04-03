import React from 'react';
import styles from './food_list.module.css';
import FoodItem from '../food_item/food_item';

const FoodList = (props) => {
    const items = [
        {
            "id": "the-coop-complete-fried-chicken-dinner-for-4",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134235/complete-fried-chicken-dinner-for-4.aeabf841c124b9cc2fb0166f27790999.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Blue Ribbon",
            "dsc": "\"The Coop\" Complete Fried Chicken Dinner for 4",
            "price": 119,
            "rate": 5,
            "country": "New York, NY"
        },
        {
            "id": "hot-chicken-whole-bird",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110733/hot-chicken-whole-bird.bfd696b1cf611210ee813293c4c1bf28.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Hattie B's Hot Chicken",
            "dsc": "Hot Chicken - Whole Bird",
            "price": 89,
            "rate": 5,
            "country": "Nashville, TN"
        },
        {
            "id": "fried-chicken-biscuit-sandwich-kit",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85286/fried-chicken-biscuit-sandwich-kit.44b29820e6389324a2dd7ccb0b677a22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Sunrise Biscuit Kitchen",
            "dsc": "Fried Chicken Biscuit Sandwich Kit",
            "price": 109,
            "rate": 4,
            "country": "Chapel Hill, NC"
        },
        {
            "id": "nashville-hot-chicken-family-meal-for-8",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103192/nashville-hot-chicken-family-meal-for-8.9b522371aa18fb4be255db66e39e3e1e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Big Shake's Hot Chicken",
            "dsc": "Nashville Hot Chicken Family Meal for 8",
            "price": 129,
            "rate": 5,
            "country": "Franklin, TN"
        },
        {
            "id": "japanese-fried-chicken-dinner-kit-for-2",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116269/en-fried-chicken-dinner-kit-for-2.5655f91f8092ca3f732d396623e06476.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "En Japanese Brasserie",
            "dsc": "Japanese Fried Chicken Dinner Kit for 2",
            "price": 69,
            "rate": 5,
            "country": "New York, NY"
        },
    ];
    return (
        <section>
            <ul className={styles.itemList}>
                {items.map((item) => <FoodItem key={item.id} item={item} />)}
            </ul>
        </section>
    );
};

export default FoodList;