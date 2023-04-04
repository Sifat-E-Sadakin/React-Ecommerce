import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'
import ck from '../../../images/Screenshot 2023-03-27 000134.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='anchors'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
            
        </div>
    );
};

export default Header;