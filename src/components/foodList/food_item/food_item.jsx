import React from 'react';
import Card from '../../../UI/card/card';
import styles from './food_item.module.css';
import { FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
const FoodItem = ({ item }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/foodinfo', { state: { item } });
    };
    return (
        <Card className={styles.foodItemCard}>
            <li onClick={onClick} className={styles.foodItem}>
                <img className={styles.img} src={item.img} alt='food_item_img' />
                <div className={styles.itemInfo}>
                    <h3 className={styles.title}>{item.name}</h3>
                    <span className={styles.icon}>
                        <FiChevronRight />
                    </span>
                </div>

            </li>
        </Card>

    );
};

export default FoodItem;