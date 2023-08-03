import React from 'react';
// C:/Users/Ebdollah/Documents/react-pro/pastpapers
function Home() {
    return (
        <div className='bg-[#0a254d] text-white w-full h-[730px] lg:h-[600px]'>
            <div className='mx-6 sm:mx-10 px-8 flex flex-col justify-center h-full'>
                <h1 className='text-4xl md:text-6xl text-center md:text-left mb-4 '>
                    Your One Place Repo for
                    <br className='hidden md:block' />
                    All Your Past Papers
                </h1>
                <h2 className='text-center md:text-left text-sm md:text-base'>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
                </h2>
                <div className='mt-7 flex justify-center md:justify-start'>
                    <div>
                        <label htmlFor='countries' className='block text-2xl md:text-sm font-medium text-gray-300'>
                            Select your University
                        </label>
                        <select
                            id='countries'
                            className='bg-gray-50 border mt-3 w-full sm:w-[20rem] h-18 md:h-10 border-gray-300 text-gray-900 text-lg md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        >
                            <option value='US'>FAST</option>
                            <option value='CA'>UCP</option>
                            <option value='FR'>ITU</option>
                            <option value='DE'>UMT</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
