import React, { use } from 'react';

const Pricing = ({PricingPromise }) => {
    const plans =use(PricingPromise )
    return (
        <div>
            <section className="py-20 bg-base-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative p-8 rounded-3xl border transition-all duration-300 ${
              plan.isPopular 
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white shadow-2xl scale-105 border-transparent" 
              : "bg-white text-slate-900 border-gray-100 hover:shadow-lg"
            }`}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}

            <div className="mb-8">
              <h3 className={`text-xl font-bold ${plan.isPopular ? "text-white" : "text-slate-800"}`}>{plan.name}</h3>
              <p className={`text-sm mt-2 ${plan.isPopular ? "text-purple-100" : "text-gray-500"}`}>{plan.description}</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold">${plan.price}</span>
              <span className={`text-lg ${plan.isPopular ? "text-purple-100" : "text-gray-400"}`}>/Month</span>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className={`${plan.isPopular ? "text-green-300" : "text-green-500"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`btn w-full rounded-xl border-none font-bold py-4 h-auto ${
              plan.isPopular 
              ? "bg-white text-[#4F39F6] hover:bg-gray-100" 
              : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white hover:bg-[#3b2bc4]"
            }`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section> 
        </div>
    );
};

export default Pricing;