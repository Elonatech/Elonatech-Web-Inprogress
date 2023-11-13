import './drop.css'
import { Link } from 'react-router-dom';
import logo from './captions/Elonatech White.png'
import scrollTop from '../scrolltop/scrolltop';

// function
const Navbar = () => {
    return (
<>
          
<nav class="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor:"#11253D"}}>
    <div class="container-fluid">
 
      <Link to={'/'} onClick={() =>{ scrollTop()}} className='navbar-brand'><img src={logo} alt=""  style={{height:"4rem", width:"10rem"}} /></Link>

      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-dark" id="offcanvasNavbar2Label">Offcanvas</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav pe-4  ms-auto">
            <li class="nav-item pe-4">
              <a class="nav-link fw-bold active" aria-current="page" href="#"><i class="bi bi-house-fill"></i></a>
            </li>

            {/* <!-- first drop down --> */}
            <li class="nav-item dropdown  pe-4">
              <a class="nav-link active fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown-item p-3">Action else</li>
                <li><a class="dropdown-item p-3" href="#">Another action</a></li>
                <li><a class="dropdown-item p-3" href="#">Something else</a></li>
              </ul>
            </li>
            
            {/* <!-- second drop down --> */}
            <li class="nav-item dropdown pe-4">
              <a class="nav-link active fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul class="dropdown-menu text-center p-4">
                <li><Link to={'/computer'} class="dropdown-item mt-2 p-3">Computers</Link></li>
                <li><Link to={'/printer'} class="dropdown-item mt-2 p-3">Printers</Link></li>
                <li><Link to={'/office'} class="dropdown-item mt-2 p-3">Office Equipment</Link></li>
                <li><Link to={'/pos'} class="dropdown-item mt-2 p-3">POS Systems</Link></li>
              </ul>
            </li>
            {/* <!-- third drop down --> */}
            <li class="nav-item dropdown pe-4">
              <a class="nav-link active fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Support
              </a>
              <ul class="dropdown-menu text-center p-4">
                <li ><Link to={'/technical'} class="dropdown-item mt-2 p-3">Technical Support</Link></li>
                <li><Link to={'/network'} class="dropdown-item mt-2 p-3">Network Support</Link></li>
                <li><Link to={'/remote'} class="dropdown-item mt-2 p-3">Remote Support</Link></li>
              </ul>
            </li>

            {/* <!-- fourth drop down --> */}
            <li class="nav-item dropdown pe-4">
              <a class="nav-link active fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Who we are
              </a>
              <ul class="dropdown-menu text-center p-2">
                <li><Link to={'/blog'} class="dropdown-item mt-2 p-3">Blog</Link></li>
                <li><Link to={'/team'} class="dropdown-item mt-2 p-3">Team</Link></li>
                <li><Link to={'/company'} class="dropdown-item mt-2 p-3">Company</Link></li>
                <li><Link to={'/portfolio'} class="dropdown-item mt-2 p-3">Portfolio</Link></li>
                <li><Link to={'/career'} class="dropdown-item mt-2 p-3">Career</Link></li>
              </ul>
            </li>
          
            <li class="nav-item pe-4">
              <a class="nav-link  fw-bold active">Get in touch</a>
              {/* <button class="nav-link btn btn-danger fw-bold active" >Get in touch</button> */}
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </nav>

</>
    );
}

export default Navbar;
