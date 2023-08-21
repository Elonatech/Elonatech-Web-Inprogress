import blob from './captions/blob.svg';
import img from './captions/images.jpeg';

import './technical.css'



const Technical = () => {
    return (
    <>

{/* header */}
<div class="hero ">
		<img src={blob} alt="" class="img-fluid blob"/>
		<div class="container">
			<div class="row align-items-center justify-content-between pt-5">
				<div class="col-lg-6 text-center text-lg-start pe-lg-5">
					<h1 class="heading text-white mb-3" data-aos="fade-up">Smart banking for financial freedom.</h1>
					<p class="text-white mb-5" data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					<div class="align-items-center mb-5 mm" data-aos="fade-up" data-aos-delay="200">
                        <button className='btn btn-light me-4'><b>Contact Us</b></button>
						<a href="https://www.youtube.com/watch?v=Mb1zrW_zra4" class="text-white glightbox text-decoration-none">Watch the video</a>
					</div>
				</div>
				{/* <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
					<div class="img-wrap">
						<img src={img} alt="Image" class="img-fluid rounded p-5"/>
					</div>
				</div> */}
			</div>
		</div>
	</div>
        {/* end */}


{/* body */}
<div class="section sec-services">
	<div class="container">
		<div class="row mb-5">
			<div class="col-lg-5 mx-auto text-center" data-aos="fade-up">
				<h2 class="heading text-primary">Our Services</h2>
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
			</div>
		</div>

		<div class="row">
			<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">

				<div class="service text-center">
					<span class="bi-cash-coin"></span>
					<div>
						<h3>Faster payments</h3>
						<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						<p><a href="#" class="btn btn-outline-primary py-2 px-3">Read more</a></p>
					</div>
				</div>

			</div>
			<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
				<div class="service text-center">
					<span class="bi-chat-text"></span>
					<div>
						<h3>Grow your business</h3>
						<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						<p><a href="#" class="btn btn-outline-primary py-2 px-3">Read more</a></p>
					</div>
				</div>
			</div>
			<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
				<div class="service text-center">
					<span class="bi-fingerprint"></span>
					<div>
						<h3>Investments</h3>
						<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						<p><a href="#" class="btn btn-outline-primary py-2 px-3">Read more</a></p>
					</div>
				</div>
			</div>

			<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">

				<div class="service text-center">
					<span class="bi-gear"></span>
					<div>
						<h3>Payment & Cards</h3>
						<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						<p><a href="#" class="btn btn-outline-primary py-2 px-3">Read more</a></p>
					</div>
				</div>

			</div>
			<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
				<div class="service text-center">
					<span class="bi-graph-up-arrow"></span>
					<div>
						<h3>Strategic Finance</h3>
						<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						<p><a href="#" class="btn btn-outline-primary py-2 px-3">Read more</a></p>
					</div>
				</div>
			</div>
			<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
				<div class="service text-center">
					<span class="bi-layers"></span>
					<div>
						<h3>Digital Currency</h3>
						<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						<p><a href="#" class="btn btn-outline-primary py-2 px-3">Read more</a></p>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>
{/* body2 */}


{/* talk */}

<div class="section sec-cta hero">
	<div class="container">
		<div class="row justify-content-between align-items-center">
			<div class="col-lg-5" data-aos="fade-up" data-aos-delay="0">
				<h2 class="heading">Wanna Talk To Us?</h2>
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
			</div>
			<div class="col-lg-5 text-end" data-aos="fade-up" data-aos-delay="100">
                <button className='btn btn-light me-4'><b>Contact Us</b></button>
			</div>
		</div>
	</div>
</div>


    </>
    );
}

export default Technical;
