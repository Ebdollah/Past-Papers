import React, { useState,useEffect } from 'react';
import '../App.css';
import { FaChartLine, FaNewspaper, FaPlus } from 'react-icons/fa';
import UniversityModal from '../components/AddUniversityModal';
import CoursesModal from '../components/AddCoursesModal';
import PapersModal from '../components/AddPapersModal';


const App = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [uniCount, setUniCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [paperCount, setPaperCount] = useState(0);


  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  async function getUsersCount() {
    try {
      const response = await fetch("http://localhost:5000/api/getuserscount", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setUserCount(data.usersCount);
    } catch (error) {
      console.log(error);
    }
  }
   
  async function getUniversities(){ 
    try{
      const response = await fetch("http://localhost:5000/api/getuniversity", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
       const data = await response.json();
       setUniCount(data.universityCount);
      
    }catch(error){
      console.log(error);

    }
  }
  async function getPapersCount(){ 
    try{
      const response = await fetch("http://localhost:5000/api/getpaper", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
       const data = await response.json();
       setPaperCount(data.paperCount);
      
    }catch(error){
      console.log(error);

    }
  }
  async function getCoursesCount() {
    try {
      const response = await fetch("http://localhost:5000/api/getcoursescount", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setCourseCount(data.coursesCount);
      console.log(courseCount)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
  getCoursesCount();
  getUniversities();
  getUsersCount();
  getPapersCount();
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  
  
 
  return (
    <>


      <div className='bg-indigo-800 min-h-screen flex sm:flex-col flex-col-reverse items-center justify-center space-y-5'>
        <div className=" text-white">
          <button onClick={handleClick} className='group flex text-xl btn w-72 justify-between'>
            {isClicked ?
              (<>
                {"Show Stats"} <span className='ml-1 mt-1'><FaChartLine className="group-hover:animate-pulse"  /></span>
              </>) :
              (<>
                {"Add Data"} <span className='ml-1 mt-1'><FaPlus className="group-hover:animate-pulse" /></span>
              </>)
              }
          </button>
        </div>

        <div className="  w-fit flex flex-col items-center">

          <h1 className="-mb-3 md:-mb-5  text-indigo-500 text-3xl md:text-5xl lg:text-[4.9rem] font-extrabold ">
            Admin Dashboard
          </h1>

          <div className="shadow-xl bg-indigo-300 rounded-3xl p-6 sm:p-8 mb-5 w-full ">
            {/* Stats  */}
            <div className={`${isClicked ? 'hidden' : 'block' }`} >
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 ml-1">Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="p-4 bg-indigo-100 rounded-xl hover:shadow-lg">
                  <div className="font-bold text-xl md:text-2xl leading-none">{courseCount}</div>
                  <div className="mt-1 md:mt-2">Courses</div>
                </div>
                <div className="p-4 bg-indigo-100 rounded-xl hover:shadow-lg">
                  <div className="font-bold text-xl md:text-2xl leading-none">{uniCount}</div>
                  <div className="mt-1 md:mt-2">Universities</div>
                </div>
                <div className="p-4 bg-indigo-100 rounded-xl hover:shadow-lg">
                  <div className="font-bold text-xl md:text-2xl leading-none ">{userCount}</div>
                  <div className="mt-1 md:mt-2">Users Signed Up</div>
                </div>
                <div className="p-4 bg-indigo-100 rounded-xl  hover:shadow-lg">
                  <div className="font-bold text-xl md:text-2xl leading-none">{paperCount}</div>
                  <div className="mt-1 md:mt-2">Past papers available</div>
                </div>
              </div>
            </div>

            {/* Add files */}
            <div className={`${isClicked ? 'block' : 'hidden' }`} >
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 ml-1">Add Data</h2>
              <div className="grid grid-cols-1  gap-4 md:gap-5 md:text-2xl text-xl font-medium ">
              <UniversityModal />
                {/* <button className="p-5 flex justify-between bg-indigo-100 rounded-xl hover:shadow-lg hover:bg-white " >
                  <h1 className=' '>Add Past Papers</h1> 
                  <div className=" -mt-1"><FaNewspaper className='text-4xl' /> </div>
                </button> */}
                <PapersModal />
                <CoursesModal/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
