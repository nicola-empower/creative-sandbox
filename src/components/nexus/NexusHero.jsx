import React, { useState, useEffect } from 'react';

const NexusHero = () => {
    const words = ['Future', 'Glitch', 'Noise'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.substring(0, displayText.length + 1));
                    setTypingSpeed(150);
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentWord.substring(0, displayText.length - 1));
                    setTypingSpeed(100);
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentWordIndex, typingSpeed, words]);

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 overflow-hidden">
            {/* Background Noise */}
            <div className="absolute inset-0 bg-noise pointer-events-none"></div>

            {/* Glitch Effect Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-purple blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-acid-green blur-[100px] animate-pulse delay-1000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Brand Name */}
                <div className="mb-8">
                    <h2 className="font-display font-black text-2xl md:text-3xl tracking-[0.3em] text-acid-green mb-2">
                        NEXUS
                    </h2>
                    <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-electric-purple to-transparent"></div>
                </div>

                {/* Main Headline */}
                <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl tracking-tighter leading-[0.95] mb-8">
                    <span className="block text-black dark:text-white mb-4">
                        WEAR THE
                    </span>
                    <span className="block">
                        <span className="inline-block min-w-[200px] md:min-w-[400px] text-left">
                            <span className="text-electric-purple drop-shadow-none dark:drop-shadow-[0_0_30px_rgba(191,0,255,0.8)]">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </span>
                    </span>
                </h1>

                {/* Sub-headline */}
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-medium tracking-wide">
                    Armor for the digital age. Limited runs. No reprints.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="group relative px-12 py-5 bg-electric-purple text-white font-black text-lg uppercase tracking-widest overflow-hidden transition-transform active:scale-95 hover:shadow-[0_0_40px_rgba(191,0,255,0.6)]">
                        <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                        <span className="relative z-10">Shop Drop 002</span>
                    </button>

                    <button className="group relative px-12 py-5 border-2 border-electric-purple text-electric-purple font-black text-lg uppercase tracking-widest overflow-hidden transition-all hover:bg-electric-purple hover:text-white">
                        <span className="relative z-10">The Lookbook</span>
                    </button>
                </div>

                {/* Limited Edition Badge */}
                <div className="mt-16 inline-block">
                    <div className="border border-acid-green px-6 py-2 text-acid-green font-mono text-sm tracking-widest">
                        DROP 002 // 12.15.2025 // LIMITED TO 500
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-electric-purple rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-electric-purple rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NexusHero;
