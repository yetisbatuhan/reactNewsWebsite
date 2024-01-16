import React, { useState } from 'react';

const Header = () => {
    const menuList = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
    const [searchBar,setSearchBar] = useState(false);
   
    return (
        <div className=' flex justify-between container mx-auto py-3 '>
            <div className='logo  '>
             <h1 className='sm:text-[20px]  xl:text-[50px]  font-serif '>2DAY <span className='border bg-red-500 text-white rounded-b-lg px-2 font-extrabold '>News</span></h1>
             
            </div>
            <div className='menu-list flex  '>
            <img width="20" height="20" className='md:hidden' src="https://img.icons8.com/ios/50/000000/menu--v7.png" alt="menu--v7"/>
               {menuList.map((category, index) => (
                  <a className='px-3 pt-3 font-bold text-[20px] sm:hidden md:flex border-gray-50' href={category} key={index}>{category}</a>
              ))}
             
            </div>
            <div className='menu-end'>
            <button
        className='search-bar px-2 pt-3 flex'
            onClick={() => {
          setSearchBar((prevSearchBar) => !prevSearchBar);
         }}
            >
     {searchBar === false ? ( <>
    <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1" />
    <input type="text" id="fname" name="fname" /> </>
        ) : (
            <>
      
      <img width="25" height="25"  src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1" />
    </>
     )}
    </button>
                
            </div>
        </div>
    );
}

export default Header;
