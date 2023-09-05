import './network.css'
import switch1 from './caption/HP Switch34.png'
import switch2 from './caption/TP-Link repair.jpg'
import switch3 from './caption/switch2.png'
import switch4 from './caption/switch.png'
import bannerswitch from './caption/bannerNet2.png'
import itHardware from './caption/it-hardware.jpg'
import router from './caption/routers2016-1.png'
import net from './caption/netMaintenance2.jpg'


const Network = () => {
    return (
<>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${net})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Mobile Device Repair</h2>
   <h5 class=" mt-4 text-white text-center">Excellence, Professionalism, Integrity & Convenient Service</h5>
   <p class=" mt-4 lead text-white text-center">We assess mobile phones functionality, install and update phone software, troubleshoot wiring problems,and replace damaged parts</p>
 </div>
 </div>

{/* here at elonatech */}
{/* <main class="container-fluid mt-5">
  <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
    <div class="col-md-6 px-0">
      <h1 class="display-4">Reliable Network Support</h1>
      <p class="lead my-3">Here at Elonatech, we are committed to supplying you with the most reliable advice, support and services at all times, wherever you are in Nigeria. To find out more about how we can help you please get in touch with us today.</p>
    </div>
  </div>
</main> */}

{/* cards */}
<div className="container   mb-5">
<div class="row justify-content-md-center gy-3 ">
      <div class="col-md-6  ">
      <img src={switch1} alt=""   className='img-fluid rounded  shadow' />
      </div>  
      <div class="col-md-6">
        <img src={switch2} alt=""   className='img-fluid rounded  shadow' />
      </div>
    </div>
</div>

{/* round the clock */}
<main class="container mt-5">
  <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
     <h3 className='text-center'>Round-The-Clock Maintenance for All Network Equipment</h3>
     <div class="underline"></div>
     <div className="underline"></div>
    <div className="row">
    <div class="col-md-6">
      <p class="lead my-3">  <strong>W</strong>e understand there are times when you need your network equipment up and running as soon as possible and can't afford to wait. Our engineers are very knowledgeable when it comes to network equipment. They also perform rigorous testing before returning your equipment. <br /> we also offer a special express repair service where our team will prioritize your job and have your equipment back up and running fast.</p>
    </div>
    <div class="col-md-6">
      <p class="lead my-3"> <strong>O</strong>ur team provides round-the-clock maintenance and repair for a wide range of high-end network equipment. We check both software and hardware to ensure everything works orderly. In addition, we test and maintain routers, switches, firewalls, network chassis, modules, and power supplies.  <br /> We thoroughly test all equipment after repairs to ensure that everything is in complete working order before returning it to you.</p>
    </div>
    </div>
  </div>
</main>

{/* switch */}

<div className="container  mb-5">
<div class="row justify-content-md-center ">
      <div class="col-md-6  ">
      <img src={switch3} alt=""   className='img-fluid rounded' />
      </div>  
      <div class="col-md-6">
        <img src={switch4} alt=""   className='img-fluid rounded' />
      </div>
    </div>
</div>

{/* Reliable */}

<main class="container-fluid mt-5 ">
  <div class=" p-md-2 mb-4 rounded" style={{backgroundColor:"#002e62"}}>
    <div className="row">
    <div class="col-md-6">
      <h4 className='text-white text-start ps-5 mt-4'>Reliable Network Support</h4>
      <p class="lead my-3 text-white text-start ps-5"><strong>H</strong>ere at Elonatech, we are committed to supplying you with the most reliable advice,  <br />   support and services at all times, wherever you are in Nigeria. To find out more about <br /> how we can help you please get in touch with us today.</p>
    </div>
    <div class="col-md-6">
    <img src={bannerswitch} class="img-fluid" alt="Responsive image" style={{height:"15rem", width:"75rem"}}/>
    </div>
    </div>
  </div>
</main> 

{/* Common Network Devices  */}
<main class="container mt-5">
  <div class="p-4 p-md-5 mb-4 rounded">
    <div className="row">
    <div class="col-md-6 common">
        <h3 className='text-center  mt-5 mb-3' style={{color:'#34548c'}}>Common Network Devices We Maintain</h3>
         <img src={itHardware}  className='img-fluid'  alt="" />
    </div>
    <div class="col-md-6 p-4 text-white" style={{backgroundColor:"#002e62"}}>
      <p class=""> <strong className='fs-4'>W</strong>ith the capability to repair thousands of items by the major network manufacturers, Elonatech is positioned to be your repair partner.</p>
      <h6>Some of the Devices We Repair:</h6>
      <ul className='list-unstyled text-white'>
        <li><i class="bi bi-arrow-right-circle-fill fs-5"> Hubs</i></li>
        <li><i class="bi bi-arrow-right-circle-fill fs-5"> Switches</i></li>
        <li><i class="bi bi-arrow-right-circle-fill fs-5"> Routers</i></li>
        <li><i class="bi bi-arrow-right-circle-fill fs-5"> Bridges</i></li>
        <li><i class="bi bi-arrow-right-circle-fill fs-5"> Gateways</i></li>
        <li><i class="bi bi-arrow-right-circle-fill fs-5"> Modems</i></li>
        <li><i class="bi bi-arrow-right-circle-fill fs-5"> Repeaters</i></li>
        <li><i class="bi bi-arrow-right-circle-fill fs-5"> Access Points</i></li>
        <li><i class="bi bi-arrow-right-circle-fill fs-5"> Servers</i></li>
      
      </ul>
    </div>
    </div>
  </div>
</main>

{/* router */}
<main class="container mt-5">
  <div class="p-4 p-md-5 mb-4 rounded">
    <div className="row">
    <div class="col-md-6 p-4 text-white" style={{backgroundColor:"#002e62"}}>
      {/* <p class=""> <strong className='fs-4'>W</strong>ith the capability to repair thousands of items by the major network manufacturers, Elonatech is positioned to be your repair partner.</p> */}
    
      <p className='text-white'><strong className='fs-2'>B</strong>uying new network or wireless equipment is an expensive proposition especially when you’ve already made a significant investment in your network infrastructure. <br /> <br /> While buying pre-owned equipment certainly reduces your cost, sometimes the best option is to repair the equipment you already own.
     <br /> <br />  That is why Elonatech offers industry-leading network and wireless hardware repair services. With an expert staff of technicians and an advanced tech center, we are well suited to serve your repair needs.</p>
    </div>
    <div class="col-md-6 common-router">
        <h3 className='text-center  mt-5 mb-3' style={{color:'#34548c'}}>Network & Wireless Network Equipment Repair</h3>
         <img src={router}  className='img-fluid'  alt="" />
    </div>
    </div>
  </div>
</main>


</>
    );
}

export default Network;
