import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { MovieProvider } from "./context/movie-context";
import MovieGrid from "./components/MovieGrid";

const App = () => {
  return (
    <>
      <MovieGrid />
      <MovieProvider>
        <RouterProvider router={router} />
      </MovieProvider>
    </>
  );
};

export default App;
