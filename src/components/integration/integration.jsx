import systemIntergration from './caption/system-integration.jpg'
import infrastructure from './caption/infrastructure2.png'
import infast1 from './caption/infrastructure-card3.jpg'
import infast2 from './caption/infrastructure-card.jpg'
import infast3 from './caption/infrastructure-card2.jpg'
import infast4 from './caption/infrastructure4.png'
import si from './caption/si.jpg'
import intregrationBanner from './caption/SystemsIntegrationBanner.jpg'

import './intrgration.css'


const Integration = () => {
    return (
   <>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${systemIntergration})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Infrastructure & System Integration</h2>
   <h5 class=" mt-4 text-white text-center">Building intelligence system to better your business' efficiency and profit</h5>
   <p class=" mt-4 lead text-white text-center">Integrating existing, and often disparate systems in a way that focuses on increasing values</p>
 </div>
 </div>   
 {/* Information technology */}
<div className="container mb-5 ">
    <div className="row">
        <div className="col-md-6">
            <div className="card mb-3" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
              <img src={infrastructure} className='img-fluid mt-5' alt="" />
            </div>
        </div>
        <div className="col-md-6">
            <div className="col">
                <div className="card p-5" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
                    <p className='text-center mt-3'>Information technology (IT) Infrastructure is built upon both physical and virtual components. These components support the infrastructure’s operations, storage, processing of data, and data analysis.
                       Infrastructure can be centralized in a data center or spread across multiple data centers. These decentralized data centers can be controlled by the organization (owner) or by a third-party, such as a cloud provider or a colocation facility.</p>
                </div>
            </div>
            <div className="col">
                <div className="card mt-2 p-5" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
                    <p  className='text-center mt-3'>System Integration is the process of integrating all the physical and virtual components of an organization’s system. It therefore includes the process of linking together different computing systems and software applications physically or functionally, to act as a coordinated whole.
                The physical components consist of the various machine systems, computer hardware, inventory, etc. The virtual components consist of data stored in databases, software and applications.</p>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Breakdown */}
<h2 className='text-center mb-5'>Breakdown Of An IT Infrastructure</h2>
    <div></div>
<div className="container-fluid" style={{backgroundColor:"#34548c"}}>
<div class="container">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  <div class="col-md-3">
    <div class="card shadow-sm border-0 rounded mb-3">
        <img src={infast1} className='' style={{width:"100%" , height:"225px"}} alt="" />
      <div class="card-body">
       <h4 className='text-center'>FACILITIES</h4>
        <div className="text-center pb-0  ">
        <p className='btn btn-light '><h5>LEARN MORE</h5></p>
     </div>
      </div>
    </div>
    </div>
    {/*  */}
  <div class="col-md-3">
    <div class="card shadow-sm border-0 rounded ">
        <img src={infast2} className='' style={{width:"100%" , height:"225px"}} alt="" />
      <div class="card-body">
       <h4 className='text-center'>FACILITIES</h4>
        <div className="text-center pb-0  ">
        <p className='btn btn-light '><h5>LEARN MORE</h5></p>
     </div>
      </div>
    </div>
    </div>
 
    {/*  */}
  <div class="col-md-3">
    <div class="card shadow-sm border-0 rounded">
        <img src={infast3} className='' style={{width:"100%" , height:"225px"}} alt="" />
      <div class="card-body">
       <h4 className='text-center'>FACILITIES</h4>
        <div className="text-center pb-0  ">
        <p className='btn btn-light '><h5>LEARN MORE</h5></p>
     </div>
      </div>
    </div>
    </div>
    {/*  */}
  <div class="col-md-3">
    <div class="card shadow-sm border-0">
        <img src={infast4} className='' style={{width:"100%" , height:"225px"}} alt="" />
      <div class="card-body">
       <h4 className='text-center'>FACILITIES</h4>
        <div className="text-center pb-0  ">
        <p className='btn btn-light '><h5>LEARN MORE</h5></p>
     </div>
      </div>
    </div>
    </div>
 
   
 
    {/*  */}
    </div>
</div>
</div>

{/* System Integrator */}
<div className="container-fluid bg-dark" style={{ backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${intregrationBanner})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
  <h3 className='text-center  text-white p-2'>Why You Need A System Integrator?</h3>
    <div className="container">
        <div class="row justify-content-md-center">
            <div class="col-md-5 mb-5 mt-5">
                  <img src={si} className='img-fluid rounded' alt="" />
            </div>
            <div class="col-md-7">
            <h5 className='p-4 mt-5 text-white'>In this modern world connected by the Internet, the role of system integration engineers is important as more and more systems are designed to connect, both within the system under construction and to systems that are already deployed.
            <br /><br />
                  System Integrators integrates discrete systems utilizing a variety of techniques such as computer networking, enterprise application integration, business process management or manual programming.</h5>
            </div>
        </div>
    </div>
</div>

{/* Integration Scope */}
<div className="container">
  <h3 className='text-center mt-5'>Our System Integration Scope</h3>     
  <div className="row mt-5 mb-5">
    <div className="col-md-4  dash">
      <div className="card border-0">
        <ul className='list-unstyled p-3' style={{color:"#314f81"}}>
          <li className='d-flex'>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Analysis and design of IT platforms.</p>
          </li>
          {/*  */}
          <li className='d-flex'>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Implementation and migration of IT solutions.</p>
          </li>
          {/*  */}
          <li className='d-flex'>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Supply of equipment and software.</p>
          </li>
          {/*  */}
          <li className='d-flex'>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Virtualization of physical environments.</p>
          </li>
          {/*  */}
          <li className='d-flex'>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Consulting services in the field of business process integration.</p>
          </li>
          {/*  */}
          <li className='d-flex'>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Cloud Migration.</p>
          </li>
          {/*  */}
        </ul>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card  border-danger" style={{borderStyle:"dotted", borderWidth:"2px"}}>
        <ul className='list-unstyled' style={{color:"#314f81"}}>
          <li className='d-flex border-danger' style={{ borderBottom:"dotted" }}>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>High Availability Solutions.</p>
          </li>
          {/*  */}
          <li className='d-flex border-danger' style={{ borderBottom:"dotted" }}>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Building Data Lake.</p>
          </li>
          {/*  */}
          <li className='d-flex border-danger' style={{ borderBottom:"dotted" }}>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Building Business Intelligence.</p>
          </li>
          {/*  */}
          <li className='d-flex border-danger' style={{ borderBottom:"dotted" }}>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Incorporation solution with Artificial Intelligence Engine.</p>
          </li>
          {/*  */}
          <li className='d-flex'>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Consulting services in the field of business process integration.</p>
          </li>
        </ul>
      </div>
    </div>
    {/*  */}
    <div className="col-md-4 ">
      <p>With the expertise of our IT professionals, businesses can create a data center infrastructure by following a process that involves:</p>
      <div className="card border-danger" style={{borderStyle:"dotted", borderWidth:"2px"}}>
      <ul className='list-unstyled p-3' style={{color:"#314f81"}}>
          <li className='d-flex'>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Analyzing the business' goals.</p>
          </li>
          {/*  */}
          <li className='d-flex'>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>Deciding on the architecture and design.</p>
          </li>
          {/*  */}
          <li className='d-flex'>
          <i class="bi bi-record-circle me-3 fs-5"></i>
          <p className='mt-1'>The Infrastructure optimization and maintenance.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default Integration;
