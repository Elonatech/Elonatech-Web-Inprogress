import bg from './captions/social-media-marketing-fundamentals.png';
import socialHeader from './captions/AdobeStock_389328016_Editorial_Use_Only-1280x640.jpeg';
import soImg from './captions/Social-Media-Marketing.jpg';

import { useState } from 'react';


import './social.css'

const Social = () => {
    return (
 <>
 {/* Header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${socialHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Social Media Marketing</h2>
   <h5 class=" mt-4 text-white text-center">The Tools You Need to Grow Your Business</h5>
   <p class="lead text-white text-center">A form of digital marketing that leverages the power of popular social media networks to achieve your marketing and branding goals.</p>
 </div>
</div>

  {/* body*/}

<div className="container mb-5 mt-5">
  <div className="row g-0">
    <div className="col-md-6">
      <div className="card border-0" >
      <img src={soImg} alt="img-fluid rounded" style={{height:"24.3rem"}} />
      </div>
    </div>
    <div className="col-md-6">
      <div className="card pb-5 border-2 rounded-0" style={{borderColor:"#016193"}}>
      <h2 class="font-weight-bold heading p-3 pt-5 ">Why Social Media?</h2>
      <p class="text-black p-3" style={{textAlign:"justify"}}>
      Compared to traditional marketing, social media posts by businesses can be seen by followers across geography within seconds. 
      This offers a somewhat level playing field as you can then have a global approach to your business.
      <br /><br />
      Whether through organic promotional posts or social ads, keeping an eye on conversions and leads can help you better determine your success rate through social media.
      </p>
      </div>
    </div>
  </div>
</div>


  {/* body 2 */}
    <div class=" pt-0">
      <div class="container">
        <div class="row justify-content-between mb-5">
          <div class="col-lg-7 mb-5 mb-lg-0 order-lg-2">
            <div class="img-about dots">
              <img src={bg} alt="Image" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-5">
          
            <h4 className='fw-bolder'>Social Media Marketing helps businesses</h4>
            <ul className='list-unstyled mt-3'>
            <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Increase brand awareness</h6>
            </div>
            </li>
            <li>
            <div className='d-flex mt-2'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Build engaged communities</h6>
            </div>
             </li>
             <li>
            <div className='d-flex mt-2'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Sell products and services</h6>
            </div>
            </li>
             <li>
            <div className='d-flex mt-2'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Measure brand sentiment</h6>
            </div>
            </li>
             <li>
            <div className='d-flex mt-2'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Provide social customer service</h6>
            </div>
            <div className='d-flex mt-2'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Advertise products and services to target audiences</h6>
            </div>
            </li>
            <li>
            <div className='d-flex mt-2'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Track performance and adjust larger marketing strategies accordingly</h6>
            </div>
            </li>
            </ul>
        
          </div>
        </div>
      </div>
    </div>
  
   {/*  */}
  <div class="container mb-5 bg-light" style={{boxShadow:" 0 0 2px 2px rgba(0,0,0,0.6)"}} >
        <p className='fs-4 fw-bold pt-3 '>Building the right Social Media Strategy</p>
        <div class="row ">
          <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div class="box-feature mb-4">
              <h5 class="text-black mb-3 font-weight-bold">
              Set goals for your business
              </h5>
              <p class="text lead fs-6">
              Social media strategy planning starts with your goals. 
              Whether you want to expand your team, build a larger following or a more active community,
               taking the time to define your social goals is the first step to reaching them.
              </p>
              <input type="checkbox" class="text-btn" />
            </div>
          </div>
          <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <div class="box-feature mb-4">
              <h5 class="text-black mb-3 font-weight-bold">Generate leads and sales</h5>
               <p class="text lead fs-6">
               Whether online, in-store or directly through your social profiles, followers don’t make purchases by accident. 
               For example, are you alerting customers about new products and promos? Are you integrating your product catalog into your social profiles? 
               Are you running exclusive deals for followers? etc.
              </p>
              <input type="checkbox" class="text-btn" />
            </div>
          </div>
          <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
            <div class="box-feature mb-4">
              <h5 class="text-black mb-3 font-weight-bold">
              Grow your brand’s audience</h5>
              <p class="text lead fs-6">
              Bringing new followers into the fold means finding ways to introduce your brand to folks who haven’t 
              heard of you before. Growing your audience also means discovering conversations around your business and industry that matter the most. 
              Digging through your social channels is nearly impossible without monitoring or listening for specific keywords, phrases or hashtags.
              </p>
              <input type="checkbox" class="text-btn" />   
            </div>
          </div>
          <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
            <div class="box-feature mb-4">
              <h5 class="text-black mb-3 font-weight-bold">Drive traffic to your site</h5>
              <p class="text lead fs-6">
              The Sprout Social Index™ shows 46% of marketers plan to calculate the return on investment (ROI) of advertising 
              spend to connect the value of social to business goals in 2024.
              Simple enough. If you’re focused on generating leads or traffic to your website, social media can make it happen.
              </p>
              <input type="checkbox" class="text-btn" />               
            </div>
          </div>
        </div>
  </div>

 {/* Get in touch */}
 <div className="container-fluid" style={{backgroundColor:"#006b62"}}>
    <div className="container">
    <div className="row">
        <div className="col-md-6">
         <p className='text-white pt-5 pb-5 fs-1'>Talk with an expert about your next social decision</p>
        </div>
        <div className="col-md-6">
          
                <div className="text-end mt-5 mb-3">
                    <button className='btn btn-outline-dark rounded-0 btn-lg border-light text-white mt-5 trr ps-4  pe-4'>GET IN TOUCH</button>
              
            </div>
        </div>
    </div>
    </div>
 </div>

 </>
    );
}

export default Social;
