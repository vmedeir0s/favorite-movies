import { MovieType } from '../types';

type MovieDetailsProps = {
  movie: MovieType;
};

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div className="flex flex-col gap-3 p-3 text-zinc-50 relative h-96 w-60">
      <h4>Detalhes do Filme:</h4>
      <p>
        <strong>Diretor: </strong>
        {movie.director}
      </p>
      <p>
        <strong>Lançamento: </strong>
        {movie.releaseYear}
      </p>
      <p className="leading-4 antialiased">{movie.description}</p>
    </div>
  );
}
