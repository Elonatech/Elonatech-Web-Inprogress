import './drop.css'
// import './navbar.css'



// function
const Navbar = () => {
    return (
<>
          
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Carousel</a>

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
              <a class="nav-link fw-bold active" aria-current="page" href="#">HOME</a>
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
                <li class="dropdown-item p-3" ><a href="#">
                  
                <li class="nav-item dropdown pe-4">
              <a class="nav-link active fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul class="dropdown-menu p-4">
                <li><a class="dropdown-item mt-2" href="#">Action</a></li>
                <li><a class="dropdown-item mt-2" href="#">Another action</a></li>
                <li><a class="dropdown-item mt-2" href="#">Something else here</a></li>
                <li><a class="dropdown-item mt-2" href="#">Something else here</a></li>
              </ul>
            </li>
                  
                  </a></li>
              </ul>
            </li>
            
            {/* <!-- second drop down --> */}
            <li class="nav-item dropdown pe-4">
              <a class="nav-link active fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul class="dropdown-menu p-4">
                <li><a class="dropdown-item mt-2" href="#">Computers</a></li>
                <li><a class="dropdown-item mt-2" href="#">Printers</a></li>
                <li><a class="dropdown-item mt-2" href="#">Office Equipment</a></li>
                <li><a class="dropdown-item mt-2" href="#">POS Systems</a></li>
              </ul>
            </li>
            {/* <!-- third drop down --> */}
            <li class="nav-item dropdown pe-4">
              <a class="nav-link active fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Support
              </a>
              <ul class="dropdown-menu p-4">
                <li><a class="dropdown-item mt-2" href="#">Technical Support</a></li>
                <li><a class="dropdown-item mt-2" href="#">Network Support</a></li>
                <li><a class="dropdown-item mt-2" href="#">Remote Support</a></li>
                {/* <li><a class="dropdown-item mt-2" href="#"></a></li> */}
              </ul>
            </li>

            {/* <!-- fourth drop down --> */}
            <li class="nav-item dropdown pe-4">
              <a class="nav-link active fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Who we are
              </a>
              <ul class="dropdown-menu p-4">
                <li><a class="dropdown-item mt-2" href="#">Our Blog</a></li>
                <li><a class="dropdown-item mt-2" href="#">Our Team</a></li>
                <li><a class="dropdown-item mt-2" href="#">Our Company</a></li>
                <li><a class="dropdown-item mt-2" href="#">Our Portfolio</a></li>
                <li><a class="dropdown-item mt-2" href="#">Our Blog</a></li>
                <li><a class="dropdown-item mt-2" href="#">Career</a></li>
              </ul>
            </li>
          
            <li class="nav-item pe-4">
              <a class="nav-link  fw-bold active">Get in touch</a>
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
