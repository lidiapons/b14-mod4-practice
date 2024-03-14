//Sass
import { addMovieGridLayoutListener, addMovieSelectLayoutListener } from "../events/events";
import "../scss/styles.scss";
import { showContent } from "../utils/utils";

// Typescript
import { movieListType, getListMoviesData, searchMovie, } from "./api";
import { filterSearchMovie } from "./mappers";
import { MovieListType } from "./models";
import { addMovieListGrid } from "./movie/movie-list";
import { addMovieListToolbar } from "./movie/toolbar";
import { addMovieListLayoutListener } from "../events/events";

// searchMovie("oso").then((movies) => {
//     showContent(movies)
// })

addMovieListToolbar()
addMovieListLayoutListener()





