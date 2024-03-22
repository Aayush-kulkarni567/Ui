import React, { useState } from "react";
import CredseaLogo from "../asset/Credsea-logo.svg";
import CredseaText from "../asset/Credsea_text.svg";

function Sidebar({ onDashboardClick, onLinkClick }) {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    onLinkClick();
  };

  const handleMouseEnter = (index) => {
    if (activeLink === null) setActiveLink(index);
  };

  const handleMouseLeave = () => {
    // Keep the active link on mouse leave
  };

  return (
    <>
      {/* <div className="flex flex-col h-screen md:flex-row"> */}
      {/* Sidebar */}
      <div className=" flex flex-col w-80 bg-white text-black md:h-screen">
        {/* Sidebar Header with Image */}
        <div className="h-16 flex items-center justify-center bg-white mr-10">
          <img
            src={CredseaLogo}
            alt="Credsea Logo"
            className="h-16 w-auto mr-1 mt-5"
          />
          <img
            src={CredseaText}
            alt="Credsea Text"
            className="h-10 w-auto mt-5"
          />
        </div>

        {/* Sidebar Menu */}
        <div className="flex flex-col flex-grow mt-4 md:mt-10">
          {/* Dashboard */}
          <a
            href="#"
            className={`py-2 px-8 font-medium text-xl text-black ${
              activeLink === 0
                ? "hover:border-r-4 hover:border-blue-700 hover:border-solid hover:right-0 hover:bg-blue-200 hover:text-blue-800"
                : ""
            } my-3`}
            onClick={() => {
              handleLinkClick(0);
              onDashboardClick();
            }}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            Dashboard
          </a>

          {/* Corporate */}
          <div className="relative">
            <a
              href="#"
              className={`py-2 px-8 font-medium text-xl text-black ${
                activeLink === 1
                  ? "hover:border-r-4 hover:border-blue-700 hover:border-solid hover:right-0 hover:bg-blue-200 hover:text-blue-800 border-r-4 border-blue-700 border-solid right-0 bg-blue-200 text-blue-800"
                  : ""
              } flex justify-between items-center`}
              onClick={() => handleLinkClick(1)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              Corporate
              <span
                className={`text-xl ${
                  activeLink === 1 ? "transform rotate-90" : ""
                }`}
              >
                &#62;
              </span>
            </a>
            {activeLink === 1 && (
              <div className="relative left-0 text-left pl-12">
                <a
                  href="#"
                  className="flex justify-start items-center py-4 text-black hover:text-blue-800 border-l-2 border-slate-300"
                  onClick={() => handleLinkClick(8)}
                  onMouseEnter={() => handleMouseEnter(8)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className=" bg-slate-300 h-[2px] w-4" />
                  <span className="pl-1">DSA Agency</span>
                </a>
                <a
                  href="#"
                  className="flex justify-start items-center py-4 text-black hover:text-blue-800 border-l-2 border-slate-300"
                  onClick={() => handleLinkClick(9)}
                  onMouseEnter={() => handleMouseEnter(9)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className=" bg-slate-300 h-[2px] w-4" />
                  <span className="pl-1">Advisors</span>
                </a>
              </div>
            )}
          </div>

          {/* Products */}
          <a
            href="#"
            className={`py-2 px-8 font-medium text-xl text-black ${
              activeLink === 2
                ? "hover:border-r-4 hover:border-blue-700 hover:border-solid hover:right-0 hover:bg-blue-200 hover:text-blue-800"
                : ""
            } flex justify-between items-center my-3`}
            onClick={() => handleLinkClick(2)}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            Products
            <span
              className={`text-xl ${
                activeLink === 2 ? "transform rotate-90" : ""
              }`}
            >
              &#62;
            </span>
          </a>

          {/* Application */}
          <a
            href="#"
            className={`py-2 px-8 font-medium text-xl text-black ${
              activeLink === 3
                ? "hover:border-r-4 hover:border-blue-700 hover:border-solid hover:right-0 hover:bg-blue-200 hover:text-blue-800"
                : ""
            } flex justify-between items-center my-3`}
            onClick={() => handleLinkClick(3)}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            Application
            <span
              className={`text-xl ${
                activeLink === 3 ? "transform rotate-90" : ""
              }`}
            >
              &#62;
            </span>
          </a>

          {/* Payout */}
          <a
            href="#"
            className={`py-2 px-8 font-medium text-xl text-black ${
              activeLink === 4
                ? "hover:border-r-4 hover:border-blue-700 hover:border-solid hover:right-0 hover:bg-blue-200 hover:text-blue-800"
                : ""
            } flex justify-between items-center my-3`}
            onClick={() => handleLinkClick(4)}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            Payout
            <span
              className={`text-xl ${
                activeLink === 4 ? "transform rotate-90" : ""
              }`}
            >
              &#62;
            </span>
          </a>

          {/* SM-Accounts */}
          <a
            href="#"
            className={`py-2 px-8 font-medium text-xl text-black ${
              activeLink === 5
                ? "hover:border-r-4 hover:border-blue-700 hover:border-solid hover:right-0 hover:bg-blue-200 hover:text-blue-800"
                : ""
            } my-3`}
            onClick={() => handleLinkClick(5)}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            SM-Accounts
          </a>

          {/* Credit Reports */}
          <a
            href="#"
            className={`py-2 px-8 font-medium text-xl text-black ${
              activeLink === 6
                ? "hover:border-r-4 hover:border-blue-700 hover:border-solid hover:right-0 hover:bg-blue-200 hover:text-blue-800"
                : ""
            } my-3`}
            onClick={() => handleLinkClick(6)}
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            Credit Reports
          </a>

          {/* Billing */}
          <a
            href="#"
            className={`py-2 px-8 font-medium text-xl text-black ${
              activeLink === 7
                ? "hover:border-r-4 hover:border-blue-700 hover:border-solid hover:right-0 hover:bg-blue-200 hover:text-blue-800"
                : ""
            } my-3`}
            onClick={() => handleLinkClick(7)}
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          >
            Billing
          </a>
        </div>
      </div>
      {/* Main Content */}
      {/* </div> */}
    </>
  );
}

export default Sidebar;
