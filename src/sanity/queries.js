import { client } from "./client";

// Home Page Queries
export async function getHomePageData() {
  return await client.fetch(`*[_type == "homePage"][0]`);
}

// About Page Queries
export async function getAboutPageData() {
  return await client.fetch(`*[_type == "aboutPage"][0]{
    bio,
    background,
    skills,
    profileImage {
      alt,
      asset->{
        url
      }
    }
  }`);
}
