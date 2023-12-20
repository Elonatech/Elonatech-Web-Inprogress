
import { Link } from 'react-router-dom'

import artboard1 from './captions/services/artboard9.jpg'
import artboard2 from './captions/services/Artboard2.jpg'
import artboard3 from './captions/services/Artboard3.jpg'
import artboard4 from './captions/services/artboard4.jpg'
import artboard5 from './captions/services/Artboard5.jpg'
import artboard6 from './captions/services/Artboard6.jpg'
import artboard7 from './captions/services/Artboard7.jpg'
import artboard8 from './captions/services/Artboard8.jpg'
import artboard9 from './captions/services/artboard1.jpg'

import articonconputer from './captions/services/icons/computer.png'
import articonconsult from './captions/services/icons/consult.png'
import articoonsdigitial from './captions/services/icons/network (2).png'
import articongraphic from './captions/services/icons/graphic.png'
import articonnetwork from './captions/services/icons/network.png'
import articonsuvalliance from './captions/services/icons/suvalliance.png'
import articonvideo from './captions/services/icons/video.png'
import articonConputer from './captions/services/icons/computer.png'
import articonwebsite from './captions/services/icons/website.png'
import articonvideogall from './captions/services/icons/video-gallery.png'


import './serve.css'


const Serve = () => {
    return (
    <>
<div class="album py-5 bg-body-tertiary">
      <h2 className='text-center mt-5'>What We Do Best</h2>
       <div class="about-border"></div>
      <div class="container">

         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-5">
            {/* card 1 */}
          <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard9}) `, height:" 360px" , backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">WEB DESIGN & DEVELOPMENT</h5>
          <img className='text-white' src={articonwebsite} class="mb-4" style={{color:"white"}} alt="" srcset=""/>
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">WEB DESIGN & DEVELOPMENT</h4>
            <img src={articonwebsite} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">At Elonatech, we build websites that are not only visually beautiful but also functionally effective. Our team of web strategists.</p>
            <Link  to={'/web'}  onClick={()=> scrollTop()}   class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>

          {/* card 2 */}
          <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard2})`, height:" 360px", backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white"> DIGITIAL MARKETING</h5>
          <img src={articoonsdigitial} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">DIGITIAL MARKETING</h4>
            <img src={articoonsdigitial} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">With Digital marketing, we have successfully changed the way brands and businesses use technology for marketing. Digital platforms are..</p>
            <Link  to={'/digital'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard1})`, height:" 360px",backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">GRAPHICS & BRANDING</h5>
          <img src={articongraphic} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">GRAPHICS & BRANDING</h4>
            <img src={articongraphic} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Elonatech Nigeria Limited, in a bid to serve you better, has included Corporate branding in their services; Which includes: logo design..</p>
            <Link to={'/brand'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard3})`, height:" 360px", backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">NETWORK ENGINEERING / ADMINISTRATION</h5>
          <img src={articonnetwork} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">NETWORK ENGINEERING / ADMINISTRATION</h4>
            <img src={articonnetwork} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Elonatech Nigeria Limited is built on the assumption that the management of information technology for business is not...</p>
            <Link to={'/network'} onClick={()=> scrollTop()} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard4})`, height:" 360px",backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">COMPUTER ENGINEERING</h5>
          <img src={articonconputer} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">COMPUTER ENGINEERING</h4>
            <img src={articonConputer} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Network administration involves a wide array of operational tasks that help a network to run smoothly and efficiently. This includes activitie...</p>
            <Link onClick={() =>  scrollTop() } to={'/computer'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard5})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">ACCESS CONTROL & SURVAILANCE</h5>
          <img src={articonsuvalliance} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">ACCESS CONTROL & SURVAILANCE</h4>
            <img src={articonsuvalliance} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio expedita, aut possimus labore non sit libero eaque autem molestias...</p>
            <Link to={'/suvalliance'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard6})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">ANIMATIONS & VIDEO GRAPHIC</h5>
          <img src={articonvideogall} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">ANIMATIONS & VIDEO GRAPHIC</h4>
            <img src={articonvideogall} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Elonatech Nigeria Limited is built on the assumption that the management of information technology for business is not</p>
            <Link to={'/animation'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard7})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">LIVESTREAMING & VIDEOCONFERENCING</h5>
          <img src={articonvideo} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">LIVESTREAMING & VIDEOCONFERENCING</h4>
            <img src={articonvideo} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">Network administration involves a wide array of operational tasks that help a network to run smoothly and efficiently. This includes activiti</p>
            <Link to={'/video'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
             {/* card 3 */}
             <div class="col border-0">
          <div class="card card-1 border-0 " style={{backgroundImage:`url(${artboard8})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">CONSULTING</h5>
          <img src={articonconsult} class="mb-4"  alt="" srcset=""/>
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">CONSULTING</h4>
            <img src={articonconsult} class="mb-4"  alt="" srcset=""/>
            <p class="text-white">At Elonatech, we build websites that are not only visually beautiful but also functionally effective. Our team of web strategists,</p>
            <Link to={'/social'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
        
        
       

      

{/* end */}
      </div>
    </div>
  </div>

            
    </>
    );
}

export default Serve;
