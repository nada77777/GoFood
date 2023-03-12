import React from 'react';
import './App.css';
import Banner from './components/banner/banner';
import FoodList from './components/foodList/food_list/food_list';
import Header from './components/header/header';
import MainItems from './components/main/main_items/main_items';
import Nav from './components/nav/nav';
import SearchForm from './components/search_form/search_form';

export default function App() {

  return (
    <>
      <Header />
      {/* <SearchForm />
      <Banner />
      <MainItems />
      <FoodList /> */}
      <Nav />
    </>
  );
  //F3F3F3
}
//BiHomeAlt2 AiOutlineStar BsList AiOutlineUser BsCart AiOutlineSearch AiOutlineBell AiOutlineHeart BsChevronLeft
