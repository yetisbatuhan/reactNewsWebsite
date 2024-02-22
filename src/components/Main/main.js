import React, { useEffect, useState } from 'react';
import newsApi from '../../Services/newsApi';
const Main = () => {
   
    const [mainNews,setMainNews]= useState([]);
    useEffect(() => {
        const fetchMainNews = async () => {
          try {
            const articles = await newsApi.mainNews();
            setMainNews(articles);
            console.log(articles)
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
        <div className='grid   xl:grid-cols-3 md:gap-2 mt-3 container mx-auto'>
         {mainNews[0].urlToImage != null ? (
          <div className=' sm:col-span-2 md:col-span-2  xl:col-span-3  xl:flex  '>
            <img className='sm:h-[250px] md:h-[300px] w-full xl:h-[400px] 2xl:h-[500px] p-1' src={mainNews[0].urlToImage}/>
            <div className='px-2'>
            <h2 className='text-[40px] font-mono font-bold '>
              {mainNews[0].title}
            </h2>
            <p className=''>{mainNews[0].description}</p>
          </div>
          </div>): <div className=' sm:col-span-2 xl:col-span-3  xl:flex '>
            
            <img className='sm:h-[250px] md:h-[300px] w-full xl:h-[400px] 2xl:h-[500px] p-1' src={mainNews[1].urlToImage}/>
            
            <div className='px-2'>
            <h2 className='text-[20px] md:text-[40px] font-serif font-bold  '>
              {mainNews[1].title}
            </h2>
            <p className='font-serif'>{mainNews[1].description}</p>
            <p className='font-serif'>{mainNews[1].content}</p>

          </div>
          </div>}
          {mainNews[0].urlToImage != null ? (
  <>
    {mainNews.slice(1).map((article, index) =>
      article.urlToImage != null ? (
        <div className='col-span-1' key={index}>
          <img className='h-60 p-2' src={article.urlToImage} alt={`image: ${article.title}`} />
          <h2 className='text-[25px] font-mono font-bold my-auto mx-auto '>
            {article.title}
          </h2>
          <p>{article.description}</p>
        </div>
      ) : null
    )}
    </>
) : (
   <>
    {mainNews.slice(2).map((article, index) =>
      article.urlToImage != null ? (
        <div className='col-span-1' key={index} onClick={() => console.log(article)} >
         <img className='h-60 p-2  w-full' src={article.urlToImage} alt={`image: ${article.title}`} />
          <h2 className='text-[25px] font-mono font-bold my-auto mx-auto '>
            {article.title}
          </h2>
          <p>{article.description}</p>
            </div>
      ) : null
    )}
    </>
)}

          
      </div>
      
    );
}

export default Main;
