import React, { useState } from "react";
import swal from "sweetalert2";
import { FaBook } from "react-icons/fa";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";


function AddPapersModal() {
    const [value, setValue] = useState({ papername: '', paperyear: '', paperimage: '', papertype: '',paperuni: '' });
    const [showModal, setShowModal] = useState(false);

    if (showModal === false) {
        value.coursename = "";
        value.coursecode = "";
        value.coursedept = "";
        value.courseyear = "";
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/api/addpaper", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(value),
          });
          const data = await response.json();
          if (data.success) {
            swal.fire({
              title: "Success",
              text: "Paper added successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
    
            setShowModal(false);
          } else {
            swal.fire({
              title: "Error",
              text: "Paper already exists",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      

  return (
    <div>
        {/* <!-- Button trigger modal --> */}
      <TERipple rippleColor="white" className="w-full cursor-pointer">
        <div
          onClick={() => setShowModal(true)}
          className="w-full p-5 flex justify-between bg-indigo-100 rounded-xl hover:shadow-lg hover:bg-white"
        >
          <h1 className=" ">Add Paper</h1>
          <div className=" -mt-1">
            <FaBook className="text-4xl" />
          </div>
        </div>
      </TERipple>

      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal} className="">
        <TEModalDialog>
          <TEModalContent className="">
            <TEModalHeader className="bg-indigo-100">
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800">
                Add Paper
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody className="bg-indigo-100">
              <div>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Paper Name
                  </label>
                  <input
                    value={value.papername}
                    onChange={(e) => {
                      setValue({ ...value, papername: e.target.value });
                    }}
                    type="text"
                    className="block w-full rounded border border-solid border-neutral-500 bg-transparent  p-2  text-base  focus:border-primary focus:pb-[0.625rem]   focus:outline-none "
                    placeholder=""
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Paper Year
                  </label>
                  <input
                    value={value.paperyear}
                    onChange={(e) => {
                      setValue({ ...value, paperyear: e.target.value });
                    }}
                    type="text"
                    className="block w-full rounded border border-solid border-neutral-500 bg-transparent  p-2  text-base  focus:border-primary focus:pb-[0.625rem]   focus:outline-none "
                    placeholder=""
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Paper Image URL
                  </label>
                  <input
                    value={value.paperimage}
                    onChange={(e) => {
                      setValue({ ...value, paperimage: e.target.value });
                    }}
                    type="text"
                    className="block w-full rounded border border-solid border-neutral-500 bg-transparent  p-2  text-base  focus:border-primary focus:pb-[0.625rem]   focus:outline-none "
                    placeholder=""
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Paper type
                  </label>
                  <input
                    value={value.papertype}
                    onChange={(e) => {
                      setValue({ ...value, papertype: e.target.value });
                    }}
                    type="text"
                    className="block w-full rounded border border-solid border-neutral-500 bg-transparent  p-2  text-base  focus:border-primary focus:pb-[0.625rem]   focus:outline-none "
                    placeholder=""
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium text-gray-700">
                    Paper University
                  </label>
                  <input
                    value={value.paperuni}
                    onChange={(e) => {
                      setValue({ ...value, paperuni: e.target.value });
                    }}
                    type="text"
                    className="block w-full rounded border border-solid border-neutral-500 bg-transparent  p-2  text-base  focus:border-primary focus:pb-[0.625rem]   focus:outline-none "
                    placeholder=""
                  />
                </div>
              </div>
            </TEModalBody>
            <TEModalFooter className="bg-indigo-100">
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-gray-300 px-4 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="ml-1 btn text-sm"
                >
                  ADD
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  )
}

export default AddPapersModal