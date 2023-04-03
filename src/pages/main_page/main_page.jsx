import React from 'react';
import Banner from '../../components/banner/banner';
import Header from '../../components/header/header';
import MainItems from '../../components/main/main_items/main_items';
import Nav from '../../components/nav/nav';
import SearchForm from '../../components/search_form/search_form';

const MainPage = (props) => {
    return (
        <section>
            <SearchForm />
            <Banner />
            <MainItems />
        </section>
    );
};

export default MainPage;


// <Header />
// {/* <Header />
// <SearchForm />
// <Banner />
// <MainItems />
// <FoodList /> */}
// {/* <ItemDetail /> */ }
// <Cart />
// <Nav />