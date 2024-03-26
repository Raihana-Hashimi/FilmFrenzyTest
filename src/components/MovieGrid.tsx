import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Typography } from "@mui/material";

interface Movie {
  id: number;
  title: string;
}

interface FetchMovieResponse {
  results: Movie[];
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setErrors] = useState("");

  // const getMovie = () => {
  //   fetch(
  //     "https://api.themoviedb.org/3/discover/movie?api_key=bd1fb35688c27a6cf116a3768db47d16"
  //   )
  //     .then((res) => res.json())
  //     .then((json) => console.log(json.results));
  // };

  useEffect(() => {
    apiClient
      .get<FetchMovieResponse>("/movie")
      .then((res) => setMovies(res.data.results))
      .catch((err) => setErrors(err.message));
  }, []);
  return (
    <>
      {error && <Typography>{error}</Typography>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieGrid;
