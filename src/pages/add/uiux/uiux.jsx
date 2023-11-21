import uiuxHeader from './img/ui-ux-index-page-1_720.jpg'
import './uiux.css'
import ProductImg from './img/safebrooks-uiux.png';
import ProductImg2 from './img/remaben.png';
import UI1 from './img/ui-1.png'
import UI2 from './img/ui-2.png'
import UI3 from './img/ui-3.png'
import UI4 from './img/ui-4.png'
import UI5 from './img/ui-5.png'
import UI6 from './img/ui-6.png'


const Uiux = () => {
  return (
    <section>
     {/* header */}
<div class="container-fluid  py-5 " style={{height:"500px" , marginBottom:"50px", backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${uiuxHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">User Interface and User Experience</h2>
   <h5 class=" mt-4 text-white text-center">Elevate Your Digital Experience: Unleash the Power of UI/UX</h5>
   <p class="lead text-white text-center">Crafted to elevate your digital presence, captivate your audience, and drive exceptional user engagement.</p>
 </div>
 </div> 


  <div className="container">
      {/* <div class="row g-5 mt-5 mb-5" data-aos="fade-up" data-aos-duration="2000">
          <div class="col-sm-7 ">
                <img src={ProductImg} alt=""  className='uiux-img rounded'/>
          </div>

    <div class="col-sm-5 align-self-center pt-md-4">
             
                <p className='text-justify fs-6' >In today's digital landscape, your online presence is often the first impression you make on your audience. It's not just about aesthetics; it's about creating a seamless, intuitive, and enjoyable experience that keeps users coming back. That's where our UI/UX design services come in. <br /> <br /> At the start of any beautiful web project is your UI/UX design. With it you can have a feel of exactly how the website will look. We'll design a prototype with an excellent User Interface (UI) & User Experience (UX) for your brand.
                <br /> <br />  After all enquiries, the next step is to build a prototype by designing the User Interface (UI) and make the website have an excellent User Experience (UX), so the clients can have a feel of exactly how the website looks.</p>
            </div>
    </div> */}


    <div className="container mb-5">
      <div className="row ">
        <div className="col-md-6">
        <img src={ProductImg} alt=""  className='img-fluid rounded'/>
        </div>
        
      <div className="col-md-6 ">
                        {/* <h2 className='fw-bold' style={{color:"rgb(52,84,140)"}}> UI/UX</h2> */}
                        <p className='text-justify fs-6 pt-5' >In today's digital landscape, your online presence is often the first impression you make on your audience. It's not just about aesthetics; it's about creating a seamless, intuitive, and enjoyable experience that keeps users coming back. That's where our UI/UX design services come in. <br /> <br /> At the start of any beautiful web project is your UI/UX design. With it you can have a feel of exactly how the website will look. We'll design a prototype with an excellent User Interface (UI) & User Experience (UX) for your brand.
                <br /> <br />  After all enquiries, the next step is to build a prototype by designing the User Interface (UI) and make the website have an excellent User Experience (UX), so the clients can have a feel of exactly how the website looks.</p> 
       </div>

      </div>
       </div>

            {/* UI/UX SERVICES */}
        <div className="container  justify-content-around mb-5" >
            <h3 className='text-center fs-2 fw-bolder pb-3' style={{color:"red"}} data-aos="fade-right" data-aos-duration="2000">UI/UX Services</h3>
        <div class="row  ">
            <div class="col-md-4  mt-3" data-aos="zoom-in" data-aos-duration="1000"><div className="">
            <div class="p-3 mb-2  text-center"> <img src={UI1} style={{width:"100px"}} alt=""/></div>
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>User Research and Analysis</h4>
                <p className='text-center fs-6'> We dig deep to understand your audience, their needs, and their behaviors. Our user research forms the foundation of our design decisions.</p>
                </div>
                </div>
            <div class="col-md-4  mt-3" data-aos="zoom-in" data-aos-duration="2000"><div className="">
                
                  <div class="p-3 mb-2  text-center"> <img src={UI2} style={{width:"100px"}} alt=""/></div>
                
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>Information Architecture</h4>
                <p className='text-center fs-6'> Crafting intuitive navigation and content hierarchy to ensure users find what they need effortlessly.</p>
            </div></div>
            <div class="col-md-4  mt-3" data-aos="zoom-in" data-aos-duration="3000"><div className="">
                  <div class="p-3 mb-2  text-center"> <img src={UI3} style={{width:"100px"}} alt=""/></div>
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>Wireframing and Prototyping</h4>
                <p className='text-center fs-6'> Building interactive wireframes and prototypes to visualize the user journey and design functionalities.</p>
            </div></div>
            <div class="col-md-4  mt-3" data-aos="zoom-in" data-aos-duration="1000"><div className="">
                  <div class="p-3 mb-2  text-center"> <img src={UI4} style={{width:"100px"}} alt=""/></div>
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>User-Centered Design</h4>
                <p className='text-center fs-6'>From responsive web design to app interfaces, our designs prioritize the user's experience at every touchpoint.</p>
            </div></div>
            <div class="col-md-4  mt-3" data-aos="zoom-in" data-aos-duration="2000"><div className="">
                  <div class="p-3 mb-2  text-center"> <img src={UI5} style={{width:"100px"}} alt=""/></div>
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>Usability Testing</h4>
                <p className='text-center fs-6'> Rigorous testing and feedback collection to ensure your digital products are user-friendly and intuitive.</p>
            </div></div>
            <div class="col-md-4  mt-3" data-aos="zoom-in" data-aos-duration="3000"><div className="">
                  <div class="p-3 mb-2  text-center"> <img src={UI6} style={{width:"100px"}} alt=""/></div>
                <h4 className='text-center' style={{color:"rgb(52,84,140)"}}>Visual Design</h4>
                <p className='text-center fs-6'>The aesthetics are equally important. Our visual design experts ensure that your brand identity shines through every pixel.</p>
            </div></div>
        </div>
        </div>
        </div>
      {/* WHY CHOOSE US */}
      <div className="container mb-5">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card border-2 rounded-0" style={{borderColor:"#016193"}}>
              <img src={ProductImg2} className='img-fluid' alt="" style={{height:"23.9rem",  }} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-2 rounded-0 " style={{borderColor:"#016193"}} >
            <h2 class="font-weight-bold heading p-2 pt-3  pl-2">Why Choose Us?</h2>
            <ul>
                  <li className='pb-2'> <span className='fw-bold'>Experience:</span>  Our seasoned team of UI/UX experts brings years of experience and a rich portfolio of successful projects.</li>
                  <li className='pb-2'> <span className='fw-bold'>User-Centric Approach:</span>   Our designs put the user first. We create digital experiences that resonate with your audience and drive results.</li>
                  <li className='pb-2'> <span className='fw-bold'>Collaborative Process:</span>   We believe in working closely with our clients to ensure their vision is reflected in every aspect of our design work.</li>
                  <li className='pb-2'> <span className='fw-bold'>Innovation:</span> The digital world is ever-evolving. We stay at the forefront of design trends and emerging technologies to keep your products competitive.</li>
                  <li className='pb-'> <span className='fw-bold'>Client Success Stories:</span>  Explore how our UI/UX design services have transformed businesses and user experiences. Read our case studies and hear what our clients have to say.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>



</section>
  )
}

export default Uiux