import bop from './captions/business.jpg'
import businessHeader from './captions/businessHeader.jpg'
import mar from './captions/yop2.png'
import busImg from './captions/for mike.png'

import './business.css'

const Business = () => {
    return (
 <>
{/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"100px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${businessHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Business</h2>
   <h5 class=" mt-4 text-white text-center">Monitor, Configure and Maintain Servers to operate reliably and optimally</h5>
   <p class="lead text-white text-center">Minimizing downtimes while maximizing reliability in other to meet the needs of organizations over time.</p>
 </div>
 </div>



{/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about mt-5 mb-5">
      
      <div class="container" data-aos="fade-up">
        <div class="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
            <h2 className='text-center'>About Us</h2>
          <p>Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam voluptas asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga.</p>
            </div>
          </div>
      
        </div>
          <div class="col-lg-5">
            <div class="mt-5">
              <img src={mar} class="img-fluid" style={{height:"30rem"}} alt=""/>
            </div>
          </div>

          <div class="col-lg-7">
            <h3 class="pt-0 pt-lg-5">Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h3>

            {/* <!-- Tab Content --> */}
            <div class="tab-content">
              <div class="tab-pane fade show active" id="tab1">

                <p class="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2  bg-danger rounded-circle text-white"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.</p>

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2  bg-danger rounded-circle text-white"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.</p>

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2 bg-danger rounded-circle text-white"></i>
                  <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                </div>
                <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error voluptatem eum.</p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>


{/* body */}
<div className="container  mb-5" style={{marginTop:""}}>
  <div class="row justify-content-center  g-4">
    <div class="col-md-6 ps-5 mt-5">
    <h2 className='mb-4 '>How Application Software works?</h2>
    <p className="fs-6 " style={{textAlign:"justify"}}>
    Software designed to handle specific tasks for users are known as application software, also called application program. Such software directs the computer to execute commands given by the user and may be said to include any program that processes data for a user.
    <br /><br />
    This includes application software that enables a user to perform a task, such as Microsoft Office suite (Excel, Word, PowerPoint, Outlook, etc.) Internet browsers like Firefox, Safari, and Chrome; mobile pieces of software such as Pandora, Skype (for real-time online communication), and Slack (for team collaboration); PDF viewers and readers; 
    <br /><br />
    Business Application Software (These programs are built to facilitate certain business functions, improving), etc.
   
    </p>
    </div>
    <div class="col-md-6">
      <img src={busImg} alt="" className='img-fluid rounded'  srcset="" />
    </div>
  </div>
</div>





</>
    );
}

export default Business;
