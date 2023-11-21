
import { Link } from 'react-router-dom';

import './career.css';

import IMAGE from './img/indoor-shot-pleased-dark-skinned-successful-man-dressed-elegnatly-carries-documentation_273609-24445-removebg-preview.png';
import ICON1 from './img/illustration.png';
import ICON2 from './img/web-development.png';
import ICON3 from './img/social-media.png';
import ICON4 from './img/montage.png';
import ICON5 from './img/ux-design.png';
import ICON6 from './img/branding.png';
import PHOTO from './img/black-man-working-with-computer.jpg';
import careerHeader from './img/desk-scene-close-up.jpg';


const Career = () => {
  return (
   <>

 {/* header */}
<div class="container-fluid  py-5 " style={{height:"500px" ,  backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${careerHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Careers</h2>
   <h5 class=" mt-4 text-white text-center">Let's grow together</h5>
   <p class="lead text-white text-center">We’re building a culture at Elonatech where amazing people (like you) can do their best work. <br /> If you’re ready to grow your career and help millions of organizations and SME grow better, you’ve come to the right place.</p>
 </div>
 </div> 


    <div className="container">
            <div className="pt-5 px-md-5">
                <h1 className='' style={{fontSize:"", fontWeight:"800",color:"#34548c" }}>Who is Elonatech</h1>
                <p className='text-justify'>We are <span style={{color:"#34548c", fontWeight:"700"}}>Elonatech Nigeria Limited</span>, operating from Nigeria as an IT Solutions and Corporate Consultant Company but no less a premier Information and Communications Organization. We are poised to shock and reshape the industry, help clients solve their most complex Computer and Network challenges, offer Digital & Web Solutions, Computer Sales & Supply by providing strategic research, experiential and innovative solution, planning and implementation services across the Nation.</p>
            </div>

            <div class="row justify-content-center mt-5 ">
                    <div class="col-md-6 align-self-center"  >
                        <div className=" ">
                            <div className="">
                                <h2 style={{fontSize:"", fontWeight:"800", color:"#34548c"}}>BUILD A CAREER WITH US</h2>
                            </div>
                            <div className="pt-3">
                                <p className='text-justify' style={{lineHeight:"2"}}>In our bid to promote operational excellence and lead in the delivery of IT solutions across Nigeria and beyond, our pursuit for the best hands is the cornerstone of our recruitment policy. Elonatech seeks people who are self-driven, strong-willed, result-oriented and performance-driven, to find brighter, smarter and innovative solutions to problems and ignite our world; People who can transform their potentials into solutions; and People who work with diverse minds to solve global issues.</p>
                            </div>
                        </div>
                    
                
                    </div>
                    <div class="col-md-6"  data-aos="fade-up" data-aos-duration="1000">
                        <img src={IMAGE} alt="" className='img-fluid'/>
                    </div>
                </div>
    </div>

    <div className="pb-5" style={{backgroundColor:"#F9F8F3"}}>
                    <div className="pt-4 text-center" >
                        <h1 style={{color:"#34548c"}}><span style={{color:"#34548c", fontWeight:"800"}}>Job </span>Role Applying For?</h1>
                        <p>We develop an individual integrated solution for your business and select a unique set of services for <br /> it, combining them with a single strategy and goal</p>
                    </div>
                    <div className="container">
                    <div class="row align-items-center pt-md-5">
                        <div class="col-md-4">
                            <div class="card h-100 " >
                                <img src={ICON1} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <div class="card-body">
                                    <h5 class="card-title fs-5 fw-bold">Graphic Designer / Digital Marketer</h5>
                                    <p class="card-text" style={{fontWeight:"600"}}>with at least 1 year work experience with proof of professional Graphics Design and Animations.</p>
                                    <Link to="/graphic-career" class="btn btn-primary">Apply Now</Link>
                                    {/* <a href="#" class="btn btn-primary">Apply Now</a> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card h-100 " >
                            <img src={ICON2} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <div class="card-body">
                                    <h5 class="card-title fs-5 fw-bold">Full Stack Web developer</h5>
                                    <p class="card-text" style={{fontWeight:"600"}}>Must have at least 2 years' work experience with proof of Web Development.</p>
                                    <Link to="/web-career" class="btn btn-primary">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card h-100 " >
                                        <img src={ICON3} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <div class="card-body">
                                    <h5 class="card-title fs-5 fw-bold">Digital Marketing</h5>
                                    <p class="card-text" style={{fontWeight:"600"}}>Must have at least 1 year work experience with proof of professional Digital Marketing.</p>
                                    <Link to="/digital-career" class="btn btn-primary">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                    <div class="row align-items-center mt-4">
                        <div class="col-md-4">
                            <div class="card h-100 " >
                                        <img src={ICON4} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <div class="card-body">
                                    <h5 class="card-title fs-5 fw-bold">Animations/Motion Graphics & UI/UX Graphic Designer</h5>
                                    <p class="card-text" style={{fontWeight:"600"}}>Must be able to use Figma,Adobe XD,Photoshop etc.</p>
                                    <Link to="/animation-career" class="btn btn-primary">Apply Now</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card h-100 " style={{height:"70vh"}} >
                                        <img src={ICON5} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <div class="card-body">
                                    <h5 class="card-title fs-5 fw-bold">Systems/Network Engineer</h5>
                                    <p class="card-text" style={{fontWeight:"600"}}>minimum of 2 years' experience in maintenance of computer hardware , software systems  and supporting network.</p>
                                    <Link to="/system-career" class="btn btn-primary">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card h-100 " style={{height:"70vh"}} >
                                        <img src={ICON6} alt=""  style={{width:"20%", borderRadius:"10%", margin:"10px 20px"}}/>
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <div class="card-body">
                                    <h5 class="card-title fs-5 fw-bold">Marketing & Sales Representative</h5>
                                    <p class="card-text" style={{fontWeight:"600"}}>Previous work experience as a Marketer/Sales Representative, Basic knowledge(MS Office/excel).</p>
                                    <Link to="/marketing-career" class="btn btn-primary">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
   </div>

    <div className="container-fluid">
        <div class="row justify-content-center pt-5">
            <div class="col-md-5 align-self-center p-4" >
            <img src={PHOTO} alt="" srcset="" className='img-fluid' />
            </div>
            <div class="col-md-5 ">
                <div className="">
                    <h1 className='fs-4' style={{color:"#34548c"}}>Our Passion</h1>
                    <p className='text-justify '>We have a passion for our clients, results and the solutions we provide. Our team possess a pragmatic drive for action that runs through the week, each working day, and doesn’t let up. We rally clients with our infectious energy, to make change stick.
                    And we never do it alone. We support and are supported to develop our own personal result(s) stories. We train, and get trained to further equip ourselves, so as to be abreast of imminent IT challenges.
                    We work hard, but we don’t take ourselves too seriously. We enjoy what we do and we laugh a lot… most often at ourselves.</p>
                </div>
                <div className="">
                <h1 className='fs-4' style={{color:"#34548c"}}>Requirements</h1>
                <p>Prospective candidates who wish to seek employment with us must fulfill the following criteria:</p>
                <ul>
                    <li>Must have successfully completed (minimum) of a diploma or relevant degree in a reputable higher institution</li>
                    <li>Must have a relevant practical, IT skill or is undergoing a training in a recognized IT training institution</li>
                    <li>Additional professional IT certification is a plus</li>
                    <li>Must be a Nigerian or have the necessary work permits if not a Nigerian citizen</li>
                </ul>
                </div>
            </div>
        </div>
     </div>

   </>
  )
}

export default Career