//Sass
import "../scss/styles.scss";
import { showContent } from "../utils/utils";

// Typescript
import { movieListType, getListMoviesData, searchMovie, } from "./api";
import { filterSearchMovie } from "./mappers";

searchMovie("paco").then((movie) => {
    console.log(movie)
})


