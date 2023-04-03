import React, { useState } from 'react';
import Card from '../../UI/card/card';
import CheckOption from '../check_option/check_option';
import styles from './item_detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../counter/counter';
import { cartActions } from '../../redux/cart/cart';
import { useLocation } from 'react-router-dom';
const ItemDetail = (props) => {
    const [count, setCount] = useState(1);
    const [type, setType] = useState('small');
    const item = useLocation().state.item;
    const dispatch = useDispatch();

    const onClick = () => {
        const cartItem = { ...item, count, type };
        dispatch(cartActions.addCartItem(cartItem));
    };

    const getCount = (count) => {
        setCount(count);
    };

    const getType = (type) => {
        setType(type);
    };

    return (
        <section className={styles.itemDetail}>
            <img className={styles.img} src={item.img} alt="item_img" />
            <div className={styles.inner}>
                <div className={styles.titlePrice}>
                    <h1 className={styles.title}>{item.name}</h1>
                    <span className={styles.price}>${item.price}.00</span>
                </div>
                <p className={styles.country}>{item.country}</p>
                <div className={styles.average}>
                    <span>⭐ {item.rate}</span>
                    <span>🕓 30 mins</span>
                    <span>🛵 Free Delivery</span>
                </div>
                <div className={styles.quantity}>
                    <h1 className={styles.title}>Quantity</h1>
                    <Counter getCount={getCount} item={item} />
                </div>
                <CheckOption getType={getType} />
                <Card className={styles.addCart}>
                    <span onClick={onClick}>Add to Cart</span>
                </Card>
            </div>
        </section>
    );
};

export default ItemDetail;