const API_KEY = "9c8b7f71ccb275e81aaada5cf2009298";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMoives: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMoives: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMoives: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMoives: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;