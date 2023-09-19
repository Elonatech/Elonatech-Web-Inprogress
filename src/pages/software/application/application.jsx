import applicationHeader from './captions/pexels-pixabay-248360.jpg'
import img2 from './captions/application software.jpg'

import './application.css'
const Application = () => {
    return (
    <>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${applicationHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"50% 0", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Business Application Software</h2>
   <h5 class=" mt-4 text-white text-center">Monitor, Configure and Maintain Servers to operate reliably and optimally</h5>
   <p class="lead text-white text-center">Minimizing downtimes while maximizing reliability in other to meet the needs of organizations over time.</p>
 </div>
 </div>



{/* services */}
<section id="services" class="services ">
      <div class="container" >

        <div class="section-header">
          <h2 className='text-center'>Application Software We Support</h2>
          <div className='' style={{backgroundColor:"red" , height:"3px" , width:"80px", margin:"auto" }}></div>
        </div>

        <div class="row mt-2 gy-4" data-aos="fade-up" data-aos-delay="100">

          <div class="col-lg-4 col-md-6">
            <div class="service-item  position-relative">
              <div class="icon">
              <i class="bi bi-envelope"></i>
              </div>
              <h3>Microsoft Office suite (Office, Excel, Word, PowerPoint, Outlook) etc.</h3>
              <p style={{textAlign:"justify"}}>OfficeSuite is a practical 5-in-1 office pack for Windows PC, giving you advanced features to create, edit, comment, format, convert, and protect documents.</p>
              <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon mt-2">
              <i class="bi bi-cloud-check"></i>
              </div>
              <h3> OneDrive | Office 365 | Share Point</h3>
              <p style={{textAlign:"justify"}} className='mt-3'>OneDrive gives you more storage space for your photos and files. OneDrive's cloud storage will secure photos, videos, files and keep them safe.</p>
              <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="bi bi-windows"></i>
              </div>
              <h3>Microsoft Windows range of products (Server and Client Operating Systems) </h3>
              <p style={{textAlign:"justify"}}>Microsoft Windows is a graphical operating system developed and published by Microsoft. It provides a way to store files, run software, play games, watch videos, and connect to the Internet.</p>
              <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
               <i class="bi bi-globe2"></i>
              </div>
              <h3>Internet browsers – Firefox, Safari, Opera, Chrome, etc.</h3>
              <p style={{textAlign:"justify"}}>Web/internet browser is a software program that allows you to access and view web pages.</p>
              <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <i class="bi bi-shield"></i>
              </div>
              <h3>PC/Mobile Security Software – Antivirus and Anti-malware (Norton Security) etc.</h3>
              <p style={{textAlign:"justify"}}>Mobile Security to help protect you from harmful viruses and malware</p>
              <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="bi bi-skype"></i>
              </div>
              <h3>Mobile software such as Skype (communication), and Slack (for team collaboration) etc.</h3>
              <p style={{textAlign:"justify"}}>Mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch..</p>
              <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>

      </div>
    </section>



{/* body */}
<div className="container  mb-5 mt-5" style={{marginTop:""}}>
  <div class="row justify-content-center  g-4">
    <div class="col-md-6 ps-5">
    <h2 className='mb-4 '>How Application Software works?</h2>
    <p className="fs-6 " style={{textAlign:"justify"}}>
    Software designed to handle specific tasks for users are known as application software, also called application program. Such software directs the computer to execute commands given by the user and may be said to include any program that processes data for a user.
    <br /><br />
    This includes application software that enables a user to perform a task, such as Microsoft Office suite (Excel, Word, PowerPoint, Outlook, etc.) Internet browsers like Firefox, Safari, and Chrome; mobile pieces of software such as Pandora, Skype (for real-time online communication), and Slack (for team collaboration); PDF viewers and readers; 
    <br /><br />
    Business Application Software (These programs are built to facilitate certain business functions, improving the accuracy, efficiency, and effectiveness of operations), etc.
   

    </p>
    </div>
    <div class="col-md-6">
      <img src={img2} alt="" className='img-fluid rounded'  srcset="" />
    </div>
  </div>
</div>


 {/* Get in touch */}
 <div className="container-fluid" style={{backgroundColor:"#7c42f3"}}>
    <div className="container">
    <div className="row">
        <div className="col-md-6">
         <p className='text-white pt-5 pb-5 fs-1'>Talk with an expert about your next cybersecurity decision</p>
        </div>
        <div className="col-md-6">
          
                <div className="text-end mt-5 mb-3">
                    <button className='btn btn-outline-dark rounded-0 btn-lg border-light text-white mt-5 trr ps-4  pe-4'>GET IN TOUCH</button>
              
            </div>
        </div>
    </div>
    </div>
 </div>


    {/* call to action  */}
{/* <section id="call-to-action" class="call-to-action mt-5 mb-5">
      <div class="container text-center" data-aos="zoom-out">
        <a href="https://www.youtubenQ" class="glightbox play-btn"></a>
        <h3>Call To Action</h3>
        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a class="cta-btn text-decoration-none" href="#">Call To Action</a>
      </div>
</section> */}






    </>
    );
}

export default Application;
