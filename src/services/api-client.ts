import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/discover",
  params: {
    api_key: "bd1fb35688c27a6cf116a3768db47d16",
  },
});
