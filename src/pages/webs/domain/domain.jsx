
import domainHeader from './captions/pngtree-domain-name-address-company-web-photo-image_21734744.jpg';
import choosePlan from './captions/choose-plan.png';
import domain2 from './captions/domain-1-removebg-preview.png';
import  './domain.css';


const Domain = () => {
    return (
    <>
   {/* header */}
   <div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${domainHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Domain Registration</h2>
   <h5 class=" mt-4 text-white text-center">Everything You Need To Succeed Online, It all starts with a great domain</h5>
   <p class="lead text-white text-center">Get your website online today! Register .com.ng, .ng Domains and Get Free DNS & Email Hosting.</p>
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
                                        <li>.dev</li>
                                        <li>.org</li>
                                        <li>.com.ng</li>
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
                                <li>.com <span>$16.99</span></li>
                            </ul>
                        </div>  
                            
                        </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div className="text-center">     
                         <div class="register__result">
                            <ul>
                            <li>.dev <span>$21.99</span></li>
                            </ul>
                        </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                        <div className="text-center">
                        <div class="register__result">
                            <ul>
                            <li>.org <span>$18.99</span></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        <div class="col-6 col-md-3">
                        <div className="text-center">
                        <div class="register__result">
                            <ul>
                            <li>.com.ng <span>$9.00</span></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <p className='lead fs-6'>The right domain name goes a long way. Expect greater traction with your target audience, a unique online presence and your own identity in an ever-growing market. Find your perfect domain now.</p>
                    </div>
                </div>
            </div>
        </div>
</section>

{/*   */}
<div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="mt-4">
        <p className='lead fs-6'>
         At Elonatech we take pride in providing secure, reliable & affordable Domain Registration to all our clients. That is why we offer the best industry prices not only for new domains registered with us but also for Domain Renewals & hassle free Domain Transfers to us.
         <br /><br />
         You can easily register any domain name of your choice with us. We offer several global domain extensions including major TLDs like .com, .net, .biz, .org & also popular ccTLDs including .ng (NIRA), .com.ng, .in, .co.in, .co, .co.uk, .pw and many other popular domain extensions. Our domain registration prices start from as low as $9.
         <br /><br />
         All the domain names registered with us come with 24x7 Support & many free services worth over $15 including Free DNS Service, Free Privacy Protection to hide your whois information from spammers & data miners, Free Domain Forwarding, Unlimited Mail Forwards, Domain Theft Protection & Registrar Lock to prevent Unauthorized domain transfer.
        </p>
        </div>
        </div>
      <div className="col-md-6">
      <div className="">
        <img src={domain2} className='img-fluid me-3' alt="" />
      </div>
      </div>
  </div>
</div>
  

{/* Wht do you get */}
<div className="container mt-5">
    <p className='fs-2 fw-bold text-center'>What You Get?</p>
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
            <h5 className='ms-3 mt-2'>Transfer Free Of Charges</h5>
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
                        <h3>Every great website starts with a domain. Our domain name registration includes!</h3>
                        <ul>
                            <li><span class="fa fa-check"></span>Free DNS Management</li>
                            <li><span class="fa fa-check"></span>Multiple Year Discount</li>
                            <li><span class="fa fa-check"></span>Free Renewal With Transfer</li>
                            <li><span class="fa fa-check"></span>Instant Activation</li>
                            <li><span class="fa fa-check"></span>Registrar Lock</li>
                            <li><span class="fa fa-check"></span>Over 400 Domain Extensions</li>
                        </ul>
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
