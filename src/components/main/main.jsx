import test1 from './testimonials/Mary-Ephraim-Egbas.jpeg'
import test2 from './testimonials/Abayomi-Kakanfo.jpg'
import test3 from './testimonials/Chunyere-Nganwuchu.jpg'
import test4 from './testimonials/Remeben-MD-1.png'
import test5 from './testimonials/testimonials-3.jpg'

import ceo from './testimonials/IMG_7338-removebg-preview.png'

import client1 from './captions/client/Diva-Cakes.png'
import client2 from './captions/client/Friesland-Campina.png'
import client3 from './captions/client/IRETI-logo-300x300-1.png'
import client4 from './captions/client/Jigirinty_sewage-energy.png'
import client5 from './captions/client/MTMSD-logo_3d.png'
import client6 from './captions/client/PFN-Logo.png'
import client7 from './captions/client/PineheightSystems-logo.png'
import client8 from './captions/client/Remaben_Logo-removebg-preview.png'
import client9 from './captions/client/Safebrooks-Logo-png.png'
import client10 from './captions/client/The-Home-Builders-Ministry-Logo.png'
import client11 from './captions/client/TruCSR-logo.png'
import client12 from './captions/client/Universal-Peace-Chaplains.png'
import Feature from './captions/card1.jpg'

import './main.css'


import bg1 from './captions/images (1).jpeg'
import bg2 from './captions/images (2).jpeg'
import bg3 from './captions/images.jpeg'


import icons1 from './captions/gears.svg'
import icons2 from './captions/Battery.svg'
import icons3 from './captions/antivirus.svg'
import icons4 from './captions/gears.svg'

import ftbg1 from './captions/red.jpg'
import ftbg2 from './captions/blue2.jpg'

import product1 from './captions/product/Bixolon-barcode-printer.png'
import product2 from './captions/product/Honeywell-orbit-barcode.gif'
import product3 from './captions/product/SAM-TC-Touch.png'
import product4 from './captions/product/hp.jpg'
import product5 from './captions/product/thermal-paper.jpg'
import product6 from './captions/product/therminal-roll.png'


import service1 from './captions/services/external-networking-network-technology-itim2101-fill-itim2101-1.png';

import artboard1 from './captions/services/artboard9.jpg'
import artboard2 from './captions/services/Artboard2.jpg'
import artboard3 from './captions/services/Artboard3.jpg'
import artboard4 from './captions/services/artboard4.jpg'
import artboard5 from './captions/services/Artboard5.jpg'
import artboard6 from './captions/services/Artboard6.jpg'
import artboard7 from './captions/services/Artboard7.jpg'
import artboard8 from './captions/services/Artboard8.jpg'
import artboard9 from './captions/services/artboard1.jpg'

import articonconputer from './captions/services/icons/computer.png'
import articonconsult from './captions/services/icons/consult.png'
import articoonsdigitial from './captions/services/icons/network (2).png'
import articongraphic from './captions/services/icons/graphic.png'
import articonnetwork from './captions/services/icons/network.png'
import articonsuvalliance from './captions/services/icons/suvalliance.png'
import articonvideo from './captions/services/icons/video.png'
import articonConputer from './captions/services/icons/computer.png'
import articonwebsite from './captions/services/icons/website.png'
import articonvideogall from './captions/services/icons/video-gallery.png'



