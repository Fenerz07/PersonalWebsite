import Image from 'next/image';

export default function Background(){
    return(
        <>
            <Image 
                src="/images/background.jpg" 
                alt="background-image" 
                className="hidden md:block background-image left-0 absolute z-0"
                width={5000}
                height={5000}
                quality={100}
                priority
            />
        </>
    );
}