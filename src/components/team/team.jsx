import './css/team.css'

import team1 from './image/team-1.jpg';
import team2 from './image/team-2.jpg';
import team3 from './image/team-3.jpg';
import team4 from './image/team-4.jpg';


const Team = () => {
    return (
<>
<div class="container-xxl py-5 mt-5">
            <div class="container">
                <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{minWidth:"500px"}}>
                    <h5 class="fw-bold text-primary text-uppercase">Team Members</h5>
                    <h1 class="mb-0">Professional Stuffs Ready to Help Your Business</h1>
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
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
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
                    </div>
                </div>
                
            </div>
        </div>
            
</>
    );
}

export default Team;
