import cctvHeader from './caption/web-design.jpg'

const Cctv = () => {
    return (
    <>
 {/* header */}
 <div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cctvHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Structured Cabling</h2>
   <h5 class=" mt-4 text-white text-center">Any System is Only As Reliable As Its Weakest Link.</h5>
   <p class=" mt-4 lead text-white text-center">The standardized infrastructure of communications cabling that supports network components</p>
 </div>
 </div>  

 <div class="vertical carousel slide" data-ride="carousel">
     ...
    </div>


   </>
    );
}

export default Cctv;
