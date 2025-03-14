
import React from 'react';
function NavBar(){
    return(
        <nav className='w-screen h-12 flex justify-between p-2 items-center max-sm:w-s'>
            <h1 className='w-1/6 max-sm:w-2/12 max-sm:text-lg font-extrabold text-2xl text-black text-center max-sm:'>Artist John</h1>
            <div className='w-3/12 flex items-center justify-around font-black max-sm:w-1/2 max-sm:text-xs' >
                <span>Home</span>
                <span>About me</span>
                <span>Gallery</span>
            </div>
            <div className=' max-md:w-1/4 max-lg:w-1/8 min-lg:w-1/12'>
                <button className='bg-green-700 text-white p-1 px-5 rounded-full shadow-md'>
                    Contact
                </button>
            </div>
            
        </nav>
    );
}
export default NavBar
