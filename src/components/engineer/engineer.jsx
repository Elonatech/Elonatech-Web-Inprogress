// import img from './captions/about-2.jpg'
// import pro from './captions/author.png'
import computerHeader from './captions/3945114.jpg'
import computerRepair from './captions/computer repair.jpg'
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

   {/* <div className="text-center">
   <ul className='d-flex'>
    <li className='text-white' >Client Computer Systems (Desktop & Laptop PCs)</li>
    <li className='text-white'> Servers & Workstations</li>
   </ul>
   </div> */}

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
<section class="bg-light mb-4" >
			<div class="container-fluid">
				<div class="row ">
					<div class="col-md-6 col-lg-6 d-flex">
						<div class="">
							<h2   class="text-dark fs-1 mb-4">Desktop and Laptop PCs</h2>
							<p  class="text-dark">We offer all kinds of laptop, desktop and server repairs of all makes and models, including Windows, Mac and Linux computers. We do virus removal  <br /> without reformatting so you don't lose your important files or photos. We repair both hardware and software. We have no queue so come any time and we'll start fixing your computer right away.</p>
						</div>
					</div>
					<div class="col-md-6 col-lg-6 d-flex align-items-end ">
            {/* <ul className='list-unstyled'>
              <li><img src={img} class="img-fluid" className='' style={{ paddingLeft:"215px"}} alt=""/></li>
              <li><img src={img} class="img-fluid"  className='' style={{}} alt=""/></li>
            </ul> */}
			        <div className="row">
                {/* <div className="col">  <div className="card">people1</div></div>
                <div className="coi">  <div className="card">people2</div></div> */}
                <div className="col"><div className="card  p-5" style={{marginTop:"130px"}}>people3</div></div>
                <div className="col">  <div className="card   p-5">people4</div></div>
              </div>
          
          
            
           


					</div>
				</div>
			</div>
</section> 





{/* convenient */}

{/* <div className="container mb-5"> 
<div class="row">
      <div class="col-md-7 order-md-4">
        <h2   class="text-dark fs-1 mb-4">We offer 4 Convenient Computer Repair Options</h2>
        <ul>
            <li className='fs-4'  >Pick-up and Return</li>
            <li className='fs-4'>Onsite Repair</li>
            <li className='fs-4'>Walk-in and Repair</li>
            <li className='fs-4'>Remote Support</li>
        </ul>
		<p class="text-dark fs-4">If you require friendly, expert staff and to have your computer running better than ever, come to our computer repair workshop or give us a call.</p>
      </div>
      <div class="col-md-5 ">
      <img src={img} class="img-fluid" alt=""/>
      </div>
    </div>
</div> */}

<div className="container-fluid  mt-5 mb-5">
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
        <img src={computerRepair} alt=""   className='img-fluid rounded  shadow' />
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
