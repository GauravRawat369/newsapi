import React, { useState, useEffect } from "react";
import axios from "axios";
const News = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [articles, setArticles] = useState([]); // this hook is defining state
  const [message, setmessage] = useState([]);
  const [pending, setpending] = useState([true]);
  const [apierror, setapierror] = useState([]);

  useEffect(() => {
    //this hook is calling itself once
    // Fetch news data from API with API key using Axios
    const fetchNews = async () => {
      //this is api fetch using axios
      const response = await axios
        .get(
          // `https://newsapi.org/v2/top-headlines?country=us&category=&apiKey=${api_key}`
          // `https://newsapi.org/v2/top-headlines?country=IN&apiKey=${api_key}`
          `https://newsapi.org/v2/everything?q=stock&from=2023-04-15&sortBy=popularity&apiKey=${api_key}`
        )
        .catch((err) => {
          console.log("Error: ", err);
          setmessage("false");
        });
      setArticles(response.data.articles);
      console.log(response.data.articles);
      setmessage("true");
      setpending(false);
      response.data.articles.length === 0
        ? setapierror("No data found")
        : setapierror("Data found");
    };
    const fetchCode = async () => {  //country iso api 
      const value = await axios
      .get(
        `https://restcountries.com/v3.1/name/INDIA`
      ).catch((err) => {
        console.log("Error: ", err);
      });
      console.log(value.data);
    };
    fetchNews();
    fetchCode();
  }, []);
  /*notification  elements*/
  // new Notification("New News Arrived!", {
  //   body: "Check out the latest news on our website.",
  //   icon: "/path/to/notification-icon.png",
  //   vibrate: [200, 100, 200],
  // });
  if (message === "false") {
    // for loading message
    return (
      <div className="loading">
        <h2>Loading......</h2>
      </div>
    );
  }
  if (apierror === "No data found") {
    //when api don't have any data
    return (
      <div className="loading">
        <h2>No data found</h2>
      </div>
    );
  }
  return (
    // when every thing is good
    <div className="news">
      <div className="loading">{pending && <h2>loading.....</h2>}</div>
      <div className="news-container">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <div className="news-card-content">
              <h3 className="news-title">{article.title}</h3>
              <p className="about-news">
                {article.description?.substring(0, 90) + "... "}
              </p>
              <div className="read-more-div">
                <h4 className="news-author">{article.source.name}</h4>
                <a href={article.url} target="_blank">
                  <button className="readme-btn">Read more</button>
                </a>
              </div>
            </div>
            <div className="cover img-cover">
              <img
                className="news-img"
                src={article.urlToImage}
                alt="news images"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
