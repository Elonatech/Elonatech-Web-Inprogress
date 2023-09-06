import serverHeader from './caption/server-header.jpg';
import server2 from './caption/server2.jpg';
import serverAdmin from './caption/serverAdmin1.jpg';
import serverClip from './caption/server-clip12.png';
import server from './caption/server-clip.png';
import shutdown from './caption/server-shutdown.png'


import banner3 from  './caption/banner3.png'
import banner2 from './caption/banner2.png'

const Server = () => {
    return (
        <>

{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${serverHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Mobile Device Repair</h2>
   <h5 class=" mt-4 text-white text-center">Excellence, Professionalism, Integrity & Convenient Service</h5>
   <p class=" mt-4 lead text-white text-center">We assess mobile phones functionality, install and update phone software, troubleshoot wiring problems,and replace damaged parts</p>
 </div>
 </div>

{/* Key Objectives  */}
<main class="container mt-5">
  <div class="p-4 p-md-5 mb-4 rounded shadow" style={{backgroundColor:"#34548c"}}>
    <div className="row">
    <div class="col-md-7">
        <img src={server2}  className='img-fluid' style={{width:"39rem"}} alt="" />
    </div>
    <div class="col-md-5 text-white">
    <h4 className='text-center pt-4' >Key Objectives of Server Administration</h4>
         <ul className='list-unstyled ps-3'>
         <li className='d-flex' ><i class="bi bi-hdd-stack fs-3 me-3"></i> <h6 className='mt-2'>Minimize server slowdowns and downtime while maximizing reliability.</h6></li>
         <li className='d-flex' ><i class="bi bi-hdd-stack fs-3 me-3"></i> <h6 className='mt-2'>Secure and protect server environments.</h6></li>
         <li className='d-flex' ><i class="bi bi-hdd-stack fs-3 me-3"></i> <h6 className='mt-2'>Scale servers and related operations to meet the needs of the organization over time.</h6></li>
        </ul>
    </div>     
 </div>
  </div>
</main>

{/* Server Admin */}
<div className="container rounded text-bg-light">
    <div className="row">
    <div className="col-md-6 p-5">
            <img src={serverAdmin} className='img-fluid rounded' alt="" />
         </div>
         <div className="col-md-6 p-4">
            <h5 className='text-center'>Why You Need a Server Administrator</h5>
            <div className="d-flex ">
                <i class="bi bi-wifi fs-2 me-3" ></i>
                <p>A Server Administrator is responsible for the computer servers of an organization. This individual ensures on a daily basis that they are running efficiently by performing upgrading and maintenance tasks on hardware and software, resolving technical problems, overseeing their activity levels, ensuring server security, and developing new system structures when necessary.</p>  
            </div>
            <div className="d-flex">
                <i class="bi bi-wifi fs-2 me-3" ></i>
                <p>Also known as System Administrators, they manage both servers and networks to ensure their smooth functioning. They also keep track of data entering or exiting the organization to secure the networks. Because of the nature of this job, they need to be prepared to report to work round-the-clock.</p>  
           </div>
            <div className="d-flex ">
                <i class="bi bi-wifi fs-2 me-3" ></i>
                <p>Administrators have excellent communication (written and oral) skills. They should be able to think analytically and be adept at problem-solving.</p>  
           </div>
            <div className="d-flex">
                <i class="bi bi-wifi fs-2 me-3" ></i>
                <p>Administrators are physically fit, as their job entails working outdoors, working at heights, lifting and relocating equipment, etc. They are ready to work flexible hours.</p>  
           </div>
         </div>
    </div>
</div>

{/* window server */}
 <div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${serverClip})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">

 </div>
 </div> 

{/* <div className="container-fluid">
        <div className="col">
    <img src={serverClip}  style={{width:"110rem", height:"31rem"}}  alt="" />
        </div>
</div> */}


{/* overall impact */}
<main class="container mt-5">
  <div class="p-4 p-md-5 mb-4 rounded shadow" style={{backgroundColor:"#34548c"}}>
    <div className="row">
    <div class="col-md-5">
        <img src={server}  className='img-fluid' style={{width:"39rem"}} alt="" />
    </div>
    <div class="col-md-7 text-white">
        <div className="card">
        <p className='p-4 pb-5 mt-3'> The overall impact of server management on IT is quite comprehensive, making its scope so broad that it covers nearly everything.
            Our Server Administration includes all of the monitoring and maintenance required for servers to operate reliably and at optimal performance levels. Server administration also involves the management of hardware, software, security, and backups all in service of keeping the IT environment operational and efficient.</p>
        </div>
    </div>     
 </div>
  </div>
</main>


{/* why admini elonatech */}

 <div className="container mb-5">
    <div className="row">
        <div className="col-md-3">
        <div className="card mt-2" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
             <i class="bi bi-server text-center fs-5"></i>
           <p className='text-center p-3'>While Server administrators work primarily with servers, our Server administrators also manage various other types of computing equipment that makes up part of the network.
             This includes Client PCs and Workstations, mobile devices and network appliances like routers and switches etc.
          </p>
        </div>
        </div>
        <div className="col-md-3">
        <div className="card mt-2" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
        <i class="bi bi-server text-center fs-5"></i>
        <p className='text-center p-3'>In addition, our Server admins install, configure, and maintain various types of hardware and software, <br />
         which often involves creating user accounts, carrying out backup and recovery functions, and monitoring the performance of servers at all times.</p>       
        </div>
        </div>
        <div className="col-md-3">
        <div className="card mt-2 " style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
        <i class="bi bi-server text-center fs-5"></i>
        <p className='text-center p-2 pt-4'>They are primarily responsible for configuring, managing, and implementing operating systems. Our Administrators are in charge of backups and retrieval of resources. They administer and maintain system accounts through Active Directory and work with the IT team to design and deploy secure server processes.</p>       
        </div>
        </div>
        <div className="col-md-3">
        <div className="card mt-2" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
        <i class="bi bi-server text-center fs-5"></i>
        <p className='text-center p-3'>In addition, our Server admins install, configure, and maintain various types of hardware and software, <br />
         which often involves creating user accounts, carrying out backup and recovery functions, and monitoring the performance of servers at all times.</p>       
        </div>
        </div>
        <div className="col-md-3">
        <div className="card mt-2" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
        <i class="bi bi-server text-center fs-5"></i>
        <p className='text-center p-3'>In addition, our Server admins install, configure, and maintain various types of hardware and software, <br />
         which often involves creating user accounts, carrying out backup and recovery functions, and monitoring the performance of servers at all times.</p>       
        </div>
        </div>
        <div className="col-md-3">
        <div className="card mt-2" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
        <i class="bi bi-server text-center fs-5"></i>
        <p className='text-center p-3'>In addition, our Server admins install, configure, and maintain various types of hardware and software, <br />
         which often involves creating user accounts, carrying out backup and recovery functions, and monitoring the performance of servers at all times.</p>       
        </div>
        </div>
        <div className="col-md-3">
        <div className="card mt-2" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
        <i class="bi bi-server text-center fs-5"></i>
        <p className='text-center p-3'>In addition, our Server admins install, configure, and maintain various types of hardware and software, <br />
         which often involves creating user accounts, carrying out backup and recovery functions, and monitoring the performance of servers at all times.</p>       
        </div>
        </div>
        <div className="col-md-3">
        <div className="card mt-2" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
        <i class="bi bi-server text-center fs-5"></i>
        <p className='text-center p-3'>In addition, our Server admins install, configure, and maintain various types of hardware and software, <br />
         which often involves creating user accounts, carrying out backup and recovery functions, and monitoring the performance of servers at all times.</p>       
        </div>
        </div>

       
      
    </div>
</div> 

{/* contact us */}
<section class="mt-5">
			<div class="container-fluid mt-5"style={{backgroundImage:`url(${banner2})` , backgroundPosition:""}} >
				<div class="row justify-content-lg-center">
					<div class="col-md-7 d-flex align-items-center">
						<div class="w-100 py-4">
							<h1 class="text-danger mb-3">Get Ahead of your Competitors</h1>

							<p  class="text-white mb-5">If you are ready to become the best in your industry and also stand out from a sea <br /> of hungry competitors,  then Elonatech is the partner you need. Get in touch with us below, <br /> let's take your busines to the next level.</p>
            <h3 className='text-white'>Ready to Start your Project? <a class="btn btn-danger mt-2"><h5>Request a Quote</h5></a></h3>    
						</div>
					</div>
					<div class="col-md-4 col-lg-4 d-flex align-items-end">
           <img src={banner3} alt="" className='position-absolute  end-0' style={{height:"17.4rem", boxShadow:"none"}} />
					</div>
				</div>
			</div>
</section> 

</>
    );
}

export default Server;
