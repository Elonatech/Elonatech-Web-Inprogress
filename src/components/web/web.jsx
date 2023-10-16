import './styles.css'
import image from './author.png'
import person1 from './person_1.jpg'
import person2 from './about-2.jpg'
import pers from './icons8-database-100-80x80.png'

import bax from './hero-img.svg'


const Web = () => {
    return (
 <>

{/* hero */}
<section id="hero" class="hero">
    <div class="container position-relative">
      <div class="row gy-5" data-aos="fade-in">
        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h3 className='text-white'>We build websites that are not only visually beautiful, scalable, and also functionally effective.</h3>
          <p className='mt-3 text-white'>Our team of web strategists, designers, developers, and project managers work together to help clients meet their business objectives.</p>
          <div class="d-flex justify-content-center justify-content-lg-start mt-3">
            <a href="#about" class="btn-get-started text-decoration-none">Get Started</a>
            <a href="https://youtu.be/dmnxRQTHMyo" class="glightbox btn-watch-video d-flex align-items-center text-decoration-none"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2">
          <img src={bax} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100"/>
        </div>
      </div>
    </div>

    <div class="icon-boxes position-relative">
      <div class="container position-relative">
        <div class="row gy-4 mt-5">

          <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-easel"></i></div>
              <h4 class="title"><a href="" class="stretched-link text-decoration-none">Scalability. Extendibility. Performance</a></h4>
            </div>
          </div>

          <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-gem"></i></div>
              <h4 class="title"><a href="" class="stretched-link text-decoration-none">No compromises. No shortcuts. No limitations.</a></h4>
            </div>
          </div>

          <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-geo-alt"></i></div>
              <h4 class="title"><a href="" class="stretched-link text-decoration-none">Agile – Proven delivery framework.</a></h4>
            </div>
          </div>

          {/* <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-command"></i></div>
              <h4 class="title"><a href="" class="stretched-link text-decoration-none">Nemo Enim</a></h4>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  </section>

{/*about*/}

<section id="about" class="about mt-5">
  <div class="container" data-aos="fade-up">
	<div class="section-header text-center">
	  <h2>WE HELP BUSINESSES REACH  <br />  THEIR FULL POTENTIAL ON THE WEB</h2>
	</div>

	<div class="row gy-4 mt-3">
	  <div class="col-lg-6">
		<img src={person1} class="img-fluid rounded-4 mb-4" alt=""/>
		<p>As a web development company, we develop all kinds of websites with the most suitable platforms. We ensure that your needs are understood and implemented correctly. In fact, we are dedicated to the creation of a site that helps you become a success. Our specialty lies in providing comprehensive and custom web development services that provide you with a functional and complete solution. The sites we develop are highly scalable with a great degree of usability. As a website development company, we also ensure that the site works fast and is SEO friendly with an excellent User Interface (UI) and User Experience (UX). You also get to enjoy complete control over your site. With our website development, you do not have to adjust your specifications to the capabilities of a given platform or change your design visions to fit a template. We deliver the work precisely to your requirements.</p>
	  </div>
	  <div class="col-lg-6">
		<div class="content ps-0 ps-lg-5">
		  <p class="fst-italic">
		  Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for online shops
		  </p>
		  <ul>
			<li><i class="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
			<li><i class="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
			<li><i class="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
		  </ul>
		  <p>
			Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
		  </p>
		  <div class="position-relative mt-4">
			<img src={person2} class="img-fluid rounded-4" alt=""/>
			<a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn" ></a>
		  </div>
		</div>
	  </div>
	</div>

  </div>
</section>


	{/* services */}
	<div id="services" class="basic-2 mt-3 mb-5 wow zoomIn" >
			<div class="container">
				<div class="row">
					<div class="col-lg-12" data-wow-delay="0.2s">
						<h2 class="h2-heading">OUR WEB DESIGN AND DEVELOPMENT SERVICE COVERS</h2>
						<p class="p-heading">Web design and development have been my bread and butter for more than 5 years. During that time I've discovered that I can help startups and companies with the following services</p>
					</div> 
				</div> 
				<div class="row">
					<div class="col-lg-4 wow zoomIn" data-wow-delay="0.4s">
						<div class="text-box">
							<i class="far fa-gem"></i>
							<h4>DESIGN</h4>
							<p>Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth</p>
						</div>
					</div> 
					<div class="col-lg-4 wow zoomIn" data-wow-delay="0.9s">
						<div class="text-box">
							<i class="fas fa-code"></i>
							<h4>PORTFOLIO WEBSITE</h4>
							<p>A portfolio website allows creative professionals a place for showcasing their best work. This is perfect for artists, writers, designers, filmmakers, furniture builders—you name it. As you build a portfolio, there’s no need to add every single project you’ve ever worked on
                              Ready to discuss your project?
                            </p>
						</div>
					</div> 
					<div class="col-lg-4 wow zoomIn" data-wow-delay="0.4s">
						<div class="text-box">
							<i class="fas fa-code"></i>
							<h4>CORPORATE WEBSITE</h4>
							<p>Design can humanize brands and help users discover, learn, experience, and enjoy with greater ease. We help larger organizations use the web to communicate their missions, drive sales-ready opportunities, demonstrate thought-leadership, and engage multiple constituencies.</p>
						</div>
					</div> 
					<div class="col-lg-4 wow zoomIn" data-wow-delay="0.8s">
						<div class="text-box">
							<i class="fas fa-code"></i>
							<h4>E-COMMERCE WEBSITE</h4>
							<p>We design an e-commerce website, also known as electronic commerce or internet commerce, whereby your customers can buy your goods or services using the internet, and the transfer of money and data to execute these transactions whereby your customers can buy your goods or services using the internet</p>
						</div>
					</div> 
					<div class="col-lg-4 wow zoomIn" data-wow-delay="0.5s">
						<div class="text-box">
							<i class="fas fa-code"></i>
							<h4>MARKETING WEBSITE</h4>
							<p>Design a website to make people aware of your business as well as promote the company mission, products, and services offered. Quality web design marketing will promote user experience (UX), maintain consistent branding, and bring people back to your site again and again</p>
						</div>
					</div> 
					<div class="col-lg-4 wow zoomIn" data-wow-delay="0.7s">
						<div class="text-box">
							<i class="fas fa-tv"></i>
							<h4>RESPONSIVE WEBSITE</h4>
							<p>Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform, and orientation. In other words, the website should have the technology to automatically respond to the user's preferences</p>
						</div> 
					</div> 
				</div> 
			</div> 
	</div>

	{/* contact us */}
	<section class="bg-dark">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-md-8 col-lg-8 d-flex align-items-center">
						<div class="w-100 py-4">
							<h2   class="text-white">Have a project on your mind.</h2>
							<p  class="text-white">Being online goes beyond social media accounts, you need an actual home on the internet. That’s a website! Here are 6 reasons a website is a must for your business.</p>
							<p class="mb-0"><a href="#" class="btn btn-primary py-3 px-4">Contact me</a></p>
						</div>
					</div>
					<div class="col-md-4 col-lg-4 d-flex align-items-end">
						<img src={image} class="img-fluid" alt=""/>
					</div>
				</div>
			</div>
	</section> 


</>
    );
}

export default Web;
