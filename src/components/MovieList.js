import { Wrap, WrapItem } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import Card from './Cards';
import { useHistory } from 'react-router-dom'
import { motion } from "framer-motion";
import { getMovieList } from '../controllers/movie.controllers.js';

export default function MovieList(props) {
  /* Creating a state variable called movies and a function called setMovies. */
  const [movies, setMovies] = useState([]);
  /* Creating a state variable called search and a function called setSearch. */
  const [search, setSearch] = useState(props.searchText);

  /**
   * It fetches data from the OMDB API and sets the data to the movies variable.
   */
  const fetchData = async () => {
    const data = await getMovieList(search)
    setMovies(data.Search);
  };

  /* A hook that is called when the component is mounted. It is used to fetch data from the OMDB API. */
  useEffect(() => {
    // console.log("called here")
    setSearch(props.searchText)
  }, [props.searchText]);

  /* A hook that is called when the component is mounted. It is used to fetch data from the OMDB API. */
  useEffect(() => {
    fetchData();
  }, [search]);

  const history = useHistory();

  function handleClick(movieID) {
    /* Pushing the pathname to the profile page and the test to the val. */
    history.push({
      pathname: '/profile',
      movieID: movieID,
    });
  }

  /* Mapping through the movies array and returning a card for each movie. */
  let movieList = (movies || []).map((movie) => {
    return (
      <WrapItem
        key={movie.imdbID}
        onClick={() => handleClick(movie.imdbID)}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={() => null}
        >
          <Card
            movieTitle={movie.Title}
            moviePosterUrl={movie.Poster}
          />
        </motion.button>
      </WrapItem>
    );
  })

  return (
    <div>
      {<Wrap
        marginBottom={50}>
        {movieList}
      </Wrap>}
    </div>
  )
}
