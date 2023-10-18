import blog from './captions/56786414-content-marketing-text-as-memo-on-notebook.jpg'

const BlogDetails = () => {
    return (
        <>
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" ,marginBottom:"45px", backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Blog Details</h2>
   <h5 class=" mt-4 text-white text-center">Have what you need to run your business with maximum efficiency and reliability</h5>
   <p class="lead text-white text-center">Properly used, a computer can help you become more organized, work more efficiently, and accomplish more tasks.</p>
 </div>
</div>


<div className="container mb-5">
    <div className="row">
   <div className="col-md-9">
    <div className="container">
        <div className="row">
    {/*  */}
        <div className="col-md-12 mt-4">
            <h3 className='fw-bold'>Office System Setup</h3>
            <div className="shadow mt-4 mb-5">
                <div className="row">
                <img src={blog} className='img-fluid' style={{height:"20rem"}}  alt="" />
                </div>
          </div>
          <div className="contenx">
          <p>Elonatech seeks to fulfill the needs of clients in the supply of Printers, Scanners, and Copiers, our All-in-One Copiers & Scanners 
            equip you with a printer that can handle any of life’s printing challenges. Enjoy Low Prices and Free Shipping when you order.
            </p>
           <p>Elonatech offers the best all-in-one (AIO) printers money can buy. We have the best all-in-one printers for a whole range of budgets. 
            From home use to small businesses, and to large businesses, we’ve got the best all-in-one printer for your needs.
            </p>
          </div>

          <h5>Below are some popular brands of the all-in-one printers we offer</h5>

          <ul className='list-unstyled'>
            <li>Canon Pixma TR8550 printer</li>
            <li>Ricoh Digtal Multifunctioning Device IMC 3000</li>
            <li>Ricoh IMC 2000</li>
            <li>Epson WorkForce Pro WF-4630 printer</li>
            <li>Brother MFC-J5330DW printer</li>
            <li>HP LaserJet Pro MFP M227fdw printer</li>
            <li>HP Envy 5055 (5010 in the UK) printer</li>
            <li>Lexmark MB2236adw printer</li>
            <li>Brother MFC-J5945DW printer</li>
            <li>Canon i-Sensys MF735Cx printer</li>
            <li>Xerox VersaLink C405 printer</li>
             <li>Canon Maxify MB2750 printer</li>
            </ul>
             </div>
            {/*  */}
        </div>
    </div>
    {/*  */}
  <div className="container bg-light ">

   <h3 className='fw-bold mb-3 mt-5 pt-4' style={{color:"#0b159d"}}>Related Posts</h3>
    <div className="row">
        <div className=" col col-md-3">
            <div className="">
                <h6 style={{color:"#0b159d"}}>Reasons Why You Need Digital Marketing for Your Business</h6>
                <p className='text-danger lead fs-6'>August 26, 2021</p>
            </div>
            </div>
        <div className="col-md-3">
        <div className="">
                <h6 style={{color:"#0b159d"}}>Professional, Creative & Responsive Websites</h6>
                <p className='text-danger lead fs-6'>August 26, 2021</p>
            </div>
            </div>
        <div className="col-md-3">
        <div className="">
                <h6 style={{color:"#0b159d"}}>Office Equipment & Consumables</h6>
                <p className='text-danger lead fs-6'>August 26, 2021</p>
            </div>
        </div>
        <div className="col-md-3">
        <div className="">
                <h6 style={{color:"#0b159d"}}>Printer Sales and Supply</h6>
                <p className='text-danger lead fs-6'>August 26, 2021</p>
            </div>  
        </div>
    </div>
   </div>
   {/*  */}
   </div>
   
<div className="col-md-3">
    <div className="mt-4">
        <h5 style={{color:"#34548c"}}>Categories</h5>
        <ul className='list-unstyled mt-2'>
            <li>News</li>
            <li>Trends</li>
        </ul>
        <h5 className='mt-2' style={{color:"#34548c"}}>Be the first to know</h5>
        <p>Enter your email address below to subscribe to our newsletter</p>
        <form>
        <div class="mb-2">
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email address'  aria-describedby="emailHelp"/>
       </div>
       <div class="d-grid gap-2">
       <button class="btn btn-danger" type="button">Subscribe</button>
    </div>
  <div class="mb-3 form-check mt-2">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label lead fs-6 " for="exampleCheck1">I accept the <a href="">Privacy Policy</a></label>
  </div>
</form>
</div>
</div>
</div>

</div>

        </>
    );
}

export default BlogDetails;
