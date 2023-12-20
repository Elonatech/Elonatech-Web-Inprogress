


import test1 from './clients/Mary-Ephraim-Egbas.jpeg'
import test2 from './clients/Abayomi-Kakanfo.jpg'
import test3 from './clients/Chunyere-Nganwuchu.jpg'
import test4 from './clients/Remeben-MD-1.png'
import test5 from './clients/Gabriel-Osondu.jpeg'
import test6 from './clients/Mr. Yahaya Olajide.jpg';

import './client.css'
const Clients = () => {
    return (
        <>
       

       <h1>HFDGD</h1>
       <h1>HFDGD</h1>
       <h1>HFDGD</h1>
{/* What They Say About Us */}
<div id="demo" class="carousel slide  mb-5" data-bs-ride="carousel" style={{backgroundColor:"#11253D"}}>
  {/* <!-- The slideshow/carousel --> */}
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* test 1 */}
      <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="testimonials-slider swiper">
          <div class="swiper-wrapper mb-1">
            <div class="swiper-slide mb-2">

              <div class="testimonial-item">
                <img src={test1} class="testimonial-img" alt=""/>
                <h3 className='text-white'>MARY EPHRAIM EGBAS</h3>
                <h4 className='text-white'>CEO, Okhma Consult</h4>
                <div class="stars" style={{color:'yellow'}}>
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p className='text-white'>
                  <i class="bi bi-quote quote-icon-left text-danger"></i>
                  The challenge we face is that we are big enough to need a network with specific functionality, but not necessarily requiring a full-time IT staff person. Elonatech Nigeria Ltd. provided the perfect solution; they have the technical expertise and mindshare we needed coupled with flexibility in the level of support. They are really responsive, prioritizing important issues that arise and dealing with them quickly and effectively. I also appreciate their detailed follow-up and preventive maintenance; more than once this has helped us avoid a major problem with our network. A lot of companies these days make claims about customer service and looking out for the best interest of their clients, but Elonatech can be trusted to do what they say—and for a competitive price.
                  <i class="bi bi-quote quote-icon-right text-danger"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    {/* test 2 */}
    <div class="carousel-item">
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="testimonials-slider swiper">

          <div class="swiper-wrapper mb-5">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src={test4} class="testimonial-img"  alt=""/>
                <h3 className='text-white'>BENJAMIN MIACHI</h3>
                <h4 className='text-white'>CEO/Chief Analyst, Remaben Scientific Services Ltd.</h4>
                <div class="stars" style={{color:'yellow'}}>
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p className='text-white'>
                  <i class="bi bi-quote quote-icon-left text-danger"></i>
                  In the past, I've been 'held hostage' by techie people who talk over my head. I clicked with Elonatech Nigeria Ltd. from the start because they are so down to earth and more than willing to do a great job for their clients. Elonatech Nigeria Ltd. is a professional company with a real commitment to provide excellent technical expertise and incredibly good customer service. I haven't found this from many other providers.
                  <i class="bi bi-quote quote-icon-right text-danger"></i>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
    {/* test 3*/}
    <div class="carousel-item">
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="testimonials-slider swiper">
          <div class="swiper-wrapper mb-5">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src={test3} class="testimonial-img" alt=""/>
                <h3 className='text-white'>CHINYERE IZIOGU</h3>
                <h4 className='text-white'>Admin Manager, Shepherd Specialist Hospital</h4>
                <div class="stars" style={{color:'yellow'}}>
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p className='text-white'>
                  <i class="bi bi-quote quote-icon-left text-danger"></i>
                  We really needed a company that could handle the computer issues we no longer had the time or experience to deal with. Elonatech Nigeria Ltd.is a perfect solution for us because we have the same IT Professional with us every week who is very familiar with our network, and we don’t have to worry about dealing with computer problems on our own anymore. The fact that Elonatech Nigeria Ltd uses Microsoft best practices is very important to us, too. We are confident that if someone else had to manage our network down the road, it would be easy to do because of the systems that are in place.
                  <i class="bi bi-quote quote-icon-right text-danger"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    {/* test 4 */}
    <div class="carousel-item">
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="testimonials-slider swiper">

          <div class="swiper-wrapper mb-5">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src={test2} class="testimonial-img" alt=""/>
                <h3 className='text-white'>ABAYOMI KAKANFO</h3>
                <h4 className='text-white'>Business Dev. Manager, Hyperthread Ventures Limited  </h4>
                <div class="stars" style={{color:'yellow'}}>
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p className='text-white'>
                  <i class="bi bi-quote quote-icon-left text-danger"></i>
                  I have worked with other web designers before but was never satisfied with the end result. From start to finish my interaction with the team at Elonatech was professional, stress-free and I had complete trust in their ability to deliver. Their difference is: They took the time to listen to what I wanted but also brought their own ideas, experience and creativity so that the end design was more rounded. They understood that I needed to see things in a visual context and have some flexibility to 'play' around with a few ideas. All of this was done face to face at their office making the process highly personal.
                  <i class="bi bi-quote quote-icon-right text-danger"></i>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    </div>
    {/* test 5 */}
    <div class="carousel-item">
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="testimonials-slider swiper">

          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src={test6} class="testimonial-img" alt=""/>
                <h3 className='text-white'>Mr. Yahaya Olajide</h3>
                <h4 className='text-white'>Managing Partner, Olajide & Associates Ltd.</h4>
                <div class="stars" style={{color:'yellow'}}>
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p className='text-white'>
                  <i class="bi bi-quote quote-icon-left text-danger"></i>
                  Every organization relies on computers, laptops, and workstations to perform their duties, and when your equipment goes down, you lose productivity. “Elonatech Nigeria Ltd” allows us to focus on our core business, They evaluated our existing hardware, initiated a master plan to incrementally improve our systems” We never have to look over our shoulders any more, when it comes to our computer systems.
                  <i class="bi bi-quote quote-icon-right text-danger"></i>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>

{/* 6 */}
    <div class="carousel-item">
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="testimonials-slider swiper">

          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src={test5} class="testimonial-img" alt=""/>
                <h3 className='text-white'>GABRIEL OSONDU</h3>
                <h4 className='text-white'>COO/Water Specialist, Safebrooks Nig. Ltd.</h4>
                <div class="stars" style={{color:'yellow'}}>
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p className='text-white'>
                  <i class="bi bi-quote quote-icon-left text-danger"></i>
                  Safebrooks Nigeria Limited'' relies on Elonatech for it's digital marketing and web development expertise, with a particular focus on the area of social media marketing and digital advertising. Elonatech provides the best advice and is superbly knowledgeable as well as being fully committed and responsive to our needs and supporting the ideas and initiatives we have presented. Oreva and all of the team at Elonatech have become invaluable partners for our company in creating brand awareness and being instrumental in generating new business ideas.
                  <i class="bi bi-quote quote-icon-right text-danger"></i>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  </div>
  
  {/* <!-- Left and right controls/icons --> */}
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>







            
        </>
    );
}

export default Clients;
