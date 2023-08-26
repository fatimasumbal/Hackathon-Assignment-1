import Image from "next/image"
import {BiLogoFacebookSquare, BiLogoInstagram, BiLogoTwitter} from 'react-icons/bi'
import { Separator } from "./../ui/separator"

const Footer = () => {
return (
<div className = "container"> 

<div className = "flex space-x-24 mb-20">

<div className = "ml-24 mt-10 mb-10">

<Image src = "/dinoLogo.png" alt = 'Logo' height ={200}  width = {200}/>
<div className = "mt-8 text-justify text-lg text-gray-500">
Small, artisan label that offers a <br/>thoughtfully curated collection of high <br/>quality everyday essentials made.
</div>
<div className = "flex space-x-6 mt-8 text-4xl">
    <BiLogoFacebookSquare/>
    <BiLogoInstagram/>
    <BiLogoTwitter/>
</div>

</div>
<div><Separator orientation="vertical"/></div>

<div>

<h1 className = "mt-10 font-extrabold text-2xl text-gray-500">Company</h1>
<p className = "mt-3 text-lg text-gray-500">About</p>
<p className = "mt-3 text-lg text-gray-500">Terms of Use</p>
<p className = "mt-3 text-lg text-gray-500">Privacy Policy</p>
<p className = "mt-3 text-lg text-gray-500">How it Works</p>
<p className = "mt-3 text-lg text-gray-500">Contact Us</p>

</div>


<div>

<h1 className = "mt-10 font-extrabold text-2xl text-gray-500">Support</h1>
<p className = "mt-3 text-lg text-gray-500">Support Carrer</p>
<p className = "mt-3 text-lg text-gray-500">24h Service</p>
<p className = "mt-3 text-lg text-gray-500">Quick Chat</p>

</div>

<div>

<h1 className = "mt-10 font-extrabold text-2xl text-gray-500">Contact</h1>
<p className = "mt-3 text-lg text-gray-500">Whatsapp</p>
<p className = "mt-3 text-lg text-gray-500">Support 24h</p>

</div>



</div>
<div className=""><Separator orientation="horizontal" /></div>
<br/>

<div className = "text-lg grid grid-cols-3 gap-8 space-x-24 ml-24 mb-10">

<p className = "text-gray-500">Copyright © 2023 <br/>Dine Market</p>
<p className = "text-gray-500">Design by. <br/><span className = "font-bold text-black">SumbalFatima</span></p>
<p className = "text-gray-500">Code by.<span className ="font-bold text-black"> Sumbal <br/> on github</span></p>

</div>

</div>

)
};

export default Footer;