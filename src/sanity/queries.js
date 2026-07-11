import { client } from "./client";

// Home Page Queries
export async function getHomePageData() {
  return await client.fetch(`*[_type == "homePage"][0]`);
}
