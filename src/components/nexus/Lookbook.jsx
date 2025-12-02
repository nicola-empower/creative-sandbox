import React from 'react';

const lookbookItems = [
    {
        id: 1,
        collection: "Void Walker",
        season: "Drop 001",
        status: "SOLD OUT",
        imageClass: "bg-gradient-to-br from-gray-900 to-black",
        size: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        id: 2,
        collection: "Neon Dawn",
        season: "Drop 001",
        status: "ARCHIVE",
        imageClass: "bg-gradient-to-br from-green-900 to-black",
        size: "col-span-1"
    },
    {
        id: 3,
        collection: "System Failure",
        season: "Drop 002",
        status: "LIVE NOW",
        imageClass: "bg-gradient-to-br from-purple-900 to-black",
        size: "col-span-1"
    }
];

const Lookbook = () => {
    return (
        <section id="lookbook" className="min-h-screen py-24 px-6 md:px-12 bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-300">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-black dark:border-white pb-6">
                <h1 className="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter font-display">
                    THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF00FF] to-[#CCFF00]">LOOKBOOK</span>
                </h1>
                <p className="text-xl font-mono text-black dark:text-gray-400 mt-4 md:mt-0">
                    Archive &gt; Reality.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {lookbookItems.map((item) => (
                    <div
                        key={item.id}
                        className={`group relative overflow-hidden border-2 border-black dark:border-white/10 ${item.size} min-h-[400px] cursor-pointer`}
                    >
                        {/* Background Gradient Placeholder */}
                        <div className={`absolute inset-0 ${item.imageClass} transition-transform duration-700 group-hover:scale-110`}>
                            {/* Glitch Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/20 to-acid-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                        </div>

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">

                            {/* Status Badge */}
                            <div className="mb-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                <span className={`inline-block font-bold px-4 py-1 text-lg skew-x-[-10deg] ${item.status === 'SOLD OUT' ? 'bg-gray-500 text-white' :
                                        item.status === 'LIVE NOW' ? 'bg-[#BF00FF] text-white' :
                                            'bg-white text-black'
                                    }`}>
                                    {item.status}
                                </span>
                            </div>

                            {/* Collection Name */}
                            <h3 className="text-4xl font-black text-white uppercase mb-1 drop-shadow-lg font-display">
                                {item.collection}
                            </h3>

                            {/* Season */}
                            <p className="text-sm font-mono text-gray-300 uppercase tracking-widest">
                                {item.season}
                            </p>
                        </div>

                        {/* Corner Icon */}
                        <div className="absolute top-6 right-6 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                            ↗
                        </div>

                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-24 text-center">
                <p className="text-black dark:text-white text-xl mb-6 font-mono">Ready to join the resistance?</p>
                <button className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:bg-[#BF00FF] dark:hover:bg-[#BF00FF] hover:text-white transition-colors duration-300">
                    Join The Waitlist
                </button>
            </div>

        </section>
    );
};

export default Lookbook;
