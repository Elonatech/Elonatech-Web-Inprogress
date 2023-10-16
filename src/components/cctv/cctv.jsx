import cctvHeader from './caption/web-design.jpg'
import './cctv.css'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import photo1 from './caption/photo1.jpeg'
import photo2 from './caption/photo2.jpeg'
import photo3 from './caption/photo3.jpeg'
import photo4 from './caption/photo4.jpeg'
import banner3 from  './caption/banner3.png'
import banner2 from './caption/banner2.png'

const Cctv = () => {
    return (
    <>
 {/* header */}
 <div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cctvHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Structured Cabling</h2>
   <h5 class=" mt-4 text-white text-center">Any System is Only As Reliable As Its Weakest Link.</h5>
   <p class=" mt-4 lead text-white text-center">The standardized infrastructure of communications cabling that supports network components</p>
 </div>
 </div>  
{/*  */}

<div className="container mb-5">
<Swiper spaceBetween={23} slidesPerView={1}  >
     <SwiperSlide>
        <div className="container">
          <div className="row boda-a " style={{borderColor:"#add8e6"}}>
            <div className="col-md-6 boda-right" style={{backgroundImage:`url(${photo1})`, backgroundPosition:"center" , backgroundSize:"40rem"}}>
            </div>
            <div className="col-md-6 pd " style={{borderColor:"#add8e6"}}>
              <div className="boda-b mt-0 mb-0" style={{borderColor:"#add8e6"}}>
              <div className="p-2 " >
                <div className="card-body p-5  mb-5 mt-2">
                <h2 className='text-center'>CCTV 5.4</h2>
                <h6 className='text-center mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique quae, cum sed minima iste blanditiis rem saepe ullam  <br /> <br />  et ratione natus consequuntur quidem recusandae aut eveniet mollitia quas non!</h6>
                <div className='mb-3 text-white'>ggd</div>
                </div>
              </div>
              </div>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="container">
          <div className="row boda-a " style={{borderColor:"#ff0000"}}>
            <div className="col-md-6 pd boda-right " style={{borderColor:"#ff0000"}}>
              <div className="boda-b mt-0 mb-0" style={{borderColor:"#ff0000"}}>
              <div className="p-2 " >
                <div className="card-body p-5  mb-5 mt-2">
                <h2 className='text-center'>CCTV v8</h2>
                <h6 className='text-center mb-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quisquam odit earum aperiam deserunt.    <br /> <br /> Earum nobis, voluptas magnam consequuntur fugit facilis qui tenetur animi obcaecati vero? Rerum ullam nobis similique.</h6>
                <div className='mb-3 text-white'>ggd</div>
                </div>
              </div>
              </div>
              </div>
              <div className="col-md-6" style={{backgroundImage:`url(${photo2})`, backgroundPosition:"center" , backgroundSize:"40rem"}}>
             </div>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="container">
          <div className="row boda-a " style={{borderColor:"#800080"}}>
            <div className="col-md-6 boda-phot03" style={{backgroundImage:`url(${photo3})`, backgroundPosition:"center" , backgroundSize:"40rem"}}>
            </div>
            <div className="col-md-6 pd " style={{borderColor:"#800080"}}>
              <div className="boda-b mt-0 mb-0" style={{borderColor:"#800080"}}>
              <div className="p-2 " >
                <div className="card-body p-5  mb-5 mt-2">
                <h2 className='text-center'>CCTV 3.0</h2>
                <h6 className='text-center mb-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quisquam odit earum aperiam deserunt.    <br /> <br /> Earum nobis, voluptas magnam consequuntur fugit facilis qui tenetur animi obcaecati vero? Rerum ullam nobis similique.</h6>
                <div className='mb-3 text-white'>ggd</div>
                </div>
              </div>
              </div>
              </div>
          </div>
      </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className="container">
          <div className="row boda-a " style={{borderColor:"#041c89"}}>
            <div className="col-md-6 pd boda-right " style={{borderColor:"#041c89"}}>
              <div className="boda-b mt-0 mb-0" style={{borderColor:"#041c89"}}>
              <div className="p-2 " >
                <div className="card-body p-5  mb-5 mt-2 rounded" style={{boxShadow:" 0 0 10px 5px #99baf3"}}>
                <h2 className='text-center'>CCTV v6</h2>
                <h6 className='text-center  '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quisquam odit earum aperiam deserunt.    <br /> <br /> Earum nobis, voluptas magnam consequuntur fugit facilis qui tenetur animi obcaecati vero? Rerum ullam nobis similique.</h6>
                <div className='mb-3 text-white'>ggd</div>
                </div>
              </div>
              </div>
              </div>
              <div className="col-md-6" style={{backgroundImage:`url(${photo4})`, backgroundPosition:"center" , backgroundSize:"40rem"}}>
             </div>
          </div>
      </div>
      </SwiperSlide>
    </Swiper>
</div>
{/* contact us */}
<section class="mt-5">
			<div class="container-fluid mt-5"style={{backgroundImage:`url(${banner2})` , backgroundPosition:""}} >
				<div class="row justify-content-lg-center">
					<div class="col-md-7 d-flex align-items-center">
						<div class="w-100 py-4">
							<h1 class="text-danger mb-3">Get Ahead of your Competitors</h1>

							<p  class="text-white mb-5">If you are ready to become the best in your industry and also stand out from a sea <br /> of hungry competitors,  then Elonatech is the partner you need. Get in touch with us below, <br /> let's take your busines to the next level.</p>
            <h3 className='text-white'>Ready to Start your Project? <a class="btn btn-danger mt-2"><h5>Request a Quote</h5></a></h3>    
						</div>
					</div>
					<div class="col-md-4 col-lg-4 d-flex align-items-end">
           <img src={banner3} alt="" className='position-absolute  end-0' style={{height:"17.4rem", boxShadow:"none"}} />
					</div>
				</div>
			</div>
</section> 

{/*  */}
   </>
    );
}

export default Cctv;
