import aboutImage  from './captions/about-us.png'
import './ppc.css'

const Ppc = () => {
    return (
    <>
{/* header */}
<section class="mt-5" style={{backgroundColor:"#1B4D3E"}}> 
      <div class="container" >
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-8 d-flex align-items-center">
            <div class="w-100 py-4" style={{marginTop:"100px"}}>
              <h2 class="text-white">We Provides Round-The-Clock Maintenance for All Network Equipment</h2>
              <p  class="text-white pt-2">We Provides Round-The-Clock Maintenance for All Network Equipment</p>
              <p  class="text-white pt-2">we are committed to supplying you with the most reliable advice,
                             support and services at all times, wherever you are in Nigeria.</p>
              <p class="mb-0 pt-2"><a href="#" class="btn btn-success py-3 px-4">Contact Us</a></p>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 d-flex align-items-end">
             <img src="img/" class="img-fluid" alt=""/> 
          </div>
        </div>
      </div>
    </section>


{/* ppc */}
<section class="about-section spad mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="">
                        <img src={aboutImage} className='img-fluid' alt=""/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="about__text">
                        <h2>Welcom to Deerhost</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis.</p>
                        <div class="about__achievement">
                            <div class="about__achieve__item">
                                <span class="fa fa-clone"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Clients</p>
                            </div>
                            <div class="about__achieve__item">
                                <span class="fa fa-edit"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Domains</p>
                            </div>
                            <div class="about__achieve__item">
                                <span class="fa fa-clone"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Server</p>
                            </div>
                            <div class="about__achieve__item">
                                <span class="fa fa-cog"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Installs</p>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary mb-4"><b>Get started now</b></a>
                    </div>
                </div>
            </div>
        </div>
    </section>










    </>
    );
}

export default Ppc;
