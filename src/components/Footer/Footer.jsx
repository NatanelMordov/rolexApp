import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo_1}/>
            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li> 
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                    <ul>
                        <li>natanel1m2@gmail.com</li>
                        <li><a href='https://www.linkedin.com/in/natanel-mordov-171a081b5/'>LinkdIn</a></li>
                    </ul>
            </div>
        </div>
        <hr />
        <p>CopyRight © Natanel Mordov 2024 </p>
    </div>
  )
}

export default Footer