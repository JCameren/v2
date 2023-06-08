import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "./sanityClient"

const urlBuilder = imageUrlBuilder(sanityClient)
const urlFor = (source) => urlBuilder.image(source)

export default urlFor