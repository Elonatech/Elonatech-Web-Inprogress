import seoHeader from './captions/pexels-photo-270637.webp';
import seoImg1 from './captions/8597358.jpg';
import seoImg2 from './captions/4.webp';

const Seo = () => {
    return (
 <>
{/* Header */}
<div class="container-fluid bg-secondary  py-5 " style={{height:"500px" , marginBottom:"120px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${seoHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 "> 
   <h2 class=" mt-5 text-white text-center">Seo Marketing</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Internet Speed and Reliability</h5>
   <p class="lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
</div>

{/* body */}

<div class="section-top-border" style={{marginBottom:"120px"}} >
<div className=''></div>
<div className="container ">
<div class="row">
	<div class="col-md-6">
		<h3>How Seo works</h3>
	<p>Recently, the US Federal government banned online casinos from operating in America by making  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
		Quos corporis explicabo esse consequuntur dolorem praesentium magnam eligendi natus unde nulla. Perspiciatis officiis minus rem neque, adipisci quasi laborum nisi quam!</p>
	</div>
	<div class="col-md-6">
	<img src={seoImg1} alt="" class="img-fluid"/>
	</div>
</div>
</div>
</div>


{/* image 2  */}

<div class="section-top-border mt-5">
<div className="container ">
<div class="row">

  <div class="col-md-6">
	<img src={seoImg2} alt="" class="img-fluid"/>
	</div>
	<div class="col-md-6">
		<h3>How Seo works</h3>
	<p>Recently, the US Federal government banned online casinos from operating in America by making  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
		Quos corporis explicabo esse consequuntur dolorem praesentium magnam eligendi natus unde nulla. Perspiciatis officiis minus rem neque, adipisci quasi laborum nisi quam!</p>
	</div>
</div>
</div>
</div>	 






</>
    );
}

export default Seo;
