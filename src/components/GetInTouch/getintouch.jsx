import Quote from './quote';

import BackgroundImage2 from './banner3.png';

const Getintouch = () => {
  return (
    <div>
   
          <div className=""  style={{ backgroundImage: `url(${BackgroundImage2})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'300px', color:'white'}}>
            <div className="text- ps-5  p-4">
            <p class=" fw-bolder d-md-block  d-none fs-2 pl-4 pt-5 " style={{color:"black"}}>Engage in a conversation with a specialist <br /> regarding your upcoming video <br /> editing endeavor..</p>
            <p class=" fw-bolder d-md-none  d-block fs-2 pl-4 pt-5 " style={{color:"black"}}>Engage in a conversation with a specialist  regarding your upcoming video  editing endeavor..</p>
            < Quote />
            </div>

          
         </div>
    </div>
  )
}

export default Getintouch