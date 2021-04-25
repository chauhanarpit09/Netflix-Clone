const APIkey = "d2ae966b0bae2a9f7dbc2a38133cb0f8";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${APIkey}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${APIkey}&with_network=213`,
    fetchTopRated : `/movie/top_rated?api_key=${APIkey}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${APIkey}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${APIkey}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${APIkey}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${APIkey}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${APIkey}&with_genres=99`,
}

export default requests;