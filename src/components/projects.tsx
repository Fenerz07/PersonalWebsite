import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <div className='text-center mt-20 mb-10'>
        <h1 className='text-4xl font-bold'>MES PROJETS</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        
        <a href="https://github.com/Fenerz07/Tournoi-Pokemon-Java" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/pokemon.svg" 
            alt="Tournoi Pokemon en Java" 
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            width={400}
            height={250}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-semibold">Java - Tournoi Pokemon</h3>
          </div>
        </a>

        <a href="https://github.com/Fenerz07/phpSocialNetwork-" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/social-network.svg"
            alt="Réseau Social en PHP"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            width={400}
            height={250}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-semibold">PHP - Réseau Social</h3>
          </div>
        </a>

        <a href="https://github.com/Fenerz07/MovieTracker" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/movie.svg" 
            alt="Traqueur de Films en Next.js" 
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            width={400}
            height={250}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-semibold">Next.js - Traqueur de Films</h3>
          </div>
        </a>

        <a href="https://github.com/Fenerz07/BookManager" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/book.svg" 
            alt="Gestion de Livres en C#" 
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            width={400}
            height={250}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-semibold">C# - Gestion de Livres</h3>
          </div>
        </a>

        <a href="https://github.com/Fenerz07/Puissance4-C" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/pin.svg" 
            alt="Puissance 4 en C" 
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            width={400}
            height={250}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-semibold">C - Puissance 4</h3>
          </div>
        </a>

        <a href="https://github.com/Fenerz07/TicTacToeJS" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/tic-tac-toe.svg" 
            alt="Morpion en JavaScript"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            width={400}
            height={250}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-semibold">JavaScript - Morpion</h3>
          </div>
        </a>

      </div>
    </>
  );
}
