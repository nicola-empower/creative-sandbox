import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="relative py-24 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">

            {/* Decorative Background Element (The "Sun/Moon" glow) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#BF00FF] rounded-full blur-[120px] opacity-10 dark:opacity-20 pointer-events-none"></div>

            <div className="max-w-3xl mx-auto relative z-10 text-center">

                <h2 className="text-6xl md:text-8xl font-black text-black dark:text-white mb-6 tracking-tighter font-display">
                    START THE <span className="text-[#BF00FF]">CHAOS.</span>
                </h2>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                    Tell us about the project. We'll handle the digital violence.
                </p>

                <form className="space-y-8 text-left">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name Input */}
                        <div className="group relative">
                            <input
                                type="text"
                                placeholder="YOUR NAME"
                                className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-4 text-xl font-bold text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#BF00FF] transition-colors duration-300"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="group relative">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL"
                                className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-4 text-xl font-bold text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#BF00FF] transition-colors duration-300"
                            />
                        </div>
                    </div>

                    {/* The "Vibe" Select */}
                    <div className="relative">
                        <select className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-4 text-xl font-bold text-black dark:text-white focus:outline-none focus:border-[#BF00FF] appearance-none cursor-pointer">
                            <option value="" disabled selected>CHOOSE YOUR MISSION</option>
                            <option value="rebrand" className="text-black">Total Rebrand</option>
                            <option value="web" className="text-black">Custom Web Build</option>
                            <option value="domination" className="text-black">World Domination</option>
                        </select>
                        {/* Custom Arrow Icon */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#BF00FF]">▼</div>
                    </div>

                    {/* Message Area */}
                    <div>
                        <textarea
                            rows="4"
                            placeholder="TELL US THE PLAN..."
                            className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-4 text-xl font-bold text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#BF00FF] resize-none transition-colors duration-300"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-8">
                        <button type="submit" className="px-16 py-5 bg-black dark:bg-[#BF00FF] text-white font-black text-xl uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(191,0,255,0.5)] transition-all duration-300">
                            Initiate Launch
                        </button>
                    </div>

                </form>
            </div>

            {/* Footer / Copyright */}
            <div className="mt-24 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-gray-500 gap-4">
                <p>© 2025 LUMINA CREATIVE.</p>
                <p>CODED BY EMPOWER DIGITAL SOLUTIONS.</p>
            </div>

        </section>
    );
};

export default Contact;
