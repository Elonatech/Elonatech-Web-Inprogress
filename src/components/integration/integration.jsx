import systemIntergration from './caption/system-integration.jpg'
import infrastructure from './caption/infrastructure2.png'
import infast1 from './caption/infrastructure-card3.jpg'
import infast2 from './caption/infrastructure-card.jpg'
import infast3 from './caption/infrastructure-card2.jpg'
import infast4 from './caption/infrastructure4.png'







const Integration = () => {
    return (
   <>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${systemIntergration})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Infrastructure & System Integration</h2>
   <h5 class=" mt-4 text-white text-center">Building intelligence system to better your business' efficiency and profit</h5>
   <p class=" mt-4 lead text-white text-center">Integrating existing, and often disparate systems in a way that focuses on increasing values</p>
 </div>
 </div>   

 {/* Information technology */}
<div className="container mb-5 ">
    <div className="row">
        <div className="col-md-6">
            <div className="card mb-3" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
              <img src={infrastructure} className='img-fluid mt-5' alt="" />
            </div>
        </div>
        <div className="col-md-6">
            <div className="col">
                <div className="card p-5" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
                    <p className='text-center mt-3'>Information technology (IT) Infrastructure is built upon both physical and virtual components. These components support the infrastructure’s operations, storage, processing of data, and data analysis.
                       Infrastructure can be centralized in a data center or spread across multiple data centers. These decentralized data centers can be controlled by the organization (owner) or by a third-party, such as a cloud provider or a colocation facility.</p>
                </div>
            </div>
            <div className="col">
                <div className="card mt-2 p-5" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
                    <p  className='text-center mt-3'>System Integration is the process of integrating all the physical and virtual components of an organization’s system. It therefore includes the process of linking together different computing systems and software applications physically or functionally, to act as a coordinated whole.
                The physical components consist of the various machine systems, computer hardware, inventory, etc. The virtual components consist of data stored in databases, software and applications.</p>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Breakdown */}
<h2 className='text-center mb-5'>Breakdown Of An IT Infrastructure</h2>
    <div></div>
<div className="container-fluid" style={{backgroundColor:"#34548c"}}>
<div class="container mb-5">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  <div class="col-md-3">
    <div class="card shadow-sm border-0 rounded mb-3">
        <img src={infast1} className='' style={{width:"100%" , height:"225px"}} alt="" />
      <div class="card-body">
       <h4 className='text-center'>FACILITIES</h4>
        <div className="text-center pb-0  ">
        <p className='btn btn-light '><h5>LEARN MORE</h5></p>
     </div>
      </div>
    </div>
    </div>
    {/*  */}
  <div class="col-md-3">
    <div class="card shadow-sm border-0 rounded ">
        <img src={infast2} className='' style={{width:"100%" , height:"225px"}} alt="" />
      <div class="card-body">
       <h4 className='text-center'>FACILITIES</h4>
        <div className="text-center pb-0  ">
        <p className='btn btn-light '><h5>LEARN MORE</h5></p>
     </div>
      </div>
    </div>
    </div>
 
    {/*  */}
  <div class="col-md-3">
    <div class="card shadow-sm border-0 rounded">
        <img src={infast3} className='' style={{width:"100%" , height:"225px"}} alt="" />
      <div class="card-body">
       <h4 className='text-center'>FACILITIES</h4>
        <div className="text-center pb-0  ">
        <p className='btn btn-light '><h5>LEARN MORE</h5></p>
     </div>
      </div>
    </div>
    </div>
    {/*  */}
  <div class="col-md-3">
    <div class="card shadow-sm border-0">
        <img src={infast4} className='' style={{width:"100%" , height:"225px"}} alt="" />
      <div class="card-body">
       <h4 className='text-center'>FACILITIES</h4>
        <div className="text-center pb-0  ">
        <p className='btn btn-light '><h5>LEARN MORE</h5></p>
     </div>
      </div>
    </div>
    </div>
 
   
 
    {/*  */}
    </div>
</div>
</div>

{/* System Integrator */}
<div className="container-fluid">
    <div className="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <div className="card">hhf</div>
            </div>
            <div class="col">
                <div className="card">hfr</div>
            </div>
        </div>
    </div>
</div>




   </>
    );
}

export default Integration;
