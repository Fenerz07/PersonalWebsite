import Image from 'next/image';

export default function Bio(){
    return(
        <>
            <div className='text-center relative pt-60 mb-10' id='bio'>
                <h1 className='text-6xl font-bold font-sans'>MA BIO</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center relative mb-20 mx-5 lg:mx-60 lg:gap-5 gap-2">
                <div className='border-2 border-white md:p-10 p-8'>
                    <div className="flex justify-center items-center mb-5">
                        <Image src="/images/human.svg" alt="human" className="human" width={65} height={65} />
                        <h1 className='text-3xl font-sans font-bold relative' style={{ zIndex: 1 }}>
                            MOI, TOUT SIMPLEMENT
                            <span className='hidden lg:block absolute left-8 top-6 w-40 h-3 bg-gradient-to-r from-pink-500 to-yellow-500' style={{ zIndex: -1 }}></span>
                        </h1>
                    </div>
                    <p>Je m&apos;appelle Hugo, jeune développeur de 19 ans passioné par le sport, la rétromobile et évidemment les jeux vidéos.</p>
                </div>
                <div className='border-2 border-white md:p-10 p-8'>
                    <div className="flex justify-center items-center mb-5">
                        <Image src="/images/book-mark.svg" alt="book-mark" className="book-mark" width={40} height={40} />
                        <h1 className='text-3xl font-sans font-bold relative' style={{ zIndex: 1 }}>
                            MON PARCOURS
                            <span className='hidden lg:block absolute left-7 bottom-0 w-44 h-3 bg-gradient-to-r from-yellow-500 to-blue-500' style={{ zIndex: -1 }}></span>
                        </h1>
                    </div>
                    <p>Je suis en 2ème année d&apos;études supérieur en Informatique, ça fait donc +4 ans que je suis dans le dev grâce aux jeux vidéos.</p>
                </div>
                <div className='border-2 border-white md:p-10 p-8'>
                    <div className="flex justify-center items-center mb-5" >
                        <Image src="/images/code.svg" alt="code" className="code" width={45} height={45} />
                        <h1 className='text-3xl font-sans font-bold relative' style={{ zIndex: 1 }}>
                            MON EXPERIENCE
                            <span className='hidden lg:block absolute left-4 bottom-5 w-48 h-3 bg-gradient-to-r from-blue-500 to-purple-500' style={{ zIndex: -1 }}></span>
                        </h1>
                    </div>
                    <p>Tout au long de mes études et de mon temps libre j&apos;ai pu découvrir certaints languages comme: Javascript, Python, C, React, SQL, C++, NodeJS, C# et d&apos;autres encore.</p>
                </div>
            </div>
        </>
    );
}