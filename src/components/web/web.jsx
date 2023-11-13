import webHeader from './captions/photo-1516116216624-53e697fedbea.avif';
import mockup from './captions/mockup.png'
import deveops from './captions/devops.jpg'
import bolt from './captions/bolt.png'
import './web.css'

const Web = () => {
    return (
 <>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${webHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div className="row py-5 mt-5">
	<div className="col-md-6">
	<div className="container">
		<div className="row">
			<div className="col-md-2"></div>
			<div className="col-md-9 mt-4">
		    <div className="mx-auto" >
		    <h2 class=" mt-5 text-white">Web Design & Development</h2>
            <h4 class=" mt-4 text-white">Lets Build an Amazing Website for your Brand</h4>
            <p class="lead text-white ">Excellence, Professionalism, Integrity & Convenient Service</p>
			<button className='btn btn-primary'>CONTACT US</button>
		</div>
		</div>
		</div>
	</div>
	</div>
	<div className="col-md-6">
		<div className="text-center">
		<img src={mockup} className='img-fluid mb-' style={{height:"20rem" , width:"35rem"}}  alt="" />
		</div>
	</div>
 </div>
 </div>

{/* need a website */}
<div className="container mb-5">
	<div className="row">
		<div className="col-md-6">
			<div className="">
             <h4>Need A Website For Your Brand?</h4>
		     <div className="underline-w mb-2" style={{  width:"40px", height:"3px" , background:"#fcc"}}></div>
			 <p>
             Well, you have come to the right place, At Elonatech Nigeria Limited, We are One Of Nigeria's
			  leading Website Design & Development Company Who's Core Values are Excellence,
			  Professionalism, Integrity & Convenient Service.
			  <br /><br />
			  We Design & Develop all kinds Of Websites and Web applications with the most suitable platforms at a friendly budget. 
			  We offer premium web services such as Business Software Development, Mobile App Development, Web Based Apps etc.
			  <br /><br />
			  We ensure that your needs are understood and implemented correctly. In fact, we are dedicated to the creation of a 
			  site that helps you become a success. Our specialty lies in providing comprehensive and custom web development services 
			  that provide you with a functional and complete solution. The sites we develop are highly scalable with a great degree of usability. 
			  As a website development company, we also ensure the site responds fast and is SEO friendly with an excellent User Interface (UI) and User Experience (UX). 
			  You also get to enjoy complete control over your site. With our website development, you do not have to
			  adjust your specifications to the capabilities of a given platform or change your design visions to fit a template. 
			  We deliver the work precisely to your requirements.
			   <br /><br />
			   We won't just build you an ordinary website but also develop a marketing strategy that can utilize 
			   the website and your marketing channels to generate constant leads, sales, customers, and clients.
			 </p>
			</div>
		</div>
		<div className="col-md-6">
			<img src={deveops} className='img-fluid rounded' alt="" />
		</div>
	</div>
</div>

{/* benefits*/}
<div className="container-fluid " style={{background:"linear-gradient(90deg, #021048 0%, #1E38A3 100%)"}} >

<div className="container pt-5 pb-5">
	<div className="row">
		{/* col-2 */}
		<div className="col-md-4 pb-3"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
            <img src={bolt} className='img-fluid ' style={{width:"40px", borderRadius:"50%" , background:"white"}}  alt="" />
			<h5 className='text-white pt-2'>Super Fast Loading In Less Than 3 Seconds</h5>
			<p className='text-white'>Your website will be hosted on the world's fastest LiteSpeed Web Server to ensure a smooth user experience</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		
		{/* col-2 */}
		<div className="col-md-4 pb-3"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
            <img src={bolt} className='img-fluid ' style={{width:"40px", borderRadius:"50%" , background:"white"}}  alt="" />
			<h5 className='text-white pt-2'>Super Fast Loading In Less Than 3 Seconds</h5>
			<p className='text-white'>Your website will be hosted on the world's fastest LiteSpeed Web Server to ensure a smooth user experience</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* col-2 */}
		<div className="col-md-4 pb-3"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
            <img src={bolt} className='img-fluid ' style={{width:"40px", borderRadius:"50%" , background:"white"}}  alt="" />
			<h5 className='text-white pt-2'>Super Fast Loading In Less Than 3 Seconds</h5>
			<p className='text-white'>Your website will be hosted on the world's fastest LiteSpeed Web Server to ensure a smooth user experience</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* col-2 */}
		<div className="col-md-4 pb-3"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
            <img src={bolt} className='img-fluid ' style={{width:"40px", borderRadius:"50%" , background:"white"}}  alt="" />
			<h5 className='text-white pt-2'>Super Fast Loading In Less Than 3 Seconds</h5>
			<p className='text-white'>Your website will be hosted on the world's fastest LiteSpeed Web Server to ensure a smooth user experience</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* col-2 */}
		<div className="col-md-4 pb-3"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
            <img src={bolt} className='img-fluid ' style={{width:"40px", borderRadius:"50%" , background:"white"}}  alt="" />
			<h5 className='text-white pt-2'>Super Fast Loading In Less Than 3 Seconds</h5>
			<p className='text-white'>Your website will be hosted on the world's fastest LiteSpeed Web Server to ensure a smooth user experience</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* col-2 */}
		<div className="col-md-4 pb-3"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
            <img src={bolt} className='img-fluid ' style={{width:"40px", borderRadius:"50%" , background:"white"}}  alt="" />
			<h5 className='text-white pt-2'>Super Fast Loading In Less Than 3 Seconds</h5>
			<p className='text-white'>Your website will be hosted on the world's fastest LiteSpeed Web Server to ensure a smooth user experience</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* col-2 */}
		<div className="col-md-4 pb-3"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
            <img src={bolt} className='img-fluid ' style={{width:"40px", borderRadius:"50%" , background:"white"}}  alt="" />
			<h5 className='text-white pt-2'>Super Fast Loading In Less Than 3 Seconds</h5>
			<p className='text-white'>Your website will be hosted on the world's fastest LiteSpeed Web Server to ensure a smooth user experience</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* col-2 */}
		<div className="col-md-4 pb-3"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
            <img src={bolt} className='img-fluid ' style={{width:"40px", borderRadius:"50%" , background:"white"}}  alt="" />
			<h5 className='text-white pt-2'>Super Fast Loading In Less Than 3 Seconds</h5>
			<p className='text-white'>Your website will be hosted on the world's fastest LiteSpeed Web Server to ensure a smooth user experience</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* col-2 */}
		<div className="col-md-4 pb-3"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
            <img src={bolt} className='img-fluid ' style={{width:"40px", borderRadius:"50%" , background:"white"}}  alt="" />
			<h5 className='text-white pt-2'>Super Fast Loading In Less Than 3 Seconds</h5>
			<p className='text-white'>Your website will be hosted on the world's fastest LiteSpeed Web Server to ensure a smooth user experience</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>

	</div>
</div>






</div>


</>
    );
}

export default Web;
