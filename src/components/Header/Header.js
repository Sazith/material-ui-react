import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Header = () => {
  const [article,setArticle] = useState([])
  useEffect(() =>{
    const baseUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2023-11-11&sortBy=publishedAt&apiKey=95ce33b2f7974c5681d4e3e8d111a54c';
      fetch(baseUrl)
      .then(response => response.json())
      .then(data => setArticle(data.articles))
  },[])
  console.log(article);
  return (
    <div>
      {
        article.map(article => <News article={article}></News>)
      }
    </div>
  );
};

export default Header;