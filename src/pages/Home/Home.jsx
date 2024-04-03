import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreModel from '../../components/ExploreModel/ExploreModel';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {

  const [category,setCategory] =useState("All");

  return (
    <div>
        <Header />
        <ExploreModel category={category} setCategory={setCategory} />
        <FoodDisplay category={category}  />
    </div>
  )
}

export default Home