import './css/portfolio.css';
import project1 from './caption/project1.png'
import project2 from './caption/project2.jpg'
import project3 from './caption/project3.png'
import project4 from './caption/digital marketing practical.jpg'

import Rweb1 from  './caption/Remaben/Web design and development/Layout for remaben web.png'
import Rweb2 from  './caption/Remaben/Web design and development/web2.png'
import Rweb3 from  './caption/Remaben/Web design and development/web3.png'
import Rweb4 from './caption/Remaben/Web design and development/image (13).png'
import Rweb5 from './caption/Remaben/Web design and development/remaben-3333.jpg'

import Rdigital from './caption/Remaben/Digital marketing/digital1.jpg'
import Rdigital2 from './caption/Remaben/Digital marketing/digital2.jpg'
import Rdigital3 from './caption/Remaben/Digital marketing/digital3.jpg'
import Rdigital4 from './caption/Remaben/Digital marketing/digital4.jpg'
import Rdigital5 from './caption/Remaben/Digital marketing/digital5.jpg'
import Rdigital6 from './caption/Remaben/Digital marketing/digital6.jpg'
import Rdigital7 from './caption/Remaben/Digital marketing/digital7.jpg'


import Rbrand1 from './caption/Remaben/Branding/branding1.jpg'
import Rbrand2 from './caption/Remaben/Branding/branding2.png'
import Rbrand3 from './caption/Remaben/Branding/branding3.jpg'
import Rbrand4 from './caption/Remaben/Branding/branding4.png'
import Rbrand5 from './caption/Remaben/Branding/branding5.jpg'
import Rbrand6 from './caption/Remaben/Branding/branding6.jpg'


import Sweb1 from './caption/safebrooks/Web design and development/web.png'
import Sweb2 from './caption/safebrooks/Web design and development/web1.jpg'
import Sweb3 from './caption/safebrooks/Web design and development/web2.png'
import Sweb4 from './caption/safebrooks/Web design and development/web3.png'
import Sweb5 from './caption/safebrooks/Web design and development/web4.png'
import Sweb6 from './caption/safebrooks/Web design and development/web5.png'


import Sdigital from './caption/safebrooks/Digital marketing/Safebrooks - ABS_PS Home appliance shell-hard material crushing, washing and drying line_ Email.jpg'
import Sdigital2 from './caption/safebrooks/Digital marketing/safebrooks-everyday-post7.jpg'
import Sdigital3 from './caption/safebrooks/Digital marketing/safebrooks-everyday-post8 - Copy.jpg'
import Sdigital4 from './caption/safebrooks/Digital marketing/safebrooks-everyday-post9.jpg'
import Sdigital5 from './caption/safebrooks/Digital marketing/water softeners 2-01.png'


import Sbrand from './caption/safebrooks/Branding/Brand identity/2 (1).png'
import Sbrand2 from './caption/safebrooks/Branding/Brand identity/Nnenna Nkkwo ID..jpg'
import Sbrand3 from './caption/safebrooks/Branding/Brand identity/SAFEBROOK-2.jpg'
import Sbrand4 from './caption/safebrooks/Branding/Brand identity/SAFEWATER.jpg'
import Sbrand5 from './caption/safebrooks/Branding/Brand identity/Safebrooks Complimentary Card.jpg'
import Sbrand6 from './caption/safebrooks/Branding/Brand identity/Safebrooks ID Back.jpg'
import Sbrand7 from './caption/safebrooks/Branding/Brand identity/Safebrooks complimentary card back.jpg'
import Sbrand8 from './caption/safebrooks/Branding/Brand identity/Safebrooks.png'
import Sbrand9 from './caption/safebrooks/Branding/Brand identity/safebrook book desi.jpg'



 

const scrollToHeader = () => {
  var tab_lists = document.querySelectorAll(".tabs_list ul li");
  var tab_items = document.querySelectorAll(".tab_item"); 

tab_lists.forEach(function(list){
list.addEventListener("mouseover", function(){
  var tab_data = list.getAttribute("data-tc");
  
  tab_lists.forEach(function(list){
    list.classList.remove("active");
  });
  list.classList.add("active");
  tab_items.forEach(function(item){
    var tab_class = item.getAttribute("class").split(" ");
    if(tab_class.includes(tab_data)){
      item.style.display = "block";
    }
    else{
      item.style.display = "none";
    }
    
  })
  
})
})
};


