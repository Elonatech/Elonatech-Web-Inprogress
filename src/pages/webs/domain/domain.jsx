
import domainHeader from './captions/yp[fc0fk.png'
import choosePlan from './captions/choose-plan.png'
import domain2 from './captions/domain-1-removebg-preview.png'

import  './domain.css';


const Domain = () => {
    return (
    <>
   {/* header */}
   <div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${domainHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Domain Websites</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Internet Speed and Reliability</h5>
   <p class="lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
</div>


{/* Register Domain Section Begin  */}
<section class="register-domain spad">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                    <div class="register__text">
                        <div class="section-title">
                            <h3 className='text-center mb-4 fw-bold' >Register Your Domain Now!</h3>
                        </div>
                        <div class="register__form">
                            <form action="#">
                                <input type="text" placeholder="ex: cloudhost"/>
                                <div class="change__extension" >
                                 .com  <i class="bi bi-caret-down-fill ms-2" style={{position:"absolute" , top:"3px"}}></i>
                                    <ul>
                                        <li>.net</li>
                                        <li>.org</li>
                                        <li>.gov</li>
                                    </ul>
                                </div>
                                <button type="submit" class="site-btn">Search</button>
                            </form>
                        </div>

                        {/* domain */}
                        <div className="container mt-4 mb-4">
                        <div class="row">
                        <div class="col-6 col-md-3">
                        <div className="text-center">
                            
                         <div class="register__result">
                            <ul>
                                <li>.com <span>$1.95</span></li>
                            </ul>
                        </div>  
                            
                        </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div className="text-center">     
                         <div class="register__result">
                            <ul>
                            <li>.gov <span>$1.95</span></li>
                            </ul>
                        </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                        <div className="text-center">
                        <div class="register__result">
                            <ul>
                            <li>.org <span>$1.95</span></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        <div class="col-6 col-md-3">
                        <div className="text-center">
                        <div class="register__result">
                            <ul>
                            <li>.ng <span>$1.95</span></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <p className='lead fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
            </div>
        </div>
</section>

{/* Choose Plan Section End  */}
<div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="mt-4">
        <p className='lead fs-6 mt-5'>
         <strong className='fw-bold'>Lorem</strong> ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi omnis totam, praesentium earum corrupti exercitationem cum architecto dolor porro ea itaque consequatur illo culpa ullam iste possimus libero repudiandae.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates maxime illo minima architecto eligendi voluptatum dolore ipsam, qui explicabo voluptatibus eius, quos corrupti earum. Rem modi corrupti voluptatem repellat.
        </p>
        </div>
        </div>
      <div className="col-md-6">
      <div className="">
        <img src={domain2} alt="" />
      </div>
      </div>
  </div>
</div>
  

{/* Wht do you get */}
<div className="container mt-5">
    <p className='fs-2 fw-bold text-center'>What Do You Get?</p>
    <p className='mb-4 text-center'>Everything you could ever ask for. Register with us for the most comprehensive set of tools and features for the ideal domain name experience.</p>
    <div className="row">
        <div className="col-md-6">
        <div className="ms-5">
            <div className="d-flex">
            <i class="bi bi-file-earmark-pdf-fill fs-3 ms-2"></i>
            <h5 className='ms-3 mt-2'>Content Management</h5>
            </div>
           <p className='lead fs-6 ms-5'>Manage domain registrant, admin, and technical contacts. <br /> Change them, execute trade or transfers, and update contact <br /> details in bulk.</p>
        </div>
        </div>
        <div className="col-md-6">
        <div className="ms-5">
            <div className="d-flex">
            <i class="bi bi-clipboard-check-fill fs-3 ms-2"></i>
            <h5 className='ms-3 mt-2 '>Always in Your Name</h5>
            </div>
           <p className='lead fs-6 ms-5'>Your domain will always be registered under your own name. <br /> No compromises  or  losing it in the future</p>
        </div>
        </div>
        <div className="col-md-6">
        <div className="ms-5">
            <div className="d-flex">
            <i class="bi bi-shield-lock-fill fs-3 ms-2"></i>
            <h5 className='ms-3 mt-2'>Free Privacy Protection</h5>
            </div>
           <p className='lead fs-6 ms-5'>Privacy is paramount to us, so full WHOIS privacy protection is included <br /> and enabled as a standard at no extra cost.</p>
        </div>
        </div>
        <div className="col-md-6">
        <div className="ms-5">
            <div className="d-flex">
            <i class="bi bi-usb-mini-fill fs-3 ms-2"></i>
            <h5 className='ms-3 mt-2'>Transfer Our Free Of Charges</h5>
            </div>
           <p className='lead fs-6 ms-5'>No stealth fees for transferring out. Generate your authorization <br /> codes and  lock your domain via our control panel.</p>
        </div>
        </div>
    </div>
</div>

{/* Choose Plan Section Begin  */}
<section class="choose-plan-section" style={{marginTop:"80px"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <img src={choosePlan} alt=""/>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="plan__text">
                        <h3>up to 70% discount with free domain name registration included!</h3>
                        <ul>
                            <li><span class="fa fa-check"></span> FREE Domain Name</li>
                            <li><span class="fa fa-check"></span> FREE Email Address</li>
                            <li><span class="fa fa-check"></span> Plently of disk space</li>
                            <li><span class="fa fa-check"></span> FREE Website Bullder</li>
                            <li><span class="fa fa-check"></span> FREE Marketing Tools</li>
                            <li><span class="fa fa-check"></span> 1-Click WordPress Install</li>
                        </ul>
                        <a href="#" class="prim">Get start now</a>
                    </div>
                </div>
            </div>
        </div>
</section>
 
 {/* Get in touch */}
 <div className="container-fluid mt-5" style={{backgroundColor:"#120851"}}>
    <div className="container">
    <div className="row">
        <div className="col-md-6">
         <p className='text-white pt-5 pb-5 fs-1'>Talk with an expert about your next domain decision</p>
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

export default Domain;
