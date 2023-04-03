import React from 'react';
import Banner from '../../components/banner/banner';
import FoodList from '../../components/foodList/food_list/food_list';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import SearchForm from '../../components/search_form/search_form';

const ItemListPage = (props) => {
    return (
        <section>
            <SearchForm />
            <Banner />
            <FoodList />
        </section>
    );
};

export default ItemListPage;