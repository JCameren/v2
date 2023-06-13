import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Nav({ children }) {
  return (
    <>
      <header className=" flex items-center justify-between h-16 px-4 py-2 text-white font-[550] text-sm shadow-md">
        <div className="flex items-center w-80 md:w-85 sm: w-90">
        <nav aria-label="Logo menu" className="relative z-50 flex">
          <NavLink to="/" className="btn btn-ghost"><h1>crimes against humanity</h1></NavLink>
        </nav>
        <nav>
          <SearchBar />
        </nav>
        <nav
          aria-label="Main menu"
          className=""
        >
          {/* <dl className="hidden shrink-0 lg:flex group relative ml-auto mt-3 mb-0 px-3 pt-2 pb-5 cursor-pointer"></dl> */}
          <button
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </nav>
        </div>
        
        
        
      </header>
      {children}
    </>
  );
}
