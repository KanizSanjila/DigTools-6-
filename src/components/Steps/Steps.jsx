import React, { use } from 'react';
 


const Steps = ({stepPromise}) => {
    const steps = use(stepPromise)
    return (
        <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#101727] mb-4">Get Started In 3 Steps</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center relative group">
              {/* Step Number Badge */}
              <span className="absolute top-6 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full">
                {step.id}
              </span>

              {/* Icon Container */}
              <div className="w-20 h-20 bg-purple-50 text-[#4F39F6] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#4F39F6] group-hover:text-white transition-colors duration-300">
                <img src={step.img} alt="" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Steps;
