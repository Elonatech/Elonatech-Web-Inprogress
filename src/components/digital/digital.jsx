import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide  } from 'swiper/react';

// Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';

import business from './captions/Solutions-Phoaato.webp';
import  disruptive from './captions/Solutions-Photo-1.webp';
import master from './captions/Master-Muffler.webp';
import quoteRight from './captions/quote-right.webp';
import quoteLeft from './captions/quote-left.webp';

import security from './captions/Security-National.webp';
import revenue from './captions/Revenue-Cycle-Coding-Strategies.webp';
import ptc from './captions/PTC.webp';
import liquid from './captions/Liquidfish.webp';

import star from './captions/Star-Rating-Icon.webp';
import employee from './captions/Employees-Icon.webp';
import shake from './captions/90.webp';
import inc from './captions/Inc-500-1.webp';
import ad from './captions/Ad-Spend-Icon.webp';

// ads 

import seo from './captions/Ads/SEO-Icon-2.webp';
import google from './captions/Ads/Google-Ads-Icon-2.webp';
import social from './captions/Ads/Social-Media-Ads-Icon-2.webp';
import youtube from './captions/Ads/YouTube-Ads-Icon-2.webp';
import amazon from './captions/Ads/Amazon-Icon-2.webp';
import facebook from './captions/Ads/Facebook-Ads-Icon-2.webp';
import ticktok from './captions/Ads/TikTok-Ads-Icon-1.webp';
import linkedin from './captions/Ads/Linkedin-Ads-Icon-1.webp';
import snap from './captions/Ads/Snapchat-Ads-Icon-1.webp'; 
import bing from './captions/Ads/Bing-Ads-Icon-1.webp';
import twitter from './captions/Ads/Twitter-Ads-Icon-1.webp';
import shopping from './captions/Ads/Google-Shopping-Icon-1.webp';
import motion from './captions/Ads/Motion-Ads-Icon-1.webp';
import landing from './captions/Ads/Landing-Pages-Icon-1.webp';
import email from './captions/Ads/Email-Management-Icon-1.webp'
import lead from './captions/Ads/Lead-Nurture-Icon-1.webp'
import creative from './captions/Ads/Creative-Strategy-Icon-1.webp'
import site from './captions/Ads/Website-Optimization-Icon-1 (1).webp'

import Gen from './captions/Ads/Lead-Gen-Marketing2.webp';
import commerce from './captions/Ads/Ecommerce-Marketing.webp';

import './digital.css'


