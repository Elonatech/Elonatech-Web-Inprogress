import blob from './captions/blob.svg';
import img from './captions/img_5.jpg'

import person1 from './captions/person_1.jpg'
import person2 from './captions/person_2.jpg'
import person3 from './captions/person_3.jpg'
import person4 from './captions/person_4.jpg'
// import person5 from './captions/person_5.jpg'


const Admin = () => {
    return (
     <>
    {/* header */}
<div class="hero mb-5 ">
		<img src={blob} alt="" class="img-fluid"/>
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

<div class="section mb-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-7 order-lg-2 mb-4 mb-lg-0">
					<img src={img} alt="Image" class="img-fluid"/>
				</div>
				<div class="col-lg-5 pe-lg-5">
					<div class="mb-5">
						<h2 class="text-black h4">Straight-forward way of financing</h2>
					</div>
					<div class="d-flex mb-3 service-alt">
						<div>
							<span class="bi-wallet-fill me-4"></span>
						</div>
						<div>
							<h3>Build financial</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>

					<div class="d-flex mb-3 service-alt">
						<div>
							<span class="bi-pie-chart-fill me-4"></span>
						</div>
						<div>
							<h3>Invest for the future</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>

					<div class="d-flex mb-3 service-alt">
						<div>
							<span class="bi-bag-check-fill me-4"></span>
						</div>
						<div>
							<h3>Responsible banking</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


<div class="section  sec-features mb-5 ">
		<div class="container">
			<div class="row g-5">
				<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
					<div class="feature d-flex">
						<span class="bi-bag-check-fill pe-4"></span>
						<div>
							<h3>Build financial</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
				</div>
				<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
					<div class="feature d-flex">
						<span class="bi-wallet-fill pe-4"></span>
						<div>
							<h3>Invest for the future</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
				</div>
				<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
					<div class="feature d-flex">
						<span class="bi-pie-chart-fill pe-4"></span>
						<div>
							<h3>Responsible banking</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

{/*  */}


{/* hgfdf */}
	
<div class="section">
		<div class="container">
			
			<div class="row mb-5">
				<div class="col-lg-5 mx-auto text-center" data-aos="fade-up">
					<h2 class="heading text-primary">Our Team</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="0">
					<img src={person1} alt="Image" class="img-fluid w-50 rounded-circle mb-3"/>
					<h5 class="text-black">James Griffin</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
				<div class="col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="100">
					<img src={person2} alt="Image" class="img-fluid w-50 rounded-circle mb-3"/>
					<h5 class="text-black">Claire Smith</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
				<div class="col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="200">
					<img src={person3} alt="Image" class="img-fluid w-50 rounded-circle mb-3"/>
					<h5 class="text-black">Jessica Wilson</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>

				<div class="col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="0">
					<img src={person4} alt="Image" class="img-fluid w-50 rounded-circle mb-3"/>
					<h5 class="text-black">William Anderson</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
				<div class="col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="100">
					<img src={person4} alt="Image" class="img-fluid w-50 rounded-circle mb-3"/>
					<h5 class="text-black">Julie Harvey</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
				<div class="col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="200">
					<img src={person3} alt="Image" class="img-fluid w-50 rounded-circle mb-3"/>
					<h5 class="text-black">Shana Clarkson</h5>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
				</div>
			</div>

		</div>
	</div>
     </>
    );
}

export default Admin;
