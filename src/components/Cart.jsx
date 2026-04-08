import React from 'react';
import AllCart from './Steps/AllCart';

const Cart = ({cart}) => {
    console.log(cart)
    return (
       <div>
         {
             cart.map(cat=><AllCart cat={cat}></AllCart>)
         }
       </div>

    );
};

export default Cart;