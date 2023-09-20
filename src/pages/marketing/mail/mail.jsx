
import explore1 from './captions/1668588494618.png'

import mailHeader from './captions/mailHeader.jpg'
import Email from './captions/54790.jpg'
const Mail = () => {
    return (
    <>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mailHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Email Marketing</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Internet Speed and Reliability</h5>
   <p class="lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
</div>

    {/* Explore */}
    <section class="section" id="explore">
        <div class="container mt-5 mb-5">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-content">
                        <h2>Explore Our Products</h2>
                        <span>You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</span>
                        <div class="quote">
                            <i class="fa fa-quote-left"></i><p>You are not allowed to redistribute this template ZIP file on any other website.</p>
                        </div>
                        <p>There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.</p>
                        <p>If this template is beneficial for your website or business, please kindly <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank">support us</a> a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
                        <div class="main-border-button mt-5">
                            <a href="products.html" className='btn btn-dark mb-5'>Discover More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                 <img src={explore1} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </section>

{/* Email */}
<div className="container  mb-5" style={{marginTop:""}}>
  <div class="row justify-content-center  g-4">
  <div class="col-md-6">
      <img src={Email} alt="" className='img-fluid rounded'  srcset="" />
    </div>
    <div class="col-md-6 ps-5 mt-5">
    <h2 className='mb-4 '>How Application Software works?</h2>
    <p className="fs-6 " style={{textAlign:"justify"}}>
    Software designed to handle specific tasks for users are known as application software, also called application program. Such software directs the computer to execute commands given by the user and may be said to include any program that processes data for a user.
    <br /><br />
    This includes application software that enables a user to perform a task, such as Microsoft Office suite (Excel, Word, PowerPoint, Outlook, etc.) Internet browsers like Firefox, Safari, and Chrome; mobile pieces of software such as Pandora, Skype (for real-time online communication), and Slack (for team collaboration); PDF viewers and readers; 
    <br /><br />
    Business Application Software (These programs are built to facilitate certain business functions, improving), etc.
   
    </p>
    </div>
  </div>
</div>

 {/* Get in touch */}
 <div className="container-fluid" style={{backgroundColor:"#007bb5"}}>
    <div className="container">
    <div className="row">
        <div className="col-md-6">
         <p className='text-white pt-5 pb-5 fs-1'>Talk with an expert about your next email marketing decision</p>
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

export default Mail;
