/**
  * Filters an array of movie object and returns another array
  * @param  movies 
  * @returns 
  */
 
 
 
export function filterMoviesData(movies:any) {
    return movies.map((movie: { id: any; title: any; overview: any; poster_path: any; release_date: any; vote_average: any; }) => {
        const { id, title, overview, poster_path, release_date, vote_average } = movie;
        return {
            id,
            title,
            description: overview,
            cover: poster_path,
            year: release_date.split("-").shift(),
            rating: vote_average,
        }
    })
}



export function filterSearchMovie(movies: any) {
    return movies.map((movie: { id: any; title: any; overview: any; porter_path: any; release_date: string; rating: any; }) => ({
        id : movie.id,
        title : movie.title,
        overview : movie.overview,
        porter_path : movie.porter_path,
        year : movie.release_date.split("-").shift(),
        rating : movie.rating,
}))
}