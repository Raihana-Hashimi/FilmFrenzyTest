import { Typography } from "@mui/material";
import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { movies, error } = useMovies();

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
