import React from 'react';
import styles from './header.module.css';
import { AiOutlineBell } from 'react-icons/ai';
import { BsList } from 'react-icons/bs';
import SmallButton from '../../UI/small_button/small_button';

const Header = (props) => {
    return (
        <header>
            <SmallButton>
                <BsList />
            </SmallButton>
            <h1 className={styles.title}>GOFOOD</h1>
            <SmallButton>
                <AiOutlineBell />
            </SmallButton>
        </header>
    );
};

export default Header;
//BiHomeAlt2 AiOutlineStar BsList AiOutlineUser BsCart AiOutlineSearch AiOutlineBell AiOutlineHeart BsChevronLeft
