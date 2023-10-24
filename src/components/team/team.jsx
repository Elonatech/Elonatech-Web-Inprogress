import team1 from './image/team-1.jpg';
import team2 from './image/team-2.jpg';
import team3 from './image/team-3.jpg';
import team4 from './image/team-4.jpg';

import './css/team.css';

const Team = () => {
    return (
<>

{/* Header */}
<div class="container-fluid bg-dark py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   {/* <h2 class=" mt-5 text-white text-center wow zoomIn" data-wow-delay="0.2s" > We apply strategic and result-driven approved</h2>
   <h5 class=" mt-4 text-white text-center wow fadeInRight" data-wow-delay="0.2s" >Have what you need to run your business with maximum efficiency and reliability</h5>
   <p class="lead text-white text-center wow fadeInLeft" data-wow-delay="0.2s"  >Properly used, a computer can help you become more organized, work more efficiently, and accomplish more tasks.</p> */}
 </div>
</div>

{/* attribute */}
<div className="container mt-5">
    <p className='fs-1 fw-bolder' style={{color:"#0a8266"}}>Excellence at Work for Over a Decade</p>
    <div className="row">
        <div className="col-md-12">
            <p className='lead fs-6' style={{textAlign:"justify"}}>
            Elonatech Nigeria Limited has been in operation for several years as a Computer and 
            Allied products dealer/supplier until much recently in April 2010, 
            where it commenced operations as a One-stop IT Solution Outfit.
            <br />
            <br />
            Our Company’s logistical services are designed for the top-of-the-market corporate clientele.
            We have continued to expand our range of services around the client: his problems, his needs, and his desires; 
            we continue to innovate and sustain existing services while creating and maintaining new services to meet the needs of the 
            increasingly sophisticated corporate clientele. and homes, as well as providing online consultation to client’s most pressing problems.
            </p>
        </div>
    </div>
</div>

{/* attribute  2*/}
<div className="container bg-light mt-5">
    <div className="row">
        <div className="col-6 col-md-3 mb-3 mt-4">
            <div className="text-center">
                <div className='brci mb-3'>
                    <h1 className=''>F</h1>
                    </div>
                <h5 className='fw-bolder'>FOCUS</h5>
            </div>
            </div>
        <div className="col-6 col-md-3 mt-4">
            <div className="text-center">
            <div className='brci mb-3'>
                    <h1 className=''>A</h1>
                    </div>
                <h5 className='fw-bolder'>ACCOUNTABILITY</h5>
            </div>
            </div>
        <div className="col-6 col-md-3 mt-4">
            <div className="text-center">
            <div className='brci mb-3'>
                    <h1 className=''>C</h1>
                    </div>
                <h5 className='fw-bolder'>COMMITMENT</h5>
            </div>
            </div>
        <div className="col-6 col-md-3 mt-4">
            <div className="text-center">
            <div className='brci mb-3'>
                    <h1 className=''>E</h1>
                    </div>
                <h5 className='fw-bolder'>EXECUTION</h5>
            </div>
            </div>
    </div>
</div>



{/* team members */}
<div class="container-fluid mb-5 mb-5 text-center">
                 <div class="text-center mx-auto mt-5 wow fadeInUp" data-wow-delay="0.1s" style={{minWidth:"20px"}}>
                  <p className='fw-bolder fs-1' style={{color:"#34548c"}}>Meet the <span className='fst-italic  text-danger'>𝑡𝑒𝑎𝑚</span></p>
                   <p className='fs-4'> <span className='text-danger fw-bold'>T</span>ogether <span className='text-danger fw-bold'>E</span>veryone <span className='text-danger fw-bold'>A</span>chieves <span className='text-danger fw-bold'>M</span>ore</p>
                </div>
      <div class="row justify-content-center">
        <div class="kontribusi col-sm-2 col-sm-offset-1">
         <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team1} alt=""/>
                            <h5>Alex Robin</h5>
                            <span class="text-primary">Founder & CEO</span>
                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                            </ul>
        </div>
        </div>
        <div class="kontribusi col-sm-2">
        <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team2} alt=""/>
                            <h5>Alex Robin</h5>
                            <span class="text-primary">Founder & CEO</span>
                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                            </ul>
        </div>
        </div>
        <div class="kontribusi col-sm-2">
             <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team3} alt=""/>
                            <h5>Alex Robin</h5>
                            <span class="text-primary">Founder & CEO</span>
                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                            </ul>
        </div>
        </div>
        <div class="kontribusi col-sm-2">
             <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team4} alt=""/>
                            <h5>Alex Robin</h5>
                            <span class="text-primary">Founder & CEO</span>
                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                            </ul>
        </div>
        </div>
        <div class="kontribusi col-sm-2">
             <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team2} alt=""/>
                            <h5>Alex Robin</h5>
                            <span class="text-primary">Founder & CEO</span>
                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                            </ul>                            

        </div>
        </div>
      </div>
</div>





            
</>
    );
}

export default Team;
