import './css/portfolio.css';
// import './css/animate.css'
import project1 from './project-1.jpg'
import project2 from './project-2.jpg'
import project3 from './project-3.jpg'
import project4 from './project-4.jpg'




const Portfolio = () => {
    return (
    <>  
    <div class="container-xxl pt-5 mt-5">
        <div class="container">
            <div className="row">
            <div class="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:'500px;'}}>
                <p class="fs-5 fw-medium text-primary">Our Projects</p>
                <h1 class=" mb-5">We've Done Lot's of Awesome Projects</h1>
            </div>
            
            <div class="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
  <div class="row">
    <div class="col">
    <div class="project-item mb-5">
                    <div class="position-relative ">
                        <img class="img-fluid" src={project1} alt=""/>
                        <div class="project-overlay">
                            <a class="btn btn-lg-square btn-light rounded-circle m-1 "  href="img/project-1.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Data Analytics & Insights</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
    </div>
    {/* second col */}
    <div class="col">
    <div class="project-item mb-5">
                    <div class="position-relative">
                        <img class="img-fluid" src={project2} alt=""/>
                        <div class="project-overlay">
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-2.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Marketing Content Strategy</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
    </div>
    <div class="col">     
    <div class="project-item mb-5">
                    <div class="position-relative">
                        <img class="img-fluid" src={project4} alt=""/>
                        <div class="project-overlay">
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-4.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Social Marketing Strategy</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div></div>
  </div>
  </div>
            </div>
        </div>
        </div>
    </div>


    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class=" text-center position-relative pb-3 mb-5" style={{minWidth:"600px"}}>
            <h5 class="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 class="mb-0">We Are Here to Grow Your Business <br/> Exponentially</h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4">
                <div class="row g-5">
                    <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-cubes text-white"></i>
                        </div>
                        <h4>Best In Industry</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                    <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-award text-white"></i>
                        </div>
                        <h4>Award Winning</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight:"350px"}}>
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src={project3} style={{objectFit:"cover"}}/>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="row g-5">
                    <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-users-cog text-white"></i>
                        </div>
                        <h4>Professional Staff</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                    <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <h4>24/7 Support</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




            
    </>
    );
}

export default Portfolio;
