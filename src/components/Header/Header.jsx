import React from 'react'
import './Header.css'
import header_video from '/header.mp4';

const Header = () => {
  return (
    <div className='header'>
       <video className='video' src={header_video} type="video/mp4" autoPlay muted loop  />
    </div>
  )
}

export default Header