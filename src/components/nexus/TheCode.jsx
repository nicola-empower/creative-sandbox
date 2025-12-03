import React from 'react';

const TheCode = () => {
    return (
        <section id="code" className="relative w-full py-24 px-6 md:px-12 transition-colors duration-300 bg-[#FAFAFA] dark:bg-[#050505]">

            {/* Background Noise Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-noise mix-blend-overlay"></div>

            <div className="max-w-4xl mx-auto">

                {/* The Copy */}
                <div className="space-y-8 relative z-10 font-body">
                    <p className="text-xl md:text-2xl font-medium text-[#171717] dark:text-[#E0E0E0] leading-relaxed">
                        NEXUS isn't clothing. It's <span className="font-bold text-[#BF00FF]">armor for the digital age.</span> Designed in the void. Worn in the streets.
                    </p>

                    <p className="text-lg text-[#404040] dark:text-[#A0A0A0]">
                        We don't mass produce. We don't restock. Every drop is a limited transmission from the future. When it's gone, it's archived forever.
                    </p>

                    {/* The List: Styled like code/terminal output */}
                    <ul className="space-y-4 border-l-2 border-black dark:border-[#BF00FF] pl-6 mt-8">
                        <li className="text-lg text-black dark:text-white">
                            <span className="font-bold text-[#BF00FF] mr-2">01.</span>
                            Scarcity is Power
                        </li>
                        <li className="text-lg text-black dark:text-white">
                            <span className="font-bold text-[#BF00FF] mr-2">02.</span>
                            Design is Rebellion
                        </li>
                        <li className="text-lg text-black dark:text-white">
                            <span className="font-bold text-[#BF00FF] mr-2">03.</span>
                            Comfort is Weakness
                        </li>
                    </ul>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 pt-8">
                        <div className="text-center border border-black dark:border-white/20 p-4">
                            <div className="text-3xl font-black text-electric-purple">500</div>
                            <div className="text-xs font-mono uppercase tracking-wide text-gray-600 dark:text-gray-400">Units/Drop</div>
                        </div>
                        <div className="text-center border border-black dark:border-white/20 p-4">
                            <div className="text-3xl font-black text-electric-purple">72H</div>
                            <div className="text-xs font-mono uppercase tracking-wide text-gray-600 dark:text-gray-400">Avg Sellout</div>
                        </div>
                        <div className="text-center border border-black dark:border-white/20 p-4">
                            <div className="text-3xl font-black text-electric-purple">∞</div>
                            <div className="text-xs font-mono uppercase tracking-wide text-gray-600 dark:text-gray-400">Resale Value</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TheCode;