const Digital = () => {
    return (

<>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"10px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Digital Marketing</h2>
   <h5 class=" mt-4 text-white text-center">Controls Access Physically and Virtually Except with Authentication Credentials</h5>
   <p class="lead text-white text-center">An essential element of security that determines who is allowed to access certain data, apps, and resources and in what circumstances</p>
 </div>
 </div>

{/* business */}
<div className="container mt-5 mb-5">
  <div className="row g-0">
    <div className="col-md-5">
      <div className="card border-0">
        <img src={business} alt="" />
      </div>
    </div>
    <div className="col-md-7 "  style={{background:"#f8f8f8"}}>
      <div className="p-3">
        <h2 className="fw-bold pt-5">We help good businesses become GREAT.</h2>
        <div className="mt-4" style={{  width:"90px", height:"3px" , background:"#f00"}}></div>
        <p className="pt-3 pb-5 fs-5" style={{textAlign:"justify"}}>
        We are your long-term growth partner focused on connecting your company's "why" to your target market and building meaningful 
        connections with them. Identifying and connecting with your ICP allows us to create marketing campaigns that speak directly
         to the needs and desires of your ideal customers, creating a win/win/win.
        </p>
      </div>
    </div>
  </div>
</div>

{/* disruptive */}
<div className="container mt-5 mb-5">
  <div className="row g-0">
    <div className="col-md-7 "  style={{background:"#f8f8f8"}}>
      <div className="card border-0" style={{background:"#f8f8f8"}}>
      <div className="p-3 text-end">
    <h2 className=' fw-bold pt-5'>The Disruptive Difference</h2>

    <div className='d-flex justify-content-end'>
    <div className="mt-4" style={{  width:"90px", height:"3px" ,margin:"" , background:"#f00"}}></div>
    </div>
        <p className="pt-3 pb-5 fs-5" style={{textAlign:"justify"}}>
        We have a passion for people fueled by purpose. The brands and organizations we work with are supported to be world-changers by working with our innovative and empowered marketers. 
        Businesses can truly make a positive impact by bringing unique solutions to the world. We've built an environment where employees and clients are empowered to learn, grow, and win.
        </p>
      </div>
    </div>
    </div>
    <div className="col-md-5">
      <div className="card border-0">
        <img src={disruptive} alt="" />
      </div>
    </div>
  </div>
</div>

{/* carousel */}
<div className="container-fluid"  style={{background:"#f8f8f8"}}>
<Swiper  
modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} 
spaceBetween={50} 
slidesPerView={1}
pagination={true}
autoplay={{delay: 3000}}

>

<SwiperSlide>
<div className="container mb-" >
  <div className="row ">
    <div className="col-md-4" >
      <div className=" mt-5">
        <div className="text-center">
       <img src={master} alt="" />
        </div>
      </div>
    </div>
    
    <div className="col-md-8">
      <div className="d-flex pt-5">
      <img src={quoteLeft} className='img-fluid   me-5' style={{height:"3rem"}}   alt="" /> 
      
      <h1 className=' fw-bold pt-2'>They'll move mountains for us.</h1>
     </div>

      <p className="pt-3 pb-3 fs-5" style={{textAlign:"justify"}}>
      We wouldn't be where we are today without their help. We're definitely not their biggest client, but they'll move mountains for us if they need to. 
      The way they value relationships speaks volumes.
      </p>

      <div className='d-flex justify-content-between pb-5'>
        <p className='fs-5 text-uppercase pt-3 '>
        —Tyler King, Master Muffler Shops, Inc.
        </p>
        <img src={quoteRight} className='img-fluid' style={{height:"3rem"}}   alt="" />
      </div>

    </div>
  </div>
</div> 

</SwiperSlide>

<SwiperSlide>
<div className="container mb-" >
  <div className="row ">
    <div className="col-md-4">
      <div className=" mt-5">
        <div className="text-center">
       <img src={security} alt="" />
        </div>
      </div>
    </div>

    <div className="col-md-8">
      <div className="d-flex pt-5">
      <img src={quoteLeft} className='img-fluid   me-5' style={{height:"3rem"}}   alt="" /> 
      
      <h1 className=' fw-bold pt-2'>A great partner to us.</h1>
     </div>

      <p className="pt-3 pb-3 fs-5" style={{textAlign:"justify"}}>
      They have been a great partner to us. Overall they're are great listeners amd just great people. Disruptive has taken a lot of time to understand our business and its needs.
      </p>

      <div className='d-flex justify-content-between pb-5'>
        <p className='fs-5 text-uppercase pt-3 '>
        —Mike Varanakis, SECURITY National
        </p>
        <img src={quoteRight} className='img-fluid' style={{height:"3rem"}}   alt="" />
      </div>

    </div>
  </div>
</div> 

</SwiperSlide>


<SwiperSlide>
<div className="container mb-" >
  <div className="row ">
    <div className="col-md-4">
      <div className=" mt-5">
        <div className="text-center">
       <img src={revenue} alt="" />
        </div>
      </div>
    </div>

    <div className="col-md-8" >
      <div className="d-flex pt-5">
      <img src={quoteLeft} className='img-fluid   me-5' style={{height:"3rem"}}   alt="" /> 
      
      <h1 className=' fw-bold pt-2'>Not a typical agency.</h1>
     </div>

      <p className="pt-3 pb-3 fs-5" style={{textAlign:"justify"}}>
      Disruptive doesn't act like a 'typical' agency. They get to know your business, remain accessible, and are humble in learning together for collaborate success.
      </p>

      <div className='d-flex justify-content-between pb-5'>
        <p className='fs-5 text-uppercase pt-3 '>
        —Cameron Dejong, Revenue Cycling Coding Strategies
        </p>
        <img src={quoteRight} className='img-fluid' style={{height:"3rem"}}   alt="" />
      </div>

    </div>
  </div>
</div> 

</SwiperSlide>


<SwiperSlide>
<div className="container mb-" >
  <div className="row ">
    <div className="col-md-4">
      <div className=" mt-5">
        <div className="text-center">
       <img src={liquid} alt="" />
        </div>
      </div>
    </div>

    <div className="col-md-8" >
      <div className="d-flex pt-5">
      <img src={quoteLeft} className='img-fluid   me-5' style={{height:"3rem"}}   alt="" /> 
      
      <h1 className=' fw-bold pt-2'>You can rely on their guidance.</h1>
     </div>

      <p className="pt-3 pb-3 fs-5" style={{textAlign:"justify"}}>
      The expertise of the specialists is top-notch. They know their capabilities and you can rely on their guidance.
      </p>

      <div className='d-flex justify-content-between pb-5'>
        <p className='fs-5 text-uppercase pt-3 '>
        —John Huggins, LIQUIDFISH
        </p>
        <img src={quoteRight} className='img-fluid' style={{height:"3rem"}}   alt="" />
      </div>

    </div>
  </div>
</div> 

</SwiperSlide>

<SwiperSlide>
<div className="container mb-5" >
  <div className="row ">
    <div className="col-md-4" >
      <div className=" mt-5">
        <div className="text-center">
       <img src={ptc} alt="" />
        </div>
      </div>
    </div>

    <div className="col-md-8">
      <div className="d-flex pt-5">
      <img src={quoteLeft} className='img-fluid   me-5' style={{height:"3rem"}}   alt="" /> 
      
      <h1 className=' fw-bold pt-2'>Impressed with  attention to detail.</h1>
     </div>

      <p className="pt-3 pb-3 fs-5" style={{textAlign:"justify"}}>
      I was impressed not only with their industry knowledge but with their attention to detail.
      </p>

      <div className='d-flex justify-content-between pb-5'>
        <p className='fs-5 text-uppercase pt-3 '>
        —Molly Hackling, PTC
        </p>
        <img src={quoteRight} className='img-fluid' style={{height:"3rem"}}   alt="" />
      </div>

    </div>
  </div>
</div> 

</SwiperSlide>

</Swiper> 
</div> 

{/* our process */}
<div className="container">
  <h2 className='fw-bold text-center pt-4'>Our Proven Process</h2>
<ul className='d-flex row pt-5  justify-content-between list-unstyled'>

  <li className='col-6 col-md-4 col-lg-2 pt-5'>
   <div className="pt- pb-5">
   <div className="text-center">
  <img src={Gen} className='img-fluid rounded-circle' style={{height:"180px"}}  alt="" /> 
  <h3 className='pt-4'>Discovery Call</h3>
  <p>Tell us about your business’  needs & goals.</p>
  </div> 
   </div> 
  </li>
  <li className='col-6 col-md-4  col-lg-2'>
  <div className="">
  <div className="text-center">
  <img src={Gen} className='img-fluid rounded-circle' style={{height:"180px"}}  alt="" /> 
  <h3 className='pt-4'>Solutions Call</h3>
  <p>Receive an audit & our expert insights.</p>
  </div> 
  </div> 
  </li>
  <li className='col-6 col-md-4 col-lg-2 pt-5'>
  <div className="">
  <div className="text-center">
  <img src={Gen} className='img-fluid rounded-circle' style={{height:"180px"}}  alt="" /> 
  <h3 className='pt-4'>Marketing Level-set</h3>
  <p>Work with your marketing team to strengthen your strategy.</p>
  </div> 
  </div> 
  </li>
  <li className='col-6 col-md-4 col-lg-2 pt-2'>
  <div className="">
  <div className="text-center">
  <img src={Gen} className='img-fluid rounded-circle' style={{height:"180px"}}  alt="" /> 
  <h3 className='pt-4'>Strategy Optimization</h3>
  <p>Let our team maximize your results through optimization.</p>
  </div> 
  </div> 
  </li>
  <li className='col-6 col-md-4 col-lg-2 pt-5'>
  <div className="">
  <div className="text-center">
  <img src={Gen} className='img-fluid rounded-circle ty' style={{height:"180px"}}  alt="" /> 
  <h3 className='pt-4'>Growth Strategy</h3>
  <p>Define next steps & goals with our team to help you scale.</p>
  </div> 
  </div>
  </li>
</ul>
</div>



{/* Magenetic marketing */}
<div className="container-fluid" style={{background:"#f00"}}>
<div className='pt-5 pb-5'>
<p className='fs-3 text-center text-white'>We Have A Passion For </p>
<p className='text-center text-white pt-2 fw-bold fs-1'>
Magnetic Marketing <br /> for Purpose-Driven Businesses
</p>
<div className="text-center">
<button className='btn btn-dark p- fs-4 rounded-0' >LET'S GO <i class="bi bi-chevron-right ms-3"></i></button>
</div>
</div>
</div>

{/* company rating */}
<div className="container-fluid bg-dark  mb-0">
<div className="container pt-5 pb-4 ">

<ul className='d-flex row  justify-content-between list-unstyled'>

  <li className='col-6 col-md-4 col-lg-2 pt-4'>
   <div className="">
   <div className="text-center">
  <img src={star} className='img-fluid' alt="" /> 
  <h1 className='fs-1 fw-bold text-white pt-4'>4.8</h1>
  <h6 className='text-white'>Average rating from 300 reviews on Clutch</h6>
  </div> 
   </div> 
  </li>
  <li className='col-6 col-md-4 col-lg-2'>
  <div className="">
  <div className="text-center">
  <img src={employee} className='img-fluid' style={{width:"6rem"}} alt="" /> 
  <h1 className='fs-1 fw-bold text-white pt-4'>90+</h1>
  <h6 className='text-white'>Clients with us for 4 years or more</h6>
  </div> 
  </div> 
  </li>
  <li className='col-6 col-md-4 col-lg-2 pt-2'>
  <div className="">
  <div className="text-center">
  <img src={shake} className='img-fluid' style={{width:"6rem"}} alt="" /> 
  <h1 className='fs-1 fw-bold text-white pt-4'>160+</h1>
  <h6 className='text-white'>Employees aligned with our mission</h6>
  </div> 
  </div> 
  </li>
  <li className='col-6 col-md-4 col-lg-2 pt-2'>
  <div className="">
  <div className="text-center">
  <img src={inc} className='img-fluid' style={{width:"5rem"}} alt="" /> 
  <h1 className='fs-1 fw-bold text-white pt-4'>#145</h1>
  <h6 className='text-white'>On the Inc. 500</h6>
  </div> 
  </div> 
  </li>
  <li className='col-6 col-md-4 col-lg-2'>
  <div className="">
  <div className="text-center">
  <img src={ad} className='img-fluid' style={{width:"6rem"}} alt="" /> 
  <h1 className='fs-1 fw-bold text-white pt-4'>$450M+</h1>
  <h6 className='text-white'>In annual ad-spend managed for clients</h6>
  </div> 
  </div>
  </li>
</ul>

  </div>
</div>


{/* Irresistable*/}
<div className="container mt-5 mb-5">
  <div className="row">
    <div className="col-6  col-md-2 p-3 ">
      <div className="text-center">
        <img src={seo} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>SEO</h6>
      </div>
    </div>
    <div className="col-6  col-md-2 p-3 ">
    <div className="text-center">
        <img src={google} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>GOOGLE ADS</h6>
      </div>
    </div>
    <div className="col-6 col-md-2 p-3 ">
    <div className="text-center">
        <img src={social} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>SOCIAL ADS</h6>
      </div>
    </div>
    <div className="col-6  col-md-2 p-3 ">
    <div className="text-center">
        <img src={youtube} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>YOUTUBE ADS</h6>
      </div>
    </div>
    <div className="col-6 col-md-2 p-3 ">
    <div className="text-center">
        <img src={amazon} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>AMAZON</h6>
      </div>
    </div>
    <div className="col-6  col-md-2 p-3 ">
    <div className="text-center">
        <img src={facebook} className='img-fluid' style={{width:"15px"}} alt="" />
        <h6 className='pt-4 fs-4'>FACEBOOK ADS</h6>
      </div>
    </div>


    {/*  */}
    <div className="col-6 col-md-2 p-3 mt-4">
    <div className="text-center">
        <img src={ticktok} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>TIKTOK ADS</h6>
      </div>
    </div>
    <div className="col-6 col-md-2 p-3  mt-4">
    <div className="text-center">
        <img src={linkedin} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>LINKEDIN ADS</h6>
      </div>
    </div>
    <div className="col-6 col-md-2 p-3  mt-4">
    <div className="text-center">
        <img src={snap} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>SNAPCHAT ADS</h6>
      </div>
    </div>
    <div className="col-6 col-md-2 p-3  mt-4">
    <div className="text-center">
        <img src={bing} className='img-fluid' style={{width:"20px"}} alt="" />
        <h6 className='pt-4 fs-4'>BING ADS</h6>
      </div>
    </div>
    <div className="col-6 col-md-2 p-3  mt-4">
    <div className="text-center">
        <img src={twitter} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>X ADS</h6>
      </div>
    </div>
    <div className="col-6 col-md-2  p-3 mt-4">
    <div className="text-center">
        <img src={shopping} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>SHOPPING</h6>
      </div>
    </div>
  {/*  */}
    {/*  */}
    <div className="col-6 col-md-2 mt-4">
    <div className="text-center">
        <img src={motion} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>MOTION ADS</h6>
      </div>
    </div>
    <div className="col-6 col-md-2 mt-4">
    <div className="text-center">
        <img src={landing} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>LANDING PAGES</h6>
      </div>
    </div>

    <div className="col-6 col-md-2 mt-4">
    <div className="text-center">
        <img src={email} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>EMAIL</h6>
      </div>
    </div>
    <div className="col-6 col-md-2 mt-4">
    <div className="text-center">
        <img src={lead} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>LEAD NURTURE</h6>
      </div>
    </div>
    <div className="col-6 col-md-2 mt-4">
    <div className="text-center">
        <img src={creative} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>CREATIVE</h6>
      </div>
    </div>
    <div className="col-6 col-md-2 mt-4">
    <div className="text-center">
        <img src={site} className='img-fluid' style={{width:"25px"}} alt="" />
        <h6 className='pt-4 fs-4'>OPTIMIZATION</h6>
      </div>
    </div>
  {/*  */}
  </div>
</div>


{/* e-commerce marketing */}
<div className="container ">
  <div className="row">
    <div className="col-md-6">
      <div className="card border-0">
        <img src={Gen} className='img-fluid' alt="" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="">
      <h2 className='pb-5 fw-bold pt-2'>Lead Gen Marketing</h2>
      <p className='fs-5 pb-5'>
      Lead generation has changed a lot over the years. Getting people interested in your business isn't as simple as it once was. 
      Our marketing experts create modern, leading-edge marketing strategies producing the results your business needs now and in the long term.
      </p>
      <div className="">

      <button className='btn btn-dark rounded-0 fs-4 '>TELL ME MORE <i class="bi bi-chevron-right ms-1"></i></button>
      </div>
      </div>
    </div>
  </div>
</div>

<div className="container mb-5">
  <div className="row">
    <div className="col-md-6">
      <div className="pt-3">
      <div className="">
      <h2 className='pb-5 fw-bold'>E-Commerce Marketing</h2>
      <p className='fs-5 pb-5'>
      eCommerce has changed the way people shop and consume products and services. There's a lot of competition in the eCommerce space, 
      so it's crucial to have a partner who keeps your business goals top of mind and has the expertise to create a competitive marketing strategy.
      </p>
      <div className="">

      <button className='btn btn-dark rounded-0 fs-4 '>TELL ME MORE <i class="bi bi-chevron-right ms-1"></i></button>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card pt-3 border-0">
      <img src={commerce} className='img-fluid' alt="" />
      </div>
    </div>
  </div>
</div>

</>
      );
}

export default Digital;
