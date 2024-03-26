import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Movie {
  id: number;
  title: string;
}

interface FetchMovieResponse {
  results: Movie[];
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchMovieResponse>("/movie", { signal: controller.signal })
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { movies, error };
};

export default useMovies;
