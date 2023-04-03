import React, { useEffect, useState } from 'react';
import styles from './counter.module.css';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../redux/cart/cart';
import { countertActions } from '../../redux/counter/counter';
const Counter = ({ getCount, item, plusCounter, minusCounter }) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    // const counter = useSelector(state => state.counter);
    // console.log(counter);
    useEffect(() => {
        getCount(count);
    });



    const plusCount = () => {
        setCount(prev => prev + 1);
        // dispatch(cartActions.plusCartItem(item));
        dispatch(plusCounter(item));
    };

    const minusCount = () => {
        setCount(prev => prev - 1);
        // dispatch(cartActions.minusCartItem(item));
        dispatch(minusCounter(item));
    };


    return (
        <div className={styles.counter}>
            <span onClick={minusCount}><AiOutlineMinusCircle /></span>
            <span>{count}</span>
            <span onClick={plusCount}><AiOutlinePlusCircle /></span>
        </div>
    );
}

export default Counter;