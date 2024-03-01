//Sass
import "../scss/styles.scss";

// Typescript
import { movieListType, getListMoviesData } from "./api";

getListMoviesData(movieListType.topRated, 3)
.then((movies) => {
    console.log(movies);
})
.catch(error => {
    console.error(error.message)
});

