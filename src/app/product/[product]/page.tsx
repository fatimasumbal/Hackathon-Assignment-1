import React from "react";
import FetchData from "../../../../sanity/lib/FetchData";
import ProductDetails from "../../../../components/ProductDetails";
import Navbar from "../../../../components/navbar/navbar";
import Footer from '../../../../components/Footer/footer';
import { F } from "drizzle-orm/query-promise.d-31db3408";

export async function generateStaticParams() {
  const data = await FetchData();
  return data.map((item: any) => ({
    product: item.slug.current,
  }));
}

export default async function page({ params }: { params: any }) {
  const data = await FetchData();
  const filteredData = data.find(
    (item: any) => item.slug.current == params.product
  );

  return (
    <div>
    <Navbar/>
  <ProductDetails filteredData={filteredData} />
  <Footer/>
    </div>
  );
}