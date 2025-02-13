import Image from 'next/image';

export default function BackgroundInverted() {
    return (
        <>
            <Image 
                src="/images/background.jpg" 
                alt="background-image-inverted" 
                className="hidden md:block background-image right-0 absolute z-0 transform rotate-180"
                width={5000}
                height={5000}
                quality={100}
                priority
            />
        </>
    );
}