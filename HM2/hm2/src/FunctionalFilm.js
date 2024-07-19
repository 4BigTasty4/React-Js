import React, { useState, useEffect } from "react";
import "./FunctionalFilm.css"; // Импортируем CSS файл

function getMoviesRange(moviesArray, start, end) {
  let result = [];

  for (let i = start; i < end; i++) {
    result.push(moviesArray[i]);
  }

  return result;
}

const FunctionalNews = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = "https://moviesverse1.p.rapidapi.com/most-popular-movies";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a8215c1efbmshf4c684aefc5ec71p1ba798jsn911e69a91927",
        "x-rapidapi-host": "moviesverse1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.movies);
      console.log(result.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="news-container">
      {data.length > 0 && (
        <div className="movies-grid">
          {getMoviesRange(data, 0, 16).map((movie, index) => (
            <div key={index} className="movie-card">
              <img
                src={movie.image}
                alt={movie.title}
                className="movie-image"
              />
              <p className="movie-title">{movie.title}</p>
              <p className="movie-year">{movie.year}</p>
              <p className="movie-timeline">{movie.timeline}</p>
              <p className="movie-rating">{movie.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FunctionalNews;
