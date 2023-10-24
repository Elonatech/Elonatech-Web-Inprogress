import './css/portfolio.css';
import project1 from './caption/project1.png'
import project2 from './caption/project2.jpg'
import project3 from './caption/project3.png'
import project4 from './caption/digital marketing practical.jpg'






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
        <ul className='list-unstyled row p-4 pb-4'>
          <li data-tc="tab_item_1 col-6 " class="active">Introduction</li>
          <li data-tc="tab_item_2 col-6 " onClick={scrollToHeader}>General</li>
          <li data-tc="tab_item_3 col-6 " onClick={scrollToHeader}>Google</li>
          <li data-tc="tab_item_4 col-6 " onClick={scrollToHeader}>Save</li>
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
                        <img class="img-fluid" src={project1}   alt=""/>
                        <div class="project-overlay">
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Computer Hardware Projects</a>
                        <span>Your business works when your hardware works.
                        While computer hardware configurations vary widely, we have worked on major categories of hardware for clients in the Medical Science, Financial, Telecoms, Aviation, ICT, Government & NGOs, etc.</span>
                    </div>
                </div>
                </div>
          {/*  */}

              <div class="col-sm">
                <div class="project-item mb-5">
                    <div class="position-relative ">
                        <img class="img-fluid" src={project2}  style={{height:"15.5rem"}} alt=""/>
                        <div class="project-overlay">
                        </div>
                    </div>
                    <div class="p-4">
                        <a class="d-block h5 text-decoration-none" href="">Network Engineering & Administration</a>
                        <span>We implement and design both complex and simple data/voice local area networks for all types of organizations/institutions.
                         Implementing a well-designed, secured enterprise network and utilizing the right combination of IT solutions so as to drive your business to the desired level.</span>
                    </div>
                </div>
                </div>

                 {/*  */}
           <div class="col-sm">     
              <div class="project-item mb-5">
                    <div class="position-relative">
                        <img class="img-fluid" src={project3} style={{height:'15.6rem'}} alt=""/>
                        <div class="project-overlay">
                        </div>
                    </div>
                    <div class="p-4">
                    <a class="d-block h5 text-decoration-none" href="">Structured Cabling</a>
                        <span>We provide the infrastructure that supports the performance of organizations network
                        it is the most critical part of your voice and data network, choosing a qualified provider is a critical decision. 
                        We use only high-end quality products in our structured wiring solutions</span>
                    </div>
                </div>
                </div>
             {/*  */}
             <div class="col-sm">     
              <div class="project-item mb-5">
                    <div class="position-relative">
                        <img class="img-fluid" src={project4} style={{height:'15.6rem'}} alt=""/>
                        <div class="project-overlay">
                            {/* <a class="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-4.jpg"
                                data-lightbox="project"><i class="fa fa-eye"></i></a> */}
                            {/* <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i class="fa fa-link"></i></a> */}
                        </div>
                    </div>
                    <div class="p-4">
                    <a class="d-block h5 text-decoration-none" href="">Digital Marketing Strategy</a>
                        <span>Developing effective digital marketing in any market is a tough, demanding, and technical undertaking.
                        We achieve this aim by working closely with clients to craft and deliver successful and bottom-lined oriented online marketing strategies which integrate customer needs, business objectives, and technology.</span>
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
