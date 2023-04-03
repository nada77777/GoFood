import React from 'react';
import styles from './nav.module.css';
import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineUser, } from 'react-icons/ai';
import { BsList, BsCart } from 'react-icons/bs';
import Card from '../../UI/card/card';
import { useNavigate } from 'react-router-dom';
const Nav = (props) => {
    const navigate = useNavigate();

    const onClick = (url) => {
        navigate(url);
    };
    const icons = [
        <><BiHomeAlt2 onClick={() => onClick('/')} /><span>Home</span></>,
        <AiOutlineStar onClick={() => onClick('/')} />,
        <AiOutlineUser onClick={() => onClick('/')} />,
        <BsList onClick={() => onClick('/foodlist')} />,
        <BsCart onClick={() => onClick('/cart')} />
    ];

    return (
        <Card className={styles.nav}>
            {icons.map((icon, index) =>
                <button key={index} className={styles.button}>
                    <span className={styles.icon} >{icon}</span>
                </button>)}
        </Card>
    );
};

export default Nav;
//BiHomeAlt2 AiOutlineStar BsList AiOutlineUser BsCart AiOutlineSearch AiOutlineBell AiOutlineHeart BsChevronLeft
