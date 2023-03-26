import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'
import ck from '../../../images/Screenshot 2023-03-27 000134.png'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='anchors'>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Inventory</a>
                <a href="">Login</a>
            </div>
            
        </div>
    );
};

export default Header;