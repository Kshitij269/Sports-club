import React from 'react'
import { Collapse } from "flowbite";
import img1 from "../assets/altius.jpg"
const $targetEl: HTMLElement = document.getElementById('targetEl');
const $triggerEl: HTMLElement = document.getElementById('triggerEl');
const options: CollapseOptions = {
  onCollapse: () => {
      console.log('element has been collapsed')
  },
  onExpand: () => {
      console.log('element has been expanded')
  },
  onToggle: () => {
      console.log('element has been toggled')
  }
};
function Navbar() {
  return (    
<nav className="bg-black border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
    <a href="/#" className="flex items-center">
        <img src={img1} className="h-20 mr-5" alt="Flowbite Logo" />
        <span className="self-center text-white text-3xl font-semibold whitespace-nowrap dark:text-white">Altius</span>
    </a>
    
    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-black ">
        
        <li>
          <a href="/#" className="text-2xl block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 text-white " aria-current="page">Home</a>
        </li>
        
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar1" className="text-2xl flex items-center justify-between w-full py-2 pl-3 pr-4  text-white rounded md:hover:bg-transparent md:border-0  md:p-0 md:w-auto ">Members<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg></button>
            <div id="dropdownNavbar1" className="z-10 hidden font-normal bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Faculty</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Club</a>
                  </li> 
                </ul>
            </div>
        </li>

        <li>
          <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar2" className="text-2xl flex items-center justify-between w-full py-2 pl-3 pr-4  text-white rounded md:hover:bg-transparent md:border-0  md:p-0 md:w-auto ">Sports Facility<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg></button>

            <div id="dropdownNavbar2" className="z-10 hidden font-normal bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Athletics</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Football</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Cricket</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Kabbadi</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Chess</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Table Tennis</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Badminton</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Basketball</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Power Sports</a>
                  </li>
                </ul>
            </div>
        </li>

        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar3" className="text-2xl flex items-center justify-between w-full py-2 pl-3 pr-4  text-white rounded md:hover:bg-transparent md:border-0  md:p-0 md:w-auto ">Events<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg></button>

            <div id="dropdownNavbar3" className="z-10 hidden font-normal bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Athletics</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Football</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Cricket</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Kabbadi</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Chess</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Table Tennis</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Badminton</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Basketball</a>
                  </li>
                  <li>
                    <a href="/#" className="text-2xl text-white block px-4 py-2 hover:bg-gray-100 ">Power Sports</a>
                  </li>
 
                </ul>

            </div>
        </li>

        <li>
          <a href="/#" className="text-2xl text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact Us </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar;