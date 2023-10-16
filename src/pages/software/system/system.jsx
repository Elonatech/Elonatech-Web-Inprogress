import img4 from './captions/stats-img.svg';
import './system.css';
import systemHeader from './captions/systemHeader.jpg';
import systemImage from './captions/systemImage.png';


const System = () => {
    return (
   <>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${systemHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">System Software</h2>
   <h5 class=" mt-4 text-white text-center">Monitor, Configure and Maintain Servers to operate reliably and optimally</h5>
   <p class="lead text-white text-center">Minimizing downtimes while maximizing reliability in other to meet the needs of organizations over time.</p>
 </div>
 </div>    



    {/* body */}
<div className="container  mb-5" style={{marginTop:"100px"}}>
  <div class="row justify-content-center  g-2">
    <div class="col-md-6 ps-5">
    <h2 className='mb-4'>Features of System Software</h2>
    <p className="fs-6">Well, you have come to the right place, At Elonatech Nigeria Limited, We are One Of Nigeria's leading Website Design & Development Company Who's Core Values are Excellence, Professionalism, Integrity & Convenient Service.
       ou become a success. Our specialty lies in providing comprehensive and custom web development services that provide youds, sales, customers, and clients.</p>
    </div>
    <div class="col-md-6">
      <img src={systemImage} alt="" className='img-fluid rounded' srcset="" />
    </div>
  </div>
</div>

{/* <!-- ======= Stats Counter Section ======= --> */}
    <section id="stats-counter" class="stats-counter mb-5 ">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4 align-items-center">

          <div class="col-lg-6">
            <img src={img4} alt="" class="img-fluid"/>
          </div>

          <div class="col-lg-6">

            <div class="stats-item d-flex align-items-center">
              <h1 className='text-danger me-3'>232</h1>
              <p><strong>Happy Clients</strong> consequuntur quae diredo para mesta</p>
            </div>

            <div class="stats-item d-flex align-items-center">
             
              <h1 className='text-danger me-3'>521</h1>
              <p><strong>Projects</strong> adipisci atque cum quia aut</p>
            </div>

            <div class="stats-item d-flex align-items-center">
              <h1 className='text-danger me-3'>453</h1>
              <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
            </div>

          </div>

        </div>

      </div>
    </section>
    

  </>
    );
}

export default System;
