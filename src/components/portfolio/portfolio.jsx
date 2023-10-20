import './css/portfolio.css';
import project1 from './caption/project-1.jpg'
import project2 from './caption/project-2.jpg'
import project3 from './caption/project-3.jpg'
import project4 from './caption/project-4.jpg'
import { useState } from 'react';




const Portfolio = () => {

  const scrollToHeader = () => {
    var tab_lists = document.querySelectorAll(".tabs_list ul li");
    var tab_items = document.querySelectorAll(".tab_item"); 

tab_lists.forEach(function(list){
  list.addEventListener("click", function(){
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
            <h5 class="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 class="mb-0">We Are Here to Grow Your Business <br/> Exponentially</h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4">
                <div class="row g-5">
                    <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-cubes text-white"></i>
                        </div>
                        <h4>Best In Industry</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                    <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-award text-white"></i>
                        </div>
                        <h4>Award Winning</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
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
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-users-cog text-white"></i>
                        </div>
                        <h4>Professional Staff</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                    <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width:"60px", height:"60px"}}>
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <h4>24/7 Support</h4>
                        <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
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
              <h4>Programming</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2 wow zoomIn" data-wow-delay="0.2s">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <i class="bi bi-box-seam color-indigo"></i>
              <h4>OS</h4>
            </a>
          </li>
          <li class="nav-item col-6 col-md-4 col-lg-2 wow zoomIn" data-wow-delay="0.3s">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
              <i class="bi bi-nut color-teal"></i>
              <h4>DD</h4>
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
{/* tab-1 */}
  <div class="tab-content wow zoomIn" data-wow-delay="0.8s">
 <div class="tab-pane active show" id="tab-1">
          <div class="row gy-4">
  <div class="col-lg-12 order-2 order-lg-1" style={{ }}>
          
<div className="container me-5   mb-5" style={{}}>
  <div className="row g-0">
    <div className="col-md-2" >
      <div className="border rounded-0">
      <div class="ts_body">
      <div class="tabs_list" style={{padding:"16.7px"}}>
        <ul className='list-unstyled p-4 pb-4'>
          <li data-tc="tab_item_1" class="active">Introduction</li>
          <li data-tc="tab_item_2" onClick={scrollToHeader}>General</li>
          <li data-tc="tab_item_3" onClick={scrollToHeader}>Google</li>
          <li data-tc="tab_item_4" onClick={scrollToHeader}>Save</li>
          <li data-tc="tab_item_5 " onClick={scrollToHeader}>Privacy</li>
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
          <li data-tc="tab_item_1" class="active pt-3">Introduction</li>
          <li data-tc="tab_item_2" onClick={scrollToHeader}>General</li>
          <li data-tc="tab_item_3" onClick={scrollToHeader}>Google</li>
          <li data-tc="tab_item_4" onClick={scrollToHeader}>Save</li>
          <li data-tc="tab_item_5 pt-3" onClick={scrollToHeader}>Privacy</li>
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
    <h3 className='pt-4 pb-3'>1. Introduction</h3>
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


{/* tab-3 */}
          <div class="tab-pane" id="tab-3">
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
  <div class="tab_item tab_item_5" style={{display:"none"}}   >
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

  </div>

      </div>
</section> 

{/* our  */}
<div class="container-xxl">
        <div class="container">
            <div className="row">
            <div class="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:'500px;'}}>
                <p class="fs-5 fw-medium text-primary">Our Projects</p>
                <h1 class=" mb-5">We've Done Lot's of Awesome Projects</h1>
            </div>
            </div>
            
            <div class="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
            <div class="row">
                <div class="col-sm">
                <div class="project-item mb-5">
                    <div class="position-relative ">
                        <img class="img-fluid" src={project1} alt=""/>
                        <div class="project-overlay">
                            <a class="btn btn-lg-square btn-light rounded-circle m-1 "  href="img/project-1.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Data Analytics & Insights</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
                </div>
          {/*  */}

              <div class="col-sm">
                <div class="project-item mb-5">
                    <div class="position-relative ">
                        <img class="img-fluid" src={project2} alt=""/>
                        <div class="project-overlay">
                            <a class="btn btn-lg-square btn-light rounded-circle m-1 "  href="img/project-2.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Data Analytics & Insights</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
                </div>

                 {/*  */}
           <div class="col-sm">     
              <div class="project-item mb-5">
                    <div class="position-relative">
                        <img class="img-fluid" src={project4} alt=""/>
                        <div class="project-overlay">
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-4.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Social Marketing Strategy</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
                </div>

             {/*  */}

             <div class="col-sm">     
              <div class="project-item mb-5">
                    <div class="position-relative">
                        <img class="img-fluid" src={project4} alt=""/>
                        <div class="project-overlay">
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-4.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i
                                    class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Social Marketing Strategy</a>
                        <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
                    </div>
                </div>
                </div>
                 {/*  */}

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
