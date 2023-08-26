'use client';
import React from 'react';
// import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import the Swiper styles and modules

// Install Swiper modules
// SwiperCore.use([Navigation, Pagination]);

const ProductItem = ({ product }: any ) => (
  <div className="flex flex-col items-center mx-auto p-4">
    <img src={product.image} alt={product.name} className="mb-2" />
    <h3 className="text-lg font-medium">{product.name}</h3>
    <p className="text-gray-500">${product.price.toFixed(2)}</p>
    <button className="px-4 py-2 mt-4 bg-black text-white rounded hover:bg-gray-500">
      Add to Cart
    </button>
  </div>
);

const Home = () => {
  const products = [
    {
          id: 1,
          name: 'Cameryn Sash Tie Dress',
          image: 'Cameryn Sash Tie Dress.png',
          price: 545,
        },
        {
          id: 2,
          name: 'Flex Sweatshirt',
          image: 'Flex Sweatshirt.png',
          price: 175,
        },
        {
          id: 3,
          name: 'Flex Push Button Bomber',
          image: 'Flex Push Button Bomber.png',
          price: 225,
        },
        {
          id: 4,
          name: 'Imperial Alpaca Hoodie',
          image: 'Imperial Alpaca Hoodie.png',
          price: 525,
        },
        {
          id: 5,
          name: 'Brushed Raglan Swearshirt',
          image: 'Brushed Raglan Swearshirt.png',
          price: 195,
        },
        {
          id: 6,
          name: 'Muscle Tank',
          image: 'Muscle Tank.png',
          price: 75,
        },
  ];

  return (
    <div className="bg-gray-100 container swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-slide-active">
      {/* Header and other code */}
      <main className="container mx-auto px-4 py-4">
        <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-blue-700">Featured Products</h2>
        <h3 className="text-center mb-5">Welcome to My E-commerce Store!</h3>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      {/* Footer and other code */}
    </div>
  );
};

export default Home;

