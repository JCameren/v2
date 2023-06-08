import { createClient } from "@sanity/client";

const sanityClient = createClient({
    projectId: process.env.REACT_APP_PROJECTID, // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
    apiVersion: "2023-05-03",
    useCdn: true,
  });

export default sanityClient