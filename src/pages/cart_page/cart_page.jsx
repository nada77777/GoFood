import React from 'react';
import styles from './cart_page.module.css';
import Cart from '../../components/cart/cart';
import Header from '../../components/header/header';

const CartPage = (props) => {
    return (
        <section>
            <Cart />
        </section>
    );
};

export default CartPage;