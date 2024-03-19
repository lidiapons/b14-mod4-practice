

import { MovieList } from "./models";




export function filterMoviesData(movies: any[]): MovieList[] {
    return movies.map(movieData => {
        const defaultValue = '(No displonible)';
        return {
            id: movieData?.id ?? defaultValue,
            title: movieData?.title ?? defaultValue,
            description: movieData?.overview ?? defaultValue,
            cover: movieData?.poster_path ?? defaultValue,
            year: movieData?.release_date.split("-").shift() ?? defaultValue,
            rating: movieData?.vote_average ?? defaultValue,
        }
    })
}


/**
  * Filters an array of movie object and returns another array
  * @param  movies 
  * @returns 
  */
export function filterSearchMovie(movies: any) {
    return movies.map((movie: { id: any; title: any; overview: any; porter_path: any; release_date: string; rating: any; }) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.porter_path,
        year: movie.release_date.split("-").shift(),
        rating: movie.rating,
    }))
}
export function fetchMovieDetailsUrl(movies: { id: any; title: any; overview: any; porter_path: any; release_date: string; rating: any; }[]) {
    console.log(movies)
    return movies.map((movie: { id: any; title: any; overview: any; porter_path: any; release_date: string; rating: any; }) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.porter_path,
        year: movie.release_date.split("-").shift(),
        rating: movie.rating,
    }))
}
