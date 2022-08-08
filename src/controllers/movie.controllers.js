const baseURL = "https://www.omdbapi.com";
const apiKey = "75a7ad13" //process.env.REACT_APP_API_KEY

/**
 * It takes a search term, and returns a list of movies that match that search term.
 * @param search - The search term that the user entered
 */
const getMovieList = async (search) => {
    /* If the search is empty, it will default to "saw" */
    if (search.length === 0) {
        search = "saw"
    }
    /* Creating a URL that will be used to fetch the movie data. */
    const fetchURL = `${baseURL}/?s=${search}&p=1-10&apikey=${apiKey}`
    const res = await fetch(fetchURL);
    return await res.json();
}

/**
 * This function takes in a movieID and returns a movie object.
 * @param movieID - The ID of the movie you want to get.
 */
const getMovieByID = async (movieID) => {
    /* Creating a URL that will be used to fetch the movie data. */
    const fetchURL =`${baseURL}/?i=${movieID}&apikey=${apiKey}`
    const res = await fetch(fetchURL);
    return await res.json();
}

export {getMovieList, getMovieByID}