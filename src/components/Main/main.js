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
      if (mainNews.length === 0) {
        return <div>Loading...</div>;
      }
    return (
        <div className='grid  sm:grid-cols-2 xl:grid-cols-3 md:gap-2 mt-3'>
         {mainNews[0].urlToImage != null ? (
          <div className=' sm:col-span-1 xl:col-span-3  md:flex  '>
            <img className='h-[500px] col-span-2 p-2' src={mainNews[0].urlToImage}/>
            <div className='col-span-1'>
            <h2 className='text-[40px] font-mono font-bold '>
              {mainNews[0].title}
            </h2>
            <p className=''>{mainNews[0].description}</p>
          </div>
          </div>): <div className=' sm:col-span-1 xl:col-span-3  md:flex  '>
            <img className='h-[500px] col-span-2 p-2' src={mainNews[1].urlToImage}/>
            <div className='col-span-1'>
            <h2 className='text-[40px] font-mono font-bold '>
              {mainNews[1].title}
            </h2>
            <p className=''>{mainNews[1].description}</p>
          </div>
          </div>}
          
          {mainNews.slice(1).map((article, index) => (
              article.urlToImage != null ? (
      <div className='col-span-1' key={index}>
       <img className='h-60 p-2' src={article.urlToImage} alt={`Image for ${article.title}`} />
       <h2 className='text-[25px] font-mono font-bold my-auto mx-auto '>
         {article.title}
        </h2>
          <p>{article.description}</p>
       </div>
       ) : null
        ))}
      </div>
      
    );
}

export default Main;
