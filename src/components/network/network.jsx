import './network.css'
import img1 from './icon/icon-01-light.png'
import img2 from './icon/icon-02-light.png'
import img3 from './icon/icon-03-primary.png'
import img4 from './icon/icon-05-light.png'
import img5 from './icon/icon-06-light.png'
import img6 from './icon/icon-04-light.png'

const Network = () => {
    return (
<>
    {/* header */}
<section class="bg-dark mt-5">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-8 d-flex align-items-center">
            <div class="w-100 py-4">
              <h2   class="text-white">Have a project on your mind.</h2>
              <p  class="text-white">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly.</p>
              <p class="mb-0"><a href="#" class="btn btn-success py-3 px-4">Contact me</a></p>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 d-flex align-items-end">
             <img src="img/" class="img-fluid" alt=""/> 
          </div>
        </div>
      </div>
    </section>     
{/* network */}

<div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto" style={{minWidth:"500px"}}>
          <h1 class="display-6 fw-bold">
            We Provide professional Insurance Services
          </h1>
        </div>
        <div class="row g-4 justify-content-center">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img1}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">Life Insurance</h4>
              </div>
              <p class="mb-4">
                Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                sit clita duo justo erat amet
              </p>
              <a class="btn btn-light px-3" href="">Read More</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img2}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">Health Insurance</h4>
              </div>
              <p class="mb-4">
                Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                sit clita duo justo erat amet
              </p>
              <a class="btn btn-light px-3" href="">Read More</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img6}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">Home Insurance</h4>
              </div>
              <p class="mb-4">
                Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                sit clita duo justo erat amet
              </p>
              <a class="btn btn-light px-3" href="">Read More</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img4}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">Vehicle Insurance</h4>
              </div>
              <p class="mb-4">
                Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                sit clita duo justo erat amet
              </p>
              <a class="btn btn-light px-3" href="">Read More</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img6}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">Business Insurance</h4>
              </div>
              <p class="mb-4">
                Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                sit clita duo justo erat amet
              </p>
              <a class="btn btn-light px-3" href="">Read More</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img2}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">Property Insurance</h4>
              </div>
              <p class="mb-4">
                Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem
                sit clita duo justo erat amet
              </p>
              <a class="btn btn-light px-3" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>






</>
    );
}

export default Network;
