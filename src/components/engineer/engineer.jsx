import img from './about-2.jpg'
import pro from './author.png'
import './eng.css'
const Engineer = () => {
    return (
<>

{/* header */}
<div
 class="container-fluid  bg-secondary py-5 mb-5"
  style={{height:"500px"}}
>
 <div class="container py-5 ">
   <h1 class=" mt-5 text-white text-center">Computer Engineering</h1>
   <h3 class=" mt-2 text-white text-center">Because your business works when your hardware works.</h3>
   <h3 class=" mt-2 text-white text-center">While computer hardware configurations vary widely, we work on a broad range of hardware systems.</h3>
 </div>
</div>

{/* body */}
 <div className="container-fluid mb-5">
<div class="row featurette">
      <div class="col-md-7 order-md-2">
        <p className='mt-3 fs-4'>For specialized hardware services, we have highly skilled full-time computer hardware techs who can fix all types of hardware problems including power jacks, keyboards, screens, fans, overheating issues, liquid spills, soldering jobs, loose cabling, and replacement of motherboards and discrete video cards.
         While computer hardware configurations vary widely, we work on a broad range of hardware systems.</p>
            <ul className='fs-4'>
            <li>Client Computer Systems (Desktop & Laptop PCs)</li>
            <li>Servers & Workstations</li>
        </ul>
      </div>
      <div class="col-md-5 order-md-1">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
      </div>
    </div>
</div>

{/* Desktop */}
<section class="bg-light mb-4" >
			<div class="container-fluid">
				<div class="row justify-content-between">
					<div class="col-md-8 col-lg-8 d-flex align-items-center">
						<div class="w-100 py-4">
							<h2   class="text-dark fs-1 mb-4">Desktop and Laptop PCs</h2>
							<p  class="text-dark fs-4">We offer all kinds of laptop, desktop and server repairs of all makes and models, including Windows, Mac and Linux computers. We do virus removal without reformatting so you don't lose your important files or photos. We repair both hardware and software. We have no queue so come any time and we'll start fixing your computer right away.</p>
						</div>
					</div>
					<div class="col-md-4 col-lg-4 d-flex align-items-end ">
						<img src={img} class="img-fluid" alt=""/>
					</div>
				</div>
			</div>
</section> 


{/* convenient */}
<div className="container mb-5"> 
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
</div>



{/* contact us */}
<section class="bg-dark">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-md-8 col-lg-8 d-flex align-items-center">
						<div class="w-100 py-4">
							<h2   class="text-white">Have a project on your mind.</h2>
							<p  class="text-white">Being online goes beyond social media accounts, you need an actual home on the internet. That’s a website! Here are 6 reasons a website is a must for your business.</p>
							<p class="mb-0" data-bs-toggle="modal" data-bs-target="#myModal"><a class="btn btn-primary py-3 px-4">Contact me</a></p>

       
         
						</div>
					</div>
					<div class="col-md-4 col-lg-4 d-flex align-items-end">
						<img src={pro} class="img-fluid" alt=""/>
       
					</div>
				</div>
			</div>
	</section> 


</>
    );
}

export default Engineer;
