import Newsletter from "../../components/Newsletter/newsletter";
import Footer from "../../components/Footer/footer";
import Hero from "../../components/herosection/hero";
import Navbar from "../../components/navbar/navbar";
import Products from "../../components/products/products";
import Promotion from "../../components/promotion/promotion";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Promotion/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </>
  );
}