import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({person,count,setCount,cart,setCart}) => {
    const [isSelected,setIsSelected] = useState(false);
    // console.log(person)
    const tagColors = {
    "Best Seller": "bg-[#FFD700]/20 text-[#D4AF37]", 
    "Popular": "bg-[#4F39F6]/10 text-[#4F39F6]",     
    "New": "bg-[#00B894]/10 text-[#00B894]",        
};
    return (
        <div className="card w-96 bg-base-100 shadow-sm p-4">
               <div className='flex justify-between'>
                <img src={person.image} alt="" />
                 <span className={`badge border-none font-semibold px-3 py-2 ${tagColors[person.tag] || 'bg-gray-100 text-gray-600'}`}>
    {person.tag}
</span>
               </div>
               
  <div className="card-body">
   
   <img src="image" alt="" />
    <div className="">
      <h2 className="text-3xl font-bold whitespace-nowrap">{person.name}</h2>
      <p>{person.description}</p>
      <span className="text-xl  "><label className='font-bold'>${person.price}</label>{person.billing}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{person.features[0]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{person.features[1]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{person.features[2]}</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none px-6 rounded-full" onClick={()=>{
        setIsSelected(true)
        setCount(count+1)
        toast("Added to cart!")
        setCart([...cart,person])
      }} disabled={isSelected ? true : false}>{isSelected===true ?"Added to cart":"Buy Now"}</button>
    </div>
  </div>
</div>
    );
};

export default Card;