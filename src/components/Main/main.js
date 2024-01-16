import React, { useEffect, useState } from 'react';
import newsApi from '../../Services/newsApi';
const Main = () => {
   
    const [mainNews,setMainNews]= useState([]);
    useEffect(() => {
        const fetchMainNews = async () => {
          try {
            const articles = await newsApi.mainNews();
            setMainNews(articles);
          } catch (error) {
            console.error('Error fetching news:', error);
          }
        };
    
        fetchMainNews();
      }, []);
    return (
        <div className='grid  sm:grid-cols-1 md:grid-col-2 xl:grid-cols-3 md:gap-2 mt-3'>
        
        {mainNews.map((article, index) => (
          <div className='col-span-1 border ' key={index}>
            <img className='h-60 w-full p-2' src={article.urlToImage}/>
            <h2 className='inline-block text-[25px] font-mono font-bold my-auto mx-auto px-6'>
              {article.title}
            </h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
      
    );
}

export default Main;
