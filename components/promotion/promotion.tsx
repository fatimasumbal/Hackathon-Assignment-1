
import Image from 'next/image';

const Promotion = () => {
  return (
    <section className='event-container'>
      
          <div className='container mx-auto mb-12'>
         <h2 className = 'text-2xl font-bold mb-4 mt-12 text-center text-blue-700'><span>PROMOTIONS</span></h2>
        <h3 className = 'text-center mb-5'>Our Promotions Events</h3>
      
        <div className = 'flex flex-row'>
          
    <div className="relative mx-10">
      <Image
        src="/image1.png" // Replace with the actual image URL
        alt="Summer Promotion"
        width={300}
        height={100}
      />
      <div className="absolute top-1/2 left-1/5 transform -translate-x-1/7 -translate-y-1/2 text-left">
        <p className="mx-2 text-4xl font-bold text-black">GET UP TO 60%</p>
        <p className="mx-2 text-2xl font-medium text-black">For the summer season</p>
      </div>
    </div>
    <div className="relative flex mx-12">
      <Image
        src="/image2.png" // Replace with the actual image URL
        alt="Summer Promotion"
        width={300}
        height={100}
      />
      <div className="absolute top-1/2 left-1/5 transform -translate-x-1/7 -translate-y-1/2 text-left">
        <p className="mx-3 text-4xl font-bold text-white">GET 30% Off</p>
        <p className="mx-4 text-2xl font-medium text-white">USE PROMO CODE <br/><span className = 'text-black font-bold'>DINEWEEKENDSALE</span></p>
      </div>
    </div>
    
    <div className="flex mx-12 mr-12">
    <div className="relative">
      <Image
        src="/image3.png" // Replace with the actual image URL
        alt="Summer Promotion"
        width={300}
        height={500}
      />
    </div>
    <div className="flex flex-col justify-center ml-4 mt-24 absolute">
      <h2 className="text-3xl font-bold mt-12 mx-5">Flex Sweatshirt</h2>
    <div className="flex items-center">
      <span className="mr-2 text-2xl line-through mx-5">$100.00</span>
      <span className = 'text-2xl mx-3'>$75.00</span>
    </div>
    </div>
  </div>
  </div>
    </div>
  </section>
  );
};

export default Promotion;
