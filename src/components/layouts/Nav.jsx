import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Nav({ children }) {
  return (
    <>
      <header className=" flex items-center h-16 px-4 py-2 text-white font-[550] text-sm shadow-md w-full">
        <div className="flex items-center justify-between lg:w-4/5  md:w-10/12 sm:w-11/12 mx-auto">
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
          <button
            className="btn btn-square btn-ghost inline-flex items-center"
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
