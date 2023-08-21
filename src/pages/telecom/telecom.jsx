import tel from './captions/devops.jpg'
import img2 from'./captions/2255417.jpg'
import bg from './captions/7085623.jpg'

const Telecom = () => {
    return (
<>

{/* Header */}
<section class="mt-5 " style={{height:"500px", backgroundImage:`url(${bg})`, backgroundSize:"fixed"}}>
      <div class="container" >
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-8 d-flex align-items-center">
            <div class="w-100 py-4" style={{marginTop:"100px"}}>
              <h2 class="text-white">We Provides Round-The-Clock Maintenance for All Network Equipment</h2>
              <p  class="text-white pt-2">We Provides Round-The-Clock Maintenance for All Network Equipment</p>
              <p  class="text-white pt-2">we are committed to supplying you with the most reliable advice,
                             support and services at all times, wherever you are in Nigeria.</p>
              <p class="mb-0 pt-2"><a href="#" class="btn btn-success py-3 px-4">Contact Us</a></p>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 d-flex align-items-end">
             <img src="img/" class="img-fluid" alt=""/> 
          </div>
        </div>
      </div>
    </section>
{/* End */}

{/* body */}
<div className="container-fluid mt-5 mb-5">
  <div class="row justify-content-center align-items-center g-2">
    <div class="col-md-6 ps-5">
    <h2>Need A Telecoms for your Brand</h2>
    <p className="fs-6">Well, you have come to the right place, At Elonatech Nigeria Limited, We are One Of Nigeria's leading Website Design & Development Company Who's Core Values are Excellence, Professionalism, Integrity & Convenient Service.
We Design & Develop all kinds Of Websites and Web applications with the most suitable platforms at a friendly budget.  <br /><br />We offer premium web services such as Business Software Development, Mobile App Development, Web Based Apps etc.
We ensure that your needs are understood and implemented correctly. In fact, we are dedicated to the creation of a site that helps you become a success. Our specialty lies in providing comprehensive and custom web development services that provide you with a functional and complete solution.  <br /> <br />  The sites we develop are highly scalable with a great degree of usability. As a website development company, we also ensure the site responds fast and is SEO friendly with an excellent User Interface (UI) and User Experience (UX). You also get to enjoy complete control over your site. With our website development, you do not have to adjust your specifications to the capabilities of a given platform or change your design visions to fit a template. We deliver the work precisely to your requirements.
We won't just build you an ordinary website but also develop a marketing strategy that can utilize the website and your marketing channels to generate constant leads, sales, customers, and clients.</p>
    </div>
    <div class="col-md-6">
      <img src={img2} alt="" className='img-fluid rounded' srcset="" />
    </div>
  </div>
</div>



{/* bottom cards  */}
<h3 className='text-center mt-5'>LIST OF LABORATORY EQUIPMENTS & MATERIALS</h3>
<section class="bg-dark mt-3 ">
<div className="container">
<div class="row">
  <div class="col-md-6 mt-5 ">
    <div class="card">
      <div class="card-body" >
      <h3  className=" text-center py-5">Voip</h3>
      </div>
    </div>
  </div>
  <div class="col-md-6 mt-5 mb-5">
    <div class="card">
      <div class="card-body">
        <h3  className=" text-center py-5">IP Telephony & PBX Systems</h3>
      </div>
    </div>
  </div>
</div>
</div>
</section>

{/*End*/}



</>
    );
}

export default Telecom;
