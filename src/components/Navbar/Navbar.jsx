import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt='logo' className='logo' />
      <ul className='navbar-menu'>
        <li onClick={()=>{setMenu("Menu")}} className={menu === "Menu"?"active":""}>Menu</li>
        <li onClick={()=>{setMenu("home")}} className={menu === "home"? "active":""}>Home</li>
        <li onClick={()=>{setMenu("Contact Us")}} className={menu === "Contact Us"?"active":""}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
       <img src={assets.search} alt='search' />
        <div className='navbar-search-icon'>
        <img src={assets.basket} alt='basket' />
          <div className='dot'></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
       </div>
    </div>
  )
}

export default Navbar