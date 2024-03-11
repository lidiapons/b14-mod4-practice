//Sass
import "../scss/styles.scss";
import { showContent } from "../utils/utils";

// Typescript
import { movieListType, getListMoviesData, searchMovie, } from "./api";
import { filterSearchMovie } from "./mappers";

searchMovie("batman").then((movie) => {
    
})

