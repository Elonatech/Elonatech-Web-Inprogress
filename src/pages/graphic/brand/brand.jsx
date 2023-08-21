import services1 from './caption/services1.svg'
import services2 from './caption/services2.svg'
import services3 from './caption/services3.svg'
import services4 from './caption/services4.svg'
import services5 from './caption/services5.svg'

import './brand.css'
const Brand = () => {
    return (
 <>


<section class="mt-5 bg-dark ">
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
        {/* <!-- Hero start --> */}
    <div class="about-details section-padding40 " style={{marginTop:"100px"}}>
        <div class="container ">
            <div class="row justify-content-between">
                <div class="col-lg-6">
                    <div class="section-tittle mt-5">
                        <h2>With my camera, I capture daily life</h2>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="section-tittle mt-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra 
                            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
                        Aenean faucibus nibh et justo cursu.</p>
                    </div>
                    <div class="section-tittle mb-20">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra 
                            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
                        Aenean faucibus nibh et justo cursu.</p>
                    </div>
                    <div class="section-tittle mb-10">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra 
                            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
                        Aenean faucibus nibh et justo cursu.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--? All startups Start --> */}
    <div class="all-starups-area fix">
        <div class="starups">
            <div class="starups-details">
                <h3>I'm Ready to Exceed Expectations</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet</p>
                <button type="button" class="btn btn-outline-light btn-lg">Large button</button>
            </div>
        </div>
        {/* <!--Right Contents  --> */}
        <div class="starups-img"></div>
    </div>
    <div class="categories-area section-padding40 mt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="section-tittle mb-60 text-center mt-5">
                        <h2>Life is about Creating Experiences</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis 
                        cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-cat mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                        <div class="cat-icon pt-5">
                            <img src={services1}  alt=""/>
                        </div>
                        <div class="cat-cap">
                            <h5>Ipsam voluptatem quia voluptas</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-cat mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                        <div class="cat-icon pt-5">
                            <img src={services2} alt=""/>
                        </div>
                        <div class="cat-cap">
                            <h5>Voluptatem quia voluptas</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-cat mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                        <div class="cat-icon pt-5">
                            <img src={services3} alt=""/>
                        </div>
                        <div class="cat-cap">
                            <h5>Ipsam voluptatem quia voluptas</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-cat mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
                        <div class="cat-icon pt-5">
                            <img src={services4} alt=""/>
                        </div>
                        <div class="cat-cap mb-5">
                            <h5>Ipsam voluptatem quia voluptas</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
            
 </>
    );
}

export default Brand;
