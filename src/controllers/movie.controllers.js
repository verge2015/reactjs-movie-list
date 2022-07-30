const getMoviesDefault = async (val) => {
    // const res = await fetch(`http://www.omdbapi.com/?s=spider-man&apikey=c0ad6b8f`);
    // return await res.json();

    const url = `http://www.omdbapi.com/?s=${val}&p=1-10&apikey=75a7ad13`
    /* It fetches data from the OMDB API and sets the data to the movies variable. */
    const res = await fetch(url);
    return await res.json();
}

export {getMoviesDefault}