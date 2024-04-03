import React from 'react';
import './ExploreModel.css'
import { model_list } from '../../assets/assets';

const ExploreModel = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Models</h1>
        <div className='explore-menu-list'>
            {model_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.model_name?"All":item.model_name)} key={index} className='explore-menu-list-item'>
                        <img className='logo-img' src={item.model_img}/>
                        <p>{item.model_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />

    </div>
  )
}

export default ExploreModel