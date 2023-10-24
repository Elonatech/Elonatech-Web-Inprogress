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
    <p className='fs-1 fw-bolder' style={{color:"#0a8266"}}>Excellence At Work For Over 20 Years</p>
    <div className="row">
        <div className="col-md-12">
            <p style={{textAlign:"justify"}}>

            V-Tech is a HUBZone certified, Veteran and Minority-Owned Information Technology and Professional Services company. 
            Incorporated in the District of Columbia in 2000, since day one V-Tech has honored its 
            commitment to give back to our local community by creating new jobs and hiring local workers, donating goods and services to
             help those in need, and giving our employees time off for volunteer activities. V-Tech continues to focus on creating a 
             collaborative environment for the personal and professional development of our team members, while also driving change and empowerment in the communities where we serve. 
            Most recently, V-Tech received the 2020 HUBZone Small Business of the Year award for creating new jobs in underserved areas of Washington, DC and Montgomery, AL.

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





<div class="container-fluid text-center">
      <h3>Ayo Mulai Berkontribusi</h3><br/>
      <div class="row justify-content-center">
        <div class="kontribusi col-sm-2 col-sm-offset-1">
         <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team1} alt=""/>
                            <h5>Alex Robin</h5>
                            <span class="text-primary">Founder & CEO</span>

                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
        </div>
        </div>
        <div class="kontribusi col-sm-2">
          {/* <div class="card card-block text-xs-center">
            <h4 class="card-title"><a href="#" class="btn btn-danger btn-block">Galang Dana</a></h4>
            <p class="card-text">Untuk membuat kampanye penggalangan dana</p>
          </div> */}


<div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team1} alt=""/>
                            <h5>Alex Robin</h5>
                            <span class="text-primary">Founder & CEO</span>

                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
        </div>
        </div>
        <div class="kontribusi col-sm-2">
          {/* <div class="card card-block text-xs-center">
            <h4 class="card-title"><a href="#" class="btn btn-danger btn-block">Jadi Relawan</a></h4>
            <p class="card-text">Untuk bantu terlibat dalam aksi kemanusiaan di bidang kesehatan</p>
          </div> */}
             <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team1} alt=""/>
                            <h5>Alex Robin</h5>
                            <span class="text-primary">Founder & CEO</span>

                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
        </div>
        </div>
        <div class="kontribusi col-sm-2">
          {/* <div class="card card-block text-xs-center">
            <h4 class="card-title"><a href="#" class="btn btn-danger btn-block">Butuh Relawan</a></h4>
            <p class="card-text">Untuk dilibatkan dalam aksi kemanusiaan di bidang kesehatan</p>
          </div> */}
             <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team1} alt=""/>
                            <h5>Alex Robin</h5>
                            <span class="text-primary">Founder & CEO</span>

                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
        </div>
        </div>
        <div class="kontribusi col-sm-2">
          {/* <div class="card card-block text-xs-center" >
            <h4 class="card-title"><a href="#" class="btn btn-danger btn-block">Logistik</a></h4>
            <p class="card-text">Untuk disalurkan kepada pihak yang membutuhkan</p>
          </div> */}
             <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team1} alt=""/>
                            <h5>Alex Robin</h5>
                            <span class="text-primary">Founder & CEO</span>

                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
        </div>
        </div>
      </div>
    </div>



{/* team members */}
<div class="container-xxl py-5 mt-5 mb-5">
            <div class="container">
                <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{minWidth:"20px"}}>
                  <p className='fw-bolder fs-1' style={{color:"#34548c"}}>Meet the <span className='fst-italic  text-danger'>𝑡𝑒𝑎𝑚</span></p>
                   <p className='fs-4'> <span className='text-danger fw-bold'>T</span>ogether <span className='text-danger fw-bold'>E</span>veryone <span className='text-danger fw-bold'>A</span>chieves <span className='text-danger fw-bold'>M</span>ore</p>
                    {/* <h5 class="fw-bold text-primary text-uppercase">Team Members</h5>
                    <h1 class="mb-0">Professional Stuffs Ready to Help Your Business</h1> */}
                </div>

                <div class="row g-4  row-cols-xxl-5 mt-5">
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team1} alt=""/>
                            <h5>Alex Robin</h5>
                            <span class="text-primary">Founder & CEO</span>

                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team2} alt=""/>
                            <h5>Adam Crew</h5>
                            <span class="text-primary">Co Founder</span>
                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team3} alt=""/>
                            <h5>Boris Johnson</h5>
                            <span class="text-primary">Executive Manager</span>
                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team4} alt=""/>
                            <h5>Robert Jordan</h5>
                            <span class="text-primary">Digital Marketer</span>
                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="team-item rounded overflow-hidden pb-4">
                            <img class="img-fluid mb-4" src={team2} alt=""/>
                            <h5>Robert Jordan</h5>
                            <span class="text-primary">Digital Marketer</span>
                            <ul class="team-social">
                                <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
                
            </div>
</div>
            
</>
    );
}

export default Team;
