import React, { useState, useEffect } from 'react';

const Hero = () => {
    const words = ['Brands', 'Legacies', 'Hype'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.substring(0, displayText.length + 1));
                    setTypingSpeed(150);
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
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

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Main Headline */}
                <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] mb-8">
                    <span className="block text-black dark:text-white mb-4">
                        We don't just build websites.
                    </span>
                    <span className="block text-black dark:text-white">
                        We build{' '}
                        <span className="inline-block min-w-[150px] sm:min-w-[200px] md:min-w-[350px] text-left">
                            <span className="text-electric-purple drop-shadow-none dark:drop-shadow-[0_0_20px_rgba(191,0,255,0.6)]">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </span>
                    </span>
                </h1>

                {/* Sub-headline */}
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-medium">
                    Digital strategies for the brave. Stop whispering. Start shouting.
                </p>

                {/* CTA Button */}
                <button className="group relative px-12 py-5 bg-electric-purple text-white font-black text-lg uppercase tracking-widest overflow-hidden transition-transform active:scale-95 hover:shadow-[0_0_30px_rgba(191,0,255,0.5)]">
                    {/* Hover Effect Layer */}
                    <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>

                    <span className="relative z-10">Start The Project</span>
                </button>

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

export default Hero;
