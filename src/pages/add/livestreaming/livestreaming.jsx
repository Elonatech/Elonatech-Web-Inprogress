import './livestreaming.css';
import img from './img/Supreme-Image-1030x579.jpg';
import img2 from './img/video-live-streaming-service-1B.jpg';
import img3 from './img/img-3.jpg';
import liveheader from './img/liveHeader.jpg'

const Livestreaming = () => {
  return (
   <section>

{/* header */}
<div class="container-fluid  py-5 " style={{height:"500px" , marginBottom:"100px", backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${liveheader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Live Streaming</h2>
   {/* <h5 class=" mt-4 text-white text-center">To ensure that customers can effectively use products or services without facing technical hurdles.</h5> */}
   <p class="lead text-white text-center">As we adjust to the new normal, everyone is moving their social life online. Happy hours, concerts, events, seminars, <br /> late night talk shows, etc.—all digital right now.</p>
 </div>
 </div> 

         <div className="container">
            <div class="row justify-content-center my-5 gx-4">
                <div class="col-md-6" data-aos="fade-up">
                    <div className="float-center">
                    <h4 className=' fw-bold' style={{color:"#34548c"}}>Livestreaming</h4>
                        <p className='text-justify'>Live streaming technology lets you watch, create and share videos in real-time, a bit like live TV. All you need to be able to live stream is an internet-enabled device and a platform. Current popular live-streaming apps include Facebook Live, YouTube Live, Instagram Live stories, etc.  </p>
                        <p className='text-justify'>Unlike pre-recorded videos that can be cut and edited, live streaming is just that – live and uncensored. <br /></p>
                        <p className='text-justify'>Some live streams can be private. For example, video conferencing, like Skype or Zoom, uses live streaming technology to allow you to talk to people you have invited.</p>
                        <p>Some live streams are public and might be watched by hundreds or even thousands of people.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src={img} alt="" className='img-fluid'/>
                </div>
            </div>
         </div>

         <div className="container">
         
         <div class="row justify-content-center mt-3 flex-column-reverse flex-lg-row">
                <div class="col-md-6">
                     <img src={img2} alt="" className='img-fluid mt-0 mt-md-5' style={{width:"600px", height:"350px"}}/>
                </div>
                <div class="col-md-6" data-aos="fade-up">
                    <h5 className='fw-bold fs-3 ' style={{color:"#34548c"}}>Our Livestreaming Service</h5>
                    <ul>
                        <li>Elonatech provides professional and quality live streaming solutions. we seamlessly integrate multiple camera angles, multi-source input channels into live-streamed events. our professionally switched video will have smooth multi-camera transitions, multimedia integration, and varieties of graphical effects and overlays, including digital watermarks, titling, branding slates, lower-third graphics and sponsor messaging. <br /> <br /></li>
                        <li>Our live streams are delivered on CDN, adaptive bit rates and responsive multi-device player which make people all over the world be able to watch your events live via mobile phones and all internet-enabled devices. <br /> <br /></li>
                        <li>Our Livestreaming service covers the following events: Church’s live service broadcasting, conferences and events live broadcast, rally and campaign broadcast, weddings, birthdays, etc. <br /> <br /></li>
                    </ul>
                </div>
            </div>
         </div>

         <div className="" style={{backgroundColor:"#34548c", marginTop:"5rem"}}>

        <div className="container ">
        <div class="row justify-content-center py-5" data-aos="fade-up">
          <div class="col-md-6">
            <h2 className='text-dark fw-bold'>Our Livestreaming Features</h2>
             <ul className='text-dark'>
              <h5 className='fw-bold'>Countdown Timer</h5>
                 <li>Add a countdown timer if the live stream hasn't started yet. This builds anticipation and lets viewers know when the event will begin.</li>
              <h5 className='fw-bold'>Live Video Player:</h5>
                 <li>Embed the live video player prominently on the page. Ensure it's easily accessible and works seamlessly.</li>
              <h5 className='fw-bold'>Chat and Comment Section:</h5>
                 <li>Include a live chat or comment section for viewers to interact with you and other viewers in real-time.</li>
              <h5 className='fw-bold'>Upcoming Live Streams:</h5>
                 <li>If applicable, list upcoming live streams or events to keep viewers informed about what's coming next.</li>
              <h5 className='fw-bold'>Social Media Links:</h5>
                 <li>Provide links to your social media profiles to encourage viewers to follow you for updates and future streams.</li>
            </ul> 
          </div>
          <div class="col-md-6">
             <img src={img3} alt="" className='img-fluid pt-md-4 pt-0'/>
          </div>
        </div>
        </div>
      </div>

   </section>
  )
}

export default Livestreaming