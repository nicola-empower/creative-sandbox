import React from 'react';

const Waitlist = () => {
    return (
        <section id="waitlist" className="relative py-24 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-300 overflow-hidden">

            {/* Decorative Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#BF00FF] rounded-full blur-[120px] opacity-10 dark:opacity-20 pointer-events-none"></div>

            <div className="max-w-3xl mx-auto relative z-10 text-center">

                {/* Headline */}
                <h2 className="text-6xl md:text-8xl font-black text-black dark:text-white mb-6 tracking-tighter font-display">
                    JOIN THE <span className="text-[#BF00FF]">RESISTANCE</span>
                </h2>

                {/* Subheadline */}
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                    Get early access to Drop 002. Limited slots available.
                </p>

                {/* Drop Info */}
                <div className="inline-block border border-acid-green px-6 py-2 text-acid-green font-mono text-sm tracking-widest mb-12">
                    DROP 002 // 12.15.2025 // 500 UNITS
                </div>

                {/* Form */}
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

                    {/* Interest Dropdown */}
                    <div className="relative">
                        <select className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-4 text-xl font-bold text-black dark:text-white focus:outline-none focus:border-[#BF00FF] appearance-none cursor-pointer">
                            <option value="" disabled selected>SELECT YOUR INTEREST</option>
                            <option value="first-drop" className="text-black">First Drop Access</option>
                            <option value="restock" className="text-black">Restock Alerts</option>
                            <option value="collab" className="text-black">Collaboration Inquiry</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#BF00FF]">▼</div>
                    </div>

                    {/* Size Preference */}
                    <div className="relative">
                        <select className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-4 text-xl font-bold text-black dark:text-white focus:outline-none focus:border-[#BF00FF] appearance-none cursor-pointer">
                            <option value="" disabled selected>PREFERRED SIZE</option>
                            <option value="xs" className="text-black">XS</option>
                            <option value="s" className="text-black">S</option>
                            <option value="m" className="text-black">M</option>
                            <option value="l" className="text-black">L</option>
                            <option value="xl" className="text-black">XL</option>
                            <option value="xxl" className="text-black">XXL</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#BF00FF]">▼</div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-8">
                        <button type="submit" className="px-16 py-5 bg-black dark:bg-[#BF00FF] text-white font-black text-xl uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(191,0,255,0.5)] transition-all duration-300">
                            Enter The Void
                        </button>
                    </div>

                    {/* Privacy Notice */}
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 font-mono">
                        We don't spam. We don't sell data. We just drop heat.
                    </p>

                </form>
            </div>

            {/* Footer */}
            <div className="mt-24 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-gray-500 gap-4">
                <p>© 2025 NEXUS. ALL RIGHTS RESERVED.</p>
                <p>BUILT BY EMPOWER DIGITAL SOLUTIONS.</p>
            </div>

        </section>
    );
};

export default Waitlist;
