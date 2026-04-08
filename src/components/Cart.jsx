import React from 'react';

const Cart = () => {
    return (
        <div className='w-11/12 mx-auto bg-[#FFFFFF] shadow-2xl rounded-3xl my-8 p-10'>
             <p className='text-[#101727] font-bold'>Your Cart</p>
                <div className='flex justify-between items-center bg-[#F9FAFC] rounded-3xl my-2 p-5'>
                 <div className='flex items-center gap-5'>
                      <div>
                     <img src="" alt="" />
                     <h2>mad</h2>
                   </div>
                    <div>
                        <h4 className='text-[#101727] font-semibold'>AI Writing Pro</h4>
                        <p>$29</p>
                    </div>
                 </div>
                    <div>
                       <button className="btn btn-ghost text-red-500 hover:bg-red-50">
                            Remove
                     </button> 
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p>Total:</p>
                    <h4 className='font-bold text-xl'>$78</h4>
                </div> 
                <button className=' btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-2xl'>Proceed to Checkout</button>
                </div>
    );
};

export default Cart;