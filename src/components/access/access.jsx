import accessHeader from './captions/web-wallpaper-1680x1050.jpg'
import accessImg from './captions/depositphotos_354792732-stock-photo-business-technology-internet-network-concept.jpg';
import cctvImg from './captions/camera-supervision-check-3762055-1024x678-1.jpg'
import epabx from './captions/epabx-telephone-system-500x500-1-300x185-1.png'

const Access = () => {
    return (
    <>

{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${accessHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Access Control</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Internet Speed and Reliability</h5>
   <p class=" mt-4 lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
 </div>

{/* body */}
<div className="container">
    <div class="row">
    <div class="col-md-6">
      <div class="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h5 class="mb-0">ACCESS CONTROL & SURVEILLANCE SOLUTION (CCTV)</h5>
          <div className="underline-w mt-2" style={{  width:"80px", height:"3px" , background:"#f00"}}></div>
          <img src={accessImg} className='img-fluid mt-3 rounded' alt="" />
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <p className='mt-4 lead fs-5'><strong>O</strong>f all the services offered at ELONATECH, Access control & Surveillance solutions is one among which delivers monitoring of behavior, activities, or information for the purpose of information gathering, influencing, managing or directing. Popular Security cameras & related integrated devices are promoted by ELONATECH, and we have maintained a good scale in best of observation and It is well acknowledged by all industries about the importance of Surveillance.</p>
    </div>
  </div>
</div>

{/* WHY INVEST IN CCTV */}
<div className="container mb-4">
  <h2 className='text-center'>Why Invest With Us</h2>
  <div className="underline-w" style={{  width:"50px", height:"3px" ,margin:"auto" , background:"#f00"}}></div>
  <div className="row">
    <div className="col-md-6">
            <div className="mt-5">
              <ul className='list-unstyled'>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''> Quality video evidence helps solve crime and increases apprehensions by private security and police agencies</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Acts as a deterrent to those that would consider being dishonest.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''> Saves money by identifying operational issues.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>All too often businesses discover product or money missing weeks after the fact. Having video archives available to go back and review often solves these mysteries</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Video analytics – let video help the operational side of your business by mapping customer patterns, counting people, capturing license plates and more.</p> 
                </li>

              </ul>
            </div>
    </div>
    <div className="col-md-6">
      <img src={cctvImg} className='img-fluid' style={{height:"26rem", width:"26rem", borderRadius:"50%"}}   alt="" />
    </div>
  </div>
</div>

{/* PBX */}
<div className="container mb-5">
  <div className="row">
    <div className="col-md-4 mt-3">
      <div className="">
        <h5 className='fw-bold'>PBX (INTERCOM) SYSTEM</h5>
        <div className="underline-w mt-1" style={{  width:"40px", height:"3px" , background:"#f00"}}></div>
        <img src={epabx} className='img-fluid mt-4' style={{height:"11rem" , width:"20rem"}} alt="" />
      </div>
    </div>
    <div className="col-md-8">
      <div className="">
         <p className='lead p-2 pb-3'>Private Branch Exchange, which is a private telephone network used within a company or organization. The users of the PBX phone system can communicate within their company or organization and the outside world, using different communication channels like Voice over IP, ISDN or analog. A PBX also allows you to have more phones than physical phone lines (PTSN) and allows free calls between users. It also provides features like transfers, voicemail, call recording, interactive voice menus (IVRs) and ACD call queues. Our range of products offers intercoms for a variety of purposes. They are intended to provide maximum comfort and safety to offices and homes</p>
      </div>
    </div>
  </div>
</div>





{/* End Services  */}
    </>
    );
}

export default Access;
