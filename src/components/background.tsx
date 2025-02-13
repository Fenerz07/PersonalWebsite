import Image from 'next/image';

export default function Background() {
  return (
    <div className="hidden md:block absolute left-0 top-0 w-full z-0">
      <Image
        src="/images/background.jpg"
        alt="background-image"
        className="object-cover"
        width={5000} 
        height={5000}
        quality={100}
        priority
        sizes="100vw"
      />
    </div>
  );
}
