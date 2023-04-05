import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'
import ck from '../../../images/Screenshot 2023-03-27 000134.png'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='anchors'>
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/orders">Orders</ActiveLink>
                <ActiveLink to="/inventory">Inventory</ActiveLink>
                <ActiveLink to="/login">Login</ActiveLink>
            </div>
            
        </div>
    );
};

export default Header;