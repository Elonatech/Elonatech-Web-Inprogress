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
import Feature from './captions/313371.jpg'

import './main.css'

import bg1 from './captions/images (1).jpeg'
import bg2 from './captions/images (2).jpeg'
import bg3 from './captions/images.jpeg'


import icons1 from './captions/gears.svg'
import icons2 from './captions/Battery.svg'
import icons3 from './captions/antivirus.svg'
import icons4 from './captions/gears.svg'

const Main = () => {
    return (
<>


{/* Card */}
<div class="album py-3 bg-body-tertiary">
  
  <h2 className='text-center'>Why Elonatech</h2>
  <div class="about-border"></div>
  <h2 className='text-center pt-3'>Top-notch Technology Service Providers</h2>
  <h3 className='text-center pt-3'></h3>

  <div class="container"> 
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {/* first card */}
      <div class="col-md-6 ">
        <div class="card shadow-sm me-auto">
          <div class="card-body">
            <h5 class="card-title">Website and App Solutions</h5>
            <p class="card-text fs-6">At Elonatech, we build websites that are not only visually beautiful but also functionally effective. Our team of web strategists, designers, developers, and project managers work together to help clients meet their business objective</p>
            <div class="d-flex justify-content-between align-items-center">
              <button className='btn btn-danger'>Read More</button>
            </div>
          </div>
        </div>
        
        {/* second card */}
      </div>
      <div class="col-md-6 me-auto">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Flexible, Scalable IT Solutions</h5>
            <p class="card-text fs-6">This is a wider card with supporting text below as a natural lead-in <br /> to additional content. This content <br /> is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
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
<div className="container  mt-5  p-5 rounded" style={{backgroundColor:"#D3D3D3"}}>

    <div className="row">
        <div className="col-md-6">
            <ul className='list-unstyled'>
                <li className=''>
                    <div className="d-flex">
                     <img src={icons3} alt="" className='mb-4' />
                    <div className="">
                    <h5 className='ps-5'>Onsite Support And Installations </h5> <h6 className='ps-5 '>Expertise. Convinience. Customer Experience.</h6>
                    </div>
                    </div>
                </li>
                {/*  */}
                <li className='mt-3'>
                    <div className="d-flex">
                     <img src={icons2} alt="" className='mb-4' />
                    <div className="">
                    <h5 className='ps-5'>Contact Suppor</h5> <h6 className='ps-5 '>Let us assist you with any product or service questions.</h6>
                    </div>
                    </div>
                </li>
                {/*  */}
                <li className='mt-3'>
                    <div className="d-flex">
                     <img src={icons3} alt="" className='mb-4' />
                    <div className="">
                    <h5 className='ps-5'>Laptops. Network Servers. Workstations</h5> <h6 className='ps-5 '>Get the best.</h6>
                    </div>
                    </div>
                </li>
                {/*  */}
                <li className='mt-3'>
                    <div className="d-flex">
                     <img src={icons3} alt="" className='mb-4' />
                    <div className="">
                    <h5 className='ps-5'>Premium Antivirus Retail & Installation</h5> <h6 className='ps-5 '>Ensure you stay safe behind a firewall.</h6>
                    </div>
                    </div>
                </li>

            </ul>
        </div>
        <div className="col-md-6">
          <div className="text-center" style={{marginTop:"100px"}}>
            <h1>ELONATECH 24/7 SUPPORT </h1>
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

{/* Carousel  */}
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
                  <i class="bi bi-quote quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bi bi-quote quote-icon-right"></i>
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
                  <i class="bi bi-quote quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bi bi-quote quote-icon-right"></i>
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
                  <i class="bi bi-quote quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bi bi-quote quote-icon-right"></i>
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
                  <i class="bi bi-quote quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bi bi-quote quote-icon-right"></i>
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
        </div>

        <div className="col-md-6">
            <img src={ceo} className=' float-end'  alt=""  style={{width:"17rem" , height:"16rem"}}/>
        </div>
        </div>

       
           
        <button class="btn btn-primary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  </div>
</nav>



</>
    );
}

export default Main;
