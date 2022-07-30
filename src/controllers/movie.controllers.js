const baseURL = "http://www.omdbapi.com";
const apiKey = process.env.REACT_APP_API_KEY

const getMoviesDefault = async (search) => {
    const fetchURL = `${baseURL}/?s=${search}&p=1-10&apikey=${apiKey}`
    const res = await fetch(fetchURL);
    return await res.json();
}

const getMovieByID = async (movieID) => {
    const fetchURL =`${baseURL}/?i=${movieID}&apikey=${apiKey}`
    const res = await fetch(fetchURL);
    return await res.json();
}

export {getMoviesDefault, getMovieByID}