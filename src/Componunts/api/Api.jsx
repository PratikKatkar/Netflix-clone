const API_KEY = "8a28969becc57db63228f119b32634ba";

const Api = {

    fetchTrendign:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetFlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`


}
export default Api;