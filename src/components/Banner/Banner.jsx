import React from 'react';
import BannerImg from '../../assets/banner.png'
import RoundImg from '../../assets/Group 5.png'
import PlayButton from '../../assets/Vector (2).png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <span className="badge bg-[#E1E7FF] text-[#4F39F6]  py-3 px-4 rounded-full text-xs font-semibold">
            <img src={RoundImg} alt="" /> New: AI-Powered Tools Available
             </span>
      <h1 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-7xl font-extrabold">
      Supercharge Your <br />
      Digital Workflow
      </h1>
      <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today.
Explore Products
</p>
    <div className='flex gap-2 mt-4'>
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none px-6 rounded-full">Explore Products</button>
        <button className="btn btn-ghost flex items-center gap-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-[#4F39F6] rounded-full">
             <img src={PlayButton} alt="" />
              Watch Demo
            </button>
    </div>
    </div>
  </div>
</div>
    )
};

export default Banner;