import { useState } from 'react';
import { MovieProps } from '../types';
import MovieDetails from './MovieDetails';
import { HeartIcon } from '@heroicons/react/24/outline'

export default function Movie({ movie, onToggleFavorite }: MovieProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col items-center w-60 m-2 text-center max-sm:w-4/5">
      <h3 className="font-bold text-zinc-100 my-2">{movie.name}</h3>
      <div className="h-96 w-60">
        <img
          className={`object-center h-96 w-60 ${
            showDetails ? 'blur-sm absolute brightness-50' : ' '
          }`}
          src={movie.image}
          alt={movie.name}
        />
        {showDetails && <MovieDetails movie={movie} />}
      </div>
      <div className="my-2">
        <button onClick={() => onToggleFavorite(movie.id)}>
          {movie.isFavorited ? <HeartIcon className="h-7 w-7 stroke-0 hover:stroke-1 hover:stroke-white fill-emerald-500" /> : <HeartIcon className="h-7 w-7 text-zinc-100 hover:fill-emerald-500" />}
        </button>
      </div>
      <div>
        <button
          className="w-36 bg-emerald-400 font-bold text-zinc-700 rounded p-2 hover:bg-emerald-500 hover:text-zinc-50"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Ocultar' : 'Exibir Detalhes'}
        </button>
      </div>
    </div>
  );
}
