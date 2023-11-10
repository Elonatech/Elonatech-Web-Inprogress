import engineerHeader from './captions/3945114.jpg'
import computerRepair from './captions/computer repair.jpg'


import top2 from './captions/computer-repair.jpg'
import bottom2 from './captions/computer-engineering-height.jpg'
import './eng.css'


const Engineer = () => {
    return (
<>

{/**/}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${engineerHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Computer Engineering</h2>
   <h5 class=" mt-4 text-white text-center">Because your business works when your hardware works</h5>
   <p class="lead text-white text-center">While computer hardware configurations vary widely, we work on a broad range of hardware systems</p>
 </div>
 </div>

{/**/}
 <div className="container  mt-5 mb-5">
<div class="row justify-content-md-center ">
      <div class="col-md-6 order-md-2  ">
        <p className=' fs-5 '  style={{textAlign:"justify"}} >For specialized hardware services, we have highly skilled full-time computer hardware techs who can fix all types of hardware problems including power jacks, keyboards, screens, fans, overheating issues, liquid spills, soldering jobs, loose cabling, and replacement of motherboards and discrete video cards.
              While computer hardware configurations vary widely, we work on a broad range of hardware systems.</p>
            <ul className='fs-5 pt-4 list-unstyled'>
            <li><i class="bi bi-record-circle me-3 "></i>Client Computer Systems (Desktop & Laptop PCs)</li>
            <li><i class="bi bi-record-circle me-3 mt-5"></i>Servers & Workstations</li>
           </ul>
      </div>  
      
      <div class="col-md-5 order-md-1">
        <img src={computerRepair} alt=""   className='img-fluid rounded  shadow' />
      </div>
    </div>
</div>


{/**/}
<div className="container-fluid  mt-5" style={{backgroundColor:"#cccccc "}} >
<div className="container">
<div class="row justify-content-md-center ">
      <div class="col-md-6 order-md-1  mt-5 ">
      <div class="">
							<h2   class="text-dark fs-1 mb-4">Desktop and Laptop PCs</h2>
							<h5  class="text-dark">We offer all kinds of laptop, desktop and server repairs of all makes and models, including Windows, Mac and Linux computers. We do virus removal  <br /> without reformatting so you don't lose your important files or photos. We repair both hardware and software. We have no queue so come any time and we'll start fixing your computer right away.</h5>
			</div>
      </div>  
      <div class="col-md-5 order-md-2">
       <img src={top2} className='img-fluid mt-2 mb-2 rounded' alt="" />

    </div>

    {/*  */}
      </div>
    </div>
</div>
{/**/}
<div className="container-fluid"  style={{backgroundColor:"#f3e3f0"}} >
  <div className="container">
<div class="row justify-content-md-center ">
      <div class="col-md-6 order-md-2 mt-3">
        <h2>We offer 4 Convenient Computer Repair Options</h2>
            <ul className='fs-5  list-unstyled '>
            <li className='kos'><i class="bi bi-check-square fs-4 me-3"></i>Pick-up and Return</li>
            <li className='kos'><i class="bi bi-check-square fs-4 me-3"></i>Onsite Repair</li>
            <li className='kos'><i class="bi bi-check-square fs-4 me-3"></i>Walk-in and Repair</li>
            <li className='kos'><i class="bi bi-check-square fs-4 me-3"></i>Remote Support</li>
            </ul>
            <h5 className='text-primary'>If you require friendly, expert staff and to have your computer running better than ever, come to our computer repair workshop or give us a call.</h5>
      </div>  
      
      <div class="col-md-5 order-md-1">
    
     <img src={bottom2} className='img-fluid mt-2 mb-2 rounded' alt="" />
    
    </div>

    {/*  */}
      </div>
    </div>
</div>





</>
    );
}

export default Engineer;
