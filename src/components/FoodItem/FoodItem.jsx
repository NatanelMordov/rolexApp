import React from 'react';
import './FoodItem.css'

const FoodItem = ({name,price,img,description}) => {
  return (
    <div className='watch-item'>
     <div className='watch-item-info'>
            <p>{name}</p> 
        </div>
       <div>
        <p className='watch-item-desc'>{description}</p>
        <p className='watch-item-price'>{price}$</p>
        </div>
        <div className='watch-item-img-conteiner'>
          <img className='watch-item-image'src={img} />
        </div>
       
    </div>
  )
}

export default FoodItem