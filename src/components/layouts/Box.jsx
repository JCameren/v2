import { NavLink } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url"
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.REACT_APP_PROJECTID, // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2023-05-03",
  useCdn: true,
});

const builder = imageUrlBuilder(client)
const urlFor = (source) => builder.image(source)

export default function Box({ slug, description, title, image }) {

  return (
    <article className=" shadow-md flex flex-col md:w-full h-full overflow-hidden bg-base-200 md:focus-within:ring  hover:ring ring-blue-300 md:hover:shadow-purple md:focus-within:shadow-purple transition-all relative rounded-2xl md:shadow-sm-purple">
      <img
        src={urlFor(image)}
        alt=""
        className="max-w-full md:max-w-none h-64 object-cover md:-mx-6 md:-mt-6 mb-8 rounded-xl"
      />
      <span className="flex items-center justify-between w-full text-[11px] font-[650] uppercase tracking-wider text-[#73739C] px-8">
        <span className="truncate">By Cameren</span>
        <div className="flex-1 bg-gray-100 h-px mx-2"></div>
        <span className="hidden xs:block">5 MIN READ</span>
      </span>
      <h1 className="font-heading text-[1.4rem] font-semibold text-navy my-4 px-8">
        {title}
      </h1>
      <p className="text-base line-clamp-3 mb-5 px-8">{description}</p>
      <p aria-hidden="true" className="text-blue-600 font-bold mt-auto mb-1 px-8">
        Read more
      </p>
      <NavLink to={`/projects/${slug}`} className="opacity-0 absolute inset-0">
        Read more
      </NavLink>
    </article>
    
/* <article to={`/projects/${slug}`} className="card w- bg-base-200 shadow-xl">
  <figure><img src={urlFor(image)} alt="article banner" /></figure>
  <div className="card-body">
    <h2 className="">{title}</h2>
    <p className="prose">{description}</p>
    <div className="card-actions justify-end">
      <NavLink className="btn btn-primary prose" to={`/projects/${slug}`}>Read More</NavLink>
    </div>
  </div>
</article> */

  );
}
