import Image from 'next/image';

export default function Experience(){
    return(
        <>
            <div className='text-center relative pt-40 mb-20' id='experience'>
              <h1 className='text-6xl font-bold font-sans'>MON EXPERIENCE</h1>
            </div>
            <div className='lg:mr-20 mb-56'>
                <div className='flex text-center justify-center'>
                    <div className='flex flex-col md:flex-row'>
                        <div>
                            <a href="https://www.restosducoeur.org/">
                                <Image 
                                    src="/images/Restos_du_coeur_Logo.svg"
                                    alt="Experience 1"
                                    className="w-full h-80 md:scale-50 scale-75 hover:scale-75 transition-all duration-300"
                                    width={400}
                                    height={400}
                                />
                            </a>
                        </div>
                        <div className='md:mt-28 mt-0'>
                            <h1 className='text-2xl font-bold font-sans relative' style={{ zIndex: 1 }}>
                                Les Restaurants du Coeur
                                <span className='hidden md:block absolute left-0 top-5 w-72 h-3 bg-gradient-to-r from-pink-500 to-blue-500' style={{ zIndex: -1 }}></span>
                            </h1>
                            <p className='text-xl font-sans'>Juin 2024 - Août 2024</p>
                            <p className='text-xl font-sans'>Développeur Web FullStack</p>
                            <div className='flex items-center justify-center'>
                                <Image
                                    src="/images/bxl-typescript.svg"
                                    alt="Experience Icon 1"
                                    className="h-10 w-10"
                                    width={400}
                                    height={400}
                                />
                                <Image
                                    src="/images/bxs-data.svg"
                                    alt="Experience Icon 2"
                                    className="h-10 w-10"
                                    width={400}
                                    height={400}
                                />
                                <Image
                                    src="/images/bxl-nodejs.svg"
                                    alt="Experience Icon 3"
                                    className="h-10 w-10"
                                    width={400}
                                    height={400}
                                />
                                <Image
                                    src="/images/bxl-react.svg"
                                    alt="Experience Icon 4"
                                    className="h-10 w-10"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}