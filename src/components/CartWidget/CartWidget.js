import React from 'react'
import {TiShoppingCart} from 'react-icons/ti';
import './CartWidget.scss';


export const CartWidget = () => {
    return (
        <div className="iconPos">
            <TiShoppingCart className="cartIcon"/>
        </div>
    );
}
