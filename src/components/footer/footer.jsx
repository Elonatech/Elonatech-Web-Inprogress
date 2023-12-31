import './footer.css'
import eloa2 from './caption/Elonatech icon (1).png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Footer = () => {

 const [currentAdmin, setCurrentAdmin] = useState('');

 useEffect(() =>{
  const auth = JSON.parse(localStorage.getItem('token'));
    setCurrentAdmin(auth)
 }, []);

    return (
<> 

<footer id="footer" class="footer" style={{backgroundColor:"#11253D"}}>
    <div class="container text-white">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <div className="mx-5">
             <img src={eloa2} alt="" className='mx-4' style={{height:"5rem" ,  width:"5rem" }} />
          </div>
          <a href="index.html" class="logo d-flex align-items-center text-decoration-none mt-4">
            <span> 
            <h4>ELONATECH NIGERIA LIMITED</h4>
            </span>
          </a>
          <div class="social-links d-flex mt-4">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Team Members</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">App + Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
            <li><a href="#">Network Developments</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>4 , Oluwakemi Street, Shasha Road <br /> Egbeda, Lagos. <br /> Nigeria  <br /> <strong>Phone:</strong> +2349 0145 44520. <br /> <strong>Email:</strong>  info@elonatech.com.ng<br /> 
          
          <div className="text-center mt-4">
            {currentAdmin ? (
              <Link to={'/login'} className='text-decoration-none text-white'><i class="bi bi-unlock-fill"   style={{cursor:"pointer"}}></i></Link>
              ) : (
                <Link to={'/login'} className='text-decoration-none text-white'><i class="bi bi-lock-fill"  style={{cursor:"pointer"}}></i></Link>
            )}
          </div>
          </p>
        </div>

      </div>
    </div>
    <div class="container mt-4 text-white">
      <div class="copyright">
        &copy; Copyright <strong><span>elonatech</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
</>  
)
}

export default Footer