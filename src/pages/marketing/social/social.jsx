import hero from './captions/hero-1.jpg'
import hero2 from './captions/hero-right.png'

import './social.css'

const Social = () => {
    return (
 <>
 

{/* Header */}
<section class="mt-5 " style={{height:"500px", backgroundImage:`url(${hero})`, maxHeight:"300px" }}>
      <div class="container" >
        <div class="row justify-content-between">
          <div class="col-md-6 col-lg-8 d-flex align-items-center">
            <div class="w-100 py-4">
              <h1 class="text-white"><b>We Provides Round-The-Clock Maintenance for All Network Equipment</b></h1>
               <button className='p-3 rounded mt-4'><b>Get Started Now</b></button>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-flex align-items-end">
             {/* <img src={hero2} class=" mt-4" alt="" style={{maxWidth:"250px"}}/>  */}
          </div>
        </div>
      </div>
    </section>

    {/* body */}

    <section class="services-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title mt-5 mb-5">
                        <h1 className='text-center'>Choose the right hosting solution</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="services__item">
                        <h5>Shared Hosting</h5>
                        <span>Starts At $1.84</span>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="services__item">
                        <h5>Wordpress Hosting</h5>
                        <span>Starts At $1.84</span>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="services__item">
                        <h5>Dedicated Hosting</h5>
                        <span>Starts At $1.84</span>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="services__item">
                        <h5>SSL certificate</h5>
                        <span>Starts At $1.84</span>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="services__item">
                        <h5>Web Hosting</h5>
                        <span>Starts At $1.84</span>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="services__item">
                        <h5>Cloud server</h5>
                        <span>Starts At $1.84</span>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

 </>
    );
}

export default Social;
