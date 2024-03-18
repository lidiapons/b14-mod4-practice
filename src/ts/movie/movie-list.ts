/**
 * 1. traer datos del listado de peliculas del servidor (datos = Array<MovieList>)
 * 2. 
 */

import { getElementByIdFrom } from "../utils/utils";
import { getListMoviesData, getMovieDetailsUrl } from "../api";
import { MovieList, MovieListType } from "../models";
import { fetchMovieDetailsUrl, filterMoviesData } from "../mappers";
import { addMovieListToolbar } from "./toolbar";
import { AddMovieDetailsListener } from "../../events/events";

let currentMovieListType = MovieListType.nowPlaying;

export function setCurrentMovieListType(newValue: MovieListType) {
    currentMovieListType = newValue;
    addMovieListGrid();
}

export async function addMovieListGrid(): Promise<void> {

    const appElement = getElementByIdFrom("app", "addMovieListGrid");
    appElement.innerHTML = "";
    addMovieListToolbar()

    const container = document.createElement("div");
    container.className = "container";
    container.setAttribute("id","contenedor")

    const row = document.createElement("div");
    row.className = "row";   

    appElement.appendChild(container)
    container.appendChild(row)

    const moviesData = await getListMoviesData(currentMovieListType);
    moviesData.forEach((movieData: MovieList) => {
        const col = document.createElement("div");
        col.className = "col-lg-3 col-md-4 col-sm-6"
               
        const card = document.createElement("div");
        card.className ="movie-card"
        card.setAttribute("id", "details");

        card.innerHTML = `
        <img id="data-movie-img" movieID=${movieData.id} class="movie-poster" src="http://image.tmdb.org/t/p/w500//${movieData.cover}" alt="">
        <div>
            <h1 class="title">${movieData.title}</h1>
            <p>${movieData.description}</p>
        </div>
        `
        col.appendChild(card)
        
        row.appendChild(col)

    });;
    
}

export async function addMovieList(): Promise<void> {

    const appElement = getElementByIdFrom("app", "addMovieListGrid");
    appElement.innerHTML = "";
    addMovieListToolbar()

    const container = document.createElement("div");
    container.className = "container";
    container.setAttribute("id","contenedor")

    const row = document.createElement("div");
    row.className = "row";   

    appElement.appendChild(container)
    container.appendChild(row)

    const moviesData = await getListMoviesData(currentMovieListType);
    moviesData.forEach((movieData: MovieList) => {
        const col = document.createElement("div");
        col.setAttribute("id", "columna" ) 
        
        const card = document.createElement("div");
        card.className ="movie-card"
        card.setAttribute("id", "details");

        card.innerHTML = `
        <img id="data-movie-img" movieID=${movieData.id} class="movie-poster" src="http://image.tmdb.org/t/p/w500//${movieData.cover}" alt="">
        <div>
            <h1 class="title">${movieData.title}</h1>
            <p>${movieData.description}</p>
        </div>
        `
        col.appendChild(card)
        
        row.appendChild(col)

    });;
    
}

export function clean() {
    const appElement = getElementByIdFrom("app", "clean");
    appElement.innerHTML = "";

    addMovieListToolbar()

}

// function getMovieDetailsUrl(movieID: number) {
//     return `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`
//     console.log(getMovieDetailsUrl(100))
// }

export async function getMovieDetails (movieID){
    const movieDetailsUrl = getMovieDetailsUrl(movieID);
    return fetchMovieDetailsUrl
}



/**
 * container
 * row
 * 
 * 
 * 
 * col-lg-3 col-md-4 col-sm-6
 * 
 * 
 */





// export function rowGrid(): void {
//     for (var i = 0; i < 3; i++) {
      
//         var row = document.createElement("div");
//         row.className = "row";

        
//         for (var j = 1; j <= 4; j++) {
           
//             var col = document.createElement("div");
//             col.className = "col-md-3 grid-item";

           
//             var img = document.createElement("img");
//             img.src = "ruta-de-la-imagen.jpg"; 
//             img.alt = "Descripción de la imagen";

            
//             var title = document.createElement("h4");
//             title.textContent = "Título";

            
//             var p = document.createElement("p");
//             p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

           
//             col.appendChild(img);
//             col.appendChild(title);
//             col.appendChild(p);

            
//             row.appendChild(col);
//         }

        
//         grid.appendChild(row);
//     }
// }