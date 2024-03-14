import { getElementByIdFrom } from "../utils/utils";

export function addMovieGridLayoutListener() {
    const element = getElementByIdFrom(
        "movie-grid-btn",
        "addMovieGridLayoutListener"
    );
    const eventHandler = function () {
        // setCurrentMovieListLayout(MovieListLayout.Grid);
        console.log('click en el boton icono GRID')
    };
    element.addEventListener("click", eventHandler);
}

export function addMovieSelectLayoutListener() {
    const element = getElementByIdFrom(
        "movie-type-select",
        "addMovieSelectLayoutListener"
    );
    const eventHandler = function () {
        console.log('click en el boton')
    };
    element.addEventListener("click", eventHandler);
}