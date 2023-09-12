import securityHeader from './captions/img1.jpg'
import security from './captions/what-is-cybersecurity-1024x631.jpg'
import './security.css'
import icon1 from './captions/Icon1.svg'
import icon2 from './captions/Icon2.svg'
import icon3 from './captions/Icon3.svg'
import icon4 from './captions/Icon4.svg'

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
            <div className="card-body mt-5 mb-5">
                <h2 className='text-white'>Network Security</h2>
                <h6 className='mt-4 text-white'>Develop skills needed to protect networks and prevent intrusions.</h6>
                <p className='mt-4 mb-5 text-white'>By elonatech academy</p>
            </div>
         </div>  
        </div>
        <div className="col-md-6">
            <div className="card rounded-0" style={{backgroundImage:`url(${security})`, backgroundPosition:"center" , backgroundSize:"40rem" , height:"310px"}}>
               
            </div>
        </div>
    </div>
 </div>

{/* Risk */}

<div className="container">
    <div className="row">
        <div className="col-md-3">
                <div className="card-body d-flex">
                <img src={icon1}  style={{height:"4rem", weight:"4rem"}} alt="" />
                 <p className='text fs-5'>Cybersecurity Assessment & Compliance.</p>
            </div>
        </div>
        <div className="col-md-3">
                <div className="card-body d-flex">
                <img src={icon2}  style={{height:"4rem", weight:"4rem"}} alt="" />
                 <p className='text fs-5'>Cyber Risk Quantification.</p>
            </div>
        </div>
        <div className="col-md-3">
                <div className="card-body d-flex">
                <img src={icon3}   style={{height:"4rem", weight:"4rem"}} alt="" />
                 <p className='text fs-5'>Cybersecurity Performance Management.</p>
            </div>
        </div>
        <div className="col-md-3">
                <div className="card-body d-flex">
                <img src={icon4}  style={{height:"4rem", weight:"4rem"}} alt="" />
                 <p className='text fs-5'>Cyber Risk Transfer (Cyber Insurance Optimization).</p>
            </div>
        </div>
   
    </div>
</div>

<div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="">
            <div className="shadow p-2">
                <h5>ELEMENTS OF NETWORK SECURITY</h5>
                <ul className="list-unstyled mt-2">
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Network firewall</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Network firewall</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Unified threat management</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Advance network threat prevention</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Network access control</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Cloud access security brokers</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">DDoS mitigation</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Network behavior anomaly detection</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">SD-WAN security</p>
                    </li>
                </ul>
            </div>  
            </div>
        </div>
        <div className="col-md-4">
            <div className="">
            <div className="shadow p-2">
                <h5>ELEMENTS OF NETWORK SECURITY</h5>
                <ul className="list-unstyled mt-2">
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Network security protects your data</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Network security protects client data</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Network security improves your network’s performance</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Network security protects against ransomware</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Cyberattacks are on the rise</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">The world depends on technology</p>
                    </li>
                </ul>
            </div>  
            </div>
        </div>
        <div className="col-md-4">
            <div className="">
            <div className="shadow p-2">
                <h5>OUR NETWORK SECURITY TOOLS</h5>
                <ul className="list-unstyled mt-2">
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Access Control</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Antivirus and antimalware</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Application security</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Cloud security</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Behavioral Analytics</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Data loss prevention (DLP)</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Email security</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Firewall</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Intrusion detection systems (IDS)</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Intrusion Prevention system</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Mobile device security</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Multifactor authentication (MFA)</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Network segmentation</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Sandboxing</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Software-defined perimeter (SDP)</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Virtual private network (VPN)</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Web security</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Workload security</p>
                    </li>
                </ul>
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