const Main = () => {
    return (
<>


{/* Card */}
<div class="album py-3 bg-body-tertiary">
  
  <h2 className='text-center'>Why Elonatech </h2>
  <div class="about-border"></div>
 
  <h4 className='text-center pt-3'>Top-notch Technology Service Providers</h4>
  <h5 className='text-center pt-3'></h5>

  <div class="container"> 
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {/* first card */}
      <div class="col-md-6 ">
        <div class="card shadow-sm me-auto" style={{backgroundImage:`url(${ftbg1})` , objectFit:"cover"}}>
          <div class="card-body">
            <h5 class="card-title text-white mt-3">Website and App Solutions</h5>
            <p class="card-text fs-6 text-white pt-2">At Elonatech, we build websites that are not only visually beautiful but also functionally effective. Our team of web strategists, designers, developers, and project managers work together to help clients meet their business objective</p>
            <div class="d-flex justify-content-between align-items-center pt-3">
              <button className='btn btn-danger '>Read More</button>
            </div>
          </div>
        </div>
        
        {/* second card */}
      </div>
      <div class="col-md-6 me-auto">
        <div class="card shadow-sm" style={{backgroundImage:`url(${ftbg2})`}}>
          <div class="card-body">
            <h5 class="card-title text-white mt-3">Flexible, Scalable IT Solutions</h5>
            <p class="card-text fs-6 text-white pt-2">This is a wider card with supporting text below as a natural lead-in <br /> to additional content. This content <br /> is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center pt-3">
            <button className='btn btn-danger'>Read More</button> 
            </div>
          </div>
        </div>
      </div>
      {/* end */}
    </div>
  </div>
</div>

{/* support */}
<div className="container  mt-5  p-5 rounded" style={{backgroundColor:"#DCDCDC"}}>

    <div className="row">
        <div className="col-md-6">
            <ul className='list-unstyled'>
                <li className=''>
                    <div className="d-flex">
                    <i class="bi bi-headset" style={{fontSize:"30px"}}></i>
                    <div className="">
                    <h5 className='ps-5' style={{color:"#34548C"}}>Onsite Support And Installations </h5> 

                    <h6 className='ps-5 mt-2 mb-3'>Expertise. Convinience. Customer Experience.

                    <div className="support-line mt-2"></div>
                    </h6>
                    
                    </div>
                    </div>
                </li>
               
                {/*  */}
                <li className=''>
                    <div className="d-flex">
                    <i class="bi bi-gear" style={{fontSize:"30px"}}></i>
                    <div className="">
                    <h5 className='ps-5' style={{color:"#34548C"}}>Contact Support</h5> 
                    <h6 className='ps-5 '>Let us assist you with any product or service questions.
                    <div className="support-line mt-2"></div>
                    </h6>
                    </div>
                    </div>
                </li>
                {/*  */}
                <li className='mt-1'>
                    <div className="d-flex">
                    <i class="bi bi-laptop" style={{fontSize:"30px"}}></i>
                    <div className="">
                    <h5 className='ps-5' style={{color:"#34548C"}}>Laptops. Network Servers. Workstations</h5> 
                    <h6 className='ps-5 '>Get the best.
                    <div className="support-line mt-2"></div>
                    </h6>
                    </div>
                    </div>
                </li>
                {/*  */}
                <li className='mt-1'>
                    <div className="d-flex">
                     <img src={icons3} alt="" className='mb-4' />
                    <div className="">
                    <h5 className='ps-5' style={{color:"#34548C"}}>Premium Software Retail & Installation</h5> 
                    <h6 className='ps-5 '>Ensure you stay safe behind a firewall.
                    <div className="support-line mt-2"></div>
                    </h6>
                    </div>
                    </div>
                </li>
                {/*  */}
                <li className='mt-1'>
                    <div className="d-flex">
                    <i class="bi bi-printer" style={{fontSize:"30px"}}></i>
                    <div className="">
                    <h5 className='ps-5' style={{color:"#34548C"}}>Printer and Print Solution</h5> 
                    <h6 className='ps-5 '>Ensure you stay safe behind a firewall.
                    <div className="support-line mt-2"></div>
                    </h6>
                    </div>
                    </div>
                </li>

            </ul>
        </div>
        <div className="col-md-6">
          <div className="text-center" style={{marginTop:"100px"}}>
            <h1>ELONATECH SUPPORT </h1>
            <h5 className='mt-2'>Get your questions answered</h5>
          </div>
        </div>
    </div>
</div>

{/* Marketing */}
  <div className="container marketing">
  <div class="row featurette mt-5 ">
    <div class="col-md-7">
      <h2 class="">First featurette heading. It’ll blow your mind.</h2>
      <p class="fs-6 p-2">The IT Solutions and Corporate Consultant Company.
        We endeavor to exceed our clients’ expectations with the solutions we provide, and aim at pricing our solutions and services competitively and deliver projects within budget while continuously striving to maintain premium quality and standard.
        exceed our clients’ expectations with the solutions we provide, and aim at pricing our solutions and services competitively and deliver projects within budget while continuously striving to maintain premium quality and standard
        to exceed our clients’ expectations with the solutions we provide, and aim at pricing our solutions and services competitively and deliver projects within budget while continuously striving to maintain premium quality and standard.
        exceed our clients’ expectations with the solutions we provide, and aim at pricing our solutions and services competitively and deliver projects within budget while continuously striving to maintain premium quality and standard
        to exceed our clients’ expectations with the solutions we provide, and aim at pricing our solutions and services competitively and deliver projects within budget while continuously striving to maintain premium quality and standard.
      </p>
     </div>
     <div class="col-md-5">
      {/* feature image */}
      <img src={Feature}  class="bd-placeholder-img bd-placeholder-img-lg featurette-image img- mx-auto" style={{width:"28rem" , height:"25rem"}}   alt="" />
     </div>
    </div>




{/* Our clients */}
<h2 className='text-center' style={{marginTop:"100px"}}>Some Of Our Clients</h2>
<div class="about-border"></div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner mt-5">
  <div className="container">

    {/* carousel 1 */}
    <div class="carousel-item active" style={{height:"120px"}}>
 <ul class="row g-5 list-unstyled  d-flex">

        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client1} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>
        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client2} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>
        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client3} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>
        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client4} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>
        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client5} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>
        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client6} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>

