import Carousel from './carousel';

export default function Home() {
    return (
        <>
            <div className="text-center font-sans pt-40 relative">
                <h1 className="text-8xl mb-8 font-bold ">Hugo MATYLA</h1>
                <h2 className="text-2xl font-semibold ">DÉVELOPPEUR D&apos;APPLICATIONS & SITES WEB</h2>
            </div>
            <div className="text-center font-sans pt-20 mb-10 relative">
                <h3 className='font-semibold'>Languages déjà Pratiqués</h3>
                <Carousel/>
            </div>
        </>
    );
}