import React from 'react'
import Logo from "../images/logo.png";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';



export const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={Logo} alt="" />
        <div>
        <FontAwesomeIcon className='cartIcon' icon={faCartPlus} /> 
        </div>

    </div>
  )
}
