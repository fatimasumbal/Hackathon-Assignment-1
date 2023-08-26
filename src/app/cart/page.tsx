import CartItems from '../../../components/CartItems';
import React from 'react';
import Navbar from '../../../components/navbar/navbar';
import Footer from '../../../components/Footer/footer';


export default function page() {
  return (
    <div>
<Navbar/>
    <CartItems />
<Footer/>
    </div>
  )
}