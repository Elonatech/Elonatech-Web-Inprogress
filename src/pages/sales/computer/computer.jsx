
import office1 from './caption/office/1-3-1-1-130x130.jpg';
import office2 from './caption/office/2-1-2-1-130x130.jpg';
import office3 from './caption/office/1-1-2-130x130.jpg';
import office4 from './caption/office/1-5-1-130x130.jpg';

import computer1 from './caption/computer/81blwMhVV8L._AC_SX522_-130x110.jpg';
import computer2 from './caption/computer/download-3-130x130.jpg';
import computer3 from './caption/computer/Apple-Macbook-MRQN2LLA-2-130x91.jpg';
import computer4 from './caption/computer/asus-laptop-130x130.jpg';

import printer1 from './caption/printer/hp1.jpg';
import printer2 from './caption/printer/printer2.jpg';
import printer3 from './caption/printer/printer3.jpg';
import printer4 from './caption/printer/printer4.jpg';

import pos1 from './caption/pos/pos1.png';
import pos2 from './caption/pos/pos2.png';
import pos3 from './caption/pos/pos3.jpg';
import pos4 from './caption/pos/pos4.jpg';

import './computer.css'

const Computer = () => {
    return (
 <>

<section class="mt-5 bg-dark">
      <div class="container" >
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-8 d-flex align-items-center">
            <div class="w-100 py-4" style={{marginTop:"100px"}}>
              <h2 class="text-white">We Provides Round-The-Clock Maintenance for All Network Equipment</h2>
              <p class="mb-0 pt-2"><a href="#" class="btn btn-success py-3 px-4">Contact Us</a></p>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 d-flex align-items-end">
             <img src="img/" class="img-fluid" alt=""/> 
          </div>
        </div>
      </div>
    </section>

<main class="container-fluid">
<div class="row ">
{/* card */} 
<div class="col-md-9">
<section class="ftco-section" id="skills-section">
		<div class="container">
			<div class="row justify-content-center pt-4 pb-4">
        <h6>SHOWING 1–20 OF 32 RESULTS</h6>
			</div>
			<div class="row progress-circle ">
				{/* office equipment */}
			<div class="col-lg-3 mb-4">
	            <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={office1} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">30 Meter 15 Pins VGA Cable - Black </h5>
               <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
           </div>
           </div>
		   </div>
		  <div class="col-lg-3 mb-4">
				<div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={office2} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">30 Meter 15 Pins VGA Cable - White</h5>
			   <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>
		 </div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={office3} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">50 Meter 15 Pins VGA Cable - White</h5>
			   <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={office4} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">ACE X118H Essentials 3600-Lumen</h5>
			   <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		{/* computer */}
		<div class="col-lg-3 mb-4">
	            <div class=" mx-1  border shadow-lg p-4  bg-body rounded">
                <div className="text-center take">
                <img src={computer1} className='img-fluid ' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-4">30 Meter 15 Pins VGA Cable - Black </h5>
               <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
           </div>
           </div>
		   </div>
		  <div class="col-lg-3 mb-4">
				<div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={computer2} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">30 Meter 15 Pins VGA Cable - White</h5>
			   <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>
		 </div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-4  bg-body rounded">
                <div className="text-center take">
                <img src={computer3} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-4">50 Meter 15 Pins VGA Cable - White</h5>
			   <p className='lead fs-6 pt-3'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={computer4} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">ACE X118H Essentials 3600-Lumen</h5>
			   <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		{/* printer */}
		<div class="col-lg-3 mb-4">
	            <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={printer1} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">30 Meter 15 Pins VGA Cable - Black </h5>
               <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
           </div>
           </div>
		   </div>
		  <div class="col-lg-3 mb-4">
				<div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={printer2} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">30 Meter 15 Pins VGA Cable - White</h5>
			   <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>
		 </div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={printer3} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">50 Meter 15 Pins VGA Cable - White</h5>
			   <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={printer4} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">ACE X118H Essentials 3600-Lumen</h5>
			   <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		{/* pos */}
		<div class="col-lg-3 mb-4">
	            <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={pos1} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">30 Meter 15 Pins VGA Cable - Black </h5>
               <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
           </div>
           </div>
		   </div>
		  <div class="col-lg-3 mb-4">
				<div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={pos2} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">30 Meter 15 Pins VGA Cable - White</h5>
			   <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>
		 </div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={pos3} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">50 Meter 15 Pins VGA Cable - White</h5>
			   <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={pos4} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">ACE X118H Essentials 3600-Lumen</h5>
			   <p className='lead fs-6'>Office System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦200,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		{/* gyu */}
		</div>
		</div>
	</section>
</div>
{/* side bar */}
<div class="col-md-3 mb-5">
      <div class="position-sticky" style={{top:"2rem"}}>
        <div class="p-4 mb-3  rounded">
          {/* form */}
        <form class="d-flex mb-3 pb-5 pt-5">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
          <h4 class="">categories</h4>
          <hr className="fw-3" />
          <ul className="list-unstyled">
            <li>Computers</li>
            <li>Office Equipment</li>
            <li>POS System</li>
            <li>Printers</li>
          </ul>

            {/* range */}
          <h4 class="">Filter by price</h4>
          <input type="range"/>
          {/* range end */}
        </div>
        
      </div>
</div>
  </div>
</main> 

</>
    );
}

export default Computer;
