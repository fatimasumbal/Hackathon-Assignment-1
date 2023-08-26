import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

import Image from "next/image";

const Hero = () => {
    return (

        <div className="container mx-auto"> 
        <span className= "mx-12 bborder-dotted border-2 border-grey-600  bg-red-400  space-x-2">Sale70%</span>
      <div className="flex container mx-auto">

        <div className="">
        <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-20">
          An Industrial <br/>Take on <br/> Streetwear
        </h1>
        
        <p className="leading-7 text-2xl [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can <br/>beat your outfit as long as you wear <br/>
          Dine outfits.
        </p>
        
        <Button className="m-7 mt-12 p-7 ">
        <ShoppingCart className="mr-2 h-5 w-5" /> Start <br/>Shopping
      </Button>

      <div className="flex space-x-5"> 
      <Image className=""
      src="/bazaar.png" 
      width={120}
      height={100}
      alt="Bazaar Logo"
    />
<Image className=""
      src="/bustle.png" 
      width={120}
      height={100}
      alt="Bustle Logo"
    />
    <Image className=""
      src="/vercase.png" 
      width={120}
      height={100}
      alt="Vercase Logo"
    />
    <Image className=""
      src="/instyle.png" 
      width={120}
      height={100}
      alt="Instyle Logo"
    />
      </div>
      </div>

      <Image className=""
      src="/header.png"
      width={500}
      height={500}
      alt="Girl Model"
    />
    </div>
    </div>

    )}

    export default Hero;