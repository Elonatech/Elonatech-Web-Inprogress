import shopHeader from './caption/shopHeader.jpg'
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
import pos3 from './caption/pos/pos3.png';
import pos4 from './caption/pos/pos4.jpg';



import './shop.css'

const Shop = () => {
    return (
        <>

        
{/* Header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${shopHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Shop Products</h2>
   <h5 class=" mt-4 text-white text-center">Get what you need to run your business</h5>
   <p class="lead text-white text-center">Smart business people need quality and reliable hardware, software, service, and support for the day to day running of their businesses</p>
 </div>
</div>

<main class="container-fluid">
<div class="row g-0 ">
<div class="col-md-9 ">
<section class="ftco-section" id="skills-section">
		<div class="container">
			<div class="row justify-content-center   pt-4 pb-4">
        <h6>SHOWING 1–20 OF 32 RESULTS</h6>
			</div>
			<div class="row g-1 progress-circle ">
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
               <h5 class="fw-normal pt-4">Apple IMac 4.5K 24″ – M1 – 8Cores – 256 GB SSD, – 2021</h5>
               <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦981,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
           </div>
           </div>
		   </div>
		  <div class="col-lg-3 mb-4">
				<div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={computer2} className='img-fluid pt-1' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">APPLE IMAC 21.5-(MHK03LL/A) 2020</h5>
			   <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦877,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>
		 </div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-4  bg-body rounded">
                <div className="text-center take">
                <img src={computer3} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-4">Apple MacBook Pro 14″ M1 Pro Chip</h5>
			   <p className='lead fs-6 pt-3'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦1,407,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={computer4} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">Asus MO3450 ZENBOOK FLIP 14.0″ TOUCH Laptop</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦757,000.00</p>
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
               <h5 class="fw-normal pt-5">Deskjet Ink Advantage 3835 All-In-One Color Printer</h5>
               <p className='lead fs-6'>Printer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦166,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
           </div>
           </div>
		   </div>
		  <div class="col-lg-3 mb-4">
				<div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={printer2} className='img-fluid pt-2' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-5">HP Color LaserJet M454DW</h5>
			   <p className='lead fs-6'>Printer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between pt-0">
               <p className='mt-2 px-1 text-danger'>₦307,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>
		 </div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={printer3} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-5">HP Color LaserJet Professional CP5225 Printer</h5>
			   <p className='lead fs-6'>Printer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦767,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={printer4} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">HP Color LaserJet Professional CP5225n Printer</h5>
			   <p className='lead fs-6'>Printer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦788,500.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		{/* pos */}
		<div class="col-lg-3 mb-4">
	            <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={pos1} className='img-fluid pt-2' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">BIXOLON BARCODE PRINTER XD5-40DK</h5>
               <p className='lead fs-6'>Pos System</p>
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
                <img src={pos2} className='img-fluid pt-2' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-4">SAM TC TOUCH – A8 SYSTEM WITH DOUBLE SCREEN</h5>
			         <p className='lead fs-6'>Pos System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦460,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>
		 </div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={pos3} className='img-fluid pt-3' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">SAM4S ELLIX-30 THERMAL RECEIPT PRINTER</h5>
			   <p className='lead fs-6'>Pos System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦85,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={pos4} className='img-fluid pt-1' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">POS THERMAL PAPER 57MM X 38MM PER ROLL</h5>
			   <p className='lead fs-6'>Pos System</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦2,600.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		{/*  */}
		</div>
		</div>
	</section>
</div>
<div class="col-md-3  mb-5">
      <div class="position-sticky p-3" style={{top:"2rem"}}>
        <div class="mb-3 mt-4 rounded">
          {/* form */}
        <form class="d-flex mb-3 pb-5 pt-5">
        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-success me-5" type="submit">Search</button>
        </form>
          <h4 class="">Categories</h4>
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

export default Shop;
