import React, { useState , isValidElement, useEffect} from 'react';


const Header = () => {
    const menuList = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
    const [searchBar,setSearchBar] = useState(false);
    const [menu,setMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth >= 748 && menu == true){
        setMenu(false);
      }          
      }
    ;
   useEffect(() => {
    window.addEventListener('resize', handleResize);
    
   }, [windowWidth]);
   
    return (
        <div className='sm:flex sm:justify-center md:flex md:justify-between container mx-auto py-3 '>
            <div className='logo  '>
             <h1 className='sm:text-[20px] text-center text-[30px]  xl:text-[50px]  font-serif '>2DAY <span className='border bg-red-500 text-white rounded-b-lg px-2 font-extrabold '>News</span></h1>
             
            </div>
            <div className='menu-list px-16  text-center '>
            <img  className='md:hidden mx-auto' onClick={()=>setMenu(!menu)}  src="https://img.icons8.com/ios/50/000000/menu--v7.png" alt="menu--v7"/>
              {menu === false ? (
               
               menuList.map((category, index) => (
                  
                  <a className='sm:px-1 md:px-2 hidden md:inline-block    pt-3 font-bold text-[20px]  '  href={category} key={index}>{category}</a>
              ))) :(
                menuList.map((category, index) => (
                  <a className='block px-auto pt-3 font-bold text-[20px] border-b-2  border-black'  href={category} key={index}>{category}</a>
              ))
              )}
             
            </div>
            <div className='menu-end hidden md:block'>
            <button
        className='search-bar px-2 pt-3 md:flex '
            onClick={() => {
          setSearchBar((prevSearchBar) => !prevSearchBar);
         }}
            >
     {searchBar === false ? ( <>
    <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1" />
     </>
        ) : (
            <>
      
      <img width="25" height="25"  src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1" />
      <input type="text" id="fname" name="fname" />
    </>
     )}
    </button>
                
            </div>
        </div>
    );
}

export default Header;
