import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <div className='text-center mt-20 mb-10'>
        <h1 className='text-4xl font-bold'>MES PROJETS</h1>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-4 lg:grid-cols-6 gap-12 px-10">
        
        <a href="https://github.com/Fenerz07/Tournoi-Pokemon-Java" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/pokemon.svg" 
            alt="Tournoi Pokemon" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 p-6"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-black bg-opacity-90 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
            <h3 className="bg-gradient-to-r from-pink-500 to-orange-500 text-center text-xl text-transparent bg-clip-text font-semibold">Jeu de simulation de combats POKEMON</h3>
            <Image 
              src="/images/bxl-java.svg" 
              alt="Java Logo" 
              className="w-8 h-8 mx-auto mt-2"
              width={32}
              height={32}
            />
          </div>
        </a>

        <a href="https://github.com/Fenerz07/phpSocialNetwork-" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/social-network.svg"
            alt="Réseau Social"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 p-6"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-black bg-opacity-90  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
            <h3 className="bg-gradient-to-r from-orange-500 to-yellow-500 text-xl text-transparent bg-clip-text text-center  font-semibold">Réseau social complet avec base de données</h3>
            <Image 
              src="/images/bxl-php.svg" 
              alt="PHP Logo" 
              className="w-8 h-8 mx-auto mt-2"
              width={32}
              height={32}
            />
          </div>
        </a>

        <a href="https://github.com/Fenerz07/MovieTracker" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/movie.svg" 
            alt="Traqueur de Films en Next.js" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 p-6"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-black bg-opacity-90  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
            <h3 className="bg-gradient-to-r from-yellow-500 to-slate-400 text-xl text-transparent bg-clip-text text-center  font-semibold">Traqueur de films stylisé avec utilisation de l&apos;API TMDB</h3>
            <Image 
              src="/images/bxl-react.svg" 
              alt="React Logo" 
              className="w-8 h-8 mx-auto mt-2"
              width={32}
              height={32}
            />
          </div>
        </a>

        <a href="https://github.com/Fenerz07/viteNews" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/news.svg" 
            alt="Affichage de News en ViteTS" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 p-6"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-black bg-opacity-90  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
            <h3 className="bg-gradient-to-r from-slate-400 to-blue-500 text-xl text-transparent bg-clip-text text-center font-semibold">Gestion et Affichage de News avec API Hacker News</h3>
            <Image 
              src="/images/vite.svg" 
              alt="Vite Logo" 
              className="w-8 h-8 mx-auto mt-2"
              width={32}
              height={32}
            />
          </div>
        </a>

        <a href="https://github.com/Fenerz07/Puissance4-C" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/pin.svg" 
            alt="Puissance 4 en C" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 p-6"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-black bg-opacity-90  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
            <h3 className="bg-gradient-to-r from-blue-500 to-purple-500 text-xl text-transparent bg-clip-text text-center  font-semibold">Puissance 4 en console à 2 joueurs concrets</h3>
            <Image 
              src="/images/c.svg" 
              alt="C Logo" 
              className="w-8 h-8 mx-auto mt-2"
              width={32}
              height={32}
            />
          </div>
        </a>

        <a href="https://github.com/Fenerz07/Python/blob/main/Game%20of%20Life.py" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-lg">
          <Image 
            src="/images/life.svg" 
            alt="Game of Life en Python"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 p-6"
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-black bg-opacity-90  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
            <h3 className="bg-gradient-to-r from-purple-500 to-pink-500 text-xl text-transparent bg-clip-text text-center font-semibold">Jeu de la vie incontournable avec affichage graphique</h3>
            <Image 
              src="/images/bxl-python.svg" 
              alt="Python Logo" 
              className="w-8 h-8 mx-auto mt-2"
              width={32}
              height={32}
            />
          </div>
        </a>
      </div>
    </>
  );
}
