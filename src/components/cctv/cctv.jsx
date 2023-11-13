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
 <div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cctvHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Closed-Circuit Television (CCTV)</h2>
   <h5 class=" mt-4 text-white text-center">Monitoring of Behavior, Activities, or Information for The Purpose of Information Gathering</h5>
   <p class="lead text-white text-center">The use of video cameras to transmit a signal to a specific place, on a limited set of monitors, known as video surveillance</p>
 </div>
 </div>  

{/* sub  */}
<div className="container mt-5">
<p className='text-center mb-2'>
<span className='fw-bold'>Surveillance</span> is the monitoring of behavior, many activities, or information for the purpose of information gathering, influencing, managing or directing. <br /> This can include observation from a distance by means of electronic equipment, such as closed-circuit television (CCTV), or interception of electronically transmitted information like Internet traffic. It can also include simple technical methods, such as human intelligence gathering and postal interception.
</p>
<p className='text-center mb-5'>
Closed-circuit television (CCTV), also known as video surveillance, is the use of video cameras to transmit a signal to a specific place, on a limited set of monitors. It may employ point-to-point (P2P), point-to-multipoint (P2MP), or mesh wired or wireless links. Even though almost all video cameras fit this definition, the term is most often applied to those used for surveillance in areas that require additional security or ongoing monitoring.
</p>
</div>



{/* slider */}
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

{/* invest */}
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="">
        <h4 className='fw-bold'>Why Invest In Cctv</h4>
        <div style={{backgroundColor:"#dc3545", height:"2px", width:"80px"}}></div>
        <div  style={{backgroundColor:"#dc3545", height:"2px", width:"80px" , marginTop:"2px"}}></div>
           {/* list */}
           <div className="mt-2">
              <div className="d-flex pt-2">
                <i class="bi bi-circle-fill me-3" ></i>
                <p className=''>Quality video evidence helps solve crime and increases apprehensions by private security and police agencies</p>  
                </div>
                {/*  */}
                <div className="d-flex">
                <i class="bi bi-circle-fill me-3" ></i>
                 <p className=''>Acts as a deterrent to those that would consider being dishonest.</p>
                </div>
                {/*  */}
                <div className="d-flex ">
                <i class="bi bi-circle-fill me-3" ></i>
                <p className=''>Saves money by identifying operational issues.</p>
                </div>
                {/*  */}
                <div className="d-flex">
                <i class="bi bi-circle-fill me-3" ></i>
                <p className=''>All too often businesses discover product or money missing weeks after the fact. Having video archives available to go back and review often solves these mysteries</p>  
                </div>
                {/*  */}
                <div className="d-flex">
                <i class="bi bi-circle-fill me-3" ></i>
                <p className=''>Video analytics – let video help the operational side of your business by mapping customer patterns, counting people, capturing license plates and more.</p>  
                </div>
                {/*  */}
                
              </div>
      </div>
    </div>
    <div className="col-md-6 mt-2">
      <div className="mt-5">
      <h6 className='mb-2'> Different Types of CCTV Camera</h6>
       <p className=' mt-0'>
       When it comes to securing your business, there are many different types of 
       CCTV to choose from. Surveillance plays a huge part in today’s society, 
       and with cameras all around us, our day-to-day lives are experiencing higher levels of security each day.
       </p>
      <h6>What are the different types of CCTV cameras?</h6>
      <ul className='list-unstyled'>
        <li className='' > <i class="bi bi-circle-fill me-2"></i>Dome Camera</li>
        <li className=''> <i class="bi bi-circle-fill me-2"></i>C-mount Camera</li>
        <li className=''> <i class="bi bi-circle-fill me-2"></i>Day/Night Camera</li>
        <li className=''> <i class="bi bi-circle-fill me-2"></i>PTZ Camera</li>
      </ul>


      </div>
    </div>
  </div>
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
