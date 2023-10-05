import aboutImage  from './captions/about-us.png';
import ppcHeader from './captions/ppcheader.jpg';
import ppcImg from './captions/payperclick2-removebg-preview.png';
import ppcImg2 from './captions/ppc3.png';
import ads from './captions/ppc-ads-image_neww.webp';
import ppc2 from './captions/ppc2.webp'


import './ppc.css'

const Ppc = () => {
    return (
    <>
{/* Header */}
<div class="container-fluid bg-secondary  py-5 " style={{height:"500px" , marginBottom:"" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ppcHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 "> 
   <h2 class=" mt-5 text-white text-center">Pay Per Click</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Internet Speed and Reliability</h5>
   <p class="lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
</div>

{/* ppc */}
{/* <section class="about-section spad mt-5">
        <div class="container mb-5">
            <div class="row">
            <div class="col-md-6">
                    <div class="about__text">
                        <h2>Welcom to Deerhost</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis.</p>
                        <div class="about__achievement">
                            <div class="about__achieve__item">
                                <span class="fa fa-clone"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Clients</p>
                            </div>
                            <div class="about__achieve__item">
                                <span class="fa fa-edit"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Domains</p>
                            </div>
                            <div class="about__achieve__item">
                                <span class="fa fa-clone"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Server</p>
                            </div>
                            <div class="about__achieve__item">
                                <span class="fa fa-cog"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Installs</p>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary mb-4"><b>Get started now</b></a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="">
                        <img src={ppcImg2} className='img-fluid' alt=""/>
                    </div>
                </div>
    
            </div>
        </div>
 </section> */}

{/* ppc 2 */}
<div class="section-top-border mt-5">
<div className="container ">
<h3 className='text-center fw-bold'>Make the Right Decisions for Your Brand With PPC Advertising</h3>
<div class="row">
<div class="col-md-6">
	<img src={ppcImg} alt="" class="img-fluid"/>
	</div>
	<div class="col-md-6">
	
	<p className='mt-5 lead fs-6' style={{textAlign:"justify"}}>Today, the digital landscape keeps growing and websites are proliferating at warp speed. From small companies and franchises to eCommerce businesses and entrepreneurs, almost everyone is on the internet, figuring out advertising avenues and maximizing all possible conversion paths. Increased marketing opportunities, however, come with greater challenges.
    <br /><br />
    Despite the availability of advertising tools and digital marketing channels, some businesses remain invisible to their target audience. As a result, market players are in an uphill battle, barely making progress with their internet marketing efforts.
    </p>
	</div>
</div>
</div>
</div>
{/* ppc 2 */}
<div class="section-top-border mt-5">
<div className="container ">
<h3 className='text-center fw-bold'>Make the Right Decisions for Your Brand With PPC Advertising</h3>
<div class="row mt-5 mb-5">
<div class="col-md-6">
    <div className="text-center">
	<img src={ppcImg2} alt="" class="img-fluid" style={{height:"26rem"}}/>
    </div>
</div>
<div class="col-md-6 mt-5">
    <h5 className='fw-bold mt-3 mb-3'>Make the Right Decisions for Your Brand With PPC Advertising</h5>
	<p className='lead fs-6' style={{textAlign:"justify"}}>Today, the digital landscape keeps growing and websites are proliferating at warp speed. From small companies and franchises to eCommerce businesses and entrepreneurs, almost everyone is on the internet, figuring out advertising avenues and maximizing all possible conversion paths. Increased marketing opportunities, however, come with greater challenges.
    <br /><br />
    Despite the availability of advertising tools and digital marketing channels, some businesses remain invisible to their target audience. As a result, market players are in an uphill battle, barely making progress with their internet marketing efforts.
    </p>
</div>
</div>
</div>
</div>

{/* click */}
<div class="section-top-border">
<div className="container ">
<h3 className='text-center fw-bold'>What Is Pay Per Click and How Does It Work?</h3>
<div class="row">
<div class="col-md-6">
	<img src={ppc2} alt="" class="img-fluid mb-4 mt-4"/>
	</div>
	<div class="col-md-6">
	<p className='mt-5 lead fs-6' style={{textAlign:"justify"}}>A Hanapin Marketing report shows that 79 percent of marketers find paid search marketing beneficial to their business. Consequently, approximately 62 percent of industry players said they would continue to increase their PPC ads budget in the coming years to draw new customers looking for their services.
    <br /><br />
    According to Social Media Today, more than 7 million advertisers spent a total of $10.01 billion for pay per click ads in 2017 alone. Evidently, pay per click has become one of the most widely used marketing frameworks for generating higher ROI. But what is pay per click and how can it ramp up your digital marketing efforts?
    </p>
	</div>
    <p  className='lead fs-6'>Thrive’s PPC experts explain what is paid search and how it works to guide you through the fundamentals of PPC management. By understanding pay per click processes, you have a better chance of launching profitable campaigns. Learn all about PPC marketing and find out how our pay per click marketing agency can help you achieve success.</p>
</div>
</div>
</div>

{/* ppc ads */}
<div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-8">
            <div className="">
               <p className='fw-bold fs-5'>What Are the Different Types of PPC Ads?</p>
               <p className='lead fs-6' style={{textAlign:"justify"}}>Now that you know what is paid search, the next step is to understand the different types of PPC marketing campaigns that can help you build your online presence and promote your services to the right audience. Our pay per click advertising agency works closely with your team to determine the appropriate PPC ads that you can use to fill your sales funnel.
               <br /><br />
               There are various types of pay per click ads available, depending on your goals.
               </p>
            </div>
        </div>
        <div className="col-md-4">
            <div className="">
                <img src={ads} className='img-fluid' alt="" />
            </div>
        </div>
    </div>
</div>






    </>
    );
}

export default Ppc;
