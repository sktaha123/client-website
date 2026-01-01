import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='bg-white rounded-b-2xl shadow-lg z-50 fixed top-0 h-14 w-full md:h-16 md:w-full flex justify-center items-center px-4'>
      
      <div><img src="/svgs/Biznorlogo.jpeg" alt="" className='h-14 md:h-16 mr-3'/></div>

      <div className='hidden md:block md:flex md:space-x-7 bg-gray-100 px-4 py-3 rounded-full shadow-sm md:mx-auto'>
        <a href=""><img src="/svgs/instagram.svg" alt="" className='size-5'/></a>
        <a href=""><img src="/svgs/facebook1.svg" alt="" className='size-5'/></a>
        <a href=""><img src="/svgs/twitter.svg" alt="" className='size-5'/></a>
        <a href=""><img src="/svgs/linkedin.svg" alt="" className='size-5'/></a>
        <a href=""><img src="/svgs/whatsapp.svg" alt="" className='size-5'/></a>
    </div>

      <div className='flex justify-center items-center px-3 space-x-5 md:space-x-7 '>
        <span className=' bg-gray-100 px-4 py-2 rounded-full shadow-sm hover:bg-gray-200 transform transition cursor-pointer'>Submit CV</span>
        <span><img src="/svgs/hamburger.svg" alt="" className='size-6 cursor-pointer'/></span>


      </div>
    </div>


/* menusection for all screens */
    <div className='bg-yellow-500 w-'>




    </div>
  </>

)
}

export default Navbar
