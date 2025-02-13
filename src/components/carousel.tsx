'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
    { src: '/images/bxl-c-plus-plus.svg', alt: 'C++' },
    { src: '/images/bxl-css3.svg', alt: 'CSS3' },
    { src: '/images/bxl-java.svg', alt: 'Java' },
    { src: '/images/bxl-jquery.svg', alt: 'jQuery' },
    { src: '/images/c.svg', alt: 'C' },
    { src: '/images/vite.svg', alt: 'Vite' },
    { src: '/images/bxl-nodejs.svg', alt: 'Node.js' },
    { src: '/images/bxl-php.svg', alt: 'PHP' },
    { src: '/images/bxl-html5.svg', alt: 'HTML5' },
    { src: '/images/bxl-python.svg', alt: 'Python' },
    { src: '/images/bxl-react.svg', alt: 'React' },
    { src: '/images/bxl-tailwind-css.svg', alt: 'Tailwind CSS' },
    { src: '/images/csharp.svg', alt: 'C#' },
    { src: '/images/bxl-typescript.svg', alt: 'TypeScript' },
    { src: '/images/bxs-data.svg', alt: 'Data' },
    { src: '/images/bxl-javascript.svg', alt: 'JavaScript' },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex items-center justify-center w-full overflow-hidden">
            <div className="w-[340px] overflow-hidden">
                <motion.div
                    className="flex"
                    initial={{ x: 0 }}
                    animate={{ x: `-${currentIndex * 25.2}%` }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    style={{ justifyContent: 'center' }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="min-w-[70px] mx-2 flex justify-center">
                            <Image src={logo.src} alt={logo.alt} width={50} height={50} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
