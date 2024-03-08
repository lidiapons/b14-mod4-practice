
import { filterMoviesData, filterSearchMovie} from './mappers';

const config = {
    apiKey: "15d2ea6d0dc1d476efbca3eba2b9bbfb",
    langIso: "es-ES",
    baseUrl: "https://api.themoviedb.org/3/",
};

export const movieListType = {
    nowPlayin: "now_playing",
    popular: "popular",
    topRated: "top_rated",
    upcoming: "upcoming",
}

export async function getListMoviesData(movieListType, page = 1) {
    const movieListUrl = `${config.baseUrl}/movie/${movieListType}?language=${config.langIso}&api_key=${config.apiKey}&page=${page}`;
    const response = await fetch(movieListUrl)
    const data = await response.json()

    if (data?.success === false) {
        throw new Error(`Error(getListMoviesData): ${data.status_message}`);
    }

    return filterMoviesData(data?.results ?? []);
};


//  --url 'https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1' \


export async function searchMovie(query, page = 1) {
    const searchBaseUrl = `${config.baseUrl}search/movie?query=${query}&include_adult=false&language=${config.langIso}&api_key=${config.apiKey}&page=${page}`
    const response = await fetch(searchBaseUrl)
    const data = await response.json()
    return filterSearchMovie(data?.results ?? [])
}


