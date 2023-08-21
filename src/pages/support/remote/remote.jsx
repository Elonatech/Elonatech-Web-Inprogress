import  img from './captions/img-2.jpg'

const Remote = () => {
    return (
 <>
 {/* header */}
<div class="hero ">
		{/* <img src={blob} alt="" class="img-fluid blob"/> */}
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
    <div class="section">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-lg-7 mb-4 mb-lg-0">
					<img src={img} alt="Image" class="img-fluid rounded"/>
				</div>
				<div class="col-lg-4 ps-lg-2">
					<div class="mb-5">
						<h2 class="text-black h4">Make payment fast and smooth.</h2>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
							<span class="bi-pie-chart-fill me-4"></span>
						</div>
						<div>
							<h3>Invest for the future</h3>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>

				</div>

			</div>
		</div>
	</div>


{/* flex display */}
<div className="container bg-light mt-5 mb-5 ">
    <div className="row">
        <div className="col-md-4">
        <span class="bi-bag-check-fill"></span>
        <h5>High-definition video</h5>
        <h6>Watch what’s happening in 1080p HD video with 8x digital zoom.</h6>
        </div>
        <div className="col-md-4">
        <span class="bi-bag-check-fill"></span>
        <h5>Unlimited cloud storage</h5>
        <h6>Your videos are saved automatically on our secure servers for 30 days.*</h6>
        </div>
        <div className="col-md-4 mt-3">
        <span class="bi-bag-check-fill"></span>
        <h5>Rechargeable battery</h5>
        <h6>Lasts up to 3-6 months before it needs a recharge.*</h6>
           
        </div>
    </div>
</div>

            
</>
    );
}

export default Remote;
