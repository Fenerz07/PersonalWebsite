'use client';

import React, { useEffect, useState} from 'react';
import Image from 'next/image';

const logos = [
    { src: '/images/bxl-c-plus-plus.svg', alt: 'C++' },
    { src: '/images/bxl-css3.svg', alt: 'CSS3' },
    { src: '/images/bxl-docker.svg', alt: 'Docker' },
    { src: '/images/bxl-git.svg', alt: 'Git' },
    { src: '/images/bxl-java.svg', alt: 'Java' },
    { src: '/images/bxl-jquery.svg', alt: 'jQuery' },
    { src: '/images/bxl-mongodb.svg', alt: 'MongoDB' },
    { src: '/images/bxl-nodejs.svg', alt: 'Node.js' },
    { src: '/images/bxl-php.svg', alt: 'PHP' },
    { src: '/images/bxl-html5.svg', alt: 'HTML5' },
    { src: '/images/bxl-python.svg', alt: 'Python' },
    { src: '/images/bxl-react.svg', alt: 'React' },
    { src: '/images/bxl-tailwind-css.svg', alt: 'Tailwind CSS' },
    { src: '/images/bxl-tux.svg', alt: 'Linux' },
    { src: '/images/bxl-typescript.svg', alt: 'TypeScript' },
    { src: '/images/bxs-data.svg', alt: 'Data' },
    { src: '/images/bxl-javascript.svg', alt: 'JavaScript' },
];


export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleLogos = 5;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    };

    const displayedLogos = [
        ...logos.slice(currentIndex, currentIndex + visibleLogos),
        ...logos.slice(0, Math.max(0, currentIndex + visibleLogos - logos.length))
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }
    , [currentIndex]);

    return (
        <div className="carousel flex justify-center items-center relative overflow-hidden">
            <div className="flex relative" >
                {displayedLogos.map((logo, index) => (
                    <Image key={index} src={logo.src} alt={logo.alt} className="carousel-logo" width={50} height={50} />
                ))}
            </div>
        </div>
    );
}