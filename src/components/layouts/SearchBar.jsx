import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { articleActions } from "../../store/articles/slice";
import { search } from "../../store/articles/thunks";

export default function SearchBar() {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const query = useSelector((state) => state.articles.query)
  const queriedArticles = useSelector((state) => state.articles.queriedArticles)

  const handleInputChange = (e) => {
    const { value } = e.target
    dispatch(articleActions.setQuery(value))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchParams = new URLSearchParams(location.search)
    searchParams.set('query', query)
    dispatch(search(query))
    navigate(`/articles?${searchParams.toString()}`)
    dispatch(articleActions.setQuery(''))
  }

  useEffect(() => {
    console.log("search results", queriedArticles)
  }, [queriedArticles])
  

  return (
    <form onSubmit={handleSubmit}>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-80 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          value={query}
          onChange={handleInputChange}
          required
        />
        <button
          type="submit"
          class="btn btn-primary absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}