const Portfolio = () => {



    return (
    <>  

{/* header */}
<div class="container-fluid bg-dark py-5 " style={{height:"500px" , marginBottom:"10px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center wow zoomIn" data-wow-delay="0.1s">Elonatech Portfolio</h2>
   <h5 class=" mt-4 text-white text-center wow fadeInRight" data-wow-delay="0.2s">At the heart of everything we do is a passion to deliver success stories.</h5>
   <p class="lead text-white text-center wow fadeInLeft" data-wow-delay="0.2s">From website development, digital marketing campaigns, network management to graphics etc... We pride ourselves to getting it done!!</p>
 </div>
 </div>

 {/* why choose us */}
 <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class=" text-center position-relative pb-3 mb-5" style={{minWidth:"100px"}}>
            <h3 class="fw-bold  text-uppercase" style={{color:"#34548c"}}>Why Choose Us</h3>
            <h1 class="mb-0">We Are Here to Grow Your Business <br/> Exponentially</h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4">
                <div class="row g-5">
                    <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                        <div class="rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px", backgroundColor:"#34548c"}}>
                            <i class="fa fa-cubes text-white"></i>
                        </div>
                        <h4>Best In Industry</h4>
                        <p class="mb-0 lead fs-6">We are committed to finding advanced solutions to problems and igniting the world with smarter and brighter solutions</p>
                    </div>
                    <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                        <div class="rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px", backgroundColor:"#34548c"}}>
                            <i class="fa fa-award text-white"></i>
                        </div>
                        <h4>Our Work Speaks For Itself</h4>
                        <p class="mb-0 lead fs-6">Nothing speaks as loud as continuously executing at a high level. It shows we have a well-established process. It shows we can manage your brand.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight:"350px"}}>
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src={project3} style={{objectFit:"cover"}}/>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="row g-5">
                    <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                        <div class="rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px", backgroundColor:"#34548c"}}>
                            <i class="fa fa-users-cog text-white"></i>
                        </div>
                        <h4>Professional Staff</h4>
                        <p class="mb-0 lead fs-6">We are typically responsible for providing specialized services or expert professional solutions to organizations</p>
                    </div>
                    <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                        <div class="rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px" , backgroundColor:"#34548c"}}>
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <h4>24/7 Support</h4>
                        <p class="mb-0 lead fs-6">Our support team is available round the clock to assist customers with their queries and concerns. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 

{/* feature */}
<section id="features" class="features">
      <div class="container mb-5" data-aos="fade-up">
        <ul class="nav nav-tabs row gy-4 d-flex">

          <li class="nav-item col-6 col-md-4 col-lg-2 wow zoomIn" data-wow-delay="0.1s">
            <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
              <i class="bi bi-code-slash color-cyan"></i>
              <h4>Remaben</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2 wow zoomIn" data-wow-delay="0.2s">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <i class="bi bi-box-seam color-indigo"></i>
              <h4>Elonatech</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2 wow zoomIn" data-wow-delay="0.3s">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
              <i class="bi bi-nut color-teal"></i>
              <h4>Safebrooks</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2 wow zoomIn" data-wow-delay="0.4s">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
              <i class="bi bi-command color-red"></i>
              <h4>Firmware</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2 wow zoomIn" data-wow-delay="0.5s">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-5">
              <i class="bi bi-x-diamond color-blue"></i>
              <h4>BIOS & UEFI</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2 wow zoomIn" data-wow-delay="0.6s">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-6">
              <i class="bi bi-map color-orange"></i>
              <h4>Utilities</h4>
            </a>
          </li>
        </ul>

  <div class="tab-content " data-wow-delay="0.8s">
    {/* tab-1 REMABEN */}
 <div class="tab-pane active show" id="tab-1">

 <div class="row gy-4">
  <div class="col-lg-12 order-2 order-lg-1">   
