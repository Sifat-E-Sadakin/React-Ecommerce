import React, { useContext } from 'react';
import UserContext, { userInfo } from '../UserContext/UserContext';

const Inventory = () => {

    let {user}= useContext(userInfo);
    

    return (
        <div>
            <h2>This is Inventory Pages of {user.email}</h2>
        </div>
    );
};

export default Inventory;