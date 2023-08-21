import './footer.css'



const Footer = () => {
    return (
<> 

<footer id="footer" class="footer  bg-secondary">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center text-decoration-none">
            <span> 
            <h4>ELONATECH NIGERIA LIMITED</h4>
            </span>
          </a>
          {/* <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p> */}
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
          <p>4 , Oluwakemi Street, Shasha Road <br /> Egbeda, Lagos. <br /> Nigeria  <br /> <strong>Phone:</strong> +2349 0145 44520. <br /> <strong>Email:</strong>  info@elonatech.com.ng<br /></p>
        </div>

      </div>
    </div>
    <div class="container mt-4">
      <div class="copyright">
        &copy; Copyright <strong><span>Impact</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
</>  
)
}

export default Footer