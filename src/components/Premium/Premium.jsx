import React from 'react';
import { use } from 'react';
import Cards from './Cards';

const Premium = ({dataPromise}) => {
    const data= use(dataPromise);
    return (
        <div className='mt-10'>
          <div  className=' text-center'>
             <h2 className='text-5xl font-extrabold text-[#101727]'>Premium Digital Tools</h2> 
           <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
          </div>
            <div className='text-center'>
                <button className="btn bg-[#E7FE29]rounded-r-none rounded-l-2xl">Available</button>
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-l-none rounded-r-2xl">Selected </button>
              </div>
              <Cards data={data}></Cards>
        </div>
    );
};

export default Premium;