

const Mobile = () => {
    return (
<>
{/* header */}
<div class="container-fluid mb-5  bg-secondary py-5 " style={{height:"520x"}}>
  
 <div class="container py-5 ">
   <h1 class=" mt-5 text-white text-center">Computer Engineering</h1>
   <h3 class=" mt-2 text-white text-center">Because your business works when your hardware works.</h3>
   <h3 class=" mt-2 text-white text-center">While computer hardware configurations vary widely, we work on a broad range of hardware systems.</h3>
 </div>

<div className="container mb-5" style={{height:"50px", marginTop:"20px"}}>
 <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
    <div class="col-md-6 px-0">
      <h3 className="text-center">Why Choose Elonatech for Phone Repair</h3>
      <p class="lead my-3 text-center">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
    </div>
  </div>
</div>

</div>

{/* body */}

  {/* Desktop */}
<section class="bg-light " style={{ marginBottom:"20px"}} >
			<div class="container bg-secondary mt-5">
				<div class="row justify-content-between">
					<div class="col-md-8 col-lg-8 d-flex align-items-center">
						<div class="w-100 py-4">
							{/* <h2   class="text-dark fs-1 mb-4">Desktop and Laptop PCs</h2> */}
							<p  class="text-dark fs-4">Our mobile phone repair technicians run tests to assess the mobile phones' functionality, install and update phone software, troubleshoot wiring problems, and replace damaged parts and components such as batteries, LCD screens, keypads, buttons. They also advise their clients on warranty issues and recommend products based on their expertise.
We also handle Mobile Software Issues. Here at Elonatech we run all the major Software Tools for Mobile Phone Repairs. With these Software Tools we fix all software related problems of all iPhone and Android Smartphones of any Brand and Model including - Samsung, Apple iPhone etc.</p>
						</div>
					</div>
					<div class="col-md-4 col-lg-4 d-flex align-items-end ">
						{/* <img src={img} class="img-fluid" alt=""/> */}
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
      {/* <img src={img} class="img-fluid" alt=""/> */}
      </div>
    </div>
</div>






 



            
</>
    );
}

export default Mobile;
