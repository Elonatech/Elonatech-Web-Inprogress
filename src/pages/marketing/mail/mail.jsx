import explore1 from './captions/email1_720.jpg'
import mailHeader from './captions/mailHeader.jpg'
import Email from './captions/54790.jpg'
import email2 from './captions/email-marketing-business-removebg-preview.png'


const Mail = () => {
    return (
    <>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mailHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Email Marketing</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Email Marketing to nurture leads and increase sales.</h5>
   <p class="lead text-white text-center">A form of direct marketing as well as digital marketing, that uses email to promote your business's products or services.</p>
 </div>
</div>

{/* Explore */}
<section class="section" id="explore">
        <div class="container mt-5 mb-5 shadow rounded"style={{backgroundColor:"rgb(246 246 247)"}}>
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h3>Email journeys for perfectly timed sends</h3>
                  <p style={{textAlign:"justify"}} className='mt-4'>
                  Email marketing is a powerful marketing channel that uses email to promote your business's products or services. It can help make your customers aware of your latest items or offers by integrating it into your marketing automation efforts.
                  <br /><br />
                    It's the act of sending a commercial message, typically to a group of people, using email. In its broadest sense, every email sent to a potential or current customer could be considered email marketing. It involves using email to send advertisements, request business, or solicit sales or donations.
                  </p>
                </div>
                <div class="col-md-6">
                 <img src={email2} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
</section>

{/* Email */}
<div className="container   mb-5" style={{marginTop:""}}>
  <div class="row justify-content-center  g-4">
  <div class="col-md-6">
    <div className="card mt-3 border-3 border-danger" style={{height:"25rem"}}>

      <img src={explore1} alt="" className='img-fluid' style={{height:"24.6rem"}}  />
    </div>
    </div>
    <div class="col-md-6 ps-5">
    <h2 className='mb-4 '>Our Email Marketing Process</h2>
    <ul className='list-unstyled'>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Strategy and Goal Setting</h6>
            </div>
            <p className='lead fs-6'>We begin by understanding your business objectives, target audience, and email marketing goals. Based on this information, we develop a customized email marketing strategy that aligns with your overall digital marketing strategy.</p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >List Building and Segmentation</h6>
            </div>
            <p className='lead fs-6'>We help you build a quality email subscriber list through various tactics, such as lead magnets and opt-in forms. We then segment your list based on factors such as demographics, preferences, and past engagement to ensure targeted and personalized messaging.</p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Content Creation and Design</h6>
            </div>
            <p className='lead fs-6'>Our creative team works closely with you to create compelling email content that aligns with your brand voice and objectives. We design visually appealing email templates that enhance engagement and drive conversions.</p>
        </li>
    </ul>
    </div>
  </div>
</div>

<div className="container  mb-5" style={{marginBottom:"px"}}>
  <div class="row justify-content-center  g-4">
    <div class="col-md-6 ps-5 mt-5">
    <ul className='list-unstyled'>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Automation and Campaign Execution</h6>
            </div>
            <p className='lead fs-6'>We set up automated email workflows, including welcome series, abandoned cart reminders, and post-purchase follow-ups. Our team manages the execution of your email campaigns, ensuring timely delivery and optimal engagement.</p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Performance Tracking and Optimization</h6>
            </div>
            <p className='lead fs-6'>We monitor the performance of your email campaigns, analyzing open rates, click-through rates, and conversion metrics. Based on data-driven insights, we refine and optimize your campaigns to enhance their effectiveness.</p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Re-engagement emails</h6>
            </div>
            <p className='lead fs-6'>Set up sequences of win-back emails that engage inactive subscribers to become buyers.</p>
        </li>
    </ul>
    </div>
    <div class="col-md-6">
    <div className="card mt-3 border-3 border-danger" style={{height:"25rem"}}>
      <img src={Email} alt="" className='img-fluid' style={{height:"24.6rem"}}  />
    </div>
    </div>
  </div>
</div>
{/*Email End  */}

 {/* frequent question */}
 <section id="faq" class="faq mb-5 " style={{marginTop:"100px"}}>
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-4">
            <div class="content px-xl-5">
              <h3><strong>Automated Email FAQs</strong></h3>
            </div>
          </div>

          <div class="col-lg-8">

            <div class="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    <span class="num">1.</span>
                    What is automated email?
                  </button>
                </h3>
                <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  Automated marketing emails is the process of setting up emails on autopilot using an email marketing automation tool so that you always convey the right message to the right people on your list at the right time.
                   <br /><br />
                 With email automation, you automate email sending of a single email message or an email series in a timed (predefined delay, specific date, anniversary) or triggered (based on customer actions like purchasing a product or clicking a link in the email) fashion.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    <span class="num">2.</span>
                    How does automatic marketing automation work?
                  </button>
                </h3>
                <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  Email automation is easy to follow once you understand how it operates. Here’s a simplified explanation. <br /><br />
                  Design an email campaign with the emails you wish to send to different segments of users. These could be single email campaigns, such as promotional messages, or multi-email sequences based on what you are trying to do.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    <span class="num">3.</span>
                    What are the benefits of sending email automatically?
                  </button>
                </h3>
                <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body"> 
                  From ecommerce to service-based startups, businesses in nearly every niche and industry can benefit from. The following are just a few of the benefits of email automation. Avoid the cost of additional manpower to handle email correspondence manually
                  <br /><br />
                  Setup an automated email sales funnel at a cost far lesser than selling over other channels such as PPC and social media advertising.
                </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                    <span class="num">4.</span>
                    How to send automated emails?
                  </button>
                </h3>
                <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  With the right email service provider, setting up automation for your email marketing strategy can be not only easy, but also fun.
                 </div>
                </div>
              </div>
            </div>

          </div>
        </div>
         
      </div>
</section>

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
