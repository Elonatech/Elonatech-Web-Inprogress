import ppcHeader from './captions/2560h686-kak-stat-ppc.png';
import ppcImg from './captions/payperclick2-removebg-preview.png';
import ppcImg2 from './captions/ppc3.png';
import ads from './captions/ppc-ads-image_neww.webp';
import ppc2 from './captions/ppc2.webp'


import './ppc.css'

const Ppc = () => {
    return (
    <>
{/* Header */}
<div class="container-fluid bg-secondary  py-5 " style={{height:"500px" , marginBottom:"" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ppcHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 "> 
   <h2 class=" mt-5 text-white text-center">Pay Per Click</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Digital Advertising with a Click</h5>
   <p class="lead text-white text-center">Campaigns highly effective for driving targeted website traffic and achieving various marketing objectives</p>
 </div>
</div>

{/* ppc 1 */}
<div class="section-top-border mt-5">
<div className="container ">
<div class="row">
<div class="col-md-6">
	<img src={ppcImg} alt="" class="img-fluid"/>
</div>
<div class="col-md-6">
    <h5 className='fw-bold mt-3 mb-3'>Make the Right Decisions for Your Brand With PPC Advertising</h5>
	<p className='lead fs-6' style={{textAlign:"justify"}}>Today, the digital landscape keeps growing and websites are proliferating at warp speed. From small companies and franchises to eCommerce businesses and entrepreneurs, almost everyone is on the internet, figuring out advertising avenues and maximizing all possible conversion paths. Increased marketing opportunities, however, come with greater challenges.
    <br /><br />
    Despite the availability of advertising tools and digital marketing channels, some businesses remain invisible to their target audience. As a result, market players are in an uphill battle, barely making progress with their internet marketing efforts.
    <br /><br />
    PPC stands for pay-per-click, a model of digital advertising where the advertiser pays a fee each time one of their ads is clicked.
    </p>
</div>
</div>
</div>
</div>
{/* ppc 2 */}
<div class="section-top-border mt-5">
<div className="container ">
<div class="row mt-5 mb-5">
<div class="col-md-6 mt-5">
    <h5 className='fw-bold mt-3 mb-3'>Make the Right Decisions for Your Brand With PPC Advertising</h5>
    <p className='lead fs-6' style={{textAlign:"justify"}}>A Hanapin Marketing report shows that 79 percent of marketers find paid search marketing beneficial to their business. Consequently, approximately 62 percent of industry players said they would continue to increase their PPC ads budget in the coming years to draw new customers looking for their services.
    <br /><br />
    According to Social Media Today, more than 7 million advertisers spent a total of $10.01 billion for pay per click ads in 2017 alone. Evidently, pay per click has become one of the most widely used marketing frameworks for generating higher ROI. But what is pay per click and how can it ramp up your digital marketing efforts?
    </p>
</div>
<div class="col-md-6">
    <div className="text-center">
	<img src={ppcImg2} alt="" class="img-fluid" style={{height:"26rem"}}/>
    </div>
</div>

</div>
</div>
</div>

{/* ppc3 */}
<div class="section-top-border">
<div className="container">
<div class="row">
<div class="col-md-6">
	<img src={ppc2} alt="" class="img-fluid mb-4 mt-4"/>
	</div>
	<div class="col-md-6">
    <h5 className='fw-bold mt-3 mb-3'>Different Types Of PPC Campaigns And Their Benefits</h5>
    <p class="lead fs-6">PPC campaigns can be highly effective for driving targeted website traffic and achieving various marketing objectives. There are different types of PPC campaigns, each with its own set of benefits.</p>
	<ul className='list-unstyled'>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2 fw-bold' >Search Ads</h6>
            </div>
            <p className='lead fs-6'><strong className='fw-bold'>Benefit:</strong>  Search ads appear on search engine results pages (e.g., Google, Bing) when users enter relevant keywords. They allow advertisers to target users actively searching for specific products or services, increasing the likelihood of conversions.
            <br />
            <strong className='fw-bold'>Best for:</strong>  Direct response marketing, lead generation, and driving relevant traffic to specific landing pages.
            </p>
        </li>
    </ul>
	</div>
</div>
</div>
</div>

{/* ppc ads */}
<div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-6">
        <ul className='list-unstyled'>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"  ></i>
            <h6 className='ms-3 mt-2 fw-bold'> Display Ads</h6>
            </div>
            <p className='lead fs-6'> <strong className='fw-bold'>Benefit:</strong> Display ads include banner, image, or interactive ads that are shown on various websites within the ad network. They provide a broader reach, increasing brand awareness and visibility.
            <br />
            <strong className='fw-bold'>Best for:</strong> Building brand awareness, retargeting website visitors, and promoting visual content like infographics and videos.
            </p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2 fw-bold' >Shopping Ads</h6>
            </div>
            <p className='lead fs-6'><strong className='fw-bold'>Benefit:</strong>  Shopping ads are product-based ads that show images, prices, and other relevant information directly on search engine results. They are particularly effective for e-commerce businesses, showcasing products and attracting users with high purchase intent.
            <br />
            <strong className='fw-bold'>Best for:</strong> E-commerce websites looking to promote specific products and drive sales.
            </p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2 fw-bold' >Video Ads</h6>
            </div>
            <p className='lead fs-6'><strong className='fw-bold'>Benefit:</strong>  Video ads are shown on platforms like YouTube and can deliver engaging content to captivate the audience. They are highly effective for storytelling and brand messaging.
            <br />
            <strong className='fw-bold'>Best for:</strong> Brand awareness, storytelling, and showcasing products or services through visual media.
            </p>
        </li>
        </ul>
   </div>
        <div className="col-md-6">
        <ul className='list-unstyled'>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2 fw-bold' > Remarketing/Retargeting Ads</h6>
            </div>
            <p className='lead fs-6'><strong className='fw-bold'>Benefit:</strong> Remarketing ads target users who have previously visited your website but didn't convert. They remind potential customers of your brand, increasing the chances of conversion.
            <br />
            <strong className='fw-bold'>Best for:</strong> Converting bounced website visitors, reinforcing brand messaging, and driving previous visitors back to the site.
            </p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2 fw-bold' >Social Media Ads</h6>
            </div>
            <p className='lead fs-6'><strong className='fw-bold'>Benefit:</strong>  Social media ads are displayed on social platforms (e.g., Facebook, Instagram, Twitter) and leverage detailed user data for precise targeting. They enable businesses to reach their target audience based on demographics, interests, and behaviors.
            <br />
            <strong className='fw-bold'>Best for:</strong> Building brand awareness, lead generation with specific user segments.
            </p>
        </li>
        <li>
            <div className='d-flex'>
            <i class="bi bi-check-circle-fill fs-4"></i>
            <h6 className='ms-3 mt-2 fw-bold' >App Install Ads</h6>
            </div>
            <p className='lead fs-6'><strong className='fw-bold'>Benefit:</strong>  App install ads aim to drive installations of mobile applications. They often appear on mobile devices within other apps or as sponsored content in app stores.
            <br />
            <strong className='fw-bold'>Best for:</strong> Mobile app developers looking to increase app downloads and user acquisition.
            Each type of PPC campaign offers unique advantages, and the effectiveness of a campaign depends on the advertiser's specific goals, target audience, and budget. Combining different PPC strategies can create a well-rounded digital advertising approach to achieve various marketing objectives.
            </p>
        </li>
        </ul>   
        </div>
    </div>
</div>
{/* ppc ads */}
<div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-8">
            <div className="">
               <p className='fw-bold fs-5'>What Are the Different Types of PPC Ads?</p>
               <p className='lead fs-6' style={{textAlign:"justify"}}>Now that you know what is paid search, the next step is to understand the different types of PPC marketing campaigns that can help you build your online presence and promote your services to the right audience. Our pay per click advertising agency works closely with your team to determine the appropriate PPC ads that you can use to fill your sales funnel.
               <br /><br />
               There are various types of pay per click ads available, depending on your goals.
               </p>
            </div>
        </div>
        <div className="col-md-4">
            <div className="">
                <img src={ads} className='img-fluid' alt="" />
            </div>
        </div>
    </div>
</div>


</>
)};

export default Ppc;
