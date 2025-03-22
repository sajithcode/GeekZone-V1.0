import React, {useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 border-gray-200">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto px-10">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
  <img 
    src="/Images/GZ-logo-1.png" 
    className="h-20 scale-150 object-contain" 
    alt="Logo" 
  />
</Link>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default" 
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-neutral-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link to="#" className="block py-2 px-3 text-white bg-neutral-700 rounded-sm md:bg-transparent md:text-[#4FB777] md:p-0">Home</Link>
            </li>
            <li>
              <Link to="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-[#4FB777] md:p-0">Timeline</Link>
            </li>
            <li>
              <Link to="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-[#4FB777] md:p-0">Events</Link>
            </li>
            <li>
              <Link to="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-[#4FB777] md:p-0">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
