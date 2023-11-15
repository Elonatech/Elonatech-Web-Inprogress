import { Swiper, SwiperSlide  } from 'swiper/react';
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
import liquid from './captions/Liquidfish.webp'







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



<div className="container-fluid mb-5" style={{background:"#f8f8f8"}}>
<Swiper spaceBetween={23} slidesPerView={1} autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
         }}>

<SwiperSlide>
<div className="container mb-5" >
  <div className="row ">
    <div className="col-md-4" style={{background:"#f8f8f8"}}>
      <div className=" mt-5">
        <div className="text-center">
       <img src={master} alt="" />
        </div>
      </div>
    </div>
    
    <div className="col-md-8" style={{background:"#f8f8f8"}}>
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
<div className="container mb-5" >
  <div className="row ">
    <div className="col-md-4" style={{background:"#f8f8f8"}}>
      <div className=" mt-5">
        <div className="text-center">
       <img src={security} alt="" />
        </div>
      </div>
    </div>

    <div className="col-md-8" style={{background:"#f8f8f8"}}>
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
<div className="container mb-5" >
  <div className="row ">
    <div className="col-md-4" style={{background:"#f8f8f8"}}>
      <div className=" mt-5">
        <div className="text-center">
       <img src={revenue} alt="" />
        </div>
      </div>
    </div>

    <div className="col-md-8" style={{background:"#f8f8f8"}}>
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
<div className="container mb-5" >
  <div className="row ">
    <div className="col-md-4" style={{background:"#f8f8f8"}}>
      <div className=" mt-5">
        <div className="text-center">
       <img src={liquid} alt="" />
        </div>
      </div>
    </div>

    <div className="col-md-8" style={{background:"#f8f8f8"}}>
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
    <div className="col-md-4" style={{background:"#f8f8f8"}}>
      <div className=" mt-5">
        <div className="text-center">
       <img src={ptc} alt="" />
        </div>
      </div>
    </div>

    <div className="col-md-8" style={{background:"#f8f8f8"}}>
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




























</>
      );
}

export default Digital;
