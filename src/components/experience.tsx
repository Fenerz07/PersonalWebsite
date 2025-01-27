import Image from 'next/image';

export default function Experience(){
    return(
        <>
            <div className='text-center relative mt-80 mb-10'>
              <h1 className='text-6xl font-bold font-sans'>MON EXPERIENCE</h1>
            </div>
            <div className='mr-20'>
                <div className='flex text-center justify-center'>
                    <div className='flex'>
                        <div>
                            <a href="https://www.restosducoeur.org/">
                                <Image 
                                    src="/images/Restos_du_coeur_Logo.svg"
                                    alt="Experience 1"
                                    className="w-full h-80 scale-50 group-hover:scale-90 transition-all duration-300"
                                    width={400}
                                    height={400}
                                />
                            </a>
                        </div>
                        <div className='mt-28'>
                            <h1 className='text-2xl font-bold font-sans relative'>
                                Restaurants du coeur
                                <span className='absolute left-0 top-5 w-60 h-3 bg-gradient-to-r from-pink-500 to-blue-500' style={{ zIndex: -1 }}></span>
                            </h1>
                            <p className='text-xl font-sans'>Juin 2024 - Août 2024</p>
                            <p className='text-xl font-sans'>Developpeur Web FullStack</p>
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