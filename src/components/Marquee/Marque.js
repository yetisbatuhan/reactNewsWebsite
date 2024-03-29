// import React from 'react';

// const Marque = () => {
//     
// }
import React, { useState, useEffect } from 'react';
import newsApi from '../../Services/newsApi';

const Marque = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = await newsApi.fetchTopHeadlines();
        setNews(articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
            <div className='container mx-auto h-10  flex bg-white'>
                <h2 className='align-middle pl-2 sm:text-[10px]  xl:text-[30px] flex items-center'>LATEST <span className='px-3 ml-1 font-bold border-none rounded-e-md bg-red-500'>NEWS</span></h2>
                <marquee width="100%" direction="left" height="100px" className="flex" >
                {news.map((article, index) => (
                 <h2 className='inline-block text-[25px] font-mono font-bold  my-auto mx-auto px-6 border border-x-black' key={index}>
                 <span className='text-red-600'>{Date(article.publishedAt).slice(15,21)}</span> {article.title} 
                     </h2>
                
 
        ))}
            </marquee>
            </div>
        );
};

export default Marque;
