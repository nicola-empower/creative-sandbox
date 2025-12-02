import React, { useState } from 'react';

const faqs = [
    {
        question: "Is this going to be expensive?",
        answer: "Define expensive. If you think investing in your business is a cost, we aren't a match. We build revenue-generating assets. Our custom builds start at £3,000."
    },
    {
        question: "Do you use templates?",
        answer: "Never. Templates are for hobbyists. We code bespoke solutions tailored to your specific brand goals using Astro and modern architecture."
    },
    {
        question: "Can you take over my Wix site?",
        answer: "No. We don't polish mediocrity. We migrate you off limited platforms and onto scalable, custom infrastructure."
    },
    {
        question: "What is the turnaround time?",
        answer: "Typically 4-6 weeks for a full platform build. We sprint. We don't jog."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-20 px-6 md:px-12 bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-black mb-12 text-black dark:text-white uppercase tracking-tighter font-display">
                    Uncomfortable <span className="text-[#BF00FF]">Questions.</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-2 border-black dark:border-white/20 bg-white dark:bg-[#111] overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className="text-xl md:text-2xl font-bold text-black dark:text-white font-display">
                                    {faq.question}
                                </span>
                                {/* Animated Plus Icon */}
                                <span className={`text-2xl text-[#BF00FF] transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                    +
                                </span>
                            </button>

                            {/* Accordion Content with Height Transition */}
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}
                            >
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
