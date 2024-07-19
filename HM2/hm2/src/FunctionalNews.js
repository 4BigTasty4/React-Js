import React, { useEffect, useState } from "react";
import "./FunctionalNews.css";

const FunctionalNews = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url =
      "https://news-api14.p.rapidapi.com/v2/search/articles?query=football&language=en";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a8215c1efbmshf4c684aefc5ec71p1ba798jsn911e69a91927",
        "x-rapidapi-host": "news-api14.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.data);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="news-container">
      {data.length > 0 ? (
        data.map((article, index) => (
          <div key={index} className="news-item">
            <p>{article.authors.join(", ")}</p>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <p>{new Date(article.date).toLocaleDateString()}</p>
            <img src={article.thumbnail} alt={article.title} />
          </div>
        ))
      ) : (
        <p className="loading">Загрузка новостей...</p>
      )}
    </div>
  );
};

export default FunctionalNews;
