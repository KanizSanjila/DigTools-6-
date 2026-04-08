import React from 'react';

const Ready  = () => {
    return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 px-4 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Ready To <span className="opacity-80">Transform Your Workflow?</span>
        </h2>
        <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter. 
          Start your free trial today.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn bg-white text-[#4F39F6] hover:bg-gray-100 border-none px-8 rounded-full font-bold">
            Explore Products
          </button>
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#4F39F6] px-8 rounded-full font-bold">
            View Pricing
          </button>
        </div>
        
        <p className="mt-8 text-sm opacity-70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};


export default Ready ;