</ul>

</div>
</div>

      {/* carousel 2 */}
      <div class="carousel-item" style={{height:"120px"}}>
          
      <ul class="row g-5 list-unstyled  d-flex">

            <li class="nav-item col-6 col-md-4 col-lg-2">
            <img src={client7} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
            </li>
            <li class="nav-item col-6 col-md-4 col-lg-2">
            <img src={client2} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
            </li>
            <li class="nav-item col-6 col-md-4 col-lg-2">
            <img src={client3} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
            </li>
            <li class="nav-item col-6 col-md-4 col-lg-2">
            <img src={client4} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
            </li>
            <li class="nav-item col-6 col-md-4 col-lg-2">
            <img src={client5} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
            </li>
            <li class="nav-item col-6 col-md-4 col-lg-2">
            <img src={client6} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
            </li>

      </ul>
          </div>

    {/* carousel 3 */}
    <div class="carousel-item" style={{height:"120px"}}>
    
    <ul class="row g-5 list-unstyled  d-flex">

        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client9} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>
        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client2} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>
        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client3} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>
        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client4} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>
        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client5} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>
        <li class="nav-item col-6 col-md-4 col-lg-2">
        <img src={client6} alt="" style={{width:"7rem" , height:"6rem" ,marginRight:"50px"}}  />
        </li>

   </ul>


    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

{/* services */}

