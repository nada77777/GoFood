import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './app.module.css';
import Banner from './components/banner/banner';
import Cart from './components/cart/cart';
import Counter from './components/counter/counter';
import FoodList from './components/foodList/food_list/food_list';
import Header from './components/header/header';
import ItemDetail from './components/item_detail/item_detail';
import MainItems from './components/main/main_items/main_items';
import Nav from './components/nav/nav';
import SearchForm from './components/search_form/search_form';
import CartPage from './pages/cart_page/cart_page';

export default function App() {

  return (
    <>
      <div className={styles.app}>
        <Header />
        <Outlet />
        <Nav />
      </div>
    </>
  );
  //F3F3F3
}
//BiHomeAlt2 AiOutlineStar BsList AiOutlineUser BsCart AiOutlineSearch AiOutlineBell AiOutlineHeart BsChevronLeft
