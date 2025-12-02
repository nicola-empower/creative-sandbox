import React, { useState } from 'react';

const intel = [
    {
        question: "How do drops work?",
        answer: "Each drop is announced 72 hours in advance. Limited to 500 units. First come, first served. No restocks. When it's gone, it's archived forever."
    },
    {
        question: "What about sizing and quality?",
        answer: "Premium materials only. Heavyweight cotton, reinforced stitching, metal hardware. Sizing runs true to streetwear standards. Check the size guide before each drop."
    },
    {
        question: "Can I resell NEXUS pieces?",
        answer: "We don't control the secondary market. But we don't support it either. NEXUS is meant to be worn, not flipped. Scarcity creates value, but greed kills culture."
    },
    {
        question: "International shipping?",
        answer: "Worldwide. 5-7 business days. Duties and taxes are on you. We ship from the void, you receive in reality."
    }
];

const TheIntel = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIntel = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-20 px-6 md:px-12 bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-black mb-12 text-black dark:text-white uppercase tracking-tighter font-display">
                    The <span className="text-[#BF00FF]">Intel.</span>
                </h2>

                <div className="space-y-4">
                    {intel.map((item, index) => (
                        <div
                            key={index}
                            className="border-2 border-black dark:border-white/20 bg-white dark:bg-[#111] overflow-hidden"
                        >
                            <button
                                onClick={() => toggleIntel(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className="text-xl md:text-2xl font-bold text-black dark:text-white font-display">
                                    {item.question}
                                </span>
                                {/* Animated Plus Icon */}
                                <span className={`text-2xl text-[#BF00FF] transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                    +
                                </span>
                            </button>

                            {/* Accordion Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}
                            >
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheIntel;
