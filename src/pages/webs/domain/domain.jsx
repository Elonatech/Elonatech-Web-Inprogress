
import domainHeader from './captions/Domain-Registration.png'
import choosePlan from './captions/choose-plan.png'
import domain2 from './captions/domain-1-removebg-preview.png'
import  './domain.css';


const Domain = () => {
    return (
    <>
   {/* header */}
   <div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${domainHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Hosting Websites</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Internet Speed and Reliability</h5>
   <p class="lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
</div>


 {/* Work Section Begin  */}
    <section class="work-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h3 className='text-center mb-4 fw-bold' >HOW TO BUILD YOUR WEBSITE ONLINE TODAY?</h3>
                    </div>
                    <div class="work__text" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="work__item">
                                    <i class="fa fa-desktop"></i>
                                    <span>CREATE YOUR OWN WEBSITE WITH OUR</span>
                                    <h3>WEB SITE BUILDER</h3>
                                    <p className='lead fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida facilisis. </p>
                                    <a href="#" class="prim">Read More</a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="work__item">
                                    <i class="fa fa-shopping-bag"></i>
                                    <span>EASY CREATE, MANAGE & SELL</span>
                                    <h3>ONLINE STORE</h3>
                                    <p className='lead fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida facilisis. </p>
                                    <a href="#" class="prim">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/* Work Section End  */}

{/* Achievement Section Begin */}
<div class="container mt-5">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="achievement__item">
                        <span class="fa fa-user"></span>
                        <h2 class="achieve-counter">2468</h2>
                        <p>Clients</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="achievement__item">
                        <span class="fa fa-edit"></span>
                        <h2 class="achieve-counter">2468</h2>
                        <p>Domains</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="achievement__item">
                        <span class="fa fa-clone"></span>
                        <h2 class="achieve-counter">2468</h2>
                        <p>Server</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="achievement__item">
                        <span class="fa fa-cog"></span>
                        <h2 class="achieve-counter">2468</h2>
                        <p>Installs</p>
                    </div>
                </div>
            </div>
</div>

{/* Choose Plan Section End  */}
<div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="mt-4">
        <p className='lead fs-6 mt-5'>
         <strong className='fw-bold'>Lorem</strong> ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi omnis totam, praesentium earum corrupti exercitationem cum architecto dolor porro ea itaque consequatur illo culpa ullam iste possimus libero repudiandae.
         <br /><br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates maxime illo minima architecto eligendi voluptatum dolore ipsam, qui explicabo voluptatibus eius, quos corrupti earum. Rem modi corrupti voluptatem repellat.
         <br /><br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex iure officia perspiciatis ipsum at nesciunt, quibusdam velit reprehenderit veniam, omnis animi vel maxime provident rem deserunt repellendus itaque non?


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
