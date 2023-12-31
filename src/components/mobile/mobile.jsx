import sideimage from  './caption/shadow2.png'
import phoneRepair from './caption/phoneRepair.jpg'
import mobileRight from './caption/mobileRight2.jpg'
import mobileHeader from './caption/mobileHeader2.png'
import bannerFilp from './caption/bannerFlip9.png'





const Mobile = () => {
    return (
<>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mobileHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Mobile Device Repair</h2>
   <h5 class=" mt-4 text-white text-center">Excellence, Professionalism, Integrity & Convenient Service</h5>
   <p class=" mt-4 lead text-white text-center">We assess mobile phones functionality, install and update phone software, troubleshoot wiring problems,and replace damaged parts</p>
 </div>
 <div class="icon-boxes position-relative mt-5">
      <div class="container position-relative">
        <div class="row gy-4 mt-5">
          <div class="col-md-12 col-md-12">
             <div class="text-bg-light shadow py-4 rounded">
              <h4 className="text-center">Why Choose Elonatech for Phone Repair</h4>
              <p class="lead my-3 text-center"><img src={sideimage} alt="" style={{height:"3rem" , width:"4rem"}} />Elonatech provides customers with excellent phone repair services with well-trained team of repair technicians, top quality parts and timely customer care support.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
 </div>

{/* Phone repair issues */}
<div className="container  mb-5 " style={{marginTop:"200px"}}>
<div class="row justify-content-md-center ">
      <div class="col-md-6">
       {/*  */}
       <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="d-flex pb-4">
            <i class="bi bi-phone me-3" style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>Broken Phone Screen</h5>
            </div>
            </div>
          <div className="col-md-4">
          <div className="d-flex">
          <i class="bi bi-lightning-charge me-3" style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>Charging Port Issue</h5>
            </div>
            </div>
          <div className="col-md-4">
          <div className="d-flex">
            <i class="bi bi-phone me-3" style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>Water Damage</h5>
            </div>
            </div>
          <div className="col-md-4">
          <div className="d-flex pb-4">
          <i class="bi bi-battery me-3" style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>Battery Draining Fast</h5>
            </div>
            </div>
          <div className="col-md-4">
          <div className="d-flex">
          <i class="bi bi-speaker  me-3"  style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>Speaker Not Working</h5>
            </div>
            </div>
          <div className="col-md-4">
          <div className="d-flex">
            <i class="bi bi-phone me-3" style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>Frequent Hanging</h5>
           </div>
           </div>
          <div className="col-md-4">
          <div className="d-flex pb-4">
            <i class="bi bi-phone me-3" style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>Phone Overheating</h5>
           </div>
            </div>
          <div className="col-md-4">
          <div className="d-flex">
          <i class="bi bi-wifi me-3" style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>Internet Connection Issues</h5>
           </div>
            </div>
          <div className="col-md-4">
          <div className="d-flex">
          <i class="bi bi-menu-button me-3" style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>Buttons Not Working</h5>
           </div>
            </div>
          <div className="col-md-4">
          <div className="d-flex">
          <i class="bi bi-app  me-3" style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>App Crashes</h5>
           </div>
            </div>
          <div className="col-md-4">
          <div className="d-flex">
          <i class="bi bi-camera me-3" style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>Camera Not Working</h5>
           </div>
            </div>
          <div className="col-md-4">
          <div className="d-flex">
          <i class="bi bi-lightbulb me-3" style={{fontSize:"40px"}}></i>
              <h5 className='mt-3'>Flashlight Not Working</h5>
           </div>
            </div>
        </div>
       </div>
       {/*  */}
      </div>  
      
      <div class="col-md-5">
        <img src={phoneRepair} alt=""   className='img-fluid rounded  shadow' />
      </div>
    </div>
</div>

{/* Technology advance */}
<div className="container rounded mb-5" style={{backgroundColor:"#3f556d"}}>
  <div className="row justify-content-md-center">
    <div className="col-md-6 mt-5" >
  <p className='text-white mt-5 mb-5' style={{textAlign:"justify"}}>As technology advances, devices utilizing these technologies become smaller and smaller. Today's cell phones have more computing power than past computers that took up an entire room of space. Modern mobile devices allow users to hold the world, or at least all of its information, maps, and games in their hands. <br />
      We repair all types of gadgets ranging from phones to tabs, smart watches, cameras, Bluetooth speakers and many more. We offer pick up services, our seasoned and experienced Phone Repair Technicians are available, to proffer solution to different phone challenges.</p>
    </div>
    <div className="col-md-6"  >
    <img src={bannerFilp} className='img-fluid rounded  ms-5' alt="" />
    </div>
  </div>
</div> 

{/* mobile phone technicians */}
<div className="container  mb-5 mt-4">
<div class="row g-4 justify-content-md-center ">
      <div class="col-md-6">
        <div className="card" >
          
        <img src={mobileRight} alt="" style={{height:"19rem"}}   className='img-fluid rounded shadow' />
        </div>
      </div>
      <div class="col-md-6">
     <p className='' style={{textAlign:"justify"}}>Our mobile phone repair technicians run tests to assess the mobile phones' functionality, install and update phone software,
      troubleshoot wiring problems, and replace damaged parts and components such as batteries, LCD screens, keypads, buttons. 
      They also advise their clients on warranty issues and recommend products based on their expertise. <br /> <br />
      We also handle Mobile Software Issues. Here at Elonatech we run all the major Software Tools for Mobile Phone Repairs.
       With these Software Tools we fix all software related problems of all iPhone and Android Smartphones of any Brand
        and Model including - Samsung, Apple iPhone etc.
     </p>
      </div>  
    </div>
</div>
        
</>
 );
}

export default Mobile;
