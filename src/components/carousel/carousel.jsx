import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Slider1 from './captions/Slider1.jpg'
import Slider2 from './captions/Slider2.png'
import Slider3 from './captions/Slider3.png'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiperParams = {
  noSwiping: true,  // Disable swiping for all slides
  noSwipingClass: 'swiper-no-swiping', // Add this class to elements that should not trigger swiping
};


const Carousel = () => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  
    return (
<>
<div className=""  style={{background:"#f8f8f8"}}>
  <Swiper  
  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} 
  spaceBetween={0} 
  slidesPerView={1}
  // navigation={true}
  pagination={true}
  autoplay={{delay: 5000}}
  {...swiperParams}
  {...params}
  >
    <div className="swiper-button-next" style={{color:"#fff",fontSize:"18px",margin:"0 0px", cursor:"pointer",float:"right"}}></div>
    <div className="swiper-button-prev" style={{color:"#fff",fontSize:"18px",margin:"0 0px", cursor:"pointer",float:"left"}}></div>
    {/*  */}
  <SwiperSlide style={{height:"600px"}} className="swiper-slide swiper-no-swiping">
    <div style={{ backgroundImage: `url(${Slider1})`, height:'600px', color:'white'}} >
      <div class="" style={{paddingTop:"16rem",paddingLeft:"5rem"}}>
          <div class=" text-start"   >
            <h1 className=''>  IT CONSULTANTS </h1>
            <h5>Information technology consulting services help improve the performance, scalability <br /> and competitiveness of your company through right technology enablement and usage</h5>
            <p><a class="btn btn-lg btn-danger" href="#">Know More</a></p>
          </div>
        </div>
    </div>
  
  
  </SwiperSlide>
  
  <SwiperSlide className="swiper-slide" >
    <div  style={{ backgroundImage: `url(${Slider2})`, height:'600px', color:'white', backgroundSize:"cover" , backgroundPosition:"center"}}>
      <div class="  " style={{paddingTop:"16rem",paddingLeft:"5rem"}}>
          <div class=" text-start" style={{marginBottom:"150px"}}>
            <h1>WE ARE DIGITAL MARKETERS</h1>
            <h5>Experts in providing digital marketing strategies that convert engagement </h5>
            <p><a class="btn btn-lg btn-danger" href="#">Learn more</a></p>
          </div>
        </div>
    </div>
  
  </SwiperSlide>
  
  
  <SwiperSlide className="swiper-slide swiper-no-swiping">
    <div  style={{ backgroundImage: `url(${Slider3})`, height:'600px', color:'white', backgroundSize:"cover" , backgroundPosition:"center"}}>
      <div class="" style={{paddingTop:"16rem",paddingRight:"5rem"}}>
          <div class=" text-end" style={{marginBottom:"150px"}}>
            <h1>WEB DEVELOPERS</h1>
            <h5>
              We offer bespoke user experience, web design, app design, and software development services</h5>
            <p><a class="btn btn-lg btn-danger mt-3" href="#">Know More</a></p>
          </div>
        </div>
    </div>
  
  </SwiperSlide>
  </Swiper> 
  </div>        
</>
    );
}

export default Carousel;
