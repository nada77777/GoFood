import React from 'react';
import { useSelector } from 'react-redux';
import { cartActions } from '../../redux/cart/cart';
import Card from '../../UI/card/card';
import Counter from '../counter/counter';
import styles from './cart.module.css';
const Cart = (props) => {

    const cartItems = useSelector(state => state.cart);
    console.log(cartItems);

    const getCount = (count) => {
        console.log('get', count);
    };


    return (
        <section className={styles.cart}>
            <div className={styles.firstBox}>
                <div className={styles.notice}>
                    <span>1 Item in the cart</span>
                    <span>Remove all</span>
                </div>
                <div className={styles.cartInfoBox}>
                    {cartItems.length > 0 && cartItems.map((item) =>
                        <div key={item.id} className={styles.cartInfo}>
                            <img className={styles.img} src={item.img} alt="cart_item_img" />
                            <div className={styles.titlePrice}>
                                <h3 className={styles.title}>{item.name}</h3>
                                <span className={styles.price}>$ {item.price}.00</span>
                            </div>
                            <Counter getCount={getCount} item={item} plusCounter={cartActions.plusCartItem} minusCounter={cartActions.minusCartItem} />
                        </div>)}
                </div>
            </div>










            <div className={styles.priceList}>
                <div>
                    <h3 className={styles.priceTitle}>Subtotal</h3>
                    <h3 className={styles.price}>$ 30.00</h3>
                </div>
                <div>
                    <h3 className={styles.priceTitle}>Discount</h3>
                    <h3 className={styles.price}>$ 10.00</h3>
                </div>
                <div>
                    <h3 className={styles.priceTitle}>Delivery Fee</h3>
                    <h3 className={styles.price}>Free</h3>
                </div>

                <div>
                    <h3 className={styles.priceTitle}>Total</h3>
                    <h3 className={styles.price}>$ 20.00</h3>
                </div>
            </div>

            <Card className={styles.placeOrder}>
                <span>Place order</span>
            </Card>
        </section>
    );
};

export default Cart;