import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isDark, setIsDark] = useState(true);
    const [isNexusPage, setIsNexusPage] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setIsDark(savedTheme === 'dark');
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Apply Tailwind dark mode class
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Check if we're on the NEXUS page
        setIsNexusPage(window.location.pathname.includes('nexus'));
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Apply Tailwind dark mode class
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-void-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
                {/* Logo */}
                <a
                    href={isNexusPage ? "/nexus" : "/"}
                    className="text-2xl md:text-3xl font-display font-black text-black dark:text-white tracking-tighter hover:text-electric-purple transition-colors"
                >
                    {isNexusPage ? 'NEXUS' : 'LUMINA'}
                </a>

                {/* Nav Links */}
                <div className="flex items-center gap-6 md:gap-8">
                    {isNexusPage ? (
                        <>
                            <button
                                onClick={() => scrollToSection('lookbook')}
                                className="text-sm md:text-base font-bold text-black dark:text-white hover:text-electric-purple transition-colors duration-300 uppercase tracking-wide"
                            >
                                Lookbook
                            </button>
                            <button
                                onClick={() => scrollToSection('code')}
                                className="text-sm md:text-base font-bold text-black dark:text-white hover:text-electric-purple transition-colors duration-300 uppercase tracking-wide"
                            >
                                The Code
                            </button>
                            <button
                                onClick={() => scrollToSection('waitlist')}
                                className="text-sm md:text-base font-bold text-black dark:text-white hover:text-electric-purple transition-colors duration-300 uppercase tracking-wide"
                            >
                                Waitlist
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => scrollToSection('work')}
                                className="text-sm md:text-base font-bold text-black dark:text-white hover:text-electric-purple transition-colors duration-300 uppercase tracking-wide"
                            >
                                Work
                            </button>
                            <button
                                onClick={() => scrollToSection('studio')}
                                className="text-sm md:text-base font-bold text-black dark:text-white hover:text-electric-purple transition-colors duration-300 uppercase tracking-wide"
                            >
                                Studio
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-sm md:text-base font-bold text-black dark:text-white hover:text-electric-purple transition-colors duration-300 uppercase tracking-wide"
                            >
                                Contact
                            </button>
                        </>
                    )}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="ml-2 text-2xl hover:scale-110 transition-transform duration-300"
                        aria-label="Toggle theme"
                    >
                        {isDark ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
