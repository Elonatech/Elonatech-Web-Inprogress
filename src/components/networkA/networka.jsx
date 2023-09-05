import headerImage from './caption/networkServer.jpeg';
import networkServer from './caption/computer-network.webp';
import networkServer2 from './caption/q3.jpg';
import networkServer4 from './caption/q4.jpg';
import q1 from './caption/q1.webp';
const Networka = () => {
    return (
        <>
 {/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImage})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Mobile Device Repair</h2>
   <h5 class=" mt-4 text-white text-center">Excellence, Professionalism, Integrity & Convenient Service</h5>
   <p class=" mt-4 lead text-white text-center">We assess mobile phones functionality, install and update phone software, troubleshoot wiring problems,and replace damaged parts</p>
 </div>
      <div class="container-fluid  position-relative">
        <div class="row gy-4 mt-5">
          <div class="col-md-12">
             <div class="shadow py-4 rounded" style={{backgroundColor:"#34548c"}}>
             <div className="row justify-content-md-center">
              {/*  */}
              <div class="col-md-5">
              <div class="text-bg-light shadow py-4 rounded">
              <h4 className="text-center">Implementation</h4>
              <p class="my-3 text-center p-3">Due to the demands of today's growing economy and virtual IT environments, Organizations are beginning to rely on scalable and reliable IT infrastructure. Elonatech helps clients determine most effective technologies that will provide maximum productivity. Whether your business is looking to build a whole new network in an already existing area or to add on to your existing infrastructure, we will design it from conceptualization, with all of your needs in mind. <br /></p>
               </div>
               </div>
               {/*  */}
              <div class="col-md-5">
              <div class="text-bg-light shadow py-4 rounded">
              <h4 className="text-center">Administration</h4>
              <p class="my-3 text-center p-3">Network administration aims to ensure a reliable, secure network conducive to business operations. Network administration primarily consists of, but isn't limited to, network monitoring, network management, and maintaining network quality and security. <br />  Elonatech supports all the networks we implement and support existing ones. Any issues you have from desktops and laptops to servers, networking hardware and printers we will assess, investigate and proffer a solution </p>
              </div>
              </div>
              {/*  */}
              <div class="col-md-10 mt-3 mb-3">
              <div class="text-bg-light shadow py-4 rounded">
               <div className="row justify-content-md-center">
                <div className="col-md-5">
                 <div className="card">

                <div className="d-flex p-2">
                <i class="bi bi-circle-fill me-3" ></i>
                <p>Network Design, Installation, and Evaluation</p>  
                </div>
                {/*  */}
                <div className="d-flex p-2">
                <i class="bi bi-circle-fill me-3" ></i>
                <p>Execution and Administration of Backups</p>  
                </div>
                {/*  */}
                <div className="d-flex p-2">
                <i class="bi bi-circle-fill me-3" ></i>
                <p>Network Resource Authentication</p>  
                </div>
                {/*  */}
                <div className="d-flex p-2">
                <i class="bi bi-circle-fill me-3" ></i>
                <p>Network Security, including intrusion detection</p>  
                </div>
                {/*  */}
                <div className="d-flex p-2">
                <i class="bi bi-circle-fill me-3" ></i>
                <p>Network Hardware Configuration, e.g. routers, switches</p>  
                </div>
                {/*  */}
                <div className="d-flex p-2">
                <i class="bi bi-circle-fill me-3" ></i>
                <p>Network Upgrade and Maintenance</p>  
                </div>
                {/*  */}
                
                 </div>
                </div>
                <div className="col-md-5">
                   <img src={networkServer} className='img-fluid' alt=""/>
                </div>
               </div>
              </div>
              </div>
              {/*  */}
             </div>
             </div>
          </div>
        </div>
      </div>
    </div>


{/* Phone repair issues */}
<div className="container  mb-5 " style={{marginTop:"900px"}}>
     <div className="row justify-content-md-center">
      <div className="col-md-6">
        <div className="card">
        <img src={networkServer4} className='img-fluid' alt=""/>
          </div>
      </div>
      <div className="col-md-6">
        <div className="card" style={{backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${q1})`, backgroundPosition:"center"}}>
         <h5 className='text-center text-white mt-5'>WHY DO I NEED A NETWORK ADMINISTRATOR?</h5>
         <p className='pe-3 ps-3 text-white'>Every organization that uses more than one computer or software platform needs a network administrator to coordinate and connect
           all the different systems; Configure network hardware such as servers, routers, and switches; Upgrade, repair, and maintain computer networks; and 
           troubleshoot various network issues. Sharing resources and information among different computer systems within departments and accessing information 
           from a database is essential for fast and efficient running of a company’s business and day-to-day activities. At ELONATECH, we implement and
           design both complex and simple data/voice local area networks for all types of organizations/institutions.</p>
        </div>
      </div>
     </div>

     

</div>



    
        </>
    );
}

export default Networka;
