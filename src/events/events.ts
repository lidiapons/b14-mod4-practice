import { getElementByIdFrom } from "../ts/utils/utils";
import { addMovieList, addMovieListGrid, clean, setCurrentMovieListType } from "../ts/movie/movie-list";
import { filterMoviesData } from "../ts/mappers";
import { MovieListType } from "../ts/models";

export function addMovieGridLayoutListener() {
    const element = getElementByIdFrom(
        "movie-grid-btn",
        "addMovieGridLayoutListener"
    );

    element.addEventListener("click", () => { addMovieListGrid() });
}

export function addMovieListLayoutListener() {
    const element = getElementByIdFrom(
        "movie-list-btn",
        "addMovieListLayoutListener"
    ); 

    element.addEventListener("click", () => { addMovieList() });
}


export function addMovieSelectMovieTypeListener() {
    const element = getElementByIdFrom(
        "movie-type-select",
        "addMovieSelectLayoutListener"
    ) as HTMLSelectElement;
    element.addEventListener("change", function () {
        const option = element.value as MovieListType;
        setCurrentMovieListType(option);
    })
}


//No se hacer esto

// export function AddMovieDetailsListener(){
//     const contenedor = document.getElementById("contenedor")
//     contenedor.addEventListener("click", () => {
//         console.log("hola")
//     })
// }
//     const target = contenedor.target
   
//     if ( 
//         target.className === "movie-poster" &&
//         target.hasAttribute("data-movie-img")
//     ) {
//         const movieID = target.getAttribute("data-movie-id");
//         if (movieID.length > 0) console.log(Number(movieID))
//         }


    // export function AddMovieDetailsListener() {
    //     const contenedor = document.getElementById("contenedor");
    //     contenedor.addEventListener("click", (event) => {
    //         let target = event.target;
    //         if (
    //             target.className === "movie-poster" &&
    //             target.hasAttribute("data-movie-id")
    //         ) {
    //             const movieId = target.id;
    //             console.log(movieId)

    //             // const movieID = target.getAttribute("data-movie-id");
    //             // if (movieID.length > 0) console.log(Number(movieID));
    //         }

    //     });
    // }

    export function AddMovieDetailsListener() {
        const contenedor = getElementByIdFrom("contenedor", "AddMovieDetailsListener")
        contenedor.addEventListener("click", (event) => {
            const target = event.target as HTMLElement

            if (target.className === "movie-card" && 
                target.hasAttribute("details")) {
                    const movieID = target.getAttribute("details");

                    console.log(movieID);
                }
        })

    }







    //     const target = event.target
   
    // if ( 
    //     target.className === "movie-poster" &&
    //     target.hasAttribute("data-movie-img")
    // ) {
    //     const movieID = target.getAttribute("data-movie-id");
    //     if (movieID.length > 0) console.log(Number(movieID))
    //     }
    // }
  
    // );
