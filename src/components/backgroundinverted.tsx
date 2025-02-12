import Image from 'next/image';

export default function BackgroundInverted() {
    return (
        <>
            <Image 
                src="/images/background.jpg" 
                alt="background-image-inverted" 
                className="background-image left-0 absolute z-0 transform rotate-180"
                width={1920}
                height={1080}
                quality={100}
                priority
            />
        </>
    );
}