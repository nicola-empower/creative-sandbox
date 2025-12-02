import React from 'react';

const projects = [
    {
        id: 1,
        client: "Neon Drift",
        category: "eCommerce",
        stat: "+400% ROI",
        imageClass: "bg-purple-900", // Placeholder color for image
        size: "col-span-1 md:col-span-2 row-span-2" // Big Hero Card
    },
    {
        id: 2,
        client: "Apex Finance",
        category: "SaaS Platform",
        stat: "2.1s Load Speed",
        imageClass: "bg-blue-900",
        size: "col-span-1" // Standard Card
    },
    {
        id: 3,
        client: "Velvet Cult",
        category: "Event Booking",
        stat: "Sold Out",
        imageClass: "bg-pink-900",
        size: "col-span-1" // Standard Card
    }
];

const Work = () => {
    return (
        <section id="work" className="min-h-screen py-24 px-6 md:px-12 bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-300">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-black dark:border-white pb-6">
                <h1 className="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter font-display">
                    THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF00FF] to-pink-500">RECEIPTS</span>
                </h1>
                <p className="text-xl font-mono text-black dark:text-gray-400 mt-4 md:mt-0">
                    Data &gt; Opinions.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`group relative overflow-hidden border-2 border-black dark:border-white/10 ${project.size} min-h-[400px] cursor-pointer`}
                    >
                        {/* Background Image Placeholder */}
                        <div className={`absolute inset-0 ${project.imageClass} transition-transform duration-700 group-hover:scale-110 opacity-80`}></div>

                        {/* Dark Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">

                            {/* The Stat (The Flex) */}
                            <div className="mb-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                <span className="inline-block bg-[#BF00FF] text-white font-bold px-4 py-1 text-lg skew-x-[-10deg]">
                                    {project.stat}
                                </span>
                            </div>

                            <h3 className="text-4xl font-black text-white uppercase mb-1 drop-shadow-lg font-display">
                                {project.client}
                            </h3>
                            <p className="text-sm font-mono text-gray-300 uppercase tracking-widest">
                                {project.category}
                            </p>
                        </div>

                        {/* Corner Icon */}
                        <div className="absolute top-6 right-6 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            ↗
                        </div>

                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-24 text-center">
                <p className="text-black dark:text-white text-xl mb-6">Seen enough?</p>
                <button className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:bg-[#BF00FF] dark:hover:bg-[#BF00FF] hover:text-white transition-colors duration-300">
                    Start Your Project
                </button>
            </div>

        </section>
    );
};

export default Work;
