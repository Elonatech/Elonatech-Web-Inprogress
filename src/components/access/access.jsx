import accessHeader from './captions/Access-Control-5.jpg'
import accessImg from './captions/depositphotos_354792732-stock-photo-business-technology-internet-network-concept.jpg';
import cctvImg from './captions/access-control-system.jpg'
import epabx from './captions/Access-Control.jpg'

const Access = () => {
    return (
    <>

{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${accessHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Access Control</h2>
   <h5 class=" mt-4 text-white text-center">Controls Access Physically and Virtually Except with Authentication Credentials</h5>
   <p class="lead text-white text-center">An essential element of security that determines who is allowed to access certain data, apps, and resources and in what circumstances</p>
 </div>
 </div>

{/* body */}
<div className="container">
    <div class="row">
    <div class="col-md-6 mb-5">
          <h4 class="mb-0">Access Control &  Surveillance Solution (CCTV)</h4>
          <div className="underline-w mt-2" style={{  width:"80px", height:"3px" , background:"#f00"}}></div>
          <img src={accessImg} className='img-fluid mt-3 rounded' alt="" />
    </div>
    <div class="col-md-6">
      <div className=''>
      <p className='pt-5'>
      <span className='fw-bold'>Access control</span> is an essential element of security that determines who is allowed to access certain data, apps, and resources—and in what circumstances. In the same way that keys and preapproved guest lists protect physical spaces, access control policies protect digital spaces. In other words, they let the right people in and keep the wrong people out.
      <br /><br />
      Access Control is a method of security that controls access both physically and virtually unless authentication credentials are provided.
      <br /><br />
      ‘Physical’ Access Control is a means of controlling who and when a person can enter an area, location or building using a secure authentication method such as an ID card or biometric identification, for example, as authorization.
      </p>
      </div>
    </div>
  </div>
</div>

{/* WHY INVEST IN CCTV */}
<div className="container mb-5">
  <h4>What are the benefits of Access Control Systems?</h4>
  <div className="underline-w" style={{  width:"50px", height:"3px", background:"#f00"}}></div>
  <div className="row">
    <div className="col-md-6">
      <p className='pt-5'>Access Control can help protect employees and contents and control & monitor who accesses the premises. The main benefits of access control systems are</p>
            <div className="mt-">
              <ul className='list-unstyled'>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Easier access for employees.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>No need for traditional keys.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Saves money.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Keep track of who enters/exits the building.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Protection against unwanted visitors.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Employee freedom.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Protection against data breaches.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Safe environment.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Reduced risk of theft</p> 
                </li>

              </ul>
            </div>
    </div>
    <div className="col-md-6">
      <img src={cctvImg}  className='img-fluid' alt="" />
    </div>
  </div>
</div>

{/* PBX */}
<div className="container mt-4 mb-5">
     <h5 className='fw-bold'>What is an Access Control System?</h5>
     <div className="underline-w mt-1" style={{  width:"40px", height:"3px" , background:"#f00"}}></div>
  <div className="row">
    <div className="col-md-5 ">
      <div className="mt-4">
        <img src={epabx} className='img-fluid'  alt="" />
      </div>
    </div>
    <div className="col-md-7 ">
      <div className="mt-4">
        <p className=''>
        When referring to a ‘physical’ Access Control system this typically includes locked gates, doors or barriers which can be opened using 
        identity authentication methods such RFID access cards, pin codes, face recognition, finger prints or smartphones to allow entry to a building or certain area. 
        This technology can also provide data to track how a building or site is being used, such as frequency and time-usage trends.
        </p>
      </div>
    </div>
  </div>
</div>





{/* End Services  */}
    </>
    );
}

export default Access;
