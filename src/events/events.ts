import { getElementByIdFrom } from "../utils/utils";
import { addMovieListGrid } from "../ts/movie/movie-list";
import { filterMoviesData } from "../ts/mappers";

export function addMovieGridLayoutListener() {
    const element = getElementByIdFrom(
        "movie-grid-btn",
        "addMovieGridLayoutListener"
    );
    const eventHandler = function () {
        // setCurrentMovieListLayout(MovieListLayout.Grid);
        console.log('click en el boton icono GRID')
    };


    element.addEventListener("click", eventHandler );
}

export function addMovieListLayoutListener() {
    const element = getElementByIdFrom(
        "movie-list-btn",
        "addMovieListLayoutListener"
    );
    const eventHandler = function () {
        console.log('click en el boton icono List')
        
    };

    element.addEventListener("click", eventHandler);
}


export function addMovieSelectLayoutListener() {
    const element = getElementByIdFrom(
        "movie-type-select",
        "addMovieSelectLayoutListener"
    );
    element.addEventListener("change", function(){
            const option = element?.value;
            addMovieListGrid(option)
        })
}