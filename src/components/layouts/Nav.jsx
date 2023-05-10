export default function Nav({ children }) {
  const tabs = [
    {
      tab: "Projects",
      href: "/projects",
    },
    {
      tab: "Blog",
      href: "/blog",
    },
  ];
  return (
    <>
      <header className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20 flex items-center h-24 text-white font-[550] text-sm">
        <nav aria-label="Logo menu" className="relative z-50 flex">
          <a href="/">logo</a>
        </nav>
        <nav
          aria-label="Main menu"
          className="hidden lg:flex items-center justify-center content-center gap-y-4 flex-1 z-40 fixed inset-0 lg:static bg-gray-900 lg:bg-transparent text-base sm:text-sm"
        >
          <dl className="hidden shrink-0 lg:flex group relative ml-auto mt-3 mb-0 px-3 pt-2 pb-5 cursor-pointer"></dl>
          <a
            href="/"
            className="text-center mx-auto lg:mx-3 transition-colors hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="/"
            className="text-center mx-auto lg:mx-3 transition-colors hover:text-violet-400"
          >
            Projects
          </a>
          <a
            href="/"
            className="text-center mx-auto lg:mx-3 transition-colors hover:text-violet-400"
          >
            Projects
          </a>
        </nav>
      </header>
      {children}
    </>
  );
}
