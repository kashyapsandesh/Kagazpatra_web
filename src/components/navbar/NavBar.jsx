import React from "react";
import MainLogo from "../../assets/mainlogo.png";

function NavBar() {
  const navStyle = {
    position: "sticky",
    top: "0",
    zIndex: "1000", // You can adjust this value based on your design
  };
  return (
    <nav className="bg-pink-500 p-4" style={navStyle}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">
          <img
            src={MainLogo}
            alt="MainLogo "
            width={150}
            height={150}
            color="white"
          />
        </a>

        <ul className="flex space-x-12">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 text-gray-800 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:bg-white focus:ring focus:border-blue-300"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold px-4 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-300">
            Login
          </button>
          <button className="bg-blue-500 text-white hover:bg-blue-600 text-sm font-semibold px-4 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-300">
            Signup
          </button>
        </div>

        <div className="absolute top-4 right-4">
          <button
            id="darkModeToggle"
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 4a6 6 0 0 0 0 12a6 6 0 0 0 0-12z"
              />
              <path
                fillRule="evenodd"
                d="M10 18a7.973 7.973 0 0 1-5.657-2.343A7.973 7.973 0 0 1 2 10a7.973 7.973 0 0 1 2.343-5.657A7.973 7.973 0 0 1 10 2a7.973 7.973 0 0 1 5.657 2.343A7.973 7.973 0 0 1 18 10a7.973 7.973 0 0 1-2.343 5.657A7.973 7.973 0 0 1 10 18zm0-16a8.03 8.03 0 0 0-5.657 2.343A8.03 8.03 0 0 0 2 10a8.03 8.03 0 0 0 2.343 5.657A8.03 8.03 0 0 0 10 18a8.03 8.03 0 0 0 5.657-2.343A8.03 8.03 0 0 0 18 10a8.03 8.03 0 0 0-2.343-5.657A8.03 8.03 0 0 0 10 2z"
              />
            </svg>
          </button>
        </div>

        <div className="flex space-x-4 items-center">
          <a href="#" className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </a>
          <div className="relative group">
            <a href="#" className="text-white group-hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8-3.5817-8-8-8zm0 0v-8"
                />
              </svg>
            </a>
            <span className="absolute bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center -top-1 -right-1">
              1
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            color="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
