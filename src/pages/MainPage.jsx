import React,{useState} from 'react';
import CoursesCards from '../components/CoursesCards';
import PapersCard from '../components/PapersCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainPage = () => {
    const[search,setSearch]=useState('');

    return (
        <>
            <div className=' bg-gradient-to-t from-indigo-200 to-indigo-100'>
                <Navbar />
                <div className='m-5'>
                    {/* filters */}
                    <div className='grid md:grid-cols-4 grid-cols-3  sm:justify-items-center mb-5  p-3'>
                        <div className='flex flex-col items-center md:col-start-2 sm:items-start'>

                            <select name="" id="" className=" md:w-5/6 w-28  border bg-transparent hover:bg-indigo-50 border-gray-500  text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5">
                                <option value="default" disabled selected className='font-extralight'>
                                    Select University
                                </option>
                                <option value="">MIT</option>
                                <option value="">Stanford University</option>
                                <option value="">University of California, Berkeley</option>
                                <option value="">University of Oxford</option>
                                <option value="">University of Cambridge</option>
                                <option value="">Imperial College London</option>
                                <option value="">University of Chicago</option>
                            </select>
                        </div>
                        <div className='flex flex-col items-center sm:items-start'>

                            <select name="" id="" className=" bg-transparent border border-gray-500 hover:bg-indigo-50 text-sm rounded-lg p-2.5">
                                <option value="default" disabled selected className='font-extralight'>
                                    Date
                                </option>
                                <option value="">2021</option>
                                <option value="">2020</option>
                                <option value="">2019</option>
                                <option value="">2018</option>
                                <option value="">2017</option>
                            </select>
                        </div>
                        <div className='flex flex-col items-center sm:items-start'>

                            <select name="" id="" className="bg-transparent border hover:bg-indigo-50 border-gray-500  text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5">
                                <option value="default" disabled selected className='font-extralight'>
                                    Paper type
                                </option>
                                <option value="">Mid Term</option>
                                <option value="">Final Term</option>
                                <option value="">Quiz</option>
                                <option value="">Assignment</option>
                            </select>

                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col space-x-5'>
                        {/* Courses   */}
                        <div className=''>
                            <div className='flex items-center '>
                                {/* Course Search Bar */}
                                <div class="ml-2 mt-2">
                                    <input
                                        onChange={(e)=>setSearch(e.target.value)}
                                        type="search"
                                        class=" relative block flex-auto w-52 rounded-full border border-solid border-gray-500 bg-transparent bg-clip-padding px-3 py-[0.22rem] text-sm leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                                        placeholder="Search Course"
                                    />

                                </div>

                            </div>
                            <div className='container mt-5 grid lg:space-x-5 '>

                                <div className='course overflow-y-auto overflow-x-auto h-screen md:px-2'>
                                    {

                                        [1].map((item, index) => {
                                            return <CoursesCards key={index} search={search} />
                                        }
                                        )
                                    }



                                </div>

                            </div>
                        </div>
                        {/* Papers */}
                        <div className='papers mt-5 overflow-auto h-full grid grid-col-1 sm:grid-cols-2 gap-4 sm:gap-8 '>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                                    return <PapersCard key={index} />
                                }
                                )
                            }
                        </div>

                    </div>

                </div>
                <Footer />
            </div>

        </>
    );
};

export default MainPage;
