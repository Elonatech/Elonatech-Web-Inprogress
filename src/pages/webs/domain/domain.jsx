
import body1 from './captions/devops.jpg'
import  './domain.css'


const Domain = () => {
    return (
    <>
{/* Header */}
<section class="mt-5  bg-dark">
      <div class="container" >
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-8 d-flex align-items-center">
            <div class="w-100 py-4" style={{marginTop:"100px"}}>
              <h2 class="text-white">Domain Reg</h2>
              <p  class="text-white pt-2">Lets Build an Amazing Website for your Brand</p>
              <p  class="text-white pt-2">Excellence, Professionalism, Integrity & Convenient Service</p>
              <p class="mb-0 pt-2"><a href="#" class="btn btn-success py-3 px-4">Contact Us</a></p>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 d-flex align-items-end">
             <img src="img/" class="img-fluid" alt=""/> 
          </div>
        </div>
      </div>
    </section>  
{/* body */}
    <div className="container-fluid mt-5 mb-5">
  <div class="row justify-content-center align-items-center g-2">
    <div class="col-md-6">
      <img src={body1} alt="" className='img-fluid rounded' srcset="" />
    </div>
    <div class="col-md-6 ps-5 pe-5">
    <h2>Need A Telecoms for your Brand</h2>
    <p className="fs-6">Well, you have come to the right place, At Elonatech Nigeria Limited, We are One Of Nigeria's leading Website Design & Development Company Who's Core Values are Excellence, Professionalism, Integrity & Convenient Service.
    We Design & Develop all kinds Of Websites and Web applications with the most suitable platforms at a friendly budget.  <br /><br />We offer premium web services such as Business Software Development, Mobile App Development, Web Based Apps etc.
   We ensure that your needs are understood and implemented correctly. In fact, we are dedicated to the creation of a site that helps you become a success. Our specialty lies in providing comprehensive and custom web development services that provide you with a functional and complete solution.  <br /> <br />  The sites we develop are highly scalable with a great degree of usability. As a website development company, we also ensure the site responds fast and is SEO friendly with an excellent User Interface (UI) and User Experience (UX). You also get to enjoy complete control over your site. With our website development, you do not have to adjust your specifications to the capabilities of a given platform or change your design visions to fit a template. We deliver the work precisely to your requirements.
    We won't just build you an ordinary website but also develop a marketing strategy that can utilize the website and your marketing channels to generate constant leads, sales, customers, and clients.</p>
    </div>
  </div>
</div>
{/* <!-- ======= Featured Services Section ======= --> */}
    <section id="featured-services" class="featured-services">
      <div class="container">

        <div class="row gy-4">

          <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
            <div class="service-item position-relative">
            <div class="icon"><i class="bi bi-bounding-box-circles icon"></i></div>
              {/* <div class="icon"><i class="bi bi-activity icon"></i></div> */}
              <div class="icon"><i class="bi bi-activity icon"></i></div>
              <h4><a href="" class="stretched-link text-decoration-none">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
        

          <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="200">
            <div class="service-item position-relative">
              <div class="icon"><i class="bi bi-bounding-box-circles icon"></i></div>
              <h4><a href="" class="stretched-link text-decoration-none">Sed ut perspici</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>
        

          <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="400">
            <div class="service-item position-relative">
              <div class="icon"><i class="bi bi-calendar4-week icon"></i></div>
              <h4><a href="" class="stretched-link text-decoration-none">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>
        

          <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="600">
            <div class="service-item position-relative">
              <div class="icon"><i class="bi bi-broadcast icon"></i></div>
              <h4><a href="" class="stretched-link text-decoration-none">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
     

        </div>

      </div>
    </section>
{/* bottom cards  */}
<h3 className='text-center mt-5'>LIST OF LABORATORY EQUIPMENTS & MATERIALS</h3>
<section class="bg-dark mt-3 ">
<div className="container">
<div class="row">
  <div class="col-md-6 mt-5 ">
    <div class="card">
      <div class="card-body" >
      <h3  className=" text-center py-5">Domain Reg./DNS Mgt</h3>
      </div>
    </div>
  </div>
  <div class="col-md-6 mt-5 mb-5">
    <div class="card">
      <div class="card-body">
        <h3  className=" text-center py-5">Web Hosting</h3>
      </div>
    </div>
  </div>
</div>
</div>
</section>








    </>
    );
}

export default Domain;
