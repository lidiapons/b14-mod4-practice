import { fetchMovieDetailsUrl, filterMoviesData, filterSearchMovie} from '../ts/mappers';
import { MovieList, MovieListType } from './models';
import { movieID } from '../events/events';

const config = {
    apiKey: "15d2ea6d0dc1d476efbca3eba2b9bbfb",
    langIso: "es-ES",
    baseUrl: "https://api.themoviedb.org/3/",
};

export async function getListMoviesData(movieListType: MovieListType, page = 1): Promise<MovieList[]> {
    const movieListUrl = `${config.baseUrl}/movie/${movieListType}?language=${config.langIso}&api_key=${config.apiKey}&page=${page}`;
    const response = await fetch(movieListUrl)
    const data = await response.json()

    if (data?.success === false) {
        throw new Error(`Error(getListMoviesData): ${data.status_message}`);
    }

    return filterMoviesData(data?.results ?? []);
};

// 'https://api.themoviedb.org/3/movie/movie_id?language=en-US'

export async function getMovieDetailsUrl(movieID: any) {
    const movieDetailsUrl = `${config.baseUrl}/movie/${movieID}?language=${config.langIso}&api_key=${config.apiKey}`;
    const response = await fetch(movieDetailsUrl)
    const data = await response.json()
    console.log(movieDetailsUrl)
    return fetchMovieDetailsUrl(data?.results  ??[]);
}



//  --url 'https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1' \


export async function searchMovie(query: string, page = 1) {
    const searchBaseUrl = `${config.baseUrl}search/movie?query=${query}&include_adult=false&language=${config.langIso}&api_key=${config.apiKey}&page=${page}`
    const response = await fetch(searchBaseUrl)
    const data = await response.json()
    return filterMoviesData(data?.results ?? [])
}


