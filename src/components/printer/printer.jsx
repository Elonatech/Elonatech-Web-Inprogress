import printer2 from './caption/printer2.jpg';
import bg2 from './caption/printerImg.jpg';
import printer4 from './caption/external-printer-home-office-photo3ideastudio-lineal-color-photo3ideastudio.png'
import printer5 from './caption/external-printer-printing-tulpahn-outline-color-tulpahn-1.png'
import printerCombine from './caption/printersCombined.png'
import printerHeader from './caption/printer6.jpg'
import './printer.css'




const Printer = () => {
    return (
 <>
 {/* */}
 <div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${printerHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Printer Repair & Maintenance</h2>
   <h5 class=" mt-4 text-white text-center">Keeping Up with all Necessary Maintenance is The Best Way to Protect your Investment</h5>
   <p class="lead text-white text-center">A malfunctioning or out of service printer, copier or multifunction device can be disastrous for your business</p>
 </div>
 </div>
 
{/**/}
 <div class="container">
  <div class="container-fluid  ">
    <h1 class=" mt-5 text-center" style={{color:"#34548c"}}>Maintaining Your Printer, Copier & Scanner</h1>
    <p class="text-dark fs-5 text-center ">Maintaining the printer and copier in your office is very important. Keeping up with all necessary printer repair and maintenance is the best way to protect your valuable investment. It also ensures that your business will remain productive and avoid frustrating delays due to printer malfunction</p>
    <p class=" mt-2 fs-5  text-dark text-center">We offer a full range of printer repair services. Do you have issues with your printers or copiers? Is your printer or photocopier giving you a hard time? Your printing jobs should be more straight forward and seamless. Let's FIX IT!!
</p>   
</div>
 </div> 

 {/**/}
 <div class="album py-5">
      <div class="container rounded" >
        <div class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-2">
          <div class="col rounded-start" style={{backgroundColor:"#34548c"}}>
            <div class="card mt-1 mb-1 shadow-sm" style={{height:"380px"}}>
              <div className="text-center mt-2">
              <img src={printer4} className='card-img-top text-center' style={{height:"4rem" , width:"4rem"}} alt="" />
              </div>
              <div class="card-body">
                <h5 className='text-center'>Repair and Maintenance Services for out of Warranty Print Products</h5>
                <p  class="text-center fs-6 mb-4">Highly aware of your company’s business needs, 
                 Elonatech provides a portfolio of services that can be ordered as the occasion demands.
                 Your printer, photocopier or scanner is down, and you are out of warranty, or your device is not even covered by a warranty. 
                You can opt for our repair option which includes the repair service and part replacement that can be managed throughout the usage of the device.</p>
              </div>
            </div>
          </div>
          <div class="col" style={{backgroundColor:"#34548c"}}>
          <div className="card mt-1 mb-1" style={{height:"380px" , backgroundImage:`url(${bg2})` , backgroundRepeat:"no-repeat", backgroundSize:"cover" }}></div>
          </div>
          <div class="col rounded-end " style={{backgroundColor:"#34548c"}} >
          <div class="card mt-1 mb-1 shadow-sm" style={{height:"380px"}}>
              <div className="text-center mt-4">
              <img src={printer5} className='card-img-top text-center' style={{height:"4rem" , width:"4rem"}} alt="" />
              </div>
              <div class="card-body">
                <h5 className='text-center'>Printer installation and Configuration</h5>
                <p  class="text-center fs-6 mb-4">Our Printer Repair Technicians is highly skilled and 
                 proficient in the regular and routine repairs, 
                including replacements, installation and
                 configuration of new printers, maintaining and ensuring the proper functioning of standalone printers, scanners or Network Printers.</p>
              </div>
            </div>
          </div>

       
      </div>
    </div>
  </div>

  <div className="container mb-5">
<div class="row justify-content-md-center row-cols-1 row-cols-lg-2 row-cols-lg-3 ">
      <div class="col-md-6">
        <img src={printer2} alt=""   className='img-fluid rounded  shadow' />
      </div>
      <div class="col-md-6">
        <div className="border-x" style={{height:""}}>
          <div className="p-4">
          <div class="stars text-center fs-5 mt-3" style={{color:'#D9B938'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
          <h4 className='text-center  mt-3'>Get Professional Printer Repair</h4>
          <p className='mt-3'>
          Many people like to tackle copier and printer repair on their own. After all, if you can do it yourself, you cut down your wait time and get back up to speed faster. However, some types of repairs are too complex for people who do not have special knowledge of these devices. If your printer is consistently getting jammed, has parts that need to be replaced, or is making any worrisome sounds or smells, it is time to get professional help. 
          <br /> Elonatech can readily help you solve your printer repair problems quickly and affordably.
            </p>

          </div>
        </div>
      </div>  
    </div>
</div>

{/* specialists */}
<div className="container-fluid" style={{backgroundColor:"#34548c"}}>
  <div className="container">
  <div className="row justify-content-md-center">
  <div className="col-lg-5">
    <div className="card  p-3 mt-4" style={{border:"none" , backgroundColor:"#34548c"}}>
      <h4 className='text-white  mt-5'>Our Printer Specialists Work on The Following Top Brands</h4>
      <ul className='list-unstyled text-white'>
        <li><h5><i class="bi bi-printer text-danger me-3"></i>Brother</h5></li>
        <li><h5><i class="bi bi-printer-fill text-danger me-3"></i>Canon</h5></li>
        <li><h5><i class="bi bi-printer text-danger me-3"></i>Epson</h5></li>
        <li><h5><i class="bi bi-printer-fill text-danger me-3"></i>HP (Hewlett Packard)</h5></li>
        <li><h5><i class="bi bi-printer text-danger me-3"></i>Lexmark</h5></li>
        <li><h5><i class="bi bi-printer-fill text-danger me-3"></i>Ricoh</h5></li>
        <li><h5><i class="bi bi-printer text-danger me-3"></i>Samsung</h5></li>
        <li><h5><i class="bi bi-printer-fill text-danger me-3"></i>Sharp</h5></li>
        <li><h5><i class="bi bi-printer text-danger me-3"></i>Xerox</h5></li>
      </ul>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="card mt-5" style={{border:"none" , backgroundColor:"#34548c"}}>
      <img src={printerCombine} alt="" />
    </div>
  </div>
  </div>
</div>
   
</div>

 </>
    );
}

export default Printer;
