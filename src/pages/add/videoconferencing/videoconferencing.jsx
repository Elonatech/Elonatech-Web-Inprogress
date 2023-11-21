import './videoconferencing.css'
import img from "./img/meeting-room-2-1030x687.jpg"
import img2 from "./img/office-worker-attending-business-meeting-videocall-conference-with-webcam-network-connection-talking-colleagues-remote-video-teleconference-telework-working-late-night2_482257-51732.jpg"
import img3 from './img/african-american-vlogger-using-camera-record-video_482257-26747.jpg';
import videoConferHeader from './img/conferencing.jpg';

const Videoconferencing = () => {
  return (
 <section>



{/* header */}
<div class="container-fluid  py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${videoConferHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Videoconferencing</h2>
   <h5 class=" mt-4 text-white text-center">Helping People Connect, Regardless of Where They’re Located.</h5>
   <p class="lead text-white text-center">This is an online technology that allows users in different locations to hold face-to-face meetings without having to move to a single location together</p>
 </div>
 </div> 

    <div className="container position-relative pt-4">
        <div class="row justify-content-center mt-4 mb-4">
          <div class="col-md-6" data-aos="fade-up">
          <img src={img} alt="" className='img-fluid ' style={{width:"600px", height:"320px"}}/>
          </div>
          <div class="col-md-6 pt-3 ">
            <div className="float-center">
              <h4 className=' fw-bold' style={{color:"#34548c"}}>Videoconferencing</h4>
              <p className=''>Videoconferencing is an online technology that allows users in different locations to hold face-to-face meetings without having to move to a single location together. This technology is particularly convenient for business users in different cities or even different countries because it saves time, expenses, and hassles associated with business travel. <br /> </p>
              <p className=''>Videoconferencing uses includes holding routine meetings, organizing seminars/conferences, negotiating business deals, and interviewing job candidates. <br /></p>
              <p className=''>The main purpose of video conferencing is to help people connect, regardless of where they’re located.</p>
            </div>
           </div>
        </div>
        </div>

      <div className="" style={{backgroundColor:"#34548c", marginTop:"5rem"}}>
        <div className="container">
        <div class="row justify-content-center py-5">
          <div class="col-md-6">
            <h2 className='text-black fw-bold'>What Kind of Videoconferencing Equipment is Needed?</h2>
            <ul className='text-black '>
              <li>Displays: laptop, desktop monitor, television screen</li>
              <li>Microphones and cameras: built-in microphones and webcams, USB microphones and webcams</li>
              <li>Speakers: built-in computer speaker, external speaker, VoIP (voice over IP) conferencing phone</li>
              <li>Internet Connection: WiFi, Ethernet</li>
              <li>Video Conferencing Software: video conferencing tools and apps</li>
            </ul>
          </div>
          <div class="col-md-6" data-aos="fade-up">
             <img src={img3} alt="" className='img-fluid pt-2 pt-md-0'/>
          </div>
        </div>
        </div>
      </div>
           

      <div className="container" >
          <div class="row align-items-center my-5">
            <div class="col-md-4">
              <h5  className='fw-bold' style={{color:"#34548c"}}>Videoconferencing solutions</h5>
              <p className=''>Live visual connection between two or more remote parties over the internet that simulates a face-to-face meeting. Video conferencing is important because it joins people who would not normally be able to form a face-to-face connection. Our cutting-edge videoconference solutions provide unparalleled clarity for your conference room video setup.</p>
            </div>
            <div class="col-md-4" data-aos="fade-up">
              <img src={img2} alt="" className='img-fluid'/>
            </div>
            <div class="col-md-4">
             <p className=''> Experience a unique 180° field of view, astounding sound, and real-time whiteboarding. Discover the future of smarter video collaboration for small to medium meeting rooms. Transform your workplace with our comprehensive conference room camera and microphone options. Video your way with our recommended wireless conference room solutions today. </p>
            </div>
          </div>
      </div>
 </section>
  )
}

export default Videoconferencing