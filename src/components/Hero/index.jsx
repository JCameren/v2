export default function Hero() {
  return (
    <section className="bg-gray-900 bg-gradient-to-b from-gray-900 to-navy relative -mt-24 pt-40 pb-20 md:py-36 text-white text-shadow-purple">
      <img
        src={"https://naniwallpaper.com/files/wallpapers/anime-room/3-anime%20room-1080x1920.jpg"}
        alt="hero banner"
        className="absolute left-0 top-0 w-full h-full object-cover"
      />
      <div className="group container mx-auto px-4 sm:px-6 lg:px-20 relative md:focus-within:ring ring-blue-300 transition-all rounded-2xl py-1 -mb-7">
        <div className="absolute -inset-8 rounded-full"></div>
        <article className="relative lg:grid grid-cols-2 gap-5 items-stretch md:px-8 lg:px-0">
          <div className="self-center lg:pr-16">
            <span className="flex items-center justify-between w-full mb-6 text-[11px] font-bold uppercase tracking-wider text-white text-opacity-70">
              By Cameren Johnson
              <div className="flex-1 bg-white bg-opacity-10 flex-1 h-px mx-2"></div>
            </span>
            <h1 className="font-heading mb-5 leading-tight lg:leading-tight text-4xl">Article Title</h1>
            <p className="line-clamp-3 w-full max-w-xl text-lg text-white text-opacity-70 mb-7">lorem ipsum lorem ipsum...</p>
          </div>
          <img src={"https://marketplace.canva.com/EAFEGePhu5Y/1/0/1600w/canva-dark-blue-lonely-anime-desktop-wallpaper-QQV8JjVX5rw.jpg"} alt="" className="rounded-2xl object-cover hidden lg:flex"/>
        </article>
      </div>
    </section>
  );
}