<div className="container mb-5">
  <div className="row g-0">
    <div className="col-md-2">
      <div className="card rounded-0">
      <div class="ts_body ">
      <div class="tabs_list">

      <ul class=" text-center bg- p-2">
      <li data-tc="tab_item_1" class="dropdown-item mt-2 p-3 "> <h6>Web Design</h6></li>
      <li data-tc="tab_item_2" onMouseEnter={scrollToHeader} class="dropdown-item mt-2 p-3 pe-5"><h6>Motion Graphic</h6></li>
      <li data-tc="tab_item_3" class="dropdown-item mt-2 p-4 ps-1"><h6>Digital Marketing</h6></li>
      <li data-tc="tab_item_4"  class="dropdown-item mt-2 p-3"><h6>Branding</h6></li>
      </ul>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-10">
      <div className="card rounded-0">
      <div class="ts_body">
      <div class="tabs_content">

<div class="tab_body">
  <div class="tab_item tab_item_1" >
       {/* */}
       <div className="row">
        <div className="col-md-12">
          <div className="card">
            <img src={Rweb1} alt="" className='img-fluid'  style={{height:"24rem"}} />
          </div>
          </div>
        <div className="col-md-5 mt-2">
          <div className="">
           <img src={Rweb4} className='img-fluid shadow' style={{height:"18.9rem" , marginTop:"2.4rem"}}    alt="" />
        </div>
        </div>
        <div className="col-md-7 mt-5">
          <div className="shadow">
            <img src={Rweb3} className='img-fluid rounded shadow' alt="" />
          </div>
        </div>
        <div className="col-md-7 mt-5">
          <div className="">
            <img src={Rweb2} className='img-fluid rounded shadow' alt="" />
          </div>
        </div>
        <div className="col-md-5 mt-5">
          <div className="">
            <img src={Rweb5} className='img-fluid rounded shadow' style={{height:"20rem" , width:"2000rem"}} alt="" />
          </div>
        </div>
       
   
      </div>
    {/*  */}
 </div>

  <div class="tab_item tab_item_2"  style={{display:"none"}}>
    <video controls className='img-fluid rounded' loop src='https://res.cloudinary.com/pentecostal-fellowship-of-nigeria-lagos/video/upload/v1698400448/Analysis_of_Raw_Materials_and_Consumer_Products_khpd5i.mp4' type="video/mp4" />
    
  </div>

  <div class="tab_item tab_item_3" style={{display:"none"}}>
   <div className="container">
    <div className="row">
    <div className="col-md-4">
      <div className="shadow">
      <img src={Rdigital} className='img-fluid rounded' alt="" />
      </div>
      </div>
    <div className="col-md-4">
      <div className="shadow">
      <img src={Rdigital2} className='img-fluid rounded' alt="" />
    </div>
    </div>
    <div className="col-md-4">
      <div className="shadow">
      <img src={Rdigital3} className='img-fluid rounded' style={{height:"18rem"}}  alt="" />
        </div>
        </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Rdigital4} className='img-fluid rounded' alt="" />
      </div>
      </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Rdigital5} className='img-fluid rounded' alt="" />
    </div>
    </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Rdigital6} className='img-fluid rounded' alt="" />
        </div>
        </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Rdigital7} className='img-fluid rounded' alt="" />
        </div>
        </div>
    </div>
   </div>

  </div>
  <div class="tab_item tab_item_4" style={{display:"none"}}>
    
  <div className="container">
    <div className="row">
    <div className="col-md-4">
      <div className="shadow">
      <img src={Rbrand1} className='img-fluid rounded' alt="" />
      </div>
      </div>
    <div className="col-md-4">
      <div className="shadow">
      <img src={Rbrand2} className='img-fluid rounded' alt="" />
    </div>
    </div>
    <div className="col-md-4">
      <div className="shadow">
      <img src={Rbrand3} className='img-fluid rounded' style={{height:"18rem"}}  alt="" />
        </div>
        </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Rbrand4} className='img-fluid rounded' alt="" />
      </div>
      </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Rbrand5} className='img-fluid rounded' alt="" />
    </div>
    </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Rbrand6} className='img-fluid rounded' alt="" />
        </div>
      </div>
    </div>
   </div>




  </div>
  <div class="tab_item tab_item_5" id='lab-1' style={{display:"none"}}   >
    <h3>5. Privacy</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias nemo eius aspernatur doloremque laboriosam velit, consequatur nesciunt, ipsum facere autem, dicta quam consectetur! Nostrum quae odit adipisci omnis asperiores!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias nemo eius aspernatur doloremque laboriosam velit, consequatur nesciunt, ipsum facere autem, dicta quam consectetur! Nostrum quae odit adipisci omnis asperiores!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias nemo eius aspernatur doloremque laboriosam velit, consequatur nesciunt, ipsum facere autem, dicta quam consectetur! Nostrum quae odit adipisci omnis asperiores!</p>
  </div>
