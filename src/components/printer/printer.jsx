import printer2 from './printer2.jpg'

const Printer = () => {
    return (
 <>
 {/* header */}
<div class="container-fluid mb-  bg-secondary py-5 " style={{height:"520x"}}>
  <div class="container py-5 ">
    <h1 class=" mt-5 text-white text-center">Printer Repair & Maintenance</h1>
    <h4 class=" mt-2 text-white text-center">Keeping Up with all Necessary Maintenance is The Best Way to Protect your Investment</h4>
    <h5 class=" mt-2 text-white text-center">A malfunctioning or out of service printer, copier or multifunction device can be disastrous for your business</h5>
    
  </div>

 </div>
 
{/* body one */}
 <div class="container-fluid">
  <div class="container-fluid py-5 ">
    <h1 class=" mt-5 text-dark text-center">Printer Repair & Maintenance</h1>
    <p class=" mt-2 fs-4 text-dark text-center">Maintaining the printer and copier in your office is very important. Keeping up with all necessary printer repair and maintenance is the best way to protect your valuable investment. It also ensures that your business will remain productive and avoid frustrating delays due to printer malfunction</p>
    <p class=" mt-2 fs-4  text-dark text-center">We offer a full range of printer repair services. Do you have issues with your printers or copiers? Is your printer or photocopier giving you a hard time? Your printing jobs should be more straight forward and seamless. Let's FIX IT!!
</p>   
</div>
 </div>

 {/* cards */}

 <div class="album py-5">
      <div class="container bg-primary">

        <div class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-3">
          <div class="col">
            <div class="card   shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-body-secondary">9 mins
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>

       
      </div>
    </div>
  </div>

 {/* printer repair */}
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
      {/* <img src={printer2} class="img-fluid" alt=""/> */}
      <img src={printer2}  class="img-fluid" alt="" />
      </div>
    </div>
</div>

 </>
    );
}

export default Printer;
