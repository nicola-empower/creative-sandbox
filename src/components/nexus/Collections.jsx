import React, { useState } from 'react';

const collections = [
    {
        id: '01',
        title: 'VOID WALKER',
        description: 'Tactical streetwear for the urban night. Black on black. Function over form. Stealth mode activated.',
        tags: ['Tactical Jackets', 'Cargo Pants', 'Utility Vests'],
        price: '£180 - £450'
    },
    {
        id: '02',
        title: 'NEON DAWN',
        description: 'High-visibility rebellion. Acid-green accents. Reflective chaos. Be seen or be forgotten.',
        tags: ['Reflective Gear', 'Accessories', 'Statement Pieces'],
        price: '£85 - £220'
    },
    {
        id: '03',
        title: 'SYSTEM FAILURE',
        description: 'Glitch aesthetics. Distressed perfection. Digital decay made wearable. Error 404: Normal not found.',
        tags: ['Graphic Tees', 'Hoodies', 'Distressed Denim'],
        price: '£65 - £180'
    }
];

const Collections = () => {
    const [activeCollection, setActiveCollection] = useState(collections[0]);

    return (
        <section className="min-h-screen w-full bg-[#FAFAFA] dark:bg-[#050505] py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center transition-colors duration-300">

            {/* LEFT SIDE: The List */}
            <div className="w-full md:w-1/2 space-y-4 z-10">
                <h2 className="text-sm font-bold text-[#BF00FF] tracking-widest mb-8 uppercase">The Collections</h2>

                <div className="flex flex-col">
                    {collections.map((collection) => (
                        <div
                            key={collection.id}
                            onMouseEnter={() => setActiveCollection(collection)}
                            className="group cursor-pointer py-4 border-b border-gray-300 dark:border-gray-800"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className={`
                  text-4xl md:text-6xl font-black transition-all duration-300 font-display
                  ${activeCollection.id === collection.id
                                        ? 'text-black dark:text-white translate-x-4'
                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-400 dark:from-gray-700 dark:to-gray-700 opacity-50'}
                `}>
                                    {collection.title}
                                </h3>
                                {activeCollection.id === collection.id && (
                                    <span className="text-sm font-mono text-electric-purple">ACTIVE</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE: The Dynamic Preview Card */}
            <div className="hidden md:flex w-full md:w-1/2 justify-center pl-12 mt-12 md:mt-0">
                <div className="relative w-full max-w-md bg-white dark:bg-[#111] border-2 border-black dark:border-[#BF00FF] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_30px_rgba(191,0,255,0.2)] transition-all duration-500">

                    {/* Collection Number */}
                    <span className="text-6xl font-black text-[#BF00FF] opacity-20 absolute top-4 right-4 font-display">
                        {activeCollection.id}
                    </span>

                    {/* Collection Name */}
                    <h4 className="text-2xl font-bold text-black dark:text-white mb-4 font-display">
                        {activeCollection.title}
                    </h4>

                    {/* Description */}
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {activeCollection.description}
                    </p>

                    {/* Price Range */}
                    <div className="mb-6">
                        <span className="text-2xl font-black text-electric-purple">{activeCollection.price}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {activeCollection.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-[#222] text-xs font-mono uppercase tracking-wide text-black dark:text-[#BF00FF]">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <button className="w-full py-3 bg-black dark:bg-electric-purple text-white font-bold uppercase tracking-wide hover:bg-electric-purple dark:hover:bg-white dark:hover:text-black transition-colors">
                        Explore Collection
                    </button>

                </div>
            </div>

        </section>
    );
};

export default Collections;
