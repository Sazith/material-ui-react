import React, { useEffect, useState } from 'react';

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
      <h1>This is header</h1>
    </div>
  );
};

export default Header;