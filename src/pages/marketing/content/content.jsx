import contentHeader from './captions/84646169-words.jpg'
import content from './captions/2. Content Marketing logo removed.png'
import content2 from './captions/Content-marketing-cycle.webp'
import content3 from './captions/Content-Marketing-Process-removebg-preview.png'


const Content = () => {
    return (
<>
{/* Header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contentHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Content Marketing</h2>
   <h5 class=" mt-4 text-white text-center">Content is key! Quality content is part of all forms of marketing,</h5>
   <p class="lead text-white text-center">Marketing today is impossible without great content and should be integrated into marketing processes.</p>
 </div>
</div>

   {/* content1 */}
   <section class="section" id="explore">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    {/* <div class="left-content"> */}
                        <h2 className='mb-4'>What is Content Marketing?</h2>
                        <span className='lead fs-6' >Content marketing is a strategic digital marketing method that is focused on creating and providing relevant and useful content to a clearly defined audience.</span> 
                        <br /><br />
                        <p className='lead fs-6'>It is a marketing approach focused on distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience and, ultimately, to drive profitable customer action.</p>
                        <strong className='fw-bold'>When businesses create excellent content marketing, they can expect one or more of these four benefits</strong>

                         <div className="row mt-3">
                          <div className="col-md-6">
                       <div className="">
                        <ul className='list-unstyled'>
                        <li className='d-flex mb-2'>
                        <i class="bi bi-check-circle-fill"></i>
                        <span className='ms-2 lead fs-6'>Increased sales</span> 
                        </li>
                        <li className='d-flex'>
                        <i class="bi bi-check-circle-fill"></i>
                        <span className='ms-2 lead fs-6'>Better customers who have more loyalty</span> 
                        </li>
                        </ul>
                        </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                            <ul className='list-unstyled'>
                        <li className='d-flex mb-2'>
                        <i class="bi bi-check-circle-fill"></i>
                        <span className='ms-2 lead fs-6'>Cost savings </span> 
                        </li>
                        <li className='d-flex'>
                        <i class="bi bi-check-circle-fill"></i>
                        <span className='ms-2 lead fs-6'>Content-driven revenue (i.e profit center)</span> 
                        </li>
                        </ul>
                            </div>
                          </div>
                         </div>
                </div>
                <div class="col-md-6">
                 <img src={content} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </section>

  {/* details  */}
<div class="section">
      <div class="container">
        <div class="row text-left mb-3">
          <div class="col-12">
            <h2 class="font-weight-bold heading  mb-4">Top Benefits of Content Marketing</h2>
          </div>
          <div class="col-lg-6">

          <ul className='list-unstyled'>
          <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2'>Boost Your Website Traffic</h6>
            </div>
            <p className='lead fs-6'>Anyone serious about their digital marketing efforts knows that it is impossible to win at SEO without a good content strategy. 
            Effective content is the foundation of organic search and the best way to drive more traffic to your website.
            </p>
          </li>
          <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Drives More Sales</h6>
            </div>
            <p className='lead fs-6'>Many people think that boosting website traffic (especially inorganic traffic) will drive more sales. 
            However, this is not always the case. But content marketing ultimately helps you with both - more traffic plus more sales.
            </p>
          </li>
           <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2'>Better Customer Service</h6>
            </div>
            <p className='lead fs-6'>How many times does your customer service team need to answer the same questions every day? 
            Whether it is how to sign up for a new service or how to use your product, an informative blog can answer those questions.
            </p>
          </li>
          </ul> 
          </div>
          <div class="col-lg-6">
            <h5 className='text-center'>Multiple Learning Formats</h5>
            <p className='lead fs-6'>Each customer has very own requirement and there is no universal format that can cater to all their needs at once. 
              While some people like to read, others may prefer a video or listen to a podcast instead. <br />
              <strong className='fw-bold'>Here are some of the most common formats in content marketing that you can use to your advantage</strong>
            </p>
            <ul className='list-unstyled'>
              <li className='d-flex'>
              <span class="num">1.</span>
               <span className='ms-2 lead fs-6'>Blog posts</span> 
              </li>
              <li className='d-flex'>
              <span class="num">2.</span>
               <span className='ms-2 lead fs-6'>White papers</span> 
              </li>
              <li className='d-flex'>
              <span class="num">3.</span>
               <span className='ms-2 lead fs-6'>Infographics</span> 
              </li>
              <li className='d-flex'>
              <span class="num">4.</span>
               <span className='ms-2 lead fs-6'>Webinars</span> 
              </li>
              <li className='d-flex'>
              <span class="num">5.</span>
               <span className='ms-2 lead fs-6'>Podcasts</span> 
              </li>
              <li className='d-flex'>
              <span class="num">6.</span>
               <span className='ms-2 lead fs-6'>Interviews</span> 
              </li>
            </ul>
            
          </div>
        </div>
      </div>
</div>
 
{/* content2 */}
<div className="container  mb-5" style={{marginTop:""}}>
  <div class="row justify-content-center">
  <div class="col-md-6">
      <img src={content2} alt="" className='img-fluid rounded'  srcset="" />
    </div>
    <div class="col-md-6 mt-4">
    <h2 className='mb-4 mt-5'>Why use content marketing?</h2>
     <p style={{textAlign:"justify"}}>
      Content should be integrated into your marketing process, not treated as something separate. Quality content is part of all forms of marketing, including:
      </p>
      <ul className='list-unstyled'>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3' >Email marketing</h6>
            </div>
            <p className='lead fs-6'>Consistently great content trains your audience to anticipate, open and read emails from your brand.</p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Social media marketing</h6>
            </div>
            <p className='lead fs-6'>Content marketing strategy comes before your social media strategy.</p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >SEO</h6>
            </div>
            <p className='lead fs-6'>Search engines reward businesses that publish quality, consistent content.</p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >PR</h6>
            </div>
            <p className='lead fs-6'>Successful PR strategies should address issues readers care about, not their business.</p>
        </li>
    </ul> 
    </div>
  </div>
</div>
      
{/* content3 */}
<div className="container  mb-5" style={{marginTop:""}}>
  <div class="row justify-content-center">
    <div class="col-md-6 mt-5">
      <ul className='list-unstyled'>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >PPC</h6>
            </div>
            <p className='lead fs-6'> For PPC to work, you need great content behind it.</p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Inbound marketing</h6>
            </div>
            <p className='lead fs-6'>Content is critical to driving inbound traffic and leads.</p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2'>Digital marketing</h6>
            </div>
            <p className='lead fs-6'> Content marketing forms the foundation for an improved or rebooted integrated digital marketing strategy.</p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2' >Content strategy</h6>
            </div>
            <p className='lead fs-6'>Content strategy (which determines how content is created and managed throughout an organization) must be considered in any content marketing approach.</p>
        </li>
    </ul>
    </div>
    <div class="col-md-6">
      <img src={content3} alt="" className='img-fluid rounded'  srcset="" />
    </div>
  </div>
</div>
      
</>
    );
}

export default Content;
