import './video.css'
import image from './captions/hero-1.jpg';
import si1 from './captions/si-1.png'
import si2 from './captions/si-2.png'
import si3 from './captions/si-3.png'
import si4 from './captions/si-4.png'

const Video = () => {
    return (
<>
    {/* our services */}
    <section class="services spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="services__title">
                        <div class="section-title">
                            <span className='text-white'>Our services</span>
                            <h2 className='text-white'>What We do?</h2>
                        </div>
                        <p className='text-white'>If you hire a videographer of our team you will get a video professional to make a custom
                            video for your business and, once the project is over.</p>
                        <a href="#" class="primary-btn">View all services</a>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="services__item">
                                <div class="services__item__icon">
                                    <img src={si1} alt=""/>
                                </div>
                                <h4 className='text-white'>Motion graphics</h4>
                                <p className='text-white'>Whether you’re halfway through the editing process, or you haven’t even started, our
                                    post production services can put the finishing touches.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="services__item">
                                <div class="services__item__icon">
                                    <img src={si2} alt=""/>
                                </div>
                                <h4 className='text-white'>Scriptwriting and editing</h4>
                                <p className='text-white'>Whether you’re halfway through the editing process, or you haven’t even started, our
                                    post production services can put the finishing touches.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="services__item">
                                <div class="services__item__icon">
                                    <img src={si3} alt=""/>
                                </div>
                                <h4 className='text-white'>Video distribution</h4>
                                <p className='text-white'>Whether you’re halfway through the editing process, or you haven’t even started, our
                                    post production services can put the finishing touches.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="services__item">
                                <div class="services__item__icon">
                                    <img src={si4} alt=""/>
                                </div>
                                <h4 className='text-white'>Video hosting</h4>
                                <p className='text-white'>Whether you’re halfway through the editing process, or you haven’t even started, our
                                    post production services can put the finishing touches.</p>
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

export default Video;
