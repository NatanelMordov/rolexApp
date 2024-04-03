import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {

    const{watch_list}= useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
        <div className='food-display-list'>
        {watch_list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return <FoodItem key={index}
             id={item._id}
             name={item.name}
             price={item.price}
             img={item.img}
             description={item.description}
              />
              }
        })}

        </div>

    </div>
  )
}

export default FoodDisplay