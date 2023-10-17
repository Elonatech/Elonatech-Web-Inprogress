import blogHeader from './captions/9354657.jpg';
import blog from './captions/blogpic.jpg'

import IT from './captions/It support.jpg'
import Hp from './captions/hp&dell.jpg'
import TroubleShoot from './captions/troubleshoot.jpg'
import Security from './captions/security.jpg'
import Network from './captions/network.png'
import Cooperate from './captions/cooperate.png'


const Blog = () => {
    return (
    <>
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" ,marginBottom:"45px", backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${blogHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Blog</h2>
   <h5 class=" mt-4 text-white text-center">Have what you need to run your business with maximum efficiency and reliability</h5>
   <p class="lead text-white text-center">Properly used, a computer can help you become more organized, work more efficiently, and accomplish more tasks.</p>
 </div>
</div>
{/* Sdf */}

<div className="container mb-5">
    <div className="row">
   <div className="col-md-9">
    <div className="container">
        <div className="row">
            {/*  */}
        <div className="col-md-12">
            <div className="shadow mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                            <img src={IT} className='img-fluid'  alt="" />
                        </div>
                            </div>
                       <div className="col-md-6">
                        <div className="p-4">
                        <h6 className='fs-6 pb-3'>TRENDS</h6>
                        <h5 className='pb-3' style={{color:"#34548c"}}>Computer Repair and Remote Support</h5>
                        <p className='fs-6 pb-4'>Consequently, it could be quite challenging for you this period working from home if you’ve got a challenge with your…</p>
                        <p className='fs-6'>ADMIN / AUGUST 26, 2021</p>
                        </div>
                    </div>
                </div>
          </div>
          </div>
          {/*  */}
            {/*  */}
        <div className="col-md-12">
            <div className="shadow mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                            <img src={Hp} className='img-fluid'  alt="" />
                        </div>
                            </div>
                       <div className="col-md-6">
                        <div className="p-4">
                        <h6 className='fs-6 pb-3'>TRENDS</h6>
                        <h5 className='pb-3'style={{color:"#34548c"}}>Brand New HP and Dell Laptops</h5>
                        <p className='fs-6 pb-4'>Despite the gradual easing of the lockdown in three (3) of our majorly affected states, 50% of Nigerians…</p>
                        <p className='fs-6'>ADMIN / AUGUST 26, 2021</p>
                        </div>
                    </div>
                </div>
          </div>
          </div>
          {/*  */}
            {/*  */}
        <div className="col-md-12">
            <div className="shadow mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                            <img src={TroubleShoot} className='img-fluid'  alt="" />
                        </div>
                            </div>
                       <div className="col-md-6">
                        <div className="p-4">
                        <h6 className='fs-6 pb-3'>NEWS</h6>
                        <h5 className='pb-3' style={{color:"#34548c"}}>Basic Troubleshooting Techniques</h5>
                        <p className='fs-6 pb-4'>Do you know what to do if your screen goes blank? What if you can’t seem to close an application …</p>
                        <p className='fs-6'>ADMIN / AUGUST 26, 2021</p>
                        </div>
                    </div>
                </div>
          </div>
          </div>
          {/*  */}
            {/*  */}
        <div className="col-md-12">
            <div className="shadow mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                            <img src={Security} className='img-fluid'  alt="" />
                        </div>
                            </div>
                       <div className="col-md-6">
                        <div className="p-4">
                        <h6 className='fs-6 pb-3'>NEWS</h6>
                        <h5 className='pb-3' style={{color:"#34548c"}}>28 COMPUTER SECURITY THREATS</h5>
                        <p className='fs-6 pb-4'>There are many types of computer security threats in this world. Some are pretty harmful…</p>
                        <p className='fs-6'>ADMIN / AUGUST 26, 2021</p>
                        </div>
                    </div>
                </div>
          </div>
          </div>
          {/*  */}
            {/*  */}
        <div className="col-md-12">
            <div className="shadow mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                            <img src={Network} className='img-fluid'  alt="" />
                        </div>
                            </div>
                       <div className="col-md-6">
                        <div className="p-4">
                        <h6 className='fs-6 pb-3'>NEWS</h6>
                        <h5 className='pb-3' style={{color:"#34548c"}}>BASIC NETWORK TROUBLESHOOTING</h5>
                        <p className='fs-6 pb-4'>Because of the variety of network hardware, network configurations, operating systems, and setups…</p>
                        <p className='fs-6'>ADMIN / AUGUST 26, 2021</p>
                        </div>
                    </div>
                </div>
          </div>
          </div>
          {/*  */}
            {/*  */}
        <div className="col-md-12">
            <div className="shadow mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                            <img src={Cooperate} className='img-fluid'  alt="" />
                        </div>
                            </div>
                       <div className="col-md-6">
                        <div className="p-4">
                        <h6 className='fs-6 pb-3'>NEWS, TRENDS</h6>
                        <h5 className='pb-3' style={{color:"#34548c"}}>Computer Repair and Remote Support</h5>
                        <p className='fs-6 pb-4'>Elonatech Nigeria Limited, in a bid to serve you better has included Corporate branding to their services…</p>
                        <p className='fs-6'>ADMIN / AUGUST 26, 2021</p>
                        </div>
                    </div>
                </div>
          </div>
          </div>
          {/*  */}
        </div>
    </div>
   </div>
    
<div className="col-md-3">
    <div className="mt-4">
        <h5 style={{color:"#34548c"}}>Categories</h5>
        <ul className='list-unstyled mt-2'>
            <li>News</li>
            <li>Trends</li>
        </ul>
        <h5 className='mt-2' style={{color:"#34548c"}}>Be the first to know</h5>
        <p>Enter your email address below to subscribe to our newsletter</p>
        <form>
        <div class="mb-2">
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email address'  aria-describedby="emailHelp"/>
       </div>
       <div class="d-grid gap-2">
       <button class="btn btn-danger" type="button">Subscribe</button>
    </div>
  <div class="mb-3 form-check mt-2">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label lead fs-6 " for="exampleCheck1">I accept the <a href="">Privacy Policy</a></label>
  </div>
</form>
</div>
</div>
</div>

</div>
    </>
    );
}

export default Blog;
