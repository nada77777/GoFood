import React from 'react';
import styles from './nav.module.css';
import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineUser, } from 'react-icons/ai';
import { BsList, BsCart } from 'react-icons/bs';
import Card from '../../UI/card/card';
const Nav = (props) => {
    const icons = [<><BiHomeAlt2 /><span>Home</span></>, <AiOutlineStar />, <AiOutlineUser />, <BsList />, <BsCart />];
    console.log(icons);
    return (
        <Card className={styles.nav}>
            {icons.map((icon) =>
                <button className={styles.button}>
                    <a className={styles.icon} href=" ">{icon}</a>
                </button>)}
            {/* <SmallButton>
                <a href=" "><BiHomeAlt2 /></a>
            </SmallButton> */}
        </Card>
    );
};

export default Nav;
//BiHomeAlt2 AiOutlineStar BsList AiOutlineUser BsCart AiOutlineSearch AiOutlineBell AiOutlineHeart BsChevronLeft