</div>
</div>
      </div>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>



    </div> 


{/* tab-2 */}

  <div class="tab-pane" id="tab-2">
  <div class="row gy-4">
  <div class="col-lg-12 order-2 order-lg-1">
          
<div className="container mb-5">
  <div className="row g-0">
    <div className="col-md-2">
      <div className="card rounded-0">
      <div class="ts_body">
      <div class="tabs_list" style={{padding:"16.7px"}}>
        <ul className='list-unstyled ps-3 '>
          <li data-tc="tab_item_1" class="active pt-3">Web Development</li>
          <li data-tc="tab_item_2" onClick={scrollToHeader}>Branding</li>
          <li data-tc="tab_item_3" onClick={scrollToHeader}>Motion graphics</li>
          <li data-tc="tab_item_4" onClick={scrollToHeader}>Digitial marketing</li>
        </ul>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-10">
      <div className="card rounded-0">
      <div class="ts_body">
      <div class="tabs_content">

<div class="tab_body ">
  <div class="tab_item tab_item_1" >
    {/* */}
      <div className="row">
        <div className="col-md-12"><div className="card">
          <h2>Lorem ipsum dolor sit amet, orem ipsum dolor s eius sequi?
            
            </h2>
          </div>
          </div>
        <div className="col-md-5 mt-2"><div className="card"><h2>3</h2></div></div>
        <div className="col-md-7 mt-2"><div className="card"><h2>4</h2></div></div>
        <div className="col-md-3 mt-2"><div className="card"><h2>5t amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis,</h2></div></div>
        <div className="col-md-3 mt-2"><div className="card"><h2>6</h2></div></div>
        <div className="col-md-3 mt-2"><div className="card"><h2>7</h2></div></div>
        <div className="col-md-3 mt-2"><div className="card"><h2>8</h2></div></div>
      </div>
    {/*  */}
  </div>

  <div class="tab_item tab_item_2"  style={{display:"none"}}>
    <h3>2. General Description of Google Pay</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
  </div>

  <div class="tab_item tab_item_3" style={{display:"none"}}>
    <h3>3. Using Google Pay</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat sit commodi esse enim? Cum tempore deserunt numquam molestias. Pariatur, minima consequatur nam exercitationem explicabo porro quibusdam. Excepturi, voluptatibus repellendus. Provident!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
  </div>
  <div class="tab_item tab_item_4" style={{display:"none"}}>
    <h3>4. Save to Google Pay</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
  </div>
</div>
</div>
      </div>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
  </div>


{/* tab-3 */}
  <div class="tab-pane" id="tab-3">
  <div class="row gy-4">
  <div class="col-lg-12 order-2 order-lg-1">
          
<div className="container mb-5">
  <div className="row g-0">
    <div className="col-md-2">
      <div className="card rounded-0">
      <div class="ts_body">
      <div class="tabs_list">
      <ul class=" text-center bg- p-2">
      <li data-tc="tab_item_1" class="dropdown-item mt-2 p-3 "> <h6>Web Design</h6></li>
      <li data-tc="tab_item_2" onMouseEnter={scrollToHeader} class="dropdown-item mt-2 p-3 pe-5"><h6>Motion Graphic</h6></li>
      <li data-tc="tab_item_3" class="dropdown-item mt-2 p-4 ps-1"><h6>Digital Marketing</h6></li>
      <li data-tc="tab_item_4"  class="dropdown-item mt-2 p-3"><h6>Branding</h6></li>
      </ul>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-10">
      <div className="card rounded-0">
      <div class="ts_body">
      <div class="tabs_content">

