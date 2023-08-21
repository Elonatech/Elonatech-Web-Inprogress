import gh  from './captions/about-us.png'
import './ppc.css'

const Ppc = () => {
    return (
    <>
{/* header */}
<div
 class="container-fluid page-header bg-dark py-5 mb-5"
  style={{height:"500px"}}
>
 <div class="container py-5 ">
   <h1 class=" mt-5 text-white">We Are A Full-Service Digital Marketing <br /> Agency In Lagos, Nigeria</h1>
<p  class="text-white pt-2">We Provides Round-The-Clock Maintenance for All Network Equipment</p>
<p  class="text-white pt-2">we are committed to supplying you with the most reliable advice, support and services at all times, wherever you are in Nigeria.</p>
 <p class="mb-0 pt-2"><a href="#" class="btn btn-success py-3 px-4">Contact Us</a></p>
 </div>
</div>    


{/* faiejfc */}
<section class="about-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about__img">
                        <img src={gh} alt=""/>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about__text">
                        <h2>Welcom to Deerhost</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis.</p>
                        <div class="about__achievement">
                            <div class="about__achieve__item">
                                <span class="fa fa-user-o"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Clients</p>
                            </div>
                            <div class="about__achieve__item">
                                <span class="fa fa-edit"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Domains</p>
                            </div>
                            <div class="about__achieve__item">
                                <span class="fa fa-clone"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Server</p>
                            </div>
                            <div class="about__achieve__item">
                                <span class="fa fa-cog"></span>
                                <h4 class="achieve-counter">2468</h4>
                                <p>Installs</p>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary"><b>Get started now</b></a>
                    </div>
                </div>
            </div>
        </div>
    </section>










    </>
    );
}

export default Ppc;
