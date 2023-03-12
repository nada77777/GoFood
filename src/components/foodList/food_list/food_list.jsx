import React from 'react';
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
            "id": "the-bird-fried-chicken-for-4",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132392/fried-chicken-for-4.0e6dfb35e3b83144791a5ddae71836e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Blue Ribbon",
            "dsc": "\"The Bird\" Fried Chicken for 4",
            "price": 99,
            "rate": 4,
            "country": "New York, NY"
        },
    ];
    return (
        <section>
            <ul>
                {items.map((item) => <FoodItem key={item.id} item={item} />)}
            </ul>
        </section>
    );
};

export default FoodList;