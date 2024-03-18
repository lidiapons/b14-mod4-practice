//Sass
import { AddMovieDetailsListener } from "../events/events";
import "../scss/styles.scss";
import { getMovieDetailsUrl } from "./api";

// Typescript
import { addMovieListGrid } from "./movie/movie-list";

// searchMovie("oso").then((movies) => {
//     showContent(movies)
// })


addMovieListGrid();
AddMovieDetailsListener()
getMovieDetailsUrl()

