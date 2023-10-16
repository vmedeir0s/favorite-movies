import Movielist from './components/MovieList';
import Form from './components/Form';
import { useState } from 'react';
import { FormDataType, MovieType } from './types';
import { moviesData } from './data';

function App() {
  const [movies, setMovies] = useState<MovieType[]>(moviesData);

  const newMovie = (movie: FormDataType) => {
    const newId = movies[movies.length - 1].id + 1;
    const newMovieWithId = { ...movie, id: newId };
    setMovies([...movies, newMovieWithId]);
  };

  return (
    <div className="bg-slate-800 px-3 flex flex-col pt-8 items-center w-full min-h-screen">
      <Form onAddNewMovie={newMovie} />
      <Movielist movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
