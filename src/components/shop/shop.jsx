import imag1 from './icon/services1.svg'
import imag2 from './icon/services1.svg'
import imag3 from './icon/services1.svg'
import imag4 from './icon/services1.svg'

import arrival1 from './img/arrival1.png'
import arrival2 from './img/arrival2.png'
import arrival3 from './img/arrival3.png'
import arrival4 from './img/arrival4.png'
import arrival5 from './img/arrival5.png'
import arrival6 from './img/arrival6.png'
import arrival7 from './img/arrival7.png'
import icon from './img/favorit-card.png'



const Shop = () => {
    return (
 <>
{/* shop */}
<div class="category-area mt-5">
            <div class="container">
                <div class="row">
                    {/* <div class="col-xl-7 col-lg-8 col-md-10">
                        <div class="section-tittle mb-50">
                            <h2>Shop with us</h2>
                            <p>Browse from 230 latest items</p>
                        </div>
                    </div> */}
                </div>
                <div class="row">
                    {/* <!--? Left content --> */}
                    <div class="col-xl-3 col-lg-3 col-md-4 ">
                        {/* <!-- Job Category Listing start --> */}
                        <div class="category-listing mb-50">
                            {/* <!-- single one --> */}
                            <div class="single-listing">
                                {/* <!-- Select City items start --> */}
                                {/* <div class="select-job-items2">
                                    <select name="select2">
                                        <option value="">Category</option>
                                        <option value="">Shat</option>
                                        <option value="">T-shart</option>
                                        <option value="">Pent</option>
                                        <option value="">Dress</option>
                                    </select>
                                </div> */}
                                {/* <!--  Select City items End--> */}
                                {/* <!-- Select State items start --> */}
                                {/* <div class="select-job-items2">
                                    <select name="select3">
                                        <option value="">Type</option>
                                        <option value="">SM</option>
                                        <option value="">LG</option>
                                        <option value="">XL</option>
                                        <option value="">XXL</option>
                                    </select>
                                </div> */}
                                {/* <!--  Select State items End--> */}
                                {/* <!-- Select km items start --> */}
                                {/* <div class="select-job-items2">
                                    <select name="select4">
                                        <option value="">Size</option>
                                        <option value="">1.2ft</option>
                                        <option value="">2.5ft</option>
                                        <option value="">5.2ft</option>
                                        <option value="">3.2ft</option>
                                    </select>
                                </div> */}
                                {/* <!--  Select km items End--> */}
                                {/* <!-- Select km items start --> */}
                                {/* <div class="select-job-items2">
                                    <select name="select5">
                                        <option value="">Color</option>
                                        <option value="">Whit</option>
                                        <option value="">Green</option>
                                        <option value="">Blue</option>
                                        <option value="">Sky Blue</option>
                                        <option value="">Gray</option>
                                    </select>
                                </div> */}
                           
                                {/* <div class="select-job-items2">
                                    <select name="select6">
                                        <option value="">Price range</option>
                                        <option value="">$10 to $20</option>
                                        <option value="">$20 to $30</option>
                                        <option value="">$50 to $80</option>
                                        <option value="">$100 to $120</option>
                                        <option value="">$200 to $300</option>
                                        <option value="">$500 to $600</option>
                                    </select>
                                </div> */}
                            </div>
                            {/* end here */}
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-8 ">
                        <div class="new-arrival new-arrival2">
                            <div class="row">

                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div class="single-new-arrival mb-50 text-center">
                                        <div class="popular-img">
                                            <img src={arrival1} alt=""/>
                                            <div class="favorit-items">
                                                 <span class="flaticon-heart"></span>
                                                <img src={icon} alt=""/>
                                            </div>
                                        </div>
                                        <div class="popular-caption">
                                         <h3><a href="product_details.html">Knitted Jumper</a></h3>
                                         <div class="rating mb-10">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <span>$ 30.00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div class="single-new-arrival mb-50 text-center">
                                    <div class="popular-img">
                                        <img src={arrival2} alt=""/>
                                        <div class="favorit-items">
                                             <span class="flaticon-heart"></span>
                                            <img src={icon} alt=""/>
                                        </div>
                                    </div>
                                    <div class="popular-caption">
                                     <h3><a href="product_details.html">Knitted Jumper</a></h3>
                                     <div class="rating mb-10">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span>$ 30.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div class="single-new-arrival mb-50 text-center">
                                <div class="popular-img">
                                    <img src={arrival3} alt=""/>
                                    <div class="favorit-items">
                                         <span class="flaticon-heart"></span>
                                        <img src={icon} alt=""/>
                                    </div>
                                </div>
                                <div class="popular-caption">
                                 <h3><a href="product_details.html">Knitted Jumper</a></h3>
                                 <div class="rating mb-10">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span>$ 30.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl43 col-lg-4 col-md-6 col-sm-6">
                        <div class="single-new-arrival mb-50 text-center">
                            <div class="popular-img">
                                <img src={arrival4} alt=""/>
                                <div class="favorit-items">
                                    <span class="flaticon-heart"></span>
                                    <img src={icon} alt=""/>
                                </div>
                            </div>
                            <div class="popular-caption">
                             <h3><a href="product_details.html">Knitted Jumper</a></h3>
                             <div class="rating mb-10">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span>$ 30.00</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div class="single-new-arrival mb-50 text-center">
                        <div class="popular-img">
                            <img src={arrival6} alt=""/>
                            <div class="favorit-items">
                                <span class="flaticon-heart"></span>
                                <img src={icon} alt=""/>
                            </div>
                        </div>
                        <div class="popular-caption">
                         <h3><a href="product_details.html">Knitted Jumper</a></h3>
                         <div class="rating mb-10">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span>$ 30.00</span>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div class="single-new-arrival mb-50 text-center">
                    <div class="popular-img">
                        <img src={arrival7} alt=""/>
                        <div class="favorit-items">
                             <span class="flaticon-heart"></span> 
                            <img src={icon} alt=""/>
                        </div>
                    </div>
                    <div class="popular-caption">
                     <h3><a href="product_details.html">Knitted Jumper</a></h3>
                     <div class="rating mb-10">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <span>$ 30.00</span>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div class="single-new-arrival mb-50 text-center">
                <div class="popular-img">
                    <img src={arrival3} alt=""/>
                    <div class="favorit-items">
                         <span class="flaticon-heart"></span>
                        <img src={icon} alt=""/>
                    </div>
                </div>
                <div class="popular-caption">
                 <h3><a href="product_details.html">Knitted Jumper</a></h3>
                 <div class="rating mb-10">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <span>$ 30.00</span>
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div class="single-new-arrival mb-50 text-center">
            <div class="popular-img">
                <img src={arrival5} alt=""/>
                <div class="favorit-items">
                    <span class="flaticon-heart"></span>
                    <img src={icon} alt=""/>
                </div>
            </div>
            <div class="popular-caption">
             <h3><a href="product_details.html">Knitted Jumper</a></h3>
             <div class="rating mb-10">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <span>$ 30.00</span>
        </div>
    </div>
</div>
</div>
<div class="row justify-content-center">
    <div class="room-btn mt-20">
        <a href="catagori.html" class="border-btn">Browse More</a>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>


 {/* delivery */}
<div class="categories-area section-padding40 gray-bg mt-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-cat mb-50">
                    <div class="cat-icon ">
                        <img src={imag1} alt=""/>
                    </div>
                    <div class="cat-cap">
                        <h5>Fast & Free Delivery</h5>
                        <p>Free delivery on all orders</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-cat mb-50">
                    <div class="cat-icon">
                        <img src={imag2} alt=""/>
                    </div>
                    <div class="cat-cap">
                        <h5>Fast & Free Delivery</h5>
                        <p>Free delivery on all orders</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 ">
                <div class="single-cat mb-30">
                    <div class="cat-icon">
                        <img src={imag3} alt=""/>
                    </div>
                    <div class="cat-cap">
                        <h5>Fast & Free Delivery</h5>
                        <p>Free delivery on all orders</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-cat">
                    <div class="cat-icon">
                        <img src={imag4} alt=""/>
                    </div>
                    <div class="cat-cap">
                        <h5>Fast & Free Delivery</h5>
                        <p>Free delivery on all orders</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    );
}

export default Shop;
