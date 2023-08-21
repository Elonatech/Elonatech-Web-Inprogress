import './digital.css';
import img1 from './icons/icon-02-light.png'
import img2 from './icons/icon-03-light.png'
import img13 from './icons/icon-05-light.png'
import img14 from './icons/icon-06-light.png'
import img15 from './icons/icon-07-light.png'
import img16 from './icons/icon-07-light.png'
import img17 from './icons/icon-09-light.png'
import img18 from './icons/icon-10-light.png'

const Digital = () => {
    return (
        <>

{/* header */}
<div
 class="container-fluid page-header bg-secondary py-5 mb-5 wow fadeIn"
  style={{height:"500px"}}
>
 <div class="container py-5 ">
   <h1 class=" mt-5 text-white">We Are A Full-Service Digital Marketing <br /> Agency In Lagos, Nigeria</h1>
   {/* <nav aria-label="breadcrumb animated slideInDown">
     <ol class="breadcrumb mb-0">
       <li class="breadcrumb-item text-white"><a href="#" className='text-dark'>Home</a></li>
       <li class="breadcrumb-item"><a href="#" className='text-dark'>Pages</a></li>
       <li class="breadcrumb-item active" aria-current="page">Services</li>
     </ol>
   </nav> */}
 </div>
</div>


 {/* image card */}
<div className="container">
<div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class=" fw-bold mt-4">Our digital marketing services help your business grow online leads, calls, and revenue.</h2>
        <p className='mt-3'>With Digital marketing, we have successfully changed the way brands and businesses use technology for marketing. Digital platforms are increasingly incorporated into marketing plans and everyday life, and with the high rise in the use of digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.

We achieve this aim by working closely with you to craft and deliver successful and bottom-lined oriented online marketing strategies which integrate customer needs, business objectives, and technology. Developing effective digital marketing in any market is a tough, demanding, and technical undertaking. Hence the need to work with a Nigerian internet marketing agency with the experience, network, tools and know-how needed to achieve market success.

Our encyclopedic knowledge of the Nigerian business environment, in-house pool of stellar associates, and strategic working alliance with outstanding outside business experts provide us with the capability and expertise needed to help you achieve your desired business objectives.

Whatever your goals, whether to improve existing marketing campaigns or design your comprehensive online media strategy from scratch, we can be of help.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
      </div>
    </div>
</div>


{/* digital services */}

   <div class="container-xxl py-5">
      <div class="container">
    <div class="section-header  text-center">
	  <h2>OUR DIGITAL SERVICE RANGE COVERS</h2>
	  </div>
        <div class="row g-4 justify-content-center mt-4">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img1}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">Search Engine Optimization</h4>
              </div>
              <p class="mb-4">
              We use advanced methods to rank websites based on content, keywords, and hundreds of other criteria to provide useful search results. Most people find what they are looking for on the first or second result...
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img13}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">Social Media Marketing</h4>
              </div>
              <p class="mb-4">
              Most large and small business owners only see the surface value of social media marketing.
              Promoting your business on social media marketing goes beyond followers, likes, and DMs. Your business’s outlook on social media needs your attention...
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img14}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">PPC (pay-per-click)</h4>
              </div>
              <p class="mb-4">
              We use advanced methods to direct traffic towards your Brand. Pay Per Click has an instant impact and gives your brand a much larger reach and exposure, as a result, Of first-page exposure on major search engines...
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img1}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">Content Marketing</h4>
              </div>
              <p class="mb-4">
              We create unique and useful content that makes audiences become loyal to your brand.
              We tell compelling stories about your brand that sell your products and services to potential customers through content marketing.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img2}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">Email Marketing</h4>
              </div>
              <p class="mb-4">
              We help you connect to your prospects, customers through email marketing.
              Email marketing is one of the best ways to connect with prospects and customers, generate leads, and build relationships. Are you taking full advantage of the opportunity?
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="service-item rounded h-100 p-5">
              <div class="d-flex align-items-center ms-n5 mb-4">
                <div
                  class="service-icon flex-shrink-0 bg-primary rounded-end me-4"
                >
                  <img
                    class="img-fluid"
                    src={img14}
                    alt=""
                  />
                </div>
                <h4 class="mb-0">Affiliate marketing</h4>
              </div>
              <p class="mb-4">
              We have the tools to enable your website or brand affiliable, an affiliate earns a commission for marketing your person's or company's products.
              The affiliate simply searches for a product they enjoy, then promotes that product, and earns a piece of the profit from each sale they make.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
            

{/* frequent question */}

<section id="faq" class="faq mb-5 mt-3">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-4">
            <div class="content px-xl-5">
              <h3>Frequently Asked <strong>Questions</strong></h3>
              <p>
              Digital marketing lets you reach the targeted audience/consumers/customers globally from all over the world.
              </p>
            </div>
          </div>

          <div class="col-lg-8">

            <div class="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    <span class="num">1.</span>
                    Target Audience?
                  </button>
                </h3>
                <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  Digital marketing lets you reach the targeted audience/consumers/customers globally from all over the world.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    <span class="num">2.</span>
                    Marketing Cost?
                  </button>
                </h3>
                <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  Digital marketing is less costly than the traditional method of marketing as everything is online and the use of social websites does not cost even a penny. Based on the marketing requirement the business can opt for paid ads if they want to.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    <span class="num">3.</span>
                    Real-Time Result?
                  </button>
                </h3>
                <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  Online marketing or digital marketing gives quick results and thus it is easy to get real time marketing results.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                    <span class="num">4.</span>
                    Communication?
                  </button>
                </h3>
                <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  Online marketing, on the other hand, promotes two-way communication and thus helps to satisfy the customer and make the customer feel that they are being listened to and served.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                    <span class="num">5.</span>
                    Consumer Interaction?
                  </button>
                </h3>
                <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  Digital marketing, on the other hand, offers a number of digital platforms to the consumers/customers/buyers like social networking sites, e-commerce websites, different apps for collecting their feedbacks where they can put their views about the product(s)/service(s).
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-6">
                    <span class="num">6.</span>
                    Strategy Refinement?
                  </button>
                </h3>
                <div id="faq-content-6" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                  Digital marketing provides real time results; thus, strategy refinement becomes very easy and the marketing team can opt to change or update their market strategy as per the market results.
                  </div>
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

export default Digital;
