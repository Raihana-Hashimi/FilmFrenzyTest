import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";
import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movie />,
    errorElement: <Error />,
  },
  {
    path: "/tv-series",
    element: <TvSeries />,
    errorElement: <Error />,
  },
  {
    path: "/bookmark",
    element: <Bookmark />,
    errorElement: <Error />,
  },
]);
