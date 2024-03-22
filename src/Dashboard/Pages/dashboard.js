import React from 'react';
import Corporate1 from '../asset/Corporate1.svg';
import Corporate from '../asset/Corporate.svg';


function Dashboard() {
    return (
        <div className="flex justify-center items-center mt-0">
            <div className="grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-gray-200 h-64 w-64 rounded-md shadow-md flex flex-col justify-center items-center bg-black relative">
                    <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs p-1">05</div>
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
                <div className="bg-gray-200 h-64 w-64 rounded-md shadow-md flex flex-col justify-center items-center bg-black relative">
                    <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs p-1">105</div>
                    <div className="absolute top-0 right-0 p-1">
                        <img src={Corporate1} alt="Corporate1" className="h-8 w-8" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-1">
                        <img src={Corporate} alt="Corporate" className="h-8 w-8" />
                    </div>
                    <p className="text-center">DSA/Agency</p>
                </div>
                {/* Card 3 */}
                <div className="bg-gray-200 h-64 w-64 rounded-md shadow-md flex flex-col justify-center items-center bg-black relative">
                    <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs p-1">2000</div>
                    <div className="absolute top-0 right-0 p-1">
                        <img src={Corporate1} alt="Corporate1" className="h-8 w-8" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-1">
                        <img src={Corporate} alt="Corporate" className="h-8 w-8" />
                    </div>
                    <p className="text-center">Advisors</p>
                </div>
                {/* Card 4 */}
                <div className="bg-gray-200 h-64 w-64 rounded-md shadow-md flex flex-col justify-center items-center bg-black relative">
                    <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs p-1">26</div>
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
