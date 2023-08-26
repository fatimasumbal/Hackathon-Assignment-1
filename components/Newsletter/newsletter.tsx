import Image from "next/image"


const Newsletter = () => {
return (
<div className = "container"> 

<div className = "">

<section className='container content-center text-center space-x-20 ml-24 mb-4 mt-24'>

<span className = "bg-clip-text font-extrabold text-gray-200 text-9xl">Newsletter</span>

<div className = "mb-2 -translate-y-5/6">
<div className = "top-3/4 left-1/5 transform -translate-x-1/5 -translate-y-3/4">
<h1 className= "font-bold text-4xl">Subscribe Our Newsletter</h1>
<p className= "px-8 mb-7 mt-7">Get the latest information and promo offers directly</p>
<form className = "space-x-2 px-9">
    <input className = "px-3 py-1 bborder-dotted border-2 border-grey-600" type = "email" placeholder="Input Email Address"/>
    <button className = " px-3 py-1 bborder-dotted border-2 bg-black text-white font-bold" type = "submit" >Get Started</button>
</form>
</div>
</div>

</section>

</div>

</div>

)
};
export default Newsletter;