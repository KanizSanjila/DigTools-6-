import React from 'react';

const Stats = () => {
    return (
       <div className="stats shadow w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
  <div className="stat place-items-center text-white">
    <div className="stat-value">50K</div>
    <div className="stat-desc text-white">Active Users</div>
  </div>

  <div className="stat place-items-center text-white">
    <div className="stat-value text-white">200+</div>
    <div className="stat-desc text-white">Premium Tools</div>
  </div>

  <div className="stat place-items-center text-white">
    <div className="stat-value text-white">4.9</div>
    <div className="stat-desc text-white">Rating</div>
  </div>
</div>
    );
};

export default Stats;