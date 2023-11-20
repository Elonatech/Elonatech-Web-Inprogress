import shield from './captions/Shield-expanded.webp'
import battery from './captions/Battery.svg'
import front from './captions/Front_Door.webp'
import video from './captions/2022-ShieldSetup.mp4'
import cloud from './captions/Cloud-Icon.svg'
import night from './captions/Night-Icon.svg'
import videoIcon from './captions/Video-Icon.svg'
import survelHeader from './captions/3737316.jpg'

const Suvalliance = () => {
    return (
<>

{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${survelHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Surveilance</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Internet Speed and Reliability</h5>
   <p class=" lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
 </div>


{/* detect people */}
<section class=" mb-4" >
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-md-8 col-lg-8 d-flex align-items-center">
						<div class="w-100 py-4">
							<h2 class="text-dark fw-bold mb-4">Detects people. Ignores distractions.</h2>
							<p  class="text-dark fs-5">We offer all kinds of laptop, desktop and server repairs of all makes and models, including Windows, Mac and Linux computers. We do virus removal without reformatting so you don't lose your important files or photos. We repair both hardware and software. We have no queue so come any time and we'll start fixing your computer right away.</p>
						</div>
					</div>
					<div class="col-md-4 col-lg-4 d-flex align-items-end ">
						<img src={front} class="img-fluid" alt=""/>
					</div>
				</div>
			</div>
</section> 


{/* flex display */}
<div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-4">
        <img src={videoIcon} alt="" /><br />
        <h5>High-definition video</h5>
        <h6>Watch what’s happening in 1080p HD video with 8x digital zoom.</h6>
        </div>
        <div className="col-md-4">
        <img src={cloud} alt="" /><br />
        <h5>Unlimited cloud storage</h5>
        <h6>Your videos are saved automatically on our secure servers for 30 days.*</h6>
        </div>
        <div className="col-md-4 mt-3">
        <img src={battery} alt="" />
        <h5>Rechargeable battery</h5>
        <h6>Lasts up to 3-6 months before it needs a recharge.*</h6>
           
        </div>
    </div>
</div>


{/* Video */}
<div className="container">
<div class="row featurette">
      <div class="col-md-7 order-md-2" style={{marginTop:"160px"}}>
      	<h2 class="text-dark fw-bold mb-4">Simple setup. 24/7 protection.</h2>
        <p class="text-dark fs-5">No wiring needed. Just attach the screw-in mount and place your camera on top, letting its super-strong magnet hold the device securely in place. Then press the button to connect it to your security system. Simple as can be.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <div>
        <video style={{ height:"500px"}} className='rounded' autoplay="true" controls="auto" loop="auto" playsinline="" preload="auto" src={video}></video> 
        </div>
      </div>
    </div>
</div>

{/* steadfast and reliable */}
<div className="container  mt-5 bg-secondary p-5 rounded">
    <div className="row">
        <div className="col-md-6">
            <h1><strong>Steadfast & reliable</strong></h1>
            <h6 className='mt-3'>Built to work in any environment. That way you don't have to worry about your security feed cutting out when you need it most.</h6>

      
            <ul className='list-unstyled'>
                <li className='mt-4'>
                    <div className="d-flex">
                     <img src={battery} alt="" className='mb-4' />
                    <div className="mt-5">
                    <h5 className='ps-5'>Premium power supply </h5> <h6 className='ps-5 '>Runs on a removable battery that recharges in ~5 hours. Plus you can swap in a backup battery (sold separately) while it’s charging — virtually eliminating security downtime.</h6>
                    </div>
                    </div>
                </li>
                {/*  */}
                <li className='mt-4'>
                    <div className="d-flex">
                     <i class="bi bi-camera-video fs-2 mb-4"></i>
                    <div className="mt-2">
                    <h5 className='ps-5'>Premium power supply </h5> <h6 className='ps-5 '>Runs on a removable battery that recharges in ~5 hours. Plus you can swap in a backup battery (sold separately) while it’s charging — virtually eliminating security downtime.</h6>
                    </div>
                    </div>
                </li>
                {/*  */}
                <li className='mt-4'>
                    <div className="d-flex">
                     <i class="bi bi-circle fs-2 "></i>
                    <div className="mt-2">
                    <h5 className='ps-5'>Premium power supply </h5> <h6 className='ps-5 '>Runs on a removable battery that recharges in ~5 hours. Plus you can swap in a backup battery (sold separately) while it’s charging — virtually eliminating security downtime.</h6>
                    </div>
                    </div>
                </li>

            </ul>
        </div>
        <div className="col-md-6">
            <img src={shield} className='img-fluid' alt="" />
        </div>
    </div>
</div>

{/* frequent question */}
<section id="faq" class="faq mb-5 mt-5">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-4">
            <div class="content px-xl-5">
              <h3 className='text-dark'><strong> Frequently Asked Questions</strong></h3>
              <h5 className="">
              Wireless Outdoor Camera
              </h5>
            </div>
          </div>

          <div class="col-lg-8">

            <div class="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    <span class="num">1.</span>
                    Where should I place my Outdoor Camera?
                  </button>
                </h3>
                <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                   The recommended mounting height is 6-8 ft from the ground and angled 30 degrees down. Face the camera towards entry/exit points on your property such as your driveway, front walkway or back garden. You can also use outdoor cameras to monitor entry/exit points into your home such as facing your front door and garage doors. Be sure to use a stable ladder and ask for assistance from a helper if needed.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    <span class="num">2.</span>
                    How far away can the Outdoor Camera detect motion?
                  </button>
                </h3>
                <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                    Up to 30 feet - depending on mounting height.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    <span class="num">3.</span>
                    How does Night Vision work?
                  </button>
                </h3>
                <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                 The Outdoor Security Camera has 2 night vision modes which can be selected in the Camera Settings menu:
                Standard - With infrared (default) night vision, your camera can always see in black and white up to 30 feet away at night. 
                Spotlight - With spotlight mode, your camera spotlight will turn on in live view and when motion is detected at night. Color night vision allows you to see objects up to 10 feet away. Note that the spotlight feature will shorten the battery life.   
                </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                    <span class="num">4.</span>
                    How do I set up Activity Zones for my Cameras?
                  </button>
                </h3>
                <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                 Custom Activity Zones can be added within the Camera Settings menu in the SimpliSafe app to focus on your property. Tap the zones that you don’t want to receive alerts from such as high-traffic roads or paths.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                    <span class="num">5.</span>
                    How long can the camera record for?
                  </button>
                </h3>
                <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  Upon motion, the Outdoor Camera will record for 10 seconds by default, and it will continue recording if there is sustained motion in front of it. Recordings are available with select monitoring plans.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-6">
                    <span class="num">6.</span>
                    Can I adjust my camera’s settings so I don’t have to charge the battery as often??
                  </button>
                </h3>
                <div id="faq-content-6" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                     Yes. While the battery life varies based on camera placement, usage and settings, there are several ways to help extend your battery life between charges. Visit the Camera Settings in your SimpliSafe app and adjust the following settings:

                        Motion Type - set to People Only.

                        Night Vision Mode - set to Standard. This is the default setting.

                        Setup Activity Zones - Remove high traffic areas such as roads, paths and sidewalks etc.
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
         
      </div>
</section>
        
</>
    );
}

export default Suvalliance;
