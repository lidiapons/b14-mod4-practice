/**
 * 1. traer datos del listado de peliculas del servidor (datos = Array<MovieList>)
 * 2. 
 */

import { getElementByIdFrom } from "../../utils/utils";
import { getListMoviesData } from "../api";
import { MovieList, MovieListType } from "../models";
import { filterMoviesData } from "../mappers";
import { addMovieListToolbar } from "./toolbar";



export async function addMovieListGrid(movieListType: MovieListType): Promise<void> {

    const appElement = getElementByIdFrom("app", "addMovieListGrid");
    appElement.innerHTML = "";
    addMovieListToolbar()

    const container = document.createElement("div");
    container.className = "container";

    const row = document.createElement("div");
    row.className = "row";   

    appElement.appendChild(container)
    container.appendChild(row)

    const moviesData = await getListMoviesData(movieListType);
    moviesData.forEach((movieData: MovieList) => {
        const col = document.createElement("div");
        col.className = "col-lg-3 col-md-4 col-sm-6"
        
        const card = document.createElement("div");
        card.className ="card"

        card.innerHTML = `
        <img src="http://image.tmdb.org/t/p/w500//${movieData.cover}" alt="">
        <h1>${movieData.title}</h1>
        <p>${movieData.description}dfsdfadfas</p>
        `
        col.appendChild(card)
        
        row.appendChild(col)

    });;
    
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