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
import test from './image/razzer.jpg';
import test2 from './image/wallpaper-design-featured-image-1.jpg'
import innovation from './image/Innovation.svg';
import mindset from './image/Growth_Mindset.svg';
import integrity from './image/Integrity_icon.svg';
import commitment from './image/Commitment-to_Excellence.svg';
import teamwork from './image/Team-work.svg';
import './company.css'



const Company = () => {
    return (
<>
{/* header */}
<div class="container-fluid bg-dark py-5 " style={{height:"500px" , marginBottom:"10px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center wow zoomIn" data-wow-delay="0.1s">Elonatech</h2>
   <h5 class=" mt-4 text-white text-center wow fadeInRight" data-wow-delay="0.2s">At the heart of everything we do is a passion to deliver success stories.</h5>
   <p class="lead text-white text-center wow fadeInLeft" data-wow-delay="0.2s">From website development, digital marketing campaigns, network management to graphics etc... We pride ourselves to getting it done!!</p>
 </div>
 </div>

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

{/* our story */}
<div className="container text-center mt-5">
    <div className="row justify-content-md-center">
        <div className="col-md-10">
            <div class="">
            <h3 className="mb-3">Our Story</h3>
            <div className="mb-2" style={{backgroundColor:"black", height:"1px" , width:"14rem", margin:"auto"}}></div>
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quasi assumenda accusamus quos deserunt aut alias distinctio provident repellendus? Nulla molestias assumenda atque facilis expedita inventore minima similique eum at?</p>
              </div>
            </div>
        </div>
    </div>
</div>
{/* story continue 1 */}
<div className="container mt-5">
    <div className="row">
        <div className="col-md-5"> 
        <div className="card " >
           <img src={test2} className="img-fluid rounded" style={{height:"15rem"}} alt="" />
        </div>
        </div>
        <div className="col-md-7">
            <div className="">
             <p  className="wow fadeInUp"  style={{textAlign:"justify"}} data-wow-delay="0.2s">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat libero aperiam laudantium labore commodi eligendi soluta error. Aliquam sint ratione ducimus voluptas molestias velit porro, hic placeat maxime illo consequatur?</p>
            <br />
            <p className="wow fadeInUp" style={{textAlign:"justify"}} data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe accusamus eum ut incidunt tenetur maiores iure dolorum! Ea aliquam ipsa cumque, commodi reprehenderit debitis praesentium modi minus! Ducimus, vero voluptas!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iste, distinctio quidem quia nesciunt a esse pariatur culpa nobis quam similique illo mollitia consequatur in temporibus! Aut nam error odio!
            </p>
            </div>
            </div>
    </div>
</div>
{/* story continue 2 */}
<div className="container mt-5">
    <div className="row">
        <div className="col-md-7">
            <div className="">
             <p className="wow fadeInUp"  style={{textAlign:"justify"}} data-wow-delay="0.2s">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat libero aperiam laudantium labore commodi eligendi soluta error. Aliquam sint ratione ducimus voluptas molestias velit porro, hic placeat maxime illo consequatur?</p>
            <br />
            <p className="wow fadeInUp"  style={{textAlign:"justify"}} data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe accusamus eum ut incidunt tenetur maiores iure dolorum! Ea aliquam ipsa cumque, commodi reprehenderit debitis praesentium modi minus! Ducimus, vero voluptas!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            </div>
        </div>
        <div className="col-md-5">
           <img src={test} className="img-fluid rounded"  style={{height:"15rem"}}  alt="" />
        </div>
    </div>
</div>

{/* vision & mission  */}
<div className="container-fluid" style={{backgroundColor:"#000000", marginTop:"250px"}}>
<div className="container" style={{position:"relative" , bottom:"160px"}}>
    <div className="row g-0">
        <div className="col-md-6 bg-secondary wow fadeInLeft"  >
        <div className="pt-3">
              <h3 className="text-white text-center mb-2 mt-5">Vision</h3>
              <div className="" style={{backgroundColor:"white", height:"1px" , width:"14rem", margin:"auto"}}></div>
              <p className="fs-4 p-4 mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibtione maxime aperiam, accusamus at, perferendis tenetur vitae natus mollitia deleniti delectus quisquam.</p>
        </div>
            </div>
        <div className="col-md-6 wow fadeInRight" style={{backgroundColor:"#0d466d"}}>
            <div className="pt-3">
              <h3 className="text-white text-center mb-2 mt-5">Mission</h3>
              <div className="" style={{backgroundColor:"white", height:"1px" , width:"14rem", margin:"auto"}}></div>
              <p className="fs-4 p-4 mb-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibtione maxime aperiam, accusamus at, perferendis tenetur vitae natus mollitia deleniti delectus quisquam.</p>
        </div>
        </div>
    </div>
</div>


{/* Core Value */}
<div className="container rounded wow zoomIn" data-wow-delay="0.9s" style={{backgroundColor:"#000000" , position:"relative" , bottom:"50px"}}>
    <p className="fw-bold fs-2 text-center text-white mb-5">Core Values</p>
    <div className="row ">
        <div className="col-md-4">
            <div className="border-white pt-3">
             <div className="d-flex pt-5 ">
                <div className="border border-primary ">
                <div className="p-1">
                <img src={innovation} className="" style={{height:"3rem" , color:"black"}} alt="" />
                </div>
                </div>
                
                <h3 className="text-white ms-4 mt-2">Innovation</h3>
             </div>
             <p className="text-white mt-3 lead fs-6">Impossible made  I'm possible with groundbreaking</p>
            </div>
        </div>
        <div className="col-md-4 float-md-end transparent" style={{height:""}}>
        <div className="" style={{ position:"relative" , bottom:"32px"}}>
             <div className="d-flex justify-content-center">
             <div className="border border-primary">
                <div className="p-1">
                <img src={mindset} className="" style={{height:"3rem" , color:"black" ,}} alt="" />
                </div>
                </div>
                <h3 className="text-white  ms-4 mt-2">Growth Mindset</h3>
             </div>
             <p className="text-white text-center mt-3 lead fs-6">Thriving on challenges, embracing comeback</p>
            </div>
        </div>
        <div className="col-md-4">
        <div className="border-white pt-3">
             <div className="d-flex justify-content-start pt-5 ps-5">
               <div className="border border-primary">
                <div className="p-1">
                <img src={integrity} className="" style={{height:"3rem" , color:"black"}} alt="" />
                </div>
                </div>
                <h3 className="text-white ms-4 mt-2">Integrity</h3>
             </div>
             <p className="text-white ps-5 mt-3 lead fs-6">Doing what right, guided by unwavering character</p>
        </div>
        </div>
   
            <div className="row  mb-5 justify-content-md-center">
            <div className="col-md-4">
            <div className="">
             <div className="d-flex  pt-5">
             <div className="border border-primary">
                <div className="p-1">
                <img src={commitment} className="" style={{height:"3rem" , color:"black"}} alt="" />
                </div>
                </div>
                <h3 className="text-white ms-4 mt-2">Commitment </h3>
             </div>
             <p className="text-white mt-3 lead fs-6">Doing what right, guided by unwavering character</p>
            </div>
            </div>
         
              <div className="col-md-4 border border-top-0 border-bottom-0   border-end-0  " style={{height:"270px"}}>
              <div className=" text-center">
             <div className="d-flex justify-content-start pt-5 ps-5">
             <div className="border  border-primary">
                <div className="p-1">
                <img src={teamwork} className="" style={{height:"3rem" , color:"black"}} alt="" />
                </div>
                </div>
                <h3 className="text-white ms-4 mt-2">Team-work</h3>
             </div>
             <p className="text-white mt-3 ps-5 lead fs-6">Uniting minds together towards a unifying purpose</p>
            </div>
                </div>
            </div>
   
    </div>
</div>
</div>

{/* our client */}
<div class="container-fluid  wow fadeInUp" data-wow-delay="0.9s">
    <div class="container mt-5 mb-5">
        <div class="bg-white">
            <div class="owl-carousel vendor-carousel">
                <img src={vendor1}  class="img-fluid ms-3" style={{}} alt=""/>
                <img src={vendor2}  class="img-fluid ms-3" alt=""/>
                <img src={vendor3}  class="img-fluid  ms-3" alt=""/>
                <img src={vendor4} class="img-fluid  ms-3" alt=""/>
                <img src={vendor5} class="img-fluid  ms-3" alt=""/>
                <img src={vendor6} class="img-fluid  ms-3" alt=""/>
                <img  src={vendor7} class="img-fluid  ms-3" alt=""/>
                {/* <img src={vendor8} class="img-fluid  ms-3"alt=""/> */}
            </div>
        </div>
        <div class="bg-white mt-5">
            <div class="owl-carousel vendor-carousel">
                <img src={vendor1}  class="img-fluid ms-3" alt=""/>
                <img src={vendor2}  class="img-fluid ms-3" alt=""/>
                <img src={vendor3}  class="img-fluid  ms-3" alt=""/>
                <img src={vendor4} class="img-fluid  ms-3" alt=""/>
                <img src={vendor5} class="img-fluid  ms-3" alt=""/>
                <img src={vendor6} class="img-fluid  ms-3" alt=""/>
                <img  src={vendor7} class="img-fluid  ms-3" alt=""/>
                {/* <img src={vendor8} class="img-fluid  ms-3"alt=""/> */}
            </div>
        </div>
    </div>
  
</div>  

</>
    );
}

export default Company;
