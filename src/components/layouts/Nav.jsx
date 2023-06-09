import { NavLink } from "react-router-dom";

export default function Nav({ children }) {
  return (
    <>
      <header className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20 flex items-center h-16 text-white font-[550] text-sm shadow-md sticky">
        <nav aria-label="Logo menu" className="relative z-50 flex">
          <a href="/">logo</a>
        </nav>
        <nav
          aria-label="Main menu"
          className="hidden lg:flex items-center justify-center content-center gap-y-4 flex-1 z-40 fixed inset-0 lg:static bg-gray-900 lg:bg-transparent text-base sm:text-sm"
        >
          <dl className="hidden shrink-0 lg:flex group relative ml-auto mt-3 mb-0 px-3 pt-2 pb-5 cursor-pointer"></dl>
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
      </header>
      {children}
    </>
  );
}
