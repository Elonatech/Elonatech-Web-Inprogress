import team1 from './image/team-1.jpg';
import team2 from './image/team-2.jpg';
import team3 from './image/team-3.jpg';
import team4 from './image/team-4.jpg';
import test from   './image/1277553.png'

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
    <p className='fs-1 fw-bolder' style={{color:"#34548c"}}>Excellence at Work for Over a Decade</p>
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
    <div className="row justify-content-md-center">
        <div className="col-6 col-md-2 mb-3 mt-4">
            <div className="text-center">
                <div className='brci mb-3'>
                    <h1 className=''>F</h1>
                    </div>
                <h5 className='fw-bolder'>Flexible</h5>
            </div>
            </div>
        <div className="col-6 col-md-2 mt-4">
            <div className="text-center">
            <div className='brci mb-3'>
                    <h1 className=''>O</h1>
                    </div>
                <h5 className='fw-bolder'>Optimistic</h5>
            </div>
            </div>
        <div className="col-6 col-md-2 mt-4">
            <div className="text-center">
            <div className='brci mb-3'>
                    <h1 className=''>C</h1>
                    </div>
                <h5 className='fw-bolder'>Committed</h5>
            </div>
            </div>
        <div className="col-6 col-md-2 mt-4">
            <div className="text-center">
            <div className='brci mb-3'>
                    <h1 className=''>U</h1>
                    </div>
                <h5 className='fw-bolder'>Unparalleled</h5>
            </div>
            </div>
        <div className="col-6 col-md-2 mt-4">
            <div className="text-center">
            <div className='brci mb-3'>
                    <h1 className=''>S</h1>
                    </div>
                <h5 className='fw-bolder'>Sustainable</h5>
            </div>
            </div>
    </div>
</div>
{/* worthy */}

<div className="container mt-5">
    <div className="row g-5">
    <div className="col-md-6">
        <div className=""> 
        <p className='fs-3 fw-bold' style={{color:"#34548c"}}>Team Members</p> 
        <p className='lead fs-6' style={{textAlign:"justify"}}>
        The Elonatech team consists of young, talented, educated, proud and highly motivated people, that brings positive changes to our world of technology. 
        Our people are passionate about technology, business, and customer relation. 
        They strive for excellence and have the strongest belief in themselves and their potentials, which in turn brings about the desired result in the services rendered. 
        When your mission is to be better and faster, you need the best people driving your vision. 
        Those who can create focused marketing strategies that align with business goals, and infuse their creativity into groundbreaking campaigns.
        </p>
        </div>
        </div>
    <div className="col-md-6">
        <div className="">
        <p className='fs-3 fw-bold text-end' style={{color:"#34548c"}}>Our Passion</p> 
        <p className='lead fs-6' style={{textAlign:"justify"}}>
            We have a passion for our clients, results and the solutions we provide. 
            Our team possess a pragmatic drive for action that runs through the week, each working day, and doesn’t let up. 
            We rally clients with our infectious energy, to make change stick. And we never do it alone. 
            We support and are supported to develop our own personal result(s) stories. We train, and get trained to further equip ourselves,
             so as to be abreast of imminent IT challenges. We work hard, but we don’t take ourselves too seriously. We enjoy what we do and we laugh a lot… most often at ourselves.
            It feels different to work with us.
        </p>
        </div>
       </div>
    </div>
</div>
{/* 𝑡𝑒𝑎𝑚 */}

{/* team members */}
<div class="container-fluid mb-5 mb-5 text-center">
                 <div class="text-center mx-auto mt-5 wow fadeInUp" data-wow-delay="0.1s" style={{minWidth:"20px"}}>
                  <p className='fw-bolder fs-1' style={{color:"#34548c"}}>Leadership <span className='fst-italic  text-danger'> Team</span></p>
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

{/* bef  */}
<div className="container mb-4">
    <div className="row">
        <div className="col-md-4">
            <div className="">
              <p className='fs-3 fw-bold'>The Technical Solutions Team</p>
              <p className='lead fs-6' style={{textAlign:"justify"}}>
              Composed of individuals that are familiar with the ins and outs of all systems and networking devices. 
              They are responsible for managing local area communications network, LAN and WAN for our clients. 
              This includes activities such as the deployment, configuration, maintenance and monitoring of active network equipment.
              In addition, they offer user-friendly assistance for individuals having technical problems on 
              Client PCs and Servers and are able to troubleshoot most problems that a user experiences.
              Technical support may be provided over the phone, through email, a live-chat interface or via a remote support solution.
                </p>
            </div>
        </div>
        <div className="col-md-4">
        <div class="team-item rounded overflow-hidden">
                <img class="img-fluid" src={test} style={{height:"20rem"}} alt=""/>             
        </div>
        </div>
        <div className="col-md-4 ">
            <div className="">
            <p className='fs-3 fw-bold'>The Digital Solutions Team</p>
            <p className='lead fs-6' style={{textAlign:"justify"}}>
            Consists mainly of web strategists, designers, developers, digital strategists, brand developers, 
            creative designers, SEO experts, online marketers, product designers,
             UI/UX designers and project managers, who work together to help clients meet their business objectives.
             The Digital Solutions Team provides ongoing technical support with quality and innovation to 
           Business Owners. From web development, email funnels, marketing campaigns and visual 
           designs to CRM setups, and everything in between. They can guide you through navigating 
          all of it while building a plan that works specifically for your business.
                </p>
            </div>
        </div>
    </div>
</div>


{/* end */}
</>
    );
}

export default Team;
