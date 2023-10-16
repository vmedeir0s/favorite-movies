import React from 'react';

export type MovieType = {
  id: number;
  name: string;
  image: string;
  isFavorited: boolean;
  description: string;
  releaseYear: number;
  director: string;
};

export type FormDataType = Omit<MovieType, 'id'>;

export type MovieProps = {
  movie: MovieType;
  onToggleFavorite: (movieId: number) => void;
};

export type MovieListProps = {
  movies: MovieType[];
  setMovies: React.Dispatch<React.SetStateAction<MovieType[]>>;
};
