import securityHeader from './captions/img1.jpg'
import security from './captions/what-is-cybersecurity-1024x631.jpg'
import './security.css'
import icon1 from './captions/Icon1.svg'
import icon2 from './captions/Icon2.svg'
import icon3 from './captions/Icon3.svg'
import icon4 from './captions/Icon4.svg'
import image1 from './captions/image.png'

const Security = () => {
    return (
        <>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${securityHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Network Security</h2>
   <h5 class=" mt-4 text-white text-center">Develop skills needed to protect networks and prevent intrusions.</h5>
   <p class=" mt-4 lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
 </div>

 {/* Cybersecurity */}
 <div className="container mb-5">
    <div className="row g-0">
        <div className="col-md-6">
          <div className="card rounded-0" style={{backgroundColor:"#2b5592"}}>
            <div className="card-body">
                <h2 className='text-white mt-4'>Network Security</h2>
                <h6 className=' text-white mt-4'>Reasons Why Network Security Is Important.</h6>
                <div className="row mt-4">
                    <div className="col-md-6">
                    <div className="">
                    <ul className="list-unstyled mt-2">
                    <li className="d-flex text-white">
                    <i class="bi bi-check-circle  me-3"></i>
                    <p className="">Network security protects your data</p>
                    </li>
                    <li className="d-flex text-white">
                    <i class="bi bi-check-circle  me-3"></i>
                    <p className="">Network security protects client data</p>
                    </li>
                    <li className="d-flex text-white mt-1">
                    <i class="bi bi-check-circle  me-3"></i>
                    <p className="">Network security improves your network’s performance</p>
                    </li>
                    </ul>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="">
                    <ul className="list-unstyled mt-2">
                    <li className="d-flex text-white">
                    <i class="bi bi-check-circle  me-3"></i>
                    <p className="">Network security protects against ransomware</p>
                    </li>
                    <li className="d-flex text-white">
                    <i class="bi bi-check-circle  me-3"></i>
                    <p className="">Cyberattacks are on the rise</p>
                    </li>
                    <li className="d-flex text-white">
                    <i class="bi bi-check-circle  me-3"></i>
                    <p className="">The world depends on technology</p>
                    </li>
                    </ul>
                    </div>
                </div>
              </div>
            </div>
         </div>  
        </div>
        <div className="col-md-6">
            <img src={security} className='img-fluid' alt="" />
        </div>
    </div>
 </div>

{/* Risk */}
<div className="container">
    <div className="row ">
        <div className="col-md-3">
                <div className="card-body d-flex">
                <img src={icon1}  style={{height:"4rem", weight:"4rem"}} alt="" />
                 <p className='text fs-5 ms-3'>Cybersecurity Assessment </p>
            </div>
        </div>
        <div className="col-md-3">
                <div className="card-body d-flex">
                <img src={icon2}  style={{height:"4rem", weight:"4rem"}} alt="" />
                 <p className='text fs-5 ms-3'>Cyber Risk Quantification</p>
            </div>
        </div>
        <div className="col-md-3">
                <div className="card-body d-flex">
                <img src={icon3}   style={{height:"4rem", weight:"4rem"}} alt="" />
                 <p className='text fs-5 ms-3'>Cybersecurity Performance</p>
            </div>
        </div>
        <div className="col-md-3">
                <div className="card-body d-flex">
                <img src={icon4}  style={{height:"4rem", weight:"4rem"}} alt="" />
                 <p className='text fs-5 mt-3 ms-3'>Cyber Risk Transfer</p>
            </div>
        </div>
   
    </div>
</div>

<div className="container">
    <div className="row">
       <div className="col-md-7">
            <div className="">
            <img src={image1}className='img-fluid' alt="" />
            </div>
        </div>
       <div className="col-md-5">
        <div className="">
         <div className="row">
          <div className="col-md-6">
          <div className="mt-3">
                <ul className="list-unstyled mt-2">
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Access Control</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Antivirus and Antimalware</p>
                    </li>
        
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Application Security</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Cloud Security</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Behavioral Analytics</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Data Loss Prevention</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Email security</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Firewall</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Workload Security</p>
                    </li>
                </ul>
          </div>
            </div>  
          <div className="col-md-6">
            <div className="mt-3">
            <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Intrusion Detection</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Intrusion Prevention</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Mobile Device Security</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Multifactor Authentication</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Network Segmentation</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Sandboxing</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Virtual Private Network</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">Web Security</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 text-danger me-3"></i>
                    <p className="mt-2">  Software-defined Perimeter</p>
                    </li>
            </div>
            </div>  
         </div>
        </div>
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

 </>
    );
}

export default Security;
