// import img from './captions/about-2.jpg'
// import pro from './captions/author.png'
import computerHeader from './captions/3945114.jpg'
import computerRepair from './captions/computer repair.jpg'

import top1 from './captions/desktop-cmputers.png'
import bottom1 from './captions/best-laptop-small.jpg'

import top2 from './captions/computer-repair.jpg'
import bottom2 from './captions/computer-engineering.jpg'

import './eng.css'
const Engineer = () => {
    return (
<>

{/* header */}
<div class="container-fluid   py-5 mb-5" style={{backgroundImage:`url(${computerHeader})`, backgroundPosition:"center", backgroundRepeat:'no-repeat', backgroundSize:"cover" , height:"600px"}} >
 <div class="container py-5 text-center ">
   <h1 class=" mt-5  py-3 text-white">Computer Engineering</h1>
   <h5 class=" mt-2  py-3 text-white ">Because your business works when your hardware works.</h5>
   <h6 class=" mt-2 py-3 text-white">While computer hardware configurations vary widely, we work on a broad range of hardware systems.</h6>
 </div>
</div>


{/* body */}
 <div className="container-fluid  mb-5">
<div class="row justify-content-md-center ">
      <div class="col-md-6 order-md-2  ">
        <p className='mt-3 fs-5'>For specialized hardware services, we have highly skilled full-time computer hardware techs who can fix all types of hardware problems including power jacks, keyboards, screens, fans, overheating issues, liquid spills, soldering jobs, loose cabling, and replacement of motherboards and discrete video cards.
              While computer hardware configurations vary widely, we work on a broad range of hardware systems.</p>
            <ul className='fs-5  list-unstyled'>
            <li><i class="bi bi-record-circle me-3"></i>Client Computer Systems (Desktop & Laptop PCs)</li>
            <li><i class="bi bi-record-circle me-3"></i>Servers & Workstations</li>
        </ul>
      </div>  
      
      <div class="col-md-5 order-md-1">
        <img src={computerRepair} alt=""   className='img-fluid rounded  shadow' />
      </div>
    </div>
</div>


{/* Desktop */}
<div className="container-fluid  mt-5" style={{backgroundColor:"#cccccc "}} >
<div class="row justify-content-md-center ">
      <div class="col-md-6 order-md-1  mt-5 ">
      <div class="">
							<h2   class="text-dark fs-1 mb-4">Desktop and Laptop PCs</h2>
							<h5  class="text-dark">We offer all kinds of laptop, desktop and server repairs of all makes and models, including Windows, Mac and Linux computers. We do virus removal  <br /> without reformatting so you don't lose your important files or photos. We repair both hardware and software. We have no queue so come any time and we'll start fixing your computer right away.</h5>
			</div>
      </div>  
      <div class="col-md-5 order-md-2">
        <div class="container-fluid">
          {/* mouth 1 */}
        <div class="row align-items-center content-row">
        <div class="col-lg-6 wrap-block">
        </div>
          <div class="col-lg-6">
              <img src={top1}  className='img-fluid  mt-5  shadow' alt="" title=""/>
          </div>
        </div>
        </div>
       {/* mouth 2 */}
     <div class="container-fluid ">
        <div class="row align-items-center">
        <div class="col-lg-6">
          <img src={bottom1}  className='img-fluid ms-4 mb-5 shadow' alt="" title=""/>
          </div>
          <div class="col-lg-6">
          </div>
      </div>
    </div>


    {/*  */}
      </div>
    </div>
</div>




{/* convenient */}
<div className="container-fluid" style={{backgroundColor:"#f3e3f0"}} >
<div class="row justify-content-md-center ">
      <div class="col-md-6 order-md-2  mt-5 ">
        <h1>We offer 4 Convenient Computer Repair Options</h1>
            <ul className='fs-5  list-unstyled '>
            <li className='kos'><i class="bi bi-check-square fs-4 me-3"></i>Pick-up and Return</li>
            <li className='kos'><i class="bi bi-check-square fs-4 me-3"></i>Onsite Repair</li>
            <li className='kos'><i class="bi bi-check-square fs-4 me-3"></i>Walk-in and Repair</li>
            <li className='kos'><i class="bi bi-check-square fs-4 me-3"></i>Remote Support</li>
            </ul>
            <h5 className='text-primary'>If you require friendly, expert staff and to have your computer running better than ever, come to our computer repair workshop or give us a call.</h5>
      </div>  
      
      <div class="col-md-5 order-md-1">
        <div class="container-fluid">
          {/* mouth 1 */}
        <div class="row align-items-center content-row">
          
          <div class="col-lg-6">
              <img src={top2}  className='img-fluid ms-4 mt-5  shadow' alt="" title=""/>
          </div>
          <div class="col-lg-6 wrap-block">
              {/* <h1 class="text-white">ABOUT ME</h1> */}
          </div>
        </div>
      
        </div>
       {/* mouth 2 */}
     <div class="container-fluid ">
        <div class="row align-items-center">
          <div class="col-lg-6">
              {/* <p class="text-white">I like pastel colors. I prefer making tender and sweet photos of happy people.</p> */}
          </div>
          <div class="col-lg-6">
          <img src={bottom2}  className='img-fluid  mb-5 shadow' alt="" title=""/>
          </div>
      </div>
    </div>


    {/*  */}
      </div>
    </div>
</div>


{/* contact us */}
<section class="bg-dark">
			<div class="container-fluid">
				<div class="row justify-content-lg-center">
					<div class="col-md-7 d-flex align-items-center">
						<div class="w-100 py-4">
							<h1   class="text-white mb-3">Get Ahead of your Competitors</h1>
							<p  class="text-white mb-5">If you are ready to become the best in your industry and also stand out from a sea of hungry competitors,  <br />then Elonatech is the partner you need. Get in touch with us below, let's take your busines to the next level.</p>
            <h3 className='text-white'>Ready to Start your Project? <a class="btn btn-primary ms-4"><h5>Request a Quote</h5></a></h3>    
						</div>
					</div>
					<div class="col-md-4 col-lg-4 d-flex align-items-end">
						{/* <img src={pro} class="img-fluid" alt=""/> */}
       
					</div>
				</div>
			</div>
	</section> 


</>
    );
}

export default Engineer;
