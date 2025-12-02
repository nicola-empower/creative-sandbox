import React, { useState } from 'react';

// Data Array - Easy to map through
const services = [
    {
        id: '01',
        title: 'Brand Identity',
        description: 'We don\'t draw logos. We engineer identities that turn customers into cults.',
        tags: ['Visual Systems', 'Art Direction', 'Rebranding']
    },
    {
        id: '02',
        title: 'Web Experience',
        description: 'Pixels with purpose. High-performance code for high-performance brands.',
        tags: ['Astro', 'WebGL', 'UI/UX']
    },
    {
        id: '03',
        title: 'Viral Mechanics',
        description: 'Viral isn\'t luck. It\'s math. We hack the algorithm to feed the beast.',
        tags: ['Strategy', 'Content', 'Paid Media']
    }
];

const Arsenal = () => {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section className="min-h-screen w-full bg-[#FAFAFA] dark:bg-[#050505] py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center transition-colors duration-300">

            {/* LEFT SIDE: The List */}
            <div className="w-full md:w-1/2 space-y-4 z-10">
                <h2 className="text-sm font-bold text-[#BF00FF] tracking-widest mb-8 uppercase">Our Arsenal</h2>

                <div className="flex flex-col">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onMouseEnter={() => setActiveService(service)}
                            className="group cursor-pointer py-4 border-b border-gray-300 dark:border-gray-800"
                        >
                            {/* The "Flex": Outline text in Light Mode, Filled in Hover */}
                            <h3 className={`
                text-5xl md:text-7xl font-black transition-all duration-300 font-display
                ${activeService.id === service.id
                                    ? 'text-black dark:text-white translate-x-4' // Active State
                                    : 'text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-400 dark:from-gray-700 dark:to-gray-700 opacity-50'} // Inactive State
              `}>
                                {service.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE: The Dynamic Preview Card */}
            <div className="hidden md:flex w-full md:w-1/2 justify-center pl-12 mt-12 md:mt-0">
                <div className="relative w-full max-w-md bg-white dark:bg-[#111] border-2 border-black dark:border-[#BF00FF] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_30px_rgba(191,0,255,0.2)] transition-all duration-500">

                    {/* Dynamic Content */}
                    <span className="text-6xl font-black text-[#BF00FF] opacity-20 absolute top-4 right-4 font-display">
                        {activeService.id}
                    </span>

                    <h4 className="text-2xl font-bold text-black dark:text-white mb-4 font-display">
                        {activeService.title}
                    </h4>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {activeService.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {activeService.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-[#222] text-xs font-mono uppercase tracking-wide text-black dark:text-[#BF00FF]">
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Arsenal;
