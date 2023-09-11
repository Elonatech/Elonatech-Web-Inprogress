import internetHeader from './captions/2123350.jpg'
import './internet.css'









const Internet = () => {
    return (
    <>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${internetHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Lightning-fast Internet</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Internet Speed and Reliability</h5>
   <p class=" mt-4 lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
 </div>

 {/* Internet */}
 <div className="container">
    <h4 className='text-danger text-center'>Our Features</h4>
    <h5 className='text-center'>We Are Internet Service Provider Company</h5>
    <div className="row mb-5 mt-3">
        <div className="col-md-3 mt-3">
            <div className="card card-vl left rounded"> 
            <div className="card-body  text-center bg-light">
            <i class="bi bi-wifi-2 fs-1 fw-3"></i>
            <h6 className='text-danger'>Wifi Seamless</h6>
            <p className='lead fs-6'>Where Connectivity Knows No Bounds - Weaving Your Digital World into One Seamless Experience.</p>
            </div>
            </div>
        </div>
        <div className="col-md-3 mt-3">
           <div className="card card-vl left rounded"> 
            <div className="card-body  text-center bg-light">
            <i class="bi bi-reception-4 fs-1 fw-3"></i>
            <h6 className='text-danger'>Speed On Demand</h6>
            <p className='lead fs-6'>Empowering You with the Magic Wand of Connectivity  Click, Zoom at the Pace of Your Desires.</p>
            </div>
            </div>
        </div>
        <div className="col-md-3 mt-3">
        <div className="card card-vl left rounded"> 
            <div className="card-body  text-center bg-light">
            <i class="bi bi-broadcast-pin fs-1 fw-3"></i>
            <h6 className='text-danger'>Upgrade Speed</h6>
            <p className='lead fs-6'>Elevate Your Digital Realm with the Velocity of Progress  Where Faster Becomes the New Norm.</p>
            </div>
            </div>
        </div>
        <div className="col-md-3 mt-3">
        <div className="card card-vl left rounded"> 
            <div className="card-body  text-center bg-light">
            <i class="bi bi-download fs-1 fw-3"></i>
            <h6 className='text-danger'>Download 1Gbps</h6>
            <p className='lead fs-6'>Ignite Your Downloads with the Power of a Thousand Megabits  Torrent of Possibilities at the Speed of Light.</p>
            </div>
        </div>
        </div>
    </div>
 </div>

{/*  Solutions */}
<div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-6">
          <div className="">
          <div className="card-body">
          <h2 className='text-danger'>Featured Solutions</h2>
          <p className='lead fs-6 fw-3 mt-3'>Embracing the Widest Range of Possibilities in the World of Internet Services, Seamless Connectivity, Lightning-Fast Speeds, Enhanced Security, and Unparalleled Customer Support Converge to Enable You to Navigate the Digital Frontier with Our Comprehensive and Cutting-Edge Features Solutions, Redefining How You Connect, Communicate, and Thrive in the Modern Digital Landscape.</p>
           <div className="row">
            <div className="col">
            <ul className='list-unstyled'>
               <li><i class="bi bi-check-circle-fill text-danger"></i>  Expert technical team</li> 
               <li><i class="bi bi-check-circle-fill text-danger"></i>  50+ coverage areas</li> 
               <li><i class="bi bi-check-circle-fill text-danger"></i> Reasonable price packages</li> 
               <button className='btn btn-outline-danger  mt-3'>Know More</button>
            </ul>
            </div>
            <div className="col">
            <ul className='list-unstyled'>
               <li><i class="bi bi-check-circle-fill text-danger"></i>  Expert technical team</li> 
               <li><i class="bi bi-check-circle-fill text-danger"></i>  50+ coverage areas</li> 
               <li><i class="bi bi-check-circle-fill text-danger"></i> Reasonable price packages</li> 
            </ul>
            </div>
           
           </div>
          </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
                <ul className='mt-5 list-unstyled'>
                <li>
                    <div className="card border-danger">
                    <div className="card border-danger p-4 ">
                    <i class="bi bi-broadcast fs-2 text-danger"></i>
                    <h6 className='mt-2'>VSAT Services</h6>
                    <p className='mt-2 lead fs-6'>We operate different terminals on C- and Ku-Band. Our monitoring tools give access to...</p>
                    </div>
                    </div>
                   </li>
                    <li>
                    <div className="card border-danger mt-2">
                    <div className="card border-danger p-4 ">
                    <i class="bi bi-device-ssd fs-2 text-danger"></i>
                    <h6 className='mt-2'>Back-up solutions</h6>
                    <p className='mt-2 lead fs-6'>Our back-up solutions put little strain on the budget and work reliably if your main...</p>
                    </div> 
                    </div>
                    </li>
                </ul>
            </div>
            <div className="col-md-6">
                <ul className='list-unstyled'>
                    <li>
                    <div className="card border-danger">
                    <div className="card border-danger p-4 ">
                    <i class="bi bi-wifi fs-2 text-danger"></i>
                    <h6 className='mt-2'>Broadband / Trunking</h6>
                    <p className='mt-2 lead fs-6'>From a small home office to a multi thousand user location. Our services are designed to meet specific.</p>
                    </div>
                    </div>
                   </li>
                    <li>
                    <div className="card border-danger mt-2">
                    <div className="card border-danger p-4 ">
                    <i class="bi bi-diagram-3 fs-2 text-danger"></i>
                    <h6 className='mt-2'>Private networks</h6>
                    <p className='mt-2 lead fs-6'>Corporate and public bodies require secure and independent communication..</p>
                    </div> 
                    </div>
                    </li>
                </ul>
            </div>
          </div>
        </div>
    </div>
</div>





    </>
    );
}

export default Internet;
