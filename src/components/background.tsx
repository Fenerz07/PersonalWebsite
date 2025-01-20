import Image from 'next/image';

export default function Background(){
    return(
        <Image 
            src="/images/ygjty18.jpg" 
            alt="background-image" 
            className="background-image absolute left-0 top-0"
            width={1920}
            height={1080}
            quality={100}
            priority
        />
    );
}