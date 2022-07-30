const baseURL = "http://www.omdbapi.com";
const apiKey = process.env.REACT_APP_API_KEY

const getMoviesDefault = async (search) => {
    // const res = await fetch(`http://www.omdbapi.com/?s=spider-man&apikey=c0ad6b8f`);
    // return await res.json();

    // const url = `http://www.omdbapi.com/?s=${val}&p=1-10&apikey=75a7ad13`
    const url = `${baseURL}/?s=${search}&p=1-10&apikey=${apiKey}`
    /* It fetches data from the OMDB API and sets the data to the movies variable. */
    const res = await fetch(url);
    return await res.json();
}

export {getMoviesDefault}