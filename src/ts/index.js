//Sass
import "../scss/styles.scss";
// import { showContent } from "../utils/utils";

// Typescript
import { movieListType, getListMoviesData, searchMovie, } from "./api";
import { filterSearchMovie } from "./mappers";

// getListMoviesData(movieListType.topRated, 3)
// .then((movies) => {
//     console.log(movies);
// })
// .catch(error => {
//     console.error(error.message)
// });

// function translate(lang) {
//   return lang === "en" ? "Hello" : "Hola";
// }

// function greeting(name, lang) {
//   const hello = translate(lang);
//   const message = `${hello} ${name}`;
//   return message;
// }

// const aName = "John";
// const result = greeting(aName, "es");
// console.log(result);

searchMovie("batman").then((movies) => {
  console.log(movies)
})
