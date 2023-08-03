import React from 'react'
// import Logo from  "../assets/my-logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {


  const [nav, setNave] = React.useState(false);
  const handleClick = () => setNave(!nav);

  return (

    <div className='fixed w-full h-[90px] flex px-4 bg-[#0a192f] text-gray-300'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex items-center'>
          <img
            src="https://www.flaticon.com/free-icon/atom_4625470?related_id=4625470&origin=pack"
            alt="logo"
            className='w-[50px] h-[50px]'
          />
          <ul className='hidden md:flex ml-11 space-x-4 text-[1.45rem]'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='hidden md:flex items-center'>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none w-64"
          />
        </div>
        <div className="sm:hidden mr-10 ">
          <input
            type="text"
            placeholder="Search..."
            className="px-0 py-1 pr-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none w-15"
          />
        </div>
      


      </div>
      <div onClick={handleClick} className='md:hidden z-10 mt-7'>
        {!nav ? <FaBars className='text-3xl' /> : <FaTimes className='text-3xl' />}
      </div>

      {console.log("Value of nav is " + !nav)}{/*top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center */}
      {/* Mobile Menu */} {/* !nav means true so its value if currently true 'Mobile Menu will not be shown due to 'hidden' property.*/}
      <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className='py-5 text-2xl'>Home</li>
        <li className='py-5 text-2xl'>About</li>
        <li className='py-5 text-2xl'>Contact</li>
      </ul>
      {/* Social Icons  */}
      <div className='hidden'></div>

    </div>
  )

}

export default Navbar

//////////////////////////////////