<div class="tab_body">
  <div class="tab_item tab_item_1" >
    {/**/}
    <div className="row">
        <div className="col-md-12">
          <div className="shadow">
            <img src={Sweb1} alt="" className='img-fluid'  style={{height:"24rem"}} />
          </div>
          </div>
        <div className="col-md-6 mt-5">
          <div className="">
            <img src={Sweb4} className='img-fluid rounded shadow' alt="" />
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div className="">
            <img src={Sweb5} className='img-fluid rounded shadow' style={{height:"20rem" , width:"2000rem"}} alt="" />
          </div>
        </div>
        <div className="col-md-12 mt-2">
          <div className="card">
            <img src={Sweb3} alt="" className='img-fluid'  style={{height:"29rem"}} />
          </div>
          </div>
   
      </div>
    {/**/}
  </div>

  <div class="tab_item tab_item_2"  style={{display:"none"}}>
  <video controls className='img-fluid rounded' loop src='https://res.cloudinary.com/pentecostal-fellowship-of-nigeria-lagos/video/upload/v1698424763/Water_treatment_plw0c6.mp4' type="video/mp4" />
  </div>

  <div class="tab_item tab_item_3" style={{display:"none"}}>
  <div className="container">
    <div className="row">
    <div className="col-md-4">
      <div className="shadow">
      <img src={Sdigital} className='img-fluid rounded' alt="" />
      </div>
      </div>
    <div className="col-md-4">
      <div className="shadow">
      <img src={Sdigital2} className='img-fluid rounded' alt="" />
    </div>
    </div>
    <div className="col-md-4">
      <div className="shadow">
      <img src={Sdigital3} className='img-fluid rounded' style={{height:"18rem"}}  alt="" />
        </div>
        </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Sdigital4} className='img-fluid rounded' alt="" />
      </div>
      </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Sdigital5} className='img-fluid rounded' alt="" />
    </div>
    </div>
    </div>
   </div>

  </div>
  <div class="tab_item tab_item_4" style={{display:"none"}}>
  <div className="container">
    <div className="row">
    <div className="col-md-4">
      <div className="shadow">
      <img src={Sbrand} className='img-fluid rounded' alt="" />
      </div>
      </div>
    <div className="col-md-4">
      <div className="shadow">
      <img src={Sbrand2} className='img-fluid rounded' alt="" />
    </div>
    </div>
    <div className="col-md-4">
      <div className="shadow">
      <img src={Sbrand3} className='img-fluid rounded' style={{height:"18rem"}}  alt="" />
        </div>
        </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Sbrand4} className='img-fluid rounded' alt="" />
      </div>
      </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Sbrand5} className='img-fluid rounded' alt="" />
    </div>
    </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Sbrand6} className='img-fluid rounded' alt="" />
        </div>
      </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Sbrand7} className='img-fluid rounded' alt="" />
        </div>
      </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Sbrand8} className='img-fluid rounded' alt="" />
        </div>
      </div>
    <div className="col-md-4 mt-4">
      <div className="shadow">
      <img src={Sbrand9} className='img-fluid rounded' alt="" />
        </div>
      </div>
    </div>
   </div>
  </div>
</div>
</div>
      </div>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
{/* tab-4 */}
  <div class="tab-pane" id="tab-4">
  <div class="row gy-4">
  <div class="col-lg-12 order-2 order-lg-1">
          
<div className="container mb-5">
  <div className="row g-0">
    <div className="col-md-2">
      <div className="card rounded-0">
      <div class="ts_body">
      <div class="tabs_list" style={{padding:"16.7px"}}>
        <ul className='list-unstyled p-4'>
          <li data-tc="tab_item_1" class="active">Introduction</li>
          <li data-tc="tab_item_2" onClick={scrollToHeader}>General</li>
          <li data-tc="tab_item_3" onClick={scrollToHeader}>Google</li>
          <li data-tc="tab_item_4" onClick={scrollToHeader}>Save</li>
        </ul>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-10">
      <div className="card rounded-0">
      <div class="ts_body">
      <div class="tabs_content">

