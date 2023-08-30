import './carousel.css';
import carousel1 from './captions/samsung.jpg'
import carousel2 from './captions/sales mike.png'
import carousel4 from './captions/4391687.png'


const Carousel = () => {
    return (
<>
<main className='mt-5'>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" style={{height:"600px"}}>
        <img src={carousel1} class="bd-placeholder-img" alt="" />
        <div class="container">
          <div class="carousel-caption text-start" style={{marginBottom:"150px"}}  >
            <h1>We Are Digitial Marketing</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-danger" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item" style={{height:"600px"}}>
        <img src={carousel2} class="bd-placeholder-img" style={{backgroundSize:"cover" , backgroundPosition:"center"}} alt="" />
        <div class="container mt-5">
          <div class="carousel-caption" style={{marginBottom:"150px"}}>
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-danger" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item" style={{height:"600px"}}>
        <img src={carousel4} class="bd-placeholder-img" alt="" />
        <div class="container">
          <div class="carousel-caption text-end" style={{marginBottom:"150px"}}>
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-danger" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</main>        
</>
    );
}

export default Carousel;
