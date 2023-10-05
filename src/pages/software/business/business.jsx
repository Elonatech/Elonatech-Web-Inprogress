import businessHeader from './captions/businessHeader.jpg'
import mar from './captions/profit and loss.png'
import busImg from './captions/for mike.png'

import './business.css'

const Business = () => {
    return (
 <>
{/* header */}
    <div class="container-fluid bg-secondary " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${businessHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
    <div class="py-5 mt-5 ">
      <h2 class=" mt-5 text-white text-center">Business Application Software</h2>
      <h5 class=" mt-4 text-white text-center">Monitor, Configure and Maintain Servers to operate reliably and optimally</h5>
      <p class="lead text-white text-center">Minimizing downtimes while maximizing reliability in other to meet the needs of organizations over time.</p>
    </div>
 </div>



{/*  About Section */}
    <section id="about" class="about mt-5 mb-5">
      
      <div class="container" data-aos="fade-up">
        <div class="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
          <div class="col-lg-5">
            <div class="mt-5">
              <img src={mar} class="img-fluid" style={{height:""}} alt=""/>
            </div>
          </div>
          <div class="col-lg-7">
            <h3 class="pt-0 pt-lg-5"></h3>
            <h2 className='mb-3'>Benefits of Business Application Software</h2>

            {/* <!-- Tab Content --> */}
            <div class="tab-content">
              <div class="tab-pane fade show active" id="tab1">

                <p class="fst-italic">Below are some popular examples of business applications that we support and are commonly used by organizations.</p>

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2  bg-danger rounded-circle text-white"></i>
                  <h4>Metric Availability</h4>
                </div>
                <p>Software uses real-time data from various operations, which can be collected and generated into reports and analyses to monitor key performance indicators (KPIs).</p>
                 
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2 bg-danger rounded-circle text-white"></i>
                  <h4>Reduced Labor Costs</h4>
                </div>
                <p>Manually performing tasks is time-consuming, expensive, and can lead to human errors that often require additional expenses to reconcile discrepancies. Therefore, project management software ensures that companies are minimizing the resources needed to conduct basic processes.</p>

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2  bg-danger rounded-circle text-white"></i>
                  <h4>Optimized Operational Efficiency</h4>
                </div>
                <p>With reduced time, labor costs, and effort needed to complete standard procedures, operational efficiency is significantly increased</p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>


{/* body */}
<div className="container  mb-5" style={{marginTop:""}}>
  <div class="row justify-content-center  g-4">
  <div class="col-lg-5">
            <div class="tab-content mt-4">
              <div class="tab-pane fade show active" id="tab1">
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h4 className='ms-2 mt-2'>Time Savings</h4>
                </div>
                <p>By automating repetitive procedures, software allows employees to focus manual labor on more complicated tasks, reducing time and human error.</p>

                <div class="d-flex align-items-center mt-4">
                   <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h4 className='ms-2 mt-2'>Minimized Turnaround Times </h4>
                </div>
                <p>A software solution maintains consistent results through automation, streamlining processes, and reducing turnaround times for employees and consumers. This promotes growing businesses and the satisfaction of internal and external associates.</p>

              </div>
            </div>

          </div>
    <div class="col-md-6">
      <img src={busImg} alt="" className='img-fluid rounded'  srcset="" />
    </div>
  </div>
</div>



{/* Get in touch */}
<div className="container-fluid" style={{backgroundColor:"#007bb5"}}>
    <div className="container">
    <div className="row">
        <div className="col-md-6">
         <p className='text-white pt-5 pb-5 fs-1'>Talk with an expert about your next business software decision</p>
        </div>
        <div className="col-md-6">
          
                <div className="text-end mt-5 mb-3">
                    <button className='btn btn-outline-dark rounded-0 btn-lg border-light text-white mt-5 trr ps-4  pe-4'>GET IN TOUCH</button>
              
            </div>
        </div>
    </div>
    </div>
 </div>

</>
    );
}

export default Business;
