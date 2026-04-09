import React from 'react';
import AllCart from './Steps/AllCart';

const Cart = ({cart,setCart,selected,setSelected}) => {
    console.log(cart)
    return (
       <div>
         {
             cart.map(cat=><AllCart key={cat.id} cat={cat} cart={cart} setCart={setCart} selected={selected} setSelected={setSelected}></AllCart>)
         }
       </div>

    );
};

export default Cart;