<div class="album py-5 bg-body-tertiary">
      <h2 className='text-center mt-5'>What We Do Best</h2>
       <div class="about-border"></div>
      <div class="container">

         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-5">
            {/* card 1 */}
          <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard9}) `, height:" 360px" , backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="text-down text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">WEB DESIGN & DEVELOPMENT</h5>
          <img className='text-white' src={articonwebsite} class="mb-4" style={{color:"white"}} alt="" srcset=""/>
           </div>
          <div class="overlay">
          <div class="text-center">
            <h4 class="mt-5 text-white">WEB DESIGN & DEVELOPMENT</h4>
            <img src={articonwebsite} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">At Elonatech, we build websites that are not only visually beautiful but also functionally effective. Our team of web strategists.</p>
            <button class="btn btn-danger"><h5>See More</h5></button>
            </div>
          </div>
           </div>
          </div>

          {/* card 2 */}
          <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard2})`, height:" 360px", backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="text-down text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white"> DIGITIAL MARKETING</h5>
          <img src={articoonsdigitial} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="overlay">
          <div class="text-center">
            <h4 class="mt-5 text-white">DIGITIAL MARKETING</h4>
            <img src={articoonsdigitial} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">With Digital marketing, we have successfully changed the way brands and businesses use technology for marketing. Digital platforms are..</p>
            <button class="btn btn-danger"><h5>See More</h5></button>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard1})`, height:" 360px",backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="text-down text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">GRAPHICS & BRANDING</h5>
          <img src={articongraphic} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="overlay">
          <div class="text-center">
            <h4 class="mt-5 text-white">GRAPHICS & BRANDING</h4>
            <img src={articongraphic} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Elonatech Nigeria Limited, in a bid to serve you better, has included Corporate branding in their services; Which includes: logo design..</p>
            <button class="btn btn-danger"><h5>See More</h5></button>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard3})`, height:" 360px", backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="text-down text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">NETWORK ENGINEERING / ADMINISTRATION</h5>
          <img src={articonnetwork} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="overlay">
          <div class="text-center">
            <h4 class="mt-5 text-white">NETWORK ENGINEERING / ADMINISTRATION</h4>
            <img src={articonnetwork} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Elonatech Nigeria Limited is built on the assumption that the management of information technology for business is not...</p>
            <button class="btn btn-danger"><h5>See More</h5></button>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard4})`, height:" 360px",backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="text-down text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">COMPUTER ENGINEERING</h5>
          <img src={articonconputer} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="overlay">
          <div class="text-center">
            <h4 class="mt-5 text-white">COMPUTER ENGINEERING</h4>
            <img src={articonConputer} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Network administration involves a wide array of operational tasks that help a network to run smoothly and efficiently. This includes activitie...</p>
            <button class="btn btn-danger"><h5>See More</h5></button>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard5})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="text-down text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">ACCESS CONTROL & SURVAILANCE</h5>
          <img src={articonsuvalliance} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="overlay">
          <div class="text-center">
            <h4 class="mt-5 text-white">ACCESS CONTROL & SURVAILANCE</h4>
            <img src={articonsuvalliance} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio expedita, aut possimus labore non sit libero eaque autem molestias...</p>
            <button class="btn btn-danger"><h5>See More</h5></button>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard6})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="text-down text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">ANIMATIONS & VIDEO GRAPHIC</h5>
          <img src={articonvideogall} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="overlay">
          <div class="text-center">
            <h4 class="mt-5 text-white">ANIMATIONS & VIDEO GRAPHIC</h4>
            <img src={articonvideogall} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Elonatech Nigeria Limited is built on the assumption that the management of information technology for business is not</p>
            <button class="btn btn-danger"><h5>See More</h5></button>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard7})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="text-down text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">LIVESTREAMING & VIDEOCONFERENCING</h5>
          <img src={articonvideo} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="overlay">
          <div class="text-center">
            <h4 class="mt-5 text-white">LIVESTREAMING & VIDEOCONFERENCING</h4>
            <img src={articonvideo} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Network administration involves a wide array of operational tasks that help a network to run smoothly and efficiently. This includes activiti</p>
            <button class="btn btn-danger"><h5>See More</h5></button>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard8})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="text-down text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">CONSULTING</h5>
          <img src={articonconsult} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="overlay">
          <div class="text-center">
            <h4 class="mt-5 text-white">CONSULTING</h4>
            <img src={articonconsult} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">At Elonatech, we build websites that are not only visually beautiful but also functionally effective. Our team of web strategists,</p>
            <button class="btn btn-danger"><h5>See More</h5></button>
            </div>
          </div>
           </div>
          </div>
        
        
       

      

{/* end */}
      </div>
    </div>
  </div>



{/* What They Say About Us */}
<div id="demo" class="carousel slide  mb-5" data-bs-ride="carousel" style={{backgroundColor:"#11253D"}}>
  {/* <!-- The slideshow/carousel --> */}
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* test 1 */}
      <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="testimonials-slider swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src={test1} class="testimonial-img" alt=""/>
                <h3 className='text-white'>Saul Goodman</h3>
                <h4 className='text-white'>Ceo &amp; Founder</h4>
                <div class="stars" style={{color:'yellow'}}>
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p className='text-white'>
                  <i class="bi bi-quote quote-icon-left text-danger"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bi bi-quote quote-icon-right text-danger"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    {/* test 2 */}
    <div class="carousel-item">
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="testimonials-slider swiper">

          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src={test2} class="testimonial-img" alt=""/>
                <h3 className='text-white'>Saul Goodman</h3>
                <h4 className='text-white'>Ceo &amp; Founder</h4>
                <div class="stars" style={{color:'yellow'}}>
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p className='text-white'>
                  <i class="bi bi-quote quote-icon-left text-danger"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bi bi-quote quote-icon-right text-danger"></i>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
    {/* test 3*/}
    <div class="carousel-item">
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="testimonials-slider swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src={test3} class="testimonial-img" alt=""/>
                <h3 className='text-white'>Saul Goodman</h3>
                <h4 className='text-white'>Ceo &amp; Founder</h4>
                <div class="stars" style={{color:'yellow'}}>
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p className='text-white'>
                  <i class="bi bi-quote quote-icon-left text-danger"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bi bi-quote quote-icon-right text-danger"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    {/* test 4 */}
    <div class="carousel-item">
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="testimonials-slider swiper">

          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src={test4} class="testimonial-img" alt=""/>
                <h3 className='text-white'>Saul Goodman</h3>
                <h4 className='text-white'>Ceo &amp; Founder</h4>
                <div class="stars" style={{color:'yellow'}}>
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p className='text-white'>
                  <i class="bi bi-quote quote-icon-left text-danger"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bi bi-quote quote-icon-right text-danger"></i>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    </div>
    {/* test 5 */}
    <div class="carousel-item">
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="testimonials-slider swiper">

          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src={test5} class="testimonial-img" alt=""/>
                <h3 className='text-white'>Saul Goodman</h3>
                <h4 className='text-white'>Ceo &amp; Founder</h4>
                <div class="stars" style={{color:'yellow'}}>
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p className='text-white'>
                  <i class="bi bi-quote quote-icon-left text-danger"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bi bi-quote quote-icon-right text-danger"></i>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  </div>
  
  {/* <!-- Left and right controls/icons --> */}
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

{/* three cards  */}
<div className="text-center mb-5">
<div className="container">
  <div className="row">
    <div className="col-sm-4">

      <div class="card mt-5" style={{backgroundImage:`url(${bg1})`}}>
        <div class="card-body text-center">
          <p class="card-text p-5 text-white">We Offer bespoke user experience, web design, app design and software development services.</p>
        </div>
      </div>

    </div>
    <div className="col-sm-4">

    <div class="card mt-5" style={{backgroundImage:`url(${bg2})`}}>
     <div class="card-body text-center">
          <p class="card-text p-5 text-white">We Offer bespoke user experience, web design, app design and software development services.</p>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
    <div class="card mt-5" style={{backgroundImage:`url(${bg3})`}}>
    <div class="card-body text-center text-white">
          <p class="card-text p-5">We Offer bespoke user experience, web design, app design and software development services.</p>
        </div>

      </div>
    </div>
  </div>
</div>
</div>

{/* Consult */}
<nav class="navbar navbar navbar-dark bg-body-secondary">
<div class="container ">
  <div class="row g-4 py-4">
    <div class="col d-flex align-items-end ">
      <div> 
          

         <div className="row">

        <div className="col-md-6">
        <h3 class="fs-5 mt-4 mb-3 ">How about a FREE Consultation on the Best Digital Marketing Strategy for your Business?</h3> 
        <p className='fs-6'>Want to know how to increase your brand visibility, boost audience engagement, drive traffic, increase social media followers, promote your
           products and service online and increase sales for your business?
            Elonatech offers tailored advice on how to reach and engage your audience better, increase conversion and maximize profit through a bespoke monthly/yearly
             digital marketing plan for your business</p>
             {/*  */}
             <button class="btn btn-danger btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
         GET FREE CONSULTATION
        </button>
        {/* <!-- form --> */}
        <div class="collapse" id="collapseExample">
          <form>
            <div class="mb-2 mt-4">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" aria-describedby="nameHelp"/>

              <label for="exampleInputEmail1" class="form-label  mt-2">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

              <label for="what" class="form-label mt-2">What do you do?</label>
              <input type="text" class="form-control" id="what" aria-describedby="whatHelp"/>

              <label for="what" class="form-label  mt-2">What challenges do you currently face? </label>
              <input type="text" class="form-control" id="what" aria-describedby="whatHelp"/>

              <label for="what" class="form-label  mt-2">If you have what it takes, what would you change in your business?</label>
              <input type="text" class="form-control" id="what" aria-describedby="whatHelp"/>

              <label for="what" class="form-label  mt-2">How much money does it cost you? (In NAIRA) </label>
              <input type="text" class="form-control" id="what" aria-describedby="whatHelp"/>

              <label for="what" class="form-label mt-2">How much money are you willing to invest as a solution to this? (In NAIRA) </label>
              <input type="text" class="form-control" id="what" aria-describedby="whatHelp"/>

              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-danger">Submit</button>
          </form>
        </div>
             {/*  */}
        </div>

        <div className="col-md-6">
            <img src={ceo} className=' float-end'  alt=""  style={{width:"17rem" , height:"16rem"}}/>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</nav>

{/* product */}
  <h2 className='text-center mt-5'>Latest Products</h2>
  <div class="about-border"></div>
  {/* product */}

  <div className="">
<div class="container   mt-5">
<div class="row mt-5">
  {/* product 1 */}
  <div class="col-lg-2 mx-1  border shadow-lg p-3 mb-5 bg-body rounded">
    <div className="text-center">
    <img src={product1} className='img-fluid' style={{}} alt="" />
    </div>
    <h4 class="fw-normal pt-3">Bixolon Barcode</h4>
    <p>Pos System</p>
    <div class="stars" style={{color:'black'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
    <div class="d-flex justify-content-between">
          <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
          <i class="bi bi-cart p-1" style={{fontSize:"25px"}}></i>
     </div>

  </div>
  {/* produt 2 */}
  <div class="col-lg-2 mx-1  border  shadow-lg p-3 mb-5 bg-body rounded">
  <div className="text-center">
    <img src={product5} className='img-fluid' style={{}} alt="" />
    </div>
    <h4 class="fw-normal pt-3">Pos Thermal</h4>
    <p>Pos System</p>
    <div class="stars" style={{color:'black'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
    <div class="d-flex justify-content-between">
          <p className='mt-2 px-1 text-danger'>₦450,000</p>
          <i class="bi bi-cart p-1" style={{fontSize:"25px"}}></i>
     </div>
  </div>
  {/* product 3 */}
  <div class="col-lg-2 mx-1 border  shadow-lg p-3 mb-5 bg-body rounded ">
  <div className="text-center">
    <img src={product2} className='img-fluid' style={{}} alt="" />
    </div>
    <h4 class="fw-normal ">Honeywell Orbit</h4>
    <p>Pos System</p>
    <div class="stars" style={{color:'black'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
    <div class="d-flex justify-content-between">
          <p className='mt-2 px-1 text-danger'>₦450,000</p>
          <i class="bi bi-cart p-1" style={{fontSize:"25px"}}></i>
     </div>
  </div>
  {/* product 4 */}
  <div class="col-lg-2  mx-1 border  shadow-lg p-3 mb-5 bg-body rounded">
  <div className="text-center">
    <img src={product3} className='img-fluid' style={{}} alt="" />
    </div>
    <h4 class="fw-normal pt-4">Sam Tc Touch</h4>
    <p>Pos System</p>
    <div class="stars" style={{color:'black'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
    <div class="d-flex justify-content-between">
          <p className='mt-2 px-1 text-danger'>₦450,000</p>
          <i class="bi bi-cart p-1" style={{fontSize:"25px"}}></i>
     </div>
  </div>
  {/* product 5 */}
  <div class="col-lg-2 mx-1 border  shadow-lg p-3 mb-5 bg-body rounded ">
  <div className="text-center">
    <img src={product4} className='img-fluid' style={{}} alt="" />
    </div>
    <h4 class="fw-normal pt-">HP Notebook ...</h4>
    <p>Computers</p>
    <div class="stars" style={{color:'black'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
    <div class="d-flex justify-content-between">
          <p className='mt-2 px-1 text-danger'>₦450,000</p>
          <i class="bi bi-cart p-1" style={{fontSize:"25px"}}></i>
     </div>
  </div>
  
</div>
</div>
</div>
{/* End */}



</>
    );
}

export default Main;
