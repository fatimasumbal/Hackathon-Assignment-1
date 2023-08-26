import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import FetchData, { KidsFetchData, MenFetchData } from "../../../sanity/lib/FetchData";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/Footer/footer";

export default async function page() {
  const data = await KidsFetchData();
//   console.log("data", data[1].title);
  return (
    <div>
        <Navbar/>
    <div className=" container flex gap-5 max-w-6xl m-auto text-black">
      {data.map((product: any, index: number) => (
        <Link
          href={`/product/${product.slug.current}`}
          className="w-1/4 border border-black p-2"
          key={index}
        >
          <img
            src={urlForImage(product.image).url()}
            alt=""
            className="w-full h-60 object-cover object-top"
          />
          <h1 className="text-3xl font-bold mt-2">{product.title}</h1>
          <h1 className="">{product.description}</h1>
          <h1 className="text-lg font-semibold">
            Category: {product.category}
          </h1>
          <h1 className="text-xl font-semibold">${product.price}</h1>
          <div>
          <button className="w-full text-center text-white bg-black hover:bg-gray-500 py-3 text-lg font-bold mt-3 ">
                  Add To Cart
                </button>
      </div>
        </Link>
      ))}
    </div>
    <div className=" mt-10">
<Footer />
</div>
    </div>
  );
}