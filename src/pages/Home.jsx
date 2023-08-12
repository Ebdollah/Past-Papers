import React from 'react';
import Testimonial from './Testimonial';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from './Contact';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
    
    return (
        <>
        <Navbar />
        <div className='md:px-10 bg-gradient-to-t from-purple-600 to-indigo-800 text-white w-full h-screen '>
            <div className='mx-6 sm:mx-10 p-8 flex flex-col justify-center '>
                <h1 className='text-4xl md:text-6xl text-center md:text-left mb-4 '>
                    Your One Place Repo for
                    <br className='hidden md:block' />
                    All Your Past Papers
                </h1>
                <h2 className='lg:w-2/3 mx-auto ml-0 leading-relaxed text-justify'>
                     Your Hub for University Past Papers. Uncover insights from the past, conquer present challenges, and shape a successful future with our comprehensive collection of academic resources.
                </h2>
                <div className='mt-7 flex justify-center md:justify-start'>
                    <div className=''>
                        <label htmlFor='countries' className='block text-2xl md:text-base font-medium text-gray-300'>
                            Select your University
                            
                        </label>
                      
                        <select
                            id='countries'
                            className='bg-gray-50 border mt-3 w-full sm:w-[20rem] h-18 md:h-10 border-gray-300 text-gray-900 text-lg md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5' >
                            <option value='US'>FAST</option>
                            <option value='CA'>UCP</option>
                            <option value='FR'>ITU</option>
                            <option value='DE'>UMT</option>
                        </select>
                        <Link to='/main'>
                        <button className='btn group flex mt-3 w-full sm:w-[20rem] h-18 md:h-10'>GO <span className='mt-1 ml-1 group-hover:animate-pulse'><FaArrowRight/>  </span>  </button>
                        </Link>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div className='bg-gray-50' id='about'>
        <Testimonial />

        </div>
        <div id='contact'>
            <Contact />
        </div>


        <Footer />
        </>
    );
}

export default Home;
