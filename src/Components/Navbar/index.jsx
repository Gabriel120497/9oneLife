import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-5 bg-blue-500">
        <h1 className="text-3xl text-white">Logo</h1>
        <div className="">
          <button
            type="button"
            className="md:hidden"
            //onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="menu w-6 h-6 text-white"
            >
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="hidden md:flex">
            <a href="#" className="text-white mr-4">
              Home
            </a>
            <a href="#" className="text-white mr-4">
              Appointments
            </a>
            <a href="#" className="text-white mr-4">
              Hospitals
            </a>
            <a href="#" className="text-white">
              Drivers
            </a>
          </div>
        </div>
        <div
          className={`fixed  top-0 right-0 w-64 h-full bg-blue-500 transform transition-transform duration-200 ease-in-out md:hidden text-white`}
        >
          <button
            //onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 m-2"
          >
            Close x
          </button>
          <div className="p-4 ">
            <a href="#" className="block mb-2">
              Home
            </a>
            <a href="#" className="block mb-2">
              Appointments
            </a>
            <a href="#" className="block mb-2">
              Hospitals
            </a>
            <a href="#" className="block mb-2">
              Drivers
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
