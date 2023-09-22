import hostHeader from './captions/9494216.png'

import './host.css'


const Hosting = () => {
    return (
     <>
   {/* header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hostHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Hosting Websites</h2>
   <h5 class=" mt-4 text-white text-center">Experience the Next Level of Internet Speed and Reliability</h5>
   <p class="lead text-white text-center"> System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
 </div>
</div>

{/* Register Domain Section Begin  */}
    <section class="register-domain spad">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                    <div class="register__text">
                        <div class="section-title">
                            <h3 className='text-center mb-4 fw-bold' >Register Your Domain Now!</h3>
                        </div>
                        <div class="register__form">
                            <form action="#">
                                <input type="text" placeholder="ex: cloudhost"/>
                                <div class="change__extension" >
                                 .com  <i class="bi bi-caret-down-fill ms-2" style={{position:"absolute" , top:"3px"}}></i>
                                    <ul>
                                        <li>.net</li>
                                        <li>.org</li>
                                        <li>.gov</li>
                                    </ul>
                                </div>
                                <button type="submit" class="site-btn">Search</button>
                            </form>
                        </div>

                        {/* domain */}
                        <div className="container mt-4 mb-4">
                        <div class="row">
                        <div class="col-6 col-md-3">
                        <div className="text-center">
                            
                         <div class="register__result">
                            <ul>
                                <li>.com <span>$1.95</span></li>
                            </ul>
                        </div>  
                            
                        </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div className="text-center">     
                         <div class="register__result">
                            <ul>
                            <li>.gov <span>$1.95</span></li>
                            </ul>
                        </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                        <div className="text-center">
                        <div class="register__result">
                            <ul>
                            <li>.org <span>$1.95</span></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        <div class="col-6 col-md-3">
                        <div className="text-center">
                        <div class="register__result">
                            <ul>
                            <li>.ng <span>$1.95</span></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>



{/* <!-- Hosting Section Begin --> */}
    <section class="hosting-section spad mb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h3 className='text-center mb-5'>WEB HOSTING PLAN PERFECT FOR YOU!</h3>
                    </div>
                    <div class="hosting__text">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                    <span class="flaticon-003-network"></span>
                                    <h5>Web hosting</h5>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                    <span class="flaticon-030-server-1"></span>
                                    <h5>Servers</h5>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                    <span class="flaticon-010-cloud-storage-2"></span>
                                    <h5>Clouds VPS</h5>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                                    <span class="flaticon-008-cloud-computing"></span>
                                    <h5>Dedicated</h5>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-5" role="tab">
                                    <span class="flaticon-009-cloud-storage-1"></span>
                                    <h5>Reseller</h5>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="hosting__feature__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div class="hosting__feature__plan--choose">
                                                        <span>All Shared Hosting Features</span>
                                                        <div class="chose__title">CHOOSE PERFECT PLAN</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Started</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$3.90</div>
                                                            <span>month</span>
                                                        </div>
                                                    
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Business</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$5.90</div>
                                                            <span>month</span>
                                                        </div>
                                                       
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Premium</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$8.90</div>
                                                            <span>month</span>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="hosting__feature--item">Number of Websites</td>
                                                <td class="hosting__feature--info">1 Website</td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Domain Registration</td>
                                                <td class="hosting__feature--check">
                                                    <span class="fa fa-check-circle-o"></span>
                                                </td>
                                                <td class="hosting__feature--check">
                                                    <span class="fa fa-check-circle-o"></span>
                                                </td>
                                                <td class="hosting__feature--check">
                                                    <i class="bi bi-check-circle"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Web Space</td>
                                                <td class="hosting__feature--info">5,000MB</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Email Accounts</td>
                                                <td class="hosting__feature--info">25</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">MySQL Databases</td>
                                                <td class="hosting__feature--check">
                                                    <span class="fa fa-check-circle-o"></span>
                                                    <i class="bi bi-check-circle"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                    <span class="fa fa-check-circle-o"></span>
                                                    <i class="bi bi-check-circle"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                    <span class="fa fa-check-circle-o"></span>
                                                    <i class="bi bi-check-circle"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free App Store</td>
                                                <td class="hosting__feature--check">
                                                    <span class="fa fa-check-circle-o"></span>
                                                </td>
                                                <td class="hosting__feature--check">
                                                    <span class="fa fa-check-circle-o"></span>
                                                </td>
                                                <td class="hosting__feature--check">
                                                    <span class="fa fa-check-circle-o"></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">cPanel Control Panel</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Daily Backups</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Search Engine Optimization</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">99.9% Uptime Guarantee</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Bandwidth</td>
                                                <td class="hosting__feature--info">20GB</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Setup</td>
                                                <td class="hosting__feature--info">$ 1.99</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Advanced Security Features</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--info">$ 250.0</td>
                                                <td class="hosting__feature--info">$ 250.0</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">24/7/365 Support</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Website Builder</td>
                                                <td class="hosting__feature--info">1</td>
                                                <td class="hosting__feature--info">50</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">30 Day Money Back Guarantee</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                <div class="hosting__feature__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div class="hosting__feature__plan--choose">
                                                        <span>All Servers Hosting Features</span>
                                                        <div class="chose__title">CHOOSE PERFECT PLAN</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Started</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$3.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Business</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$5.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Premium</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$8.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="hosting__feature--item">Number of Websites</td>
                                                <td class="hosting__feature--info">1 Website</td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Domain Registration</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Web Space</td>
                                                <td class="hosting__feature--info">5,000MB</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Email Accounts</td>
                                                <td class="hosting__feature--info">25</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">MySQL Databases</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free App Store</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">cPanel Control Panel</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Daily Backups</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Search Engine Optimization</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">99.9% Uptime Guarantee</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Bandwidth</td>
                                                <td class="hosting__feature--info">20GB</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Setup</td>
                                                <td class="hosting__feature--info">$ 1.99</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Advanced Security Features</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--info">$ 250.0</td>
                                                <td class="hosting__feature--info">$ 250.0</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">24/7/365 Support</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Website Builder</td>
                                                <td class="hosting__feature--info">1</td>
                                                <td class="hosting__feature--info">50</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">30 Day Money Back Guarantee</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                <div class="hosting__feature__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div class="hosting__feature__plan--choose">
                                                        <span>All VPS Hosting Features</span>
                                                        <div class="chose__title">CHOOSE PERFECT PLAN</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Started</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$3.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Business</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$5.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Premium</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$8.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="hosting__feature--item">Number of Websites</td>
                                                <td class="hosting__feature--info">1 Website</td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Domain Registration</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Web Space</td>
                                                <td class="hosting__feature--info">5,000MB</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Email Accounts</td>
                                                <td class="hosting__feature--info">25</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">MySQL Databases</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free App Store</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">cPanel Control Panel</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Daily Backups</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Search Engine Optimization</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">99.9% Uptime Guarantee</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Bandwidth</td>
                                                <td class="hosting__feature--info">20GB</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Setup</td>
                                                <td class="hosting__feature--info">$ 1.99</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Advanced Security Features</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--info">$ 250.0</td>
                                                <td class="hosting__feature--info">$ 250.0</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">24/7/365 Support</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Website Builder</td>
                                                <td class="hosting__feature--info">1</td>
                                                <td class="hosting__feature--info">50</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">30 Day Money Back Guarantee</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-4" role="tabpanel">
                                <div class="hosting__feature__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div class="hosting__feature__plan--choose">
                                                        <span>All Dedicated Hosting Features</span>
                                                        <div class="chose__title">CHOOSE PERFECT PLAN</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Started</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$3.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Business</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$5.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Premium</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$8.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="hosting__feature--item">Number of Websites</td>
                                                <td class="hosting__feature--info">1 Website</td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Domain Registration</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Web Space</td>
                                                <td class="hosting__feature--info">5,000MB</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Email Accounts</td>
                                                <td class="hosting__feature--info">25</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">MySQL Databases</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free App Store</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">cPanel Control Panel</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Daily Backups</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Search Engine Optimization</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">99.9% Uptime Guarantee</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Bandwidth</td>
                                                <td class="hosting__feature--info">20GB</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Setup</td>
                                                <td class="hosting__feature--info">$ 1.99</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Advanced Security Features</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--info">$ 250.0</td>
                                                <td class="hosting__feature--info">$ 250.0</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">24/7/365 Support</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Website Builder</td>
                                                <td class="hosting__feature--info">1</td>
                                                <td class="hosting__feature--info">50</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">30 Day Money Back Guarantee</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-5" role="tabpanel">
                                <div class="hosting__feature__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div class="hosting__feature__plan--choose">
                                                        <span>All Reseller Hosting Features</span>
                                                        <div class="chose__title">CHOOSE PERFECT PLAN</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Started</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$3.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Business</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$5.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Premium</div>
                                                        <div class="hosting__feature--price">
                                                            <div class="plan__price">$8.90</div>
                                                            <span>month</span>
                                                        </div>
                                                        <a href="#" class="primary-btn">Buy now</a>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="hosting__feature--item">Number of Websites</td>
                                                <td class="hosting__feature--info">1 Website</td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Domain Registration</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Web Space</td>
                                                <td class="hosting__feature--info">5,000MB</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Email Accounts</td>
                                                <td class="hosting__feature--info">25</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">MySQL Databases</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free App Store</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">cPanel Control Panel</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Daily Backups</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Search Engine Optimization</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">99.9% Uptime Guarantee</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Bandwidth</td>
                                                <td class="hosting__feature--info">20GB</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Setup</td>
                                                <td class="hosting__feature--info">$ 1.99</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Advanced Security Features</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--info">$ 250.0</td>
                                                <td class="hosting__feature--info">$ 250.0</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">24/7/365 Support</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Website Builder</td>
                                                <td class="hosting__feature--info">1</td>
                                                <td class="hosting__feature--info">50</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">30 Day Money Back Guarantee</td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                                <td class="hosting__feature--check"><i class="bi bi-check-circle"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Hosting Section End --> */}






            
     </>
    );
}

export default Hosting;