<div class="tab_body">
  <div class="tab_item tab_item_1" >
    <h3>1. Introduction</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
  </div>

  <div class="tab_item tab_item_2"  style={{display:"none"}}>
    <h3>2. General Description of Google Pay</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
  </div>

  <div class="tab_item tab_item_3" style={{display:"none"}}>
    <h3>3. Using Google Pay</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat sit commodi esse enim? Cum tempore deserunt numquam molestias. Pariatur, minima consequatur nam exercitationem explicabo porro quibusdam. Excepturi, voluptatibus repellendus. Provident!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
  </div>
  <div class="tab_item tab_item_4" style={{display:"none"}}>
    <h3>4. Save to Google Pay</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
  </div>
</div>
</div>
      </div>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
{/* tab-5 */}
  <div class="tab-pane" id="tab-5">
  <div class="row gy-4">
  <div class="col-lg-12 order-2 order-lg-1">   
<div className="container mb-5">
  <div className="row g-0">
    <div className="col-md-2">
      <div className="card rounded-0">
      <div class="ts_body">
      <div class="tabs_list" style={{padding:"16.7px"}}>
        <ul className='list-unstyled p-4'>
          <li data-tc="tab_item_1" class="active">Introduction</li>
          <li data-tc="tab_item_2" onClick={scrollToHeader}>General</li>
          <li data-tc="tab_item_3" onClick={scrollToHeader}>Google</li>
          <li data-tc="tab_item_4" onClick={scrollToHeader}>Save</li>
          <li data-tc="tab_item_5" onClick={scrollToHeader}>Privacy</li>
        </ul>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-10">
      <div className="card rounded-0">
      <div class="ts_body">
      <div class="tabs_content">

<div class="tab_body">
  <div class="tab_item tab_item_1" >
    <h3>1. Introduction</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
  </div>

  <div class="tab_item tab_item_2"  style={{display:"none"}}>
    <h3>2. General Description of Google Pay</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
  </div>

  <div class="tab_item tab_item_3" style={{display:"none"}}>
    <h3>3. Using Google Pay</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat sit commodi esse enim? Cum tempore deserunt numquam molestias. Pariatur, minima consequatur nam exercitationem explicabo porro quibusdam. Excepturi, voluptatibus repellendus. Provident!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
  </div>
  <div class="tab_item tab_item_4" style={{display:"none"}}>
    <h3>4. Save to Google Pay</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
  </div>
  <div class="tab_item tab_item_5" id='lab-1' style={{display:"none"}}   >
    <h3>5. Privacy</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias nemo eius aspernatur doloremque laboriosam velit, consequatur nesciunt, ipsum facere autem, dicta quam consectetur! Nostrum quae odit adipisci omnis asperiores!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias nemo eius aspernatur doloremque laboriosam velit, consequatur nesciunt, ipsum facere autem, dicta quam consectetur! Nostrum quae odit adipisci omnis asperiores!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias nemo eius aspernatur doloremque laboriosam velit, consequatur nesciunt, ipsum facere autem, dicta quam consectetur! Nostrum quae odit adipisci omnis asperiores!</p>
  </div>
</div>
</div>
      </div>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
{/* tab-6 */}
  <div class="tab-pane" id="tab-6">
  <div class="row gy-4">
  <div class="col-lg-12 order-2 order-lg-1">
          
<div className="container mb-5">
  <div className="row g-0">
    <div className="col-md-2">
      <div className="card rounded-0">
      <div class="ts_body">
      <div class="tabs_list" style={{padding:"16.7px"}}>
        <ul className='list-unstyled p-4'>
          <li data-tc="tab_item_1" class="active">Introduction</li>
          <li data-tc="tab_item_2" onClick={scrollToHeader}>General</li>
          <li data-tc="tab_item_3" onClick={scrollToHeader}>Google</li>
          <li data-tc="tab_item_4" onClick={scrollToHeader}>Save</li>
        </ul>
      </div>
      </div>
      </div>
    </div>
    <div className="col-md-10">
      <div className="card rounded-0">
      <div class="ts_body">
      <div class="tabs_content">

