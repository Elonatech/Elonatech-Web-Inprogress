import img2 from './captions/devops.jpg'

const Voip = () => {
    return (
    <>
{/* header */}
<section class="mt-5" style={{backgroundColor:"#17008C"}}>
      <div class="container" >
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-8 d-flex align-items-center">
            <div class="w-100 ">
              <h2 class="text-white py-5">Where Ever You Go Our Network Follows </h2>
             
            </div>
          </div>
          <div class="col-md-4 col-lg-4 d-flex align-items-end">
             <img src="img/" class="img-fluid" alt=""/> 
          </div>
        </div>
      </div>
    </section>


{/* body */}
<div className="container-fluid  mb-5" style={{marginTop:"100px"}}>
  <div class="row justify-content-center align-items-center g-2">
    <div class="col-md-6 ps-5">
    <h2 className='mb-4'>Our call, anytime, anywhere!</h2>
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



{/* flex display */}
<div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-4">
  
        
        <h5>High-definition video</h5>
        <h6>Watch what’s happening in 1080p HD video with 8x digital zoom.</h6>
        </div>
        <div className="col-md-4">
     
        <h5>Unlimited cloud storage</h5>
        <h6>Your videos are saved automatically on our secure servers for 30 days.*</h6>
        </div>
        <div className="col-md-4 mt-3">
 
        <h5>Rechargeable battery</h5>
        <h6>Lasts up to 3-6 months before it needs a recharge.*</h6>
           
        </div>
    </div>
</div>
            
    </>
    );
}

export default Voip;
