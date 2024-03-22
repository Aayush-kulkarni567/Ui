import React from "react";
import Corporate1 from "../asset/Corporate1.svg";
import Corporate from "../asset/Corporate.svg";

function Dashboard({ toggleSideBard }) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-start bg-red-300 px-4">
      <div>
        <button onClick={() => toggleSideBard()}>BUTTON</button>
      </div>
      <div className="h-full w-full py-24">
        <h1 className="font-bold text-3xl">CREDSEA</h1>
        <h1 className="font-bold text-3xl">CONSOLE</h1>
      </div>
      <div className=" w-full flex justify-evenly">
        {/* FIRST CARD */}
        <div className="relative bg-gray-200 h-48 w-64 bg-red-400 rounded-2xl shadow-xl flex flex-col justify-center items-center">
          <div className=" absolute top-0 left-0 w-full h-1/4 flex justify-between items-start">
            <div className="relative flex justify-center items-center">
              <img src={Corporate1} alt="Corporate1" className="h-full w-full" />
              <img src={Corporate} alt="Corporate1" className="absolute h-8 w-8" />
            </div>
            <div className=" w-full text-left pl-4 font-bold my-auto text-blue-900">Corporate</div>
          </div>
          <div className="w-full h-1/2">
            <span>05</span>
          </div>
        </div>

        {/* 
        

        */}
        {/* Card 1 */}
        <div className="bg-gray-200 h-48 w-64 rounded-md shadow-md flex flex-col justify-center items-center bg-black relative">
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs p-1">
            05
          </div>
          <div className="absolute top-0 right-0 p-1">
            <img src={Corporate1} alt="Corporate1" className="h-8 w-8" />
            <img src={Corporate} alt="Corporate" className="h-8 w-8" />
          </div>
          <div className="absolute bottom-0 left-0 p-1">
            <img src={Corporate} alt="Corporate" className="h-8 w-8" />
          </div>
          <p className="text-center">Corporate</p>
        </div>
        {/* Card 2 */}
        <div className="bg-gray-200 h-48 w-64 rounded-md shadow-md flex flex-col justify-center items-center bg-black relative">
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs p-1">
            105
          </div>
          <div className="absolute top-0 right-0 p-1">
            <img src={Corporate1} alt="Corporate1" className="h-8 w-8" />
          </div>
          <div className="absolute bottom-0 left-0 p-1">
            <img src={Corporate} alt="Corporate" className="h-8 w-8" />
          </div>
          <p className="text-center">DSA/Agency</p>
        </div>
        {/* Card 3 */}
        <div className="bg-gray-200 h-48 w-64 rounded-md shadow-md flex flex-col justify-center items-center bg-black relative">
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs p-1">
            2000
          </div>
          <div className="absolute top-0 right-0 p-1">
            <img src={Corporate1} alt="Corporate1" className="h-8 w-8" />
          </div>
          <div className="absolute bottom-0 left-0 p-1">
            <img src={Corporate} alt="Corporate" className="h-8 w-8" />
          </div>
          <p className="text-center">Advisors</p>
        </div>
        {/* Card 4 */}
        <div className="bg-gray-200 h-48 w-64 rounded-md shadow-md flex flex-col justify-center items-center bg-black relative">
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs p-1">
            26
          </div>
          <div className="absolute top-0 right-0 p-1">
            <img src={Corporate1} alt="Corporate1" className="h-8 w-8" />
          </div>
          <div className="absolute bottom-0 left-0 p-1">
            <img src={Corporate} alt="Corporate" className="h-8 w-8" />
          </div>
          <p className="text-center">SM-Accounts</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
