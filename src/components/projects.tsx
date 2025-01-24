import Image from 'next/image';

export default function Projects() {
    return (
        <>
          <div className='text-center relative mt-80 mb-10'>
              <h1 className='text-6xl font-bold font-sans'>MES PROJETS</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            <a href="https://github.com/Fenerz07/BookManager" className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image 
                src="/images/book.svg" 
                alt="Project 1" 
                className="w-full h-48 scale-50 group-hover:scale-90 transition-all duration-300"
                width={400}
                height={200}
                />
            
            <div className="absolute inset-0 bg-black  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">Java - Tournoi Pokemon</h3>
            </div>
            </a>
  
          <a href="https://github.com/Fenerz07/phpSocialNetwork-" className="relative group overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/images/social-network.svg"
              alt="Project 2"
              className="w-full h-48 scale-50 group-hover:scale-90 transition-all duration-300"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-black  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">PHP - Réseau Social</h3>
            </div>
          </a>
  
          <a href="https://github.com/Fenerz07/MovieTracker" className="relative group overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/images/movie.svg" 
              alt="Project 3" 
              className="w-full h-48 scale-50 group-hover:scale-90 transition-all duration-300"
              width={500}
              height={300}
            />
            <div className="absolute inset-0 bg-black  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">Nextjs - Traqueur de Films</h3>
            </div>
          </a>
  
          <a href="https://github.com/Fenerz07/Tournoi-Pokemon-Java" className="relative group col-span-2 overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/images/pokemon.svg" 
              alt="Project 4" 
              className="w-full h-96 scale-50 group-hover:scale-90 transition-all duration-300"
              width={500}
              height={300}
            />
            <div className="absolute inset-0 bg-black  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">C# - Gestion de Livres</h3>
            </div>
          </a>
  
          <a href="https://github.com/Fenerz07/Puissance4-C" className="relative group overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/images/pin.svg" 
              alt="Project 5" 
              className="w-full h-48 scale-50 group-hover:scale-90 transition-all duration-300"
              width={500}
              height={300}
            />
            <div className="absolute inset-0 bg-black  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">C - Puissance 4</h3>
            </div>
          </a>
  
          <a href="https://github.com/Fenerz07/TicTacToeJS" className="relative group overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/images/tic-tac-toe.svg" 
              alt="Project 6" 
              className="w-full h-48 scale-50 group-hover:scale-90 transition-all duration-300"
              width={500}
              height={300}
            />
            <div className="absolute inset-0 bg-black  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">Javascript - Morpion</h3>
            </div>
          </a>
  
          <a href="https://github.com/Fenerz07/ENIGMA-Fast-Food-API" className="relative group col-span-2 overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/images/fast-food.svg" 
              alt="Project 7" 
              className="w-full h-96 scale-50 group-hover:scale-90 transition-all duration-300"
              width={500}
              height={300}
            />
            <div className="absolute inset-0 bg-black  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">JS - API FastFood</h3>
            </div>
          </a>
        </div>
      </>
    );
  }