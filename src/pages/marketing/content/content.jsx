import contentHeader from './captions/84646169-words.jpg'
import content from './captions/2. Content Marketing logo removed.png'
import content2 from './captions/Content-marketing-cycle.webp'


const Content = () => {
    return (
<>
{/* Header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contentHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Content Marketing</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Internet Speed and Reliability</h5>
   <p class="lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
</div>

   {/* content1 */}
   <section class="section" id="explore">
        <div class="container">
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

                        <a href="products.html" className='btn btn-dark mb-4'>Discover More</a>
                       
                    </div>
                </div>
                <div class="col-md-6">
                 <img src={content} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </section>

  {/* details  */}
<div class="section">
      <div class="container">
        <div class="row text-left mb-3">
          <div class="col-12">
            <h2 class="font-weight-bold heading  mb-4">About Us</h2>
          </div>
          <div class="col-lg-6">
            <p class="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              enim pariatur similique debitis vel nisi qui reprehenderit totam?
              Quod maiores.
            </p>
            <p class="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              saepe, explicabo nihil. Est, autem error cumque ipsum repellendus
              veniam sed blanditiis unde ullam maxime veritatis perferendis
              cupiditate, at non esse!
            </p>
            <p class="text-black">
              Enim, nisi labore exercitationem facere cupiditate nobis quod
              autem veritatis quis minima expedita. Cumque odio illo iusto
              reiciendis, labore impedit omnis, nihil aut atque, facilis
              necessitatibus asperiores porro qui nam.
            </p>
          </div>
          <div class="col-lg-6">
            <p class="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              saepe, explicabo nihil. Est, autem error cumque ipsum repellendus
              veniam sed blanditiis unde ullam maxime veritatis perferendis
              cupiditate, at non esse!
            </p>
            <p class="text-black">
              Enim, nisi labore exercitationem facere cupiditate nobis quod
              autem veritatis quis minima expedita. Cumque odio illo iusto
              reiciendis, labore impedit omnis, nihil aut atque, facilis
              necessitatibus asperiores porro qui nam.
            </p>
          </div>
        </div>
      </div>
    </div>
 
{/* content2 */}
<div className="container  mb-5" style={{marginTop:""}}>
  <div class="row justify-content-center">
  <div class="col-md-6">
      <img src={content2} alt="" className='img-fluid rounded'  srcset="" />
    </div>
    <div class="col-md-6 mt-4">
    <h2 className='mb-4 mt-5'>How Application Software works?</h2>
    <p className="fs-6" style={{textAlign:"justify"}}>
    Software designed to handle specific tasks for users are known as application software, also called application program. Such software directs the computer to execute commands given by the user and may be said to include any program that processes data for a user.
    <br /><br />
    This includes application software that enables a user to perform a task, such as Microsoft Office suite (Excel, Word, PowerPoint, Outlook, etc.) Internet browsers like Firefox, Safari, and Chrome; mobile pieces of software such as Pandora, Skype (for real-time online communication), and Slack (for team collaboration); PDF viewers and readers; 
    <br /><br />
    Business Application Software (These programs are built to facilitate certain business functions, improving), etc.
   
    </p>
    </div>
  </div>
</div>
      
</>
    );
}

export default Content;
