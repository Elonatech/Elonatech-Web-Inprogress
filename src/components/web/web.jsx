import './styles.css'
import image from './author.png'
import person1 from './person_1.jpg'
import person2 from './person_2.jpg'
import person3 from './person_3.jpg'


const Web = () => {
    return (
 <>


	{/* services */}
	<div id="services" class="basic-2 mt-5 mb-5">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<h2 class="h2-heading">Offered services</h2>
						<p class="p-heading">Web design and development have been my bread and butter for more than 5 years. During that time I've discovered that I can help startups and companies with the following services</p>
					</div> 
				</div> 
				<div class="row">
					<div class="col-lg-4">
						<div class="text-box">
							<i class="far fa-gem"></i>
							<h4>DESIGN</h4>
							<p>Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth</p>
						</div>
					</div> 
					<div class="col-lg-4">
						<div class="text-box">
							<i class="fas fa-code"></i>
							<h4>DEVELOPMENT</h4>
							<p>I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>
						</div>
					</div> 
					<div class="col-lg-4">
						<div class="text-box">
							<i class="fas fa-code"></i>
							<h4>DEVELOPMENT</h4>
							<p>I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>
						</div>
					</div> 
					<div class="col-lg-4">
						<div class="text-box">
							<i class="fas fa-code"></i>
							<h4>DEVELOPMENT</h4>
							<p>I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>
						</div>
					</div> 
					<div class="col-lg-4">
						<div class="text-box">
							<i class="fas fa-code"></i>
							<h4>DEVELOPMENT</h4>
							<p>I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>
						</div>
					</div> 
					<div class="col-lg-4">
						<div class="text-box">
							<i class="fas fa-tv"></i>
							<h4>BASIC SEO</h4>
							<p>i can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money</p>
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
							<p  class="text-white">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly.</p>
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
