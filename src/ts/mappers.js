 /**
  * Filters an array of movie object and returns another array
  * @param  movies 
  * @returns 
  */
 
 
 
 export function filterMoviesData(movies) {
    return movies.map(movie => {
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