<div class="tab_body">
  <div class="tab_item tab_item_1" >
    <h3>1. Introduction</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
  </div>

  <div class="tab_item tab_item_2"  style={{display:"none"}}>
    <h3>2. General Description of Google Pay</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi?</p>
  </div>

  <div class="tab_item tab_item_3" style={{display:"none"}}>
    <h3>3. Using Google Pay</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat sit commodi esse enim? Cum tempore deserunt numquam molestias. Pariatur, minima consequatur nam exercitationem explicabo porro quibusdam. Excepturi, voluptatibus repellendus. Provident!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit neque a natus fuga incidunt, facilis, consequatur ducimus vitae consectetur reiciendis tempora explicabo animi quis laborum possimus totam voluptatum illum.</p>
  </div>
  <div class="tab_item tab_item_4" style={{display:"none"}}>
    <h3>4. Save to Google Pay</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae ipsa, enim aspernatur ducimus vero! Repellendus exercitationem dolore, voluptatibus consectetur facere eveniet in, corporis, nostrum animi unde recusandae repudiandae. Excepturi.</p>
  </div>
</div>
</div>
      </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>

  </div>

      </div>
</section> 


{/* our  */}
<div className="container mt-5 mb-5">
<p class="fs-5 fw-medium text-primary">Our Projects</p>
                <h1 class=" mb-5">We've Done Lot's of Awesome Projects</h1>
  <div className="row">
 <div className="col-md-3">
  <div className="shadow">
  <img class="img-fluid" src={project1} style={{height:"18rem"}}  alt="" />
  <div className="ps-2 pt-2">
  <h5 className='pt-3'>Computer Hardware Projects</h5>
  <p className='lead fs-6 pb-5'>
  Your business works when your hardware works.
                        While computer hardware configurations vary widely, we have worked on major categories of hardware for clients in the Medical Science, Financial, Telecoms, Aviation, ICT, Government & NGOs, etc.
  </p>

  </div>
  </div>
  </div>
 <div className="col-md-3">
 <div className="shadow">
  <img class="img-fluid" src={project2} style={{height:"18rem"}}   alt="" />
  <div className="ps-2 pt-2">
  <h5 className='pt-3'>Network Engineering</h5>
  <p className='lead fs-6 pb-4 pe-2'>
  We implement and design both complex and simple data/voice LANs for all types of organizations.
                        Implementing a well-designed, secured enterprise network and utilizing the right combination of IT solutions  
                        so as to drive that business to the desired level.
  </p>
  </div>
  </div>
 </div>
 <div className="col-md-3">
 <div className="shadow">
  <img class="img-fluid" src={project3} style={{height:"18rem"}}  alt="" />
  <div className="ps-2 pt-2">
  <h5 className='pt-3'>Structured Cabling</h5>
  <p className='lead fs-6 pb-4 pe-2 '>
  We provide the infrastructure that supports the performance of organizations network
                        it is the most critical part of your voice and data network, choosing a qualified provider is a critical decision. 
                        We use only high-end quality products in our structured wiring solutions
  </p>
  </div>
  </div>
 </div>
 <div className="col-md-3">
 <div className="shadow">
  <img class="img-fluid" src={project4} style={{height:"18rem"}}  alt="" />
 <div className="ps-2 pt-2">
  <h5 className='pt-3'>Digital Marketing Strategy</h5>
  <p className='lead fs-6 pb-4 pe-2 '>
  Developing effective digital marketing in any market is tough, demanding, & technical. We achieve this by working closely with clients to craft & deliver successful & oriented online marketing strategies which integrate customer needs, business objectives & technology.
  </p>
  </div>
  </div>
 </div>
  </div>
</div>



{/*  */}
    </>
    );
}

export default Portfolio;
