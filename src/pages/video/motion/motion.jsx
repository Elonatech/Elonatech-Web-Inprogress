
import si1 from './captions/si-1.png'
import si2 from './captions/si-2.png'
import si3 from './captions/si-3.png'
import si4 from './captions/si-4.png'




import logo1 from './captions/logo-1.png'
import logo2 from './captions/logo-2.png'
import logo3 from './captions/logo-3.png'
import logo4 from './captions/logo-4.png'
import logo5 from './captions/logo-5.png'
import logo6 from './captions/logo-6.png'


const Motion = () => {
    return (
 <>
 {/* grid */}
  <section class="services-page spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="services__item">
                        <div class="services__item__icon">
                            <img src={si1} alt=""/>
                        </div>
                        <h4 className='text-white'>Scriptwriting and editing</h4>
                        <p className='text-white'>Whether you’re halfway through the editing process, or you haven’t even started, our post
                            production services can put the finishing touches.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="services__item">
                        <div class="services__item__icon">
                            <img src={si2} alt=""/>
                        </div>
                        <h4 className='text-white'>Motion graphics</h4>
                        <p className='text-white'>Whether you’re halfway through the editing process, or you haven’t even started, our post
                            production services can put the finishing touches.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="services__item">
                        <div class="services__item__icon">
                            <img src={si3} alt=""/>
                        </div>
                        <h4 className='text-white'>Scriptwriting and editing</h4>
                        <p className='text-white'>Whether you’re halfway through the editing process, or you haven’t even started, our post
                            production services can put the finishing touches.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="services__item">
                        <div class="services__item__icon">
                            <img src={si3} alt=""/>
                        </div>
                        <h4 className='text-white'>Video distribution</h4>
                        <p className='text-white'>Whether you’re halfway through the editing process, or you haven’t even started, our post
                            production services can put the finishing touches.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="services__item">
                        <div class="services__item__icon">
                            <img src={si4} alt=""/>
                        </div>
                        <h4 className='text-white'>Video hosting</h4>
                        <p className='text-white'>Whether you’re halfway through the editing process, or you haven’t even started, our post
                            production services can put the finishing touches.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="services__item">
                        <div class="services__item__icon">
                            <img src={si2} alt=""/>
                        </div>
                        <h4 className='text-white'>Video hosting</h4>
                        <p className='text-white'>Whether you’re halfway through the editing process, or you haven’t even started, our post
                            production services can put the finishing touches.</p>
                    </div>
                </div>
            </div>
        </div>
    </section> 
{/* Logo */}
        <div class="container-fluid bg-dark">
            <div class="">
                <ul className='d-flex justify-content-center p-5 mt-4'>
                    <li><a href="#" class="logo__item pe-5"><img src={logo1} alt=""/></a></li>
                    <li><a href="#" class="logo__item pe-5"><img src={logo2} alt=""/></a></li>
                    <li><a href="#" class="logo__item pe-5"><img src={logo3} alt=""/></a></li>
                    <li><a href="#" class="logo__item pe-5"><img src={logo4} alt=""/></a></li>
                    <li><a href="#" class="logo__item pe-5"><img src={logo4} alt=""/></a></li>
                    <li><a href="#" class="logo__item pe-5"><img src={logo5} alt=""/></a></li>
                    <li><a href="#" class="logo__item pe-5"><img src={logo6} alt=""/></a></li>
                </ul>
            </div>
        </div>
</>
    );
}

export default Motion;
