import React from 'react';

const TheCode = () => {
    return (
        <section id="code" className="relative w-full py-24 px-6 md:px-12 transition-colors duration-300 bg-[#FAFAFA] dark:bg-[#050505]">

            {/* Background Noise Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-noise mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT COLUMN: The Headline */}
                <div className="relative z-10">
                    <h2 className="font-display font-black text-6xl md:text-8xl tracking-tighter leading-[0.9] relative group">
                        <span className="block text-black dark:text-white relative inline-block glitch-text" data-text="REALITY">REALITY</span>
                        <span className="block text-black dark:text-white">IS</span>
                        <span className="block text-[#BF00FF] dark:text-[#BF00FF] drop-shadow-none dark:drop-shadow-[0_0_15px_rgba(191,0,255,0.6)] relative inline-block glitch-text" data-text="BORING.">
                            BORING.
                        </span>

                        <style jsx>{`
                            .glitch-text {
                                position: relative;
                            }
                            .glitch-text::before,
                            .glitch-text::after {
                                content: attr(data-text);
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background: #050505; /* Match bg */
                            }
                            .glitch-text::before {
                                left: 2px;
                                text-shadow: -1px 0 #00ffff;
                                clip: rect(44px, 450px, 56px, 0);
                                animation: glitch-anim 5s infinite linear alternate-reverse;
                            }
                            .glitch-text::after {
                                left: -2px;
                                text-shadow: -1px 0 #ff00ff;
                                clip: rect(44px, 450px, 56px, 0);
                                animation: glitch-anim2 5s infinite linear alternate-reverse;
                            }
                            @keyframes glitch-anim {
                                0% { clip: rect(30px, 9999px, 10px, 0); }
                                20% { clip: rect(85px, 9999px, 90px, 0); }
                                40% { clip: rect(10px, 9999px, 60px, 0); }
                                60% { clip: rect(60px, 9999px, 20px, 0); }
                                80% { clip: rect(20px, 9999px, 80px, 0); }
                                100% { clip: rect(50px, 9999px, 40px, 0); }
                            }
                            @keyframes glitch-anim2 {
                                0% { clip: rect(10px, 9999px, 80px, 0); }
                                20% { clip: rect(80px, 9999px, 10px, 0); }
                                40% { clip: rect(40px, 9999px, 50px, 0); }
                                60% { clip: rect(90px, 9999px, 30px, 0); }
                                80% { clip: rect(30px, 9999px, 20px, 0); }
                                100% { clip: rect(60px, 9999px, 70px, 0); }
                            }
                        `}</style>
                    </h2>
                </div>

                {/* RIGHT COLUMN: The Copy */}
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
