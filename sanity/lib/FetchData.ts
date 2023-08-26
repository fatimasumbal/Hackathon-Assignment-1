import { client } from "./client"

export default async function FetchData() {
    const data = await client.fetch(`*[_type == "products"]`)
  return data
}

export  async function KidsFetchData() {
  const data = await client.fetch(`*[_type == "products" && category == "kids"]`)
return data
} 

export  async function MenFetchData() {
  const data = await client.fetch(`*[_type == "products" && category == "men"]`)
return data
} 

export  async function WomenFetchData() {
  const data = await client.fetch(`*[_type == "products" && category == "women"]`)
return data
} 