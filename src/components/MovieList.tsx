import Movie from './Movie';
import { MovieListProps } from '../types';

export default function Movielist({ movies, setMovies }: MovieListProps) {
  const toggleFavorite = (movieId: number) => {
    setMovies((previous) =>
      previous.map((movie) =>
        movie.id === movieId
          ? { ...movie, isFavorited: !movie.isFavorited }
          : movie
      )
    );
  };

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} onToggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
}
