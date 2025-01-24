import Image from 'next/image';

export default function Background(){
    return(
        <>
            <Image 
                src="/images/ygjty18.jpg" 
                alt="background-image" 
                className="background-image left-0 absolute z-0"
                width={1920}
                height={1080}
                quality={100}
                priority
            />
        </>
    );
}