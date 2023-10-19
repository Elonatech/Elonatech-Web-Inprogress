import './css/portfolio.css';
import project1 from './caption/project-1.jpg'
import project2 from './caption/project-2.jpg'
import project3 from './caption/project-3.jpg'
import project4 from './caption/project-4.jpg'




const Portfolio = () => {
    return (
    <>  
    
{/* our  */}
<div class="container-xxl pt-5 mt-5 ">
        <div class="container">
            <div className="row">
            <div class="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:'500px;'}}>
                <p class="fs-5 fw-medium text-primary">Our Projects</p>
                <h1 class=" mb-5">We've Done Lot's of Awesome Projects</h1>
            </div>
            </div>
            
            <div class="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
            <div class="row">
                <div class="col-sm">
                <div class="project-item mb-5">
                    <div class="position-relative ">
                        <img class="img-fluid" src={project1} alt=""/>
                        <div class="project-overlay">
                            <a class="btn btn-lg-square btn-light rounded-circle m-1 "  href="img/project-1.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Data Analytics & Insights</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
                </div>
          {/*  */}

              <div class="col-sm">
                <div class="project-item mb-5">
                    <div class="position-relative ">
                        <img class="img-fluid" src={project2} alt=""/>
                        <div class="project-overlay">
                            <a class="btn btn-lg-square btn-light rounded-circle m-1 "  href="img/project-2.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Data Analytics & Insights</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
                </div>

                 {/*  */}
           <div class="col-sm">     
              <div class="project-item mb-5">
                    <div class="position-relative">
                        <img class="img-fluid" src={project4} alt=""/>
                        <div class="project-overlay">
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-4.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Social Marketing Strategy</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
                </div>

             {/*  */}

             <div class="col-sm">     
              <div class="project-item mb-5">
                    <div class="position-relative">
                        <img class="img-fluid" src={project4} alt=""/>
                        <div class="project-overlay">
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-4.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Social Marketing Strategy</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
                </div>
                 {/*  */}

                 </div>
                  </div>
            </div>
             </div>
</div>
    {/*  */}



{/* feature */}
<section id="features" class="features mb-5">
      <div class="container mb-5" data-aos="fade-up">
        <ul class="nav nav-tabs row gy-4 d-flex">
          <li class="nav-item col-6 col-md-4 col-lg-2">
            <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
              <i class="bi bi-code-slash color-cyan"></i>
              <h4>Programming</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <i class="bi bi-box-seam color-indigo"></i>
              <h4>OS</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
              <i class="bi bi-nut color-teal"></i>
              <h4>DD</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
              <i class="bi bi-command color-red"></i>
              <h4>Firmware</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-5">
              <i class="bi bi-x-diamond color-blue"></i>
              <h4>BIOS & UEFI</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-6">
              <i class="bi bi-map color-orange"></i>
              <h4>Utilities</h4>
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane active show" id="tab-1">
            <div class="row gy-4">
              <div class="col-lg-12 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
               {/*  */}
               <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style={{width:"380px"}}>
               <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
  
                 </a>
                 {/*  */}
    <div class="list-group list-group-flush border-bottom scrollarea">
      <a href="#michael" class="list-group-item list-group-item-action active lh-sm" aria-current="true">
        <div class="col-10 mb-1 p-2 ">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#john" class="list-group-item list-group-item-action py-3 lh-sm">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">List group item heading</strong>
          <small class="text-body-secondary">Tues</small>
        </div>
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">List group item heading</strong>
          <small class="text-body-secondary">Mon</small>
        </div>
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>

      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">List group item heading</strong>
          <small class="text-body-secondary">Wed</small>
        </div>
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">List group item heading</strong>
          <small class="text-body-secondary">Tues</small>
        </div>
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">List group item heading</strong>
          <small class="text-body-secondary">Mon</small>
        </div>
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
    </div>
  </div> 


               {/*  */}
              </div>
            </div>
          </div>

          <div class="tab-pane" id="tab-2">
            <div class="row gy-4">
              <div class="col-lg-8 order-2 order-lg-1">
                <h4>Operating system</h4>

                <p class="fst-italic">
                An operating system is system software that provides a platform between computer hardware, application software, and end-users. 
                It is pre-installed on devices and allows them to be identified and then function. OS is the first thing to be loaded when a system is started.
                </p>
                <ul>
                  <li><i class="bi bi-check-circle-fill"></i> The OS keeps the system and programs safe and secure through authentication.</li>
                  <li><i class="bi bi-check-circle-fill"></i>  Allocates and deallocates resources.</li>
                  <li><i class="bi bi-check-circle-fill"></i> When more than one process runs on the system the OS decides how and when a process will use the CPU.</li>
                </ul>
              </div>
              <div class="col-lg-4 order-1 order-lg-2 text-center">
                {/* <img src={f2} alt="" style={{height:"19rem"}} class="img-fluid"/> */}
              </div>
            </div>
          </div>

          <div class="tab-pane" id="tab-3">
            <div class="row gy-4">
              <div class="col-lg-8 order-2 order-lg-1">
                <h4>Device Drivers</h4>
                <p class="fst-italic">
                A Device Driver is system software that operates or controls a particular device attached to a computer. 
                It is the device drivers who make it possible for all the external devices to perform their tasks. 
                Most of the hardware comes with pre-installed drivers in it. However, if the device is new to the system, then the user may have to download the drivers.
                </p>
                <ul>
                  <li><i class="bi bi-check-circle-fill"></i> Device drivers enable peripheral devices, such as printers or keyboards, to interact with the computer.</li>
                  <li><i class="bi bi-check-circle-fill"></i> Controlling the hardware is only possible if developers can initialize and communicate with the hardware.</li>
                  <li><i class="bi bi-check-circle-fill"></i> The device driver acts as a pipe between the higher-level application and the lower-level hardware or firmware for data transfer.</li>
                </ul>
              </div>
              <div class="col-lg-4 order-1 order-lg-2 text-center">
                {/* <img src={f3} alt="" class="img-fluid"/> */}
              </div>
            </div>
          </div>

          <div class="tab-pane" id="tab-4">
            <div class="row gy-4">
              <div class="col-lg-8 order-2 order-lg-1">
                <h4>Firmware</h4>
                <p class="fst-italic">
                 Firmware is an operational software stored in a flash, ROM, EPROM for the OS to identify it.
                 The firmware provides instructions on how the device should be operated. Unlike other software, firmware can not be manipulated, changed, or deleted by the end-users. 
                 They remain on the device.
                </p>
                <ul>
                  <li><i class="bi bi-check-circle-fill"></i>  Protect against malicious firmware and the best defenses against firmware attacks is purchasing hardware with built-in firmware security.</li>
                  <li><i class="bi bi-check-circle-fill"></i> Constantly update firmware.</li>
                  <li><i class="bi bi-check-circle-fill"></i> Register hardware devices to get the latest firmware updates, enterprises should register all hardware purchases..</li>
                </ul>
              </div>
              <div class="col-lg-4 order-1 order-lg-2 text-center">
                {/* <img src={f4} alt=""  style={{height:"18rem"}} class="img-fluid"/> */}
              </div>
            </div>
          </div>

          <div class="tab-pane" id="tab-5">
            <div class="row gy-4">
              <div class="col-lg-8 order-2 order-lg-1">
                <h4>BIOS & UEFI</h4>
                <p class="fst-italic">
                BIOS (Basic Input/Output System) or the new UEFI (Unified Extended Firmware Software) gets the computer system started when we turn it on.
                BIOS also manages the flow of information between operating systems and the attached devices.
                </p>
                <ul>
                  <li><i class="bi bi-check-circle-fill"></i> UEFI supports drive sizes upto 9 zettabytes, whereas BIOS only supports 2.2 terabytes.</li>
                  <li><i class="bi bi-check-circle-fill"></i> UEFI provides faster boot time..</li>
                  <li><i class="bi bi-check-circle-fill"></i>  UEFI has discrete driver support, while BIOS has drive support stored in its ROM, so updating BIOS firmware is a bit difficult.</li>
                </ul>
              </div>
              <div class="col-lg-4 order-1 order-lg-2 text-center">
                {/* <img src={f5} alt="" class="img-fluid"/> */}
              </div>
            </div>
          </div>

          <div class="tab-pane" id="tab-6">
            <div class="row gy-4">
              <div class="col-lg-8 order-2 order-lg-1">
                <h4>Utilities</h4>
                <p class="fst-italic">
                Utilities are the type of system software that is present between user and application software. 
                These are the programs designed to configure, analyze, optimize and maintain tasks of the computer. 
                Their task varies from disk fragmentation to data security.
                </p>
                <ul>
                  <li><i class="bi bi-check-circle-fill"></i>  An antivirus is a utility software that helps to keep the computer virus-free.</li>
                  <li><i class="bi bi-check-circle-fill"></i> Utility software are used to manage data on disks.</li>
                  <li><i class="bi bi-check-circle-fill"></i>  Utility software helps to back up the files, folders, databases, or complete disks..</li>
                </ul>
              </div>
              <div class="col-lg-4 order-1 order-lg-2 text-center">
                {/* <img src={f6} alt="" class="img-fluid"/> */}
              </div>
            </div>
          </div>

        </div>

      </div>
</section>     






{/* why choose us */}
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class=" text-center position-relative pb-3 mb-5" style={{minWidth:"100px"}}>
            <h5 class="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 class="mb-0">We Are Here to Grow Your Business <br/> Exponentially</h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4">
                <div class="row g-5">
                    <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-cubes text-white"></i>
                        </div>
                        <h4>Best In Industry</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                    <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-award text-white"></i>
                        </div>
                        <h4>Award Winning</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight:"350px"}}>
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src={project3} style={{objectFit:"cover"}}/>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="row g-5">
                    <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-users-cog text-white"></i>
                        </div>
                        <h4>Professional Staff</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                    <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <h4>24/7 Support</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>            
    </>
    );
}

export default Portfolio;
