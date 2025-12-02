import React from 'react';

const Manifesto = () => {
    return (
        <section id="studio" className="relative w-full py-24 px-6 md:px-12 transition-colors duration-300 bg-[#FAFAFA] dark:bg-[#050505]">

            {/* Background Noise Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-noise mix-blend-overlay"></div>

            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* LEFT COLUMN: The Headline */}
                <div class="relative z-10">
                    <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
                        <span className="block text-black dark:text-white">AVERAGE</span>
                        <span className="block text-black dark:text-white">IS</span>
                        {/* The "Loud" Word: Purple in Dark Mode, Outlined in Light Mode */}
                        <span className="block text-[#BF00FF] dark:text-[#BF00FF] drop-shadow-none dark:drop-shadow-[0_0_15px_rgba(191,0,255,0.6)]">
                            INVISIBLE.
                        </span>
                    </h2>
                </div>

                {/* RIGHT COLUMN: The Copy */}
                <div className="space-y-8 relative z-10 font-body">
                    <p className="text-xl md:text-2xl font-medium text-[#171717] dark:text-[#E0E0E0] leading-relaxed">
                        The internet is a crowded room. Most brands are just standing in the corner, hoping to be noticed. <span className="font-bold text-[#BF00FF]">We don't do hope.</span> We kick down the door.
                    </p>

                    <p className="text-lg text-[#404040] dark:text-[#A0A0A0]">
                        Lumina wasn't built to blend in. We exist to disrupt the scroll. We reject the template, the safe choice, and the "good enough."
                    </p>

                    {/* The List: Styled like code/terminal output */}
                    <ul className="space-y-4 border-l-2 border-black dark:border-[#BF00FF] pl-6 mt-8">
                        <li className="text-lg text-black dark:text-white">
                            <span className="font-bold text-[#BF00FF] mr-2">01.</span>
                            Silence is Failure.
                        </li>
                        <li className="text-lg text-black dark:text-white">
                            <span className="font-bold text-[#BF00FF] mr-2">02.</span>
                            Code is Art.
                        </li>
                        <li className="text-lg text-black dark:text-white">
                            <span className="font-bold text-[#BF00FF] mr-2">03.</span>
                            Data Over Ego.
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <div className="pt-6">
                        <button className="group relative px-8 py-4 bg-[#BF00FF] text-white font-bold text-lg uppercase tracking-widest overflow-hidden transition-transform active:scale-95">
                            {/* Button Hover Effect Layer */}
                            <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>

                            <span className="relative z-10">Ignite The Brand</span>

                            {/* The "Hard Shadow" for Light Mode vs "Glow" for Dark Mode */}
                            <div className="absolute inset-0 border-2 border-black dark:border-white translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Manifesto;
