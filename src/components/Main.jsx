import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesData();
  }, []);

  const getMoviesData = async () => {
    const res = await fetch(requests.requestPopular);
    const data = await res.json();
    setMovies(data.results);
  };

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  //   console.log(randomMovie);

  const stringTruncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-slate-900"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
        />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            {randomMovie?.title}
          </h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-6">
              Play
            </button>
            <button className="border text-white mx-4 border-gray-300 py-2 px-6">
              Watch
            </button>
          </div>
          <p className="text-gray-400 text-sm">{randomMovie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300">
            {stringTruncate(randomMovie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
