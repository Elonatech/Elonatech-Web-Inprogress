import img2 from './captions/phone-network.jpg';
import iptelephonyHeader from './captions/pbxHeader.jpg';
import meetingPhoneChat from './captions/meetings_phone_chat_img.jpg';

const IpTelephony = () => {
    return (
    <>

{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${iptelephonyHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">IP Telephony & PBX Systems</h2>
   <h5 class=" mt-4 text-white text-center">Develop skills needed to protect networks and prevent intrusions.</h5>
   <p class=" mt-4 lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
 </div>

{/* body */}
<div className="container" style={{marginTop:"100px"}}>
  <div class="row justify-content-center align-items-center g-2">
  <h2 className='mb-5 text-center'>IP Telephony & PBX Systems</h2>
    <div class="col-md-6">
    <p className="fs-6 mt-2">Well, you have come to the right place, At Elonatech Nigeria Limited, We are One Of Nigeria's leading Website Design & Development Company Who's Core Values are Excellence, Professionalism, Integrity & Convenient Service.
        We Design & Develop all kinds Of Websites and Web applications with the most suitable platforms at a friendly budget.  <br /><br />We offer premium web services such as Business Software Development, Mobile App Development, Web Based Apps etc.
        We ensure that your needs are understood and implemented correctly. In fact, we are dedicated to the creation of a site that helps you become a success. Our specialty lies in providing comprehensive and custom web development services that provide you with a functional and complete solution.  <br /> <br />  The sites we develop are highly scalable with a great degree of usability. As a website development company, we also ensure the site responds fast and is SEO friendly with an excellent User Interface (UI) and User Experience (UX). You also get to enjoy complete control over your site. With our website development, you do not have to adjust your specifications to the capabilities of a given platform or change your design visions to fit a template. We deliver the work precisely to your requirements.
        We won't just build you an ordinary website but also develop a marketing strategy that can utilize the website and your marketing channels to generate constant leads, sales, customers, and clients.</p>
    </div>
    <div class="col-md-6">
      <img src={img2} alt="" className='img-fluid rounded' srcset="" />
    </div>
  </div>
</div>
{/* Innovative */}
<div className="container">
  <div className="row">
  <div className="col-md-6">
        <img src={meetingPhoneChat} className='img-fluid' alt="" />
    </div>
    <div className="col-md-6 mt-5">
    <div className="mt-5">
                 <h2 className='mt-5 mb-5'>A Flexible Business VoIP Phone Service</h2>
                <ul className="list-unstyled mt-2">
                    <li className="d-flex">
                    <i class="bi bi-check-circle-fill fs-3 text-danger me-3"></i>
                    <p className="mt-2 l">Schedule staff on an interactive calendar</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle-fill fs-3 text-danger me-3"></i>
                    <p className="mt-2">Manage and approve all types of absences</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle-fill fs-3 text-danger me-3"></i>
                    <p className="mt-2">See who’s present at work in real time</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle-fill fs-3 text-danger me-3"></i>
                    <p className="mt-2">Track overtime, be compliant, get HR reports and much more</p>
                    </li>
                </ul>
            </div>
    </div>
  </div>
</div>

{/* Call */}
<div className="container mb-5">
  <div className="row">
    <div className="col-md-4">
      <div className="card border-2 bg-light">
        <div className="card-body">
        <i class="bi bi-telephone-minus-fill text-danger  fs-2"></i>
        <p className='fw-bold'>Inbound & Outbound</p>
        <p className='lead fs-6'>Connect with your customers easily. And proactively reach your customers via different channels. Increase customer interactions, satisfaction and boost revenues.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
    <div className="card border-2 bg-light">
        <div className="card-body">
        <i class="bi bi-telephone-minus-fill text-danger fs-2"></i>
        <p className='fw-bold'>Voice Services</p>
        <p className='lead fs-6'>Connect with your customers easily. And proactively reach your customers via different channels. Increase customer interactions, satisfaction and boost revenues.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
    <div className="card border-2 bg-light">
        <div className="card-body">
        <i class="bi bi-terminal-fill text-danger  fs-2"></i>
        <p className='fw-bold'>Automatic Call Distribution (ACD)</p>
        <p className='lead fs-6'>Connect with your customers easily. And proactively reach your customers via different channels. Increase customer interactions, satisfaction and boost revenues.</p>
        </div>
      </div>
    </div>
  </div>
</div>


 </>
    );
}

export default IpTelephony;
