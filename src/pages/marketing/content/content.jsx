import bg from './captions/hero_bg_2.jpg';
import gc from './captions/hero-img.svg'


const Content = () => {
    return (
<>
{/*  */}
<section class="mt-5 bg-dark ">
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
             <img src={gc} class="img-fluid mb-4" alt=""/> 
          </div>
        </div>
      </div>
</section>
  {/*  */}
<div class="section">
      <div class="container">
        <div class="row text-left mb-5">
          <div class="col-12">
            <h2 class="font-weight-bold heading  mb-4 mt-5">About Us</h2>
          </div>
          <div class="col-lg-6">
            <p class="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              enim pariatur similique debitis vel nisi qui reprehenderit totam?
              Quod maiores.
            </p>
            <p class="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              saepe, explicabo nihil. Est, autem error cumque ipsum repellendus
              veniam sed blanditiis unde ullam maxime veritatis perferendis
              cupiditate, at non esse!
            </p>
            <p class="text-black">
              Enim, nisi labore exercitationem facere cupiditate nobis quod
              autem veritatis quis minima expedita. Cumque odio illo iusto
              reiciendis, labore impedit omnis, nihil aut atque, facilis
              necessitatibus asperiores porro qui nam.
            </p>
          </div>
          <div class="col-lg-6">
            <p class="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              saepe, explicabo nihil. Est, autem error cumque ipsum repellendus
              veniam sed blanditiis unde ullam maxime veritatis perferendis
              cupiditate, at non esse!
            </p>
            <p class="text-black">
              Enim, nisi labore exercitationem facere cupiditate nobis quod
              autem veritatis quis minima expedita. Cumque odio illo iusto
              reiciendis, labore impedit omnis, nihil aut atque, facilis
              necessitatibus asperiores porro qui nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  {/*  */}
    <div class="section pt-0">
      <div class="container">
        <div class="row justify-content-between mb-5">
          <div class="col-lg-7 mb-5 mb-lg-0 order-lg-2">
            <div class="img-about dots">
              <img src={bg} alt="Image" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-flex feature-h">
              <span class="wrap-icon me-3">
                <span class="icon-home2"></span>
              </span>
              <div class="feature-text">
                <h3 class="heading">Quality properties</h3>
                <p class="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>

            <div class="d-flex feature-h">
              <span class="wrap-icon me-3">
                <span class="icon-person"></span>
              </span>
              <div class="feature-text">
                <h3 class="heading">Top rated agents</h3>
                <p class="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>

            <div class="d-flex feature-h">
              <span class="wrap-icon me-3">
                <span class="icon-security"></span>
              </span>
              <div class="feature-text">
                <h3 class="heading">Easy and safe</h3>
                <p class="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*  */}
    <div class="section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div class="box-feature mb-4">
              <h3 class="text-black mb-3 font-weight-bold">
                Quality Properties
              </h3>
              <p class="text-black">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <div class="box-feature mb-4">
              <h3 class="text-black mb-3 font-weight-bold">Top Rated Agent</h3>
              <p class="text-black">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
            <div class="box-feature mb-4">
              <h3 class="text-black mb-3 font-weight-bold">
                Property for Sale
              </h3>
              <p class="text-black">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
       
            </div>
          </div>
          <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
            <div class="box-feature mb-4">
              <h3 class="text-black mb-3 font-weight-bold">House for Sale</h3>
              <p class="text-black">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>        
</>
    );
}

export default Content;
