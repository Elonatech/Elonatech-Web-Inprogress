import structuredHeader from './cabling/structured-cabling.jpg';
import img1 from './cabling/Lagos-20130911-00213.png'
import img2 from './cabling/Lagos-20130911-00208.png'
import img3 from './cabling/IMG-20130627-00055.png'
import img4 from './cabling/IMG-20130627-00058.png'
import img5 from './cabling/IMG-20130629-00070.png'
import img6 from './cabling/IMG-20130910-00269.png'
import img7 from './cabling/IMG-20130911-00204.png'
import img8 from './cabling/IMG-20130911-00270.png'
import img9 from './cabling/IMG-20130911-00272.png'
import img10 from './cabling/IMG-20130923-00302.png'

import p1 from './cabling/phase2/DSC06900.png'
import p2 from './cabling/phase2/DSC06909.png'
import p3 from './cabling/phase2/DSC06935.png'
import p4 from './cabling/phase2/DSC06940.png'
import p5 from './cabling/phase2/DSC06947.png'
import p6 from './cabling/phase2/DSC06949.png'
import p7 from './cabling/phase2/DSC06951.png'
import p8 from './cabling/phase2/DSC06953.png'
import p9 from './cabling/phase2/DSC06958.png'
import p10 from './cabling/phase2/DSC06969.png'
import p11 from './cabling/phase2/DSC06972.png'
import p12 from './cabling/phase2/DSC06978.png'
import p13 from './cabling/phase2/DSC06986.png'
import p14 from './cabling/phase2/IMG-20130908-00253.png'


import structuredCable1 from './cabling/cable/Untitled-7.png'
import structuredCable2 from './cabling/cable/Structured cabling image.jpg'


const Cabling = () => {
    return (
    <>
      {/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${structuredHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Structured Cabling</h2>
   <h5 class=" mt-4 text-white text-center">Any System is Only As Reliable As Its Weakest Link.</h5>
   <p class="lead text-white text-center">The standardized infrastructure of communications cabling that supports network components</p>
 </div>
 </div> 


{/* Cabling */}

<div className="container mt-5 mb-5">
    
<p className='text-center'>
    

</p>

    <div className="row">
        <div className="col-md-6">
            <div className="mt-4">
             <p className=''>
             <span className='fw-bold'>Structured cabling</span>  is the design and installation of a cabling system that will support 
             multiple hardware uses and be suitable for today's needs and those of the future. 
             <br /><br />
             With a correctly installed system, current and future requirements can be met, and hardware that is added in the future will be supported.

             <br /><br />
             Structured cabling design and installation is governed by a set of standards that 
             specify wiring data centers, offices, and apartment buildings for 
             data or voice communications using various kinds of cable, most commonly; category 
             5e (Cat 5e), category 6 (Cat 6), and fiber optic cabling and modular connectors.
             </p>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card">
            <img src={structuredCable2} className='img-fluid rounded' alt="" />
            </div>
        </div>
    </div>

    <div className="row mt-3">
        <div className="col-md-6">
            <div className="card">
            <img src={structuredCable1} className='img-fluid rounded' alt="" />
            </div>
        </div>
        <div className="col-md-6">
            <div className="mt-3">
            <p className=''>
            These standards define how to lay the cabling in various topologies in order to 
            meet the needs of the customer, typically using a central patch panel (which is 19-inch rack-mounted),
            from where each modular connection can be used as needed. 
            <br /><br />
            Each outlet is patched into a network switch (normally also rack-mounted) for network 
            use or into an IP or PBX (private branch exchange) telephone system patch panel.
            Structured cabling is the infrastructure that supports the performance of an organization's network. 
            It is the glue that binds all PCs & devices used within the business together. Since it is the most critical part of your voice and data network, choosing a qualified provider is a critical decision. 
            We use only high-end quality products in our structured wiring solutions, backed by manufacturer warranties.
            </p>
            </div>
        </div>
    </div>
</div>





{/* completed project */}
<div className="container ">
  <h4 className='text-center'>Some Of Our Recently Completed Projects</h4>
  {/*  */}
  <div class="text-bg-light shadow py-4 rounded">
   {/* <h5 className='text-center p-3'>SUB-CONTRACTOR TO PINE HEIGHT SYSTEMS ON NETWORKING/STRUCTURED CABLING OF AN 8 FLOOR LUXURY FLAT BUILDING (96 POINTS) LAN SETUP FOR SAMSUNG ELECTRONICS NIGERIA LTD. AT ADMIRALTY WAY, LEKKI PHASE 1. PROJECT PHASE 1</h5> */}
   <h5 className='text-center p-3'>Sub-Contractor To Pine Height Systems On Networking/Structure Cabling Of An 8 Floor Luxury Flat BUILDING (96 Points) Lan Setup For Samsung Electronics Nigeria Ltd. At ADMIRALTY Admiralty Way, Lekki Phase 1. Project Phase 1</h5>

<div class="slider">
  <div class="slide-track">
    <div class="slide">
        <img src={img1} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={img3} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div> 
    <div class="slide">
        <img src={img4} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={img5} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={img6} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={img7} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={img8} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={img9} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={img10} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
  </div>
</div>
</div>
</div>

{/* completed project 2 */}

<div className="container mb-5">

  {/*  */}
  <div class="text-bg-light shadow py-4 rounded">
   <h5 className='text-center p-3'>Sub-Contractor To Pine Height Systems On Networking/Structure Cabling Of An 8 Floor Luxury Flat BUILDING (96 Points) Lan Setup For Samsung Electronics Nigeria Ltd. At ADMIRALTY Admiralty Way, Lekki Phase 1. Project Phase 2</h5>
<div class="slider">
  <div class="slide-track">
    <div class="slide">
        <img src={p1} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={p2} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div> 
    <div class="slide">
        <img src={p4} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={p5} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={p6} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={p7} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={p8} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={p9} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
    <div class="slide">
        <img src={p10} className='img-fluid p-2' style={{height:"25rem"}} alt=""/>
    </div>
  </div>
</div>

</div>
</div>
    </>
    );
}

export default Cabling;
