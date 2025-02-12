'use client';

import { useState } from 'react';

export default function Header() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <header className="py-10 relative z-20 hidden md:block" id="accueil">
            <nav className="flex justify-center space-x-10 font-bold font-sans text-xl">
                <ul className="list-none flex space-x-10">
                    {['Accueil', 'Bio', 'Projets', 'Experience', 'Contact'].map((text, index) => (
                        <li
                            key={index}
                            className={`transition duration-300 ${hoveredIndex != index ? hoveredIndex !== null ? 'brightness-50' : 'hover:brightness-50': ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href={`#${text.toLowerCase()}`}>{text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}