const baseURL = "https://www.omdbapi.com";
const apiKey = process.env.REACT_APP_API_KEY

const getMovieList = async (search) => {
    if (search.length === 0) {
        search = "saw"
    }

    const fetchURL = `${baseURL}/?s=${search}&p=1-10&apikey=${apiKey}`
    console.log("Get Movie List fetchURL: " + fetchURL)
    const res = await fetch(fetchURL);
    return await res.json();
}

const getMovieByID = async (movieID) => {
    const fetchURL =`${baseURL}/?i=${movieID}&apikey=${apiKey}`
    const res = await fetch(fetchURL);
    return await res.json();
}

export {getMovieList, getMovieByID}