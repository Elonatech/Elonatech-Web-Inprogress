import vendor1 from "./image/vendor-1.jpg"
import vendor2 from "./image/vendor-2.jpg"
import vendor3 from "./image/vendor-3.jpg"
import vendor4 from "./image/vendor-4.jpg"
import vendor5 from "./image/vendor-5.jpg"
import vendor6 from "./image/vendor-6.jpg"
import vendor7 from "./image/vendor-7.jpg"
import vendor8 from "./image/vendor-8.jpg"
import vendor9 from "./image/vendor-9.jpg"
import about from "./image/about.jpg"




const Company = () => {
    return (
<>

{/* the company */}
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-7">
                    <div class="section-title position-relative pb-3 mb-5">
                        <h5 class="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 class="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                    </div>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <div class="row g-0 mb-3">
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Award Winning</h5>
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div class="bg-primary d-flex align-items-center justify-content-center rounded" style={{height:"60px", width:"60px"}}>
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="mb-2">Call to ask any question</h5>
                            <h4 class="text-primary mb-0">+012 345 6789</h4>
                        </div>
                    </div>
                    <a href="quote.html" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
                </div>
                <div class="col-lg-5" style={{minHeight:"500px"}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src={about} style={{ objectFit:'cover'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>


{/* our client */}
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5 mb-5">
        <div class="bg-white">
            <div class="owl-carousel vendor-carousel">
                <img src={vendor1}  class="img-fluid p-2" alt=""/>
                <img src={vendor2}  class="img-fluid" alt=""/>
                <img src={vendor3}  class="img-fluid" alt=""/>
                <img src={vendor4} class="img-fluid" alt=""/>
                <img src={vendor5} class="img-fluid" alt=""/>
                <img src={vendor6} class="img-fluid" alt=""/>
                <img  src={vendor7} class="img-fluid" alt=""/>
                <img src={vendor8} class="img-fluid"alt=""/>
            </div>
        </div>
    </div>
</div>   
</>
    );
}

export default Company;
