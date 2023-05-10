export default function Box() {
  return (
    <article className="flex flex-col md:w-full h-full py-6 md:p-8 p-8 bg-white md:focus-within:ring ring-purple-300 md:hover:shadow-purple md:focus-within:shadow-purple transition-all relative rounded-2xl md:shadow-sm-purple">
      <img
        src="https://animesher.com/orig/1/185/1851/18518/animesher.com_anime-aesthetic-keyboard-office-1851864.jpg"
        alt=""
        className="max-w-full md:max-w-none h-64 object-cover md:-mx-6 md:-mt-6 mb-8 rounded-xl"
      />
      <span className="flex items-center justify-between w-full text-[11px] font-[650] uppercase tracking-wider text-[#73739C]">
        <span className="truncate">By Cameren Johnson</span>
        <div className="flex-1 bg-gray-100 flex-1 h-px mx-2"></div>
        <span className="hidden xs:block">5 MIN READ</span>
      </span>
      <h1 className="font-heading text-[1.4rem] font-semibold text-navy my-4">
        Article Title
      </h1>
      <p className="text-base line-clamp-3 mb-5">lorem ipsum lorem ipsum...</p>
      <p aria-hidden="true" className="text-violet-600 font-bold mt-auto">
        Read more
      </p>
      <a href="/" className="opacity-0 absolute inset-0">
        Read more
      </a>
    </article>
  );
}
