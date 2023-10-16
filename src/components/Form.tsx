import React, { useState } from 'react';
import { FormDataType } from '../types';
import Swal from 'sweetalert2';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';

export default function Form({
  onAddNewMovie,
}: {
  onAddNewMovie: (movie: FormDataType) => void;
}) {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    image: '',
    description: '',
    director: '',
    isFavorited: false,
    releaseYear: new Date().getFullYear(),
  });
  const [eventError, setEventError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? event.target.checked : value,
    });
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const anoAtual = new Date().getFullYear();
    const regex = new RegExp(`^[1-2]\\d{3}$`);

    if (name === 'releaseYear') {
      if (regex.test(value) && value.length === 4) {
        const numValue = parseInt(value, 10);
        if (numValue >= 1900 && numValue <= anoAtual) {
          setFormData({ ...formData, releaseYear: numValue });
          setEventError(!event);
        } else {
          setEventError(true);
        }
      } else {
        setEventError(true);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!eventError) {
      onAddNewMovie(formData);
      Swal.fire({
        title: 'Uploading',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1200,
        willOpen: () => {
          Swal.showLoading();
        },
        didClose() {
          Swal.fire({
            title: 'Salvo com Sucesso !',
            icon: 'success',
            showConfirmButton: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
            timer: 1500,
          });
          setFormData({
            name: '',
            image: '',
            description: '',
            director: '',
            isFavorited: false,
            releaseYear: new Date().getFullYear(),
          });
          setEventError(false);
        },
      });
    }
  };

  return (
    <div className="max-sm:h-screen flex flex-col">
      <h1 className="text-5xl font-bold text-zinc-50">
        Formulario de Cadastro
      </h1>
      <form
        className="flex flex-col mt-4 p-2 gap-5 text-zinc-50"
        onSubmit={handleSubmit}
      >
        <div className="relative z-0 w-full group w-">
          <input
            id="movieName"
            type="text"
            name="name"
            value={formData.name}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-emerald-400 peer"
            onChange={(event) => handleInputChange(event)}
            autoComplete="off"
            required
          />
          <label
            className="absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-gray-500 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-400"
            htmlFor="movieName"
          >
            Nome do Filme
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            id="movieImage"
            name="image"
            type="text"
            placeholder=" "
            value={formData.image}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-emerald-400 peer"
            onChange={(event) => handleInputChange(event)}
            autoComplete="off"
            required
          />
          <label
            className="absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-gray-500 antialiased peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-400"
            htmlFor="movieImage"
          >
            Imagem
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            id="movieDescription"
            name="description"
            type="text"
            placeholder=" "
            value={formData.description}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-emerald-400 peer"
            onChange={(event) => handleInputChange(event)}
            autoComplete="off"
            required
          />
          <label
            className="absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-gray-500 antialiased peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-400"
            htmlFor="movieDescription"
          >
            Descrição
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            id="movieDirector"
            name="director"
            type="text"
            placeholder=" "
            value={formData.director}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-emerald-400 peer"
            onChange={(event) => handleInputChange(event)}
            autoComplete="off"
            required
          />
          <label
            className="absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-gray-500 antialiased peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-400"
            htmlFor="movieDirector"
          >
            Diretor
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            id="movieYear"
            name="releaseYear"
            type="number"
            placeholder=" "
            value={formData.releaseYear}
            maxLength={4}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-emerald-400 peer"
            onChange={(event) => handleInputChange(event)}
            onBlur={(event) => handleInputBlur(event)}
            autoComplete="off"
            required
          />
          <label
            className="absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-gray-500 antialiased peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-emerald-400"
            htmlFor="movieYear"
          >
            Ano de Lançamento
          </label>
          <p className="text-xs text-red-500 h-2 pt-1">
            {eventError ? 'Ano inválido *' : ' '}
          </p>
        </div>
        <div className="w-full group flex flex-row-reverse justify-end items-center gap-1">
          <input
            id="movieFavorited"
            name="isFavorited"
            type="checkbox"
            placeholder=" "
            checked={formData.isFavorited}
            className="w-[15px] h-[15px] mt-0.5 border border-gray-800 rounded accent-emerald-400 focus:ring-3 focus:ring-emerald-400 peer cursor-pointer bg-gray-300 checked:bg-emerald-400"
            onChange={(event) => handleInputChange(event)}
          />
          <label
            className="text-gray-500 antialiased peer-checked:text-emerald-400"
            htmlFor="movieFavorited"
          >
            Favorito
          </label>
        </div>
        <button
          className="bg-emerald-400 font-extrabold text-gray-700 rounded w-20 p-2 hover:bg-emerald-500"
          type="submit"
        >
          Add
        </button>
      </form>
      <span className="sm:hidden self-center mt-10">
        <ChevronDoubleDownIcon className="h-6 w-6 text-zinc-400" />{' '}
      </span>
    </div>
  );
}
