import React, { useState } from 'react';
import { use } from 'react';
import Cards from './Cards';
import Cart from '../Cart';

const Premium = ({dataPromise,count,setCount}) => {
    const data= use(dataPromise);
    const[selected,setSelected] = useState('Products')

    return (
        <div className='mt-10'>
          <div  className=' text-center'>
             <h2 className='text-5xl font-extrabold text-[#101727]'>Premium Digital Tools</h2> 
           <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
          </div>
            <div className='text-center'>
                <button onClick={()=> setSelected('Products')} className={`btn  ${selected === 'Products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white':''} rounded-2xl`}>Products</button>
                <button onClick={()=> setSelected('Cart')} className={`btn  ${selected === 'Cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white':''} rounded-2xl`}>Cart({count})</button>
              </div>
              <div>
                {
                    selected === "Products" ? <Cards data={data} count={count} setCount={setCount}></Cards> : <Cart data={data}></Cart>
                }
              </div>
              {/* <Cards data={data}></Cards> */}
        </div>
    );
};

export default Premium;