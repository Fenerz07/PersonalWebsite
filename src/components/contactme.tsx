import Image from 'next/image';
import BackgroundInverted from './backgroundinverted';

export default function ContactMe() {
    return (
        <>
            <BackgroundInverted />
            <div className="lg:mt-80 lg:mb-96 md:mt-48 md:mb-20 mt-20 mb-40" id='contact'>
                <div className='text-center relative mb-10'>
                    <h1 className='text-6xl font-bold font-sans'>CONTACT</h1>
                </div>
                <div className='justify-center relative mt-20 md:mt-0'>
                    <nav>
                        <ul className='flex list-none space-x-4 justify-center md:scale-100 scale-150'>
                            <li><a href='https://github.com/Fenerz07'><Image src="/images/github.svg" alt="github" width={40} height={40} /></a></li>
                            <li><a href='https://www.linkedin.com/in/hugo-matyla/'><Image src="/images/linkedin.svg" alt="linkedin" width={40} height={40} /></a></li>
                            <li><a href='mailto:hugom2005@free.fr'><Image src="/images/mail.svg" alt="mail" width={40} height={40} /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
