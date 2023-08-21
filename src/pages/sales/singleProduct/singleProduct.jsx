import product1 from './captions/single-product-01.jpg';
import product2 from './captions/single-product-02.jpg';


import './singleProduct.css';

const SingleProduct = () => {
    return (
    <>

{/* header */}
<section class="mt-5 bg-dark">
      <div class="container" >
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-8 d-flex align-items-center">
            <div class="w-100 py-4" style={{marginTop:"100px"}}>
              <h2 class="text-white">We Provides Round-The-Clock Maintenance for All Network Equipment</h2>
              <p  class="text-white pt-2">We Provides Round-The-Clock Maintenance for All Network Equipment</p>
              <p  class="text-white pt-2">we are committed to supplying you with the most reliable advice,
                             support and services at all times, wherever you are in Nigeria.</p>
              <p class="mb-0 pt-2"><a href="#" class="btn btn-success py-3 px-4">Contact Us</a></p>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 d-flex align-items-end">
             <img src="img/" class="img-fluid" alt=""/> 
          </div>
        </div>
      </div>
    </section>
   

{/* header */}

{/* Product Area Starts */}

<section class="section" id="product">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                <div class="left-images">
                    
                    <img src={product2} className='img-fluid' alt=""/>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="right-content">
                    <h4>New Green Jacket</h4>
                    <span class="price">$75.00</span>
                    <ul class="stars">
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                    </ul>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                    <div class="quote">
                        <i class="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                    </div>
                    <div class="quantity-content">
                        <div class="left-content">
                            <h6>No. of Orders</h6>
                        </div>
                        <div class="right-content">
                            <div class="quantity buttons_added">
                                <input type="button" value="-" class="minus"/><input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode=""/><input type="button" value="+" class="plus"/>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <h4 className='mt-4'>Total: $210.00</h4>
                        <button className='btn btn-outline-dark mt-3'><b>Add To Cart</b></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>

{/*  Product Area Ends  */}


{/* table */}

<section class="hosting-section spad mb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h3 className='text-center mb-5 mt-4'>WEB HOSTING PLAN PERFECT FOR YOU!</h3>
                    </div>
                    <div class="hosting__text">
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="hosting__feature__table">
                                    <table>
                                
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
                                                    <span class="fa fa-check-circle-o"></span>
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
                                                </td>
                                                <td class="hosting__feature--check">
                                                    <span class="fa fa-check-circle-o"></span>
                                                </td>
                                                <td class="hosting__feature--check">
                                                    <span class="fa fa-check-circle-o"></span>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Daily Backups</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Search Engine Optimization</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">99.9% Uptime Guarantee</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Bandwidth</td>
                                                <td class="hosting__feature--info">20GB</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Setup</td>
                                                <td class="hosting__feature--info">$ 1.99</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Advanced Security Features</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Website Builder</td>
                                                <td class="hosting__feature--info">1</td>
                                                <td class="hosting__feature--info">50</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">30 Day Money Back Guarantee</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free App Store</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">cPanel Control Panel</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Daily Backups</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Search Engine Optimization</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">99.9% Uptime Guarantee</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Bandwidth</td>
                                                <td class="hosting__feature--info">20GB</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Setup</td>
                                                <td class="hosting__feature--info">$ 1.99</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Advanced Security Features</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Website Builder</td>
                                                <td class="hosting__feature--info">1</td>
                                                <td class="hosting__feature--info">50</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">30 Day Money Back Guarantee</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free App Store</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">cPanel Control Panel</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Daily Backups</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Search Engine Optimization</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">99.9% Uptime Guarantee</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Bandwidth</td>
                                                <td class="hosting__feature--info">20GB</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Setup</td>
                                                <td class="hosting__feature--info">$ 1.99</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Advanced Security Features</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Website Builder</td>
                                                <td class="hosting__feature--info">1</td>
                                                <td class="hosting__feature--info">50</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">30 Day Money Back Guarantee</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free App Store</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">cPanel Control Panel</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Daily Backups</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Search Engine Optimization</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">99.9% Uptime Guarantee</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Bandwidth</td>
                                                <td class="hosting__feature--info">20GB</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Setup</td>
                                                <td class="hosting__feature--info">$ 1.99</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Advanced Security Features</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Website Builder</td>
                                                <td class="hosting__feature--info">1</td>
                                                <td class="hosting__feature--info">50</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">30 Day Money Back Guarantee</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free App Store</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">cPanel Control Panel</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Daily Backups</td>
                                                <td class="hosting__feature--close"><span
                                                        class="fa fa-times-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Search Engine Optimization</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">99.9% Uptime Guarantee</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Bandwidth</td>
                                                <td class="hosting__feature--info">20GB</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Setup</td>
                                                <td class="hosting__feature--info">$ 1.99</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Advanced Security Features</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                                <td class="hosting__feature--info">Extra</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Cloud Hosting</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Website Builder</td>
                                                <td class="hosting__feature--info">1</td>
                                                <td class="hosting__feature--info">50</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">30 Day Money Back Guarantee</td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
                                                <td class="hosting__feature--check"><span
                                                        class="fa fa-check-circle-o"></span></td>
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

    {/* end */}
    </>
    );
}

export default SingleProduct;
