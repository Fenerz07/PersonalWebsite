import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='fixed bottom-5 w-full flex justify-center'>
            <div className=' md:w-auto'>
                <nav className='flex list-none space-x-4'>
                    <li><a href='https://github.com/Fenerz07'><Image src="/images/github.svg" alt="github" width={40} height={40}/></a></li>
                    <li><a href='https://www.linkedin.com/in/hugo-matyla/'><Image src="/images/linkedin.svg" alt="linkedin" width={40} height={40}/></a></li>
                    <li><a href='mailto:hugom2005@free.fr'><Image src="/images/mail.svg" alt="mail" width={40} height={40}/></a></li>
                </nav>
            </div>
        </footer>
    );
}