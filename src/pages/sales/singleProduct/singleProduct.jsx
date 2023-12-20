
import hgdelete from './captions/delete.png'
import {  useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BASEURL } from '../../../BaseURL/BaseURL';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import DOMPurify from 'dompurify';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './singleProduct.css';

// import required modules
import { FreeMode, Navigation, EffectFade, Thumbs, Pagination } from 'swiper/modules';

const SingleProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState();
    const [data, setData] = useState({});
    const [currentAdmin, setCurrentAdmin] = useState('');
    const [computer , setComputer] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState([]);
    const { id } = useParams();

    const navigate = useNavigate() 


console.log(image)
   useEffect(() =>{
   const auth = JSON.parse(localStorage.getItem('token'));
   setCurrentAdmin(auth)
   }, []);


    useEffect(() =>{
      const fetchData = async() =>{
        try {
            const res = await axios.get(`${BASEURL}/api/v1/product/${id}`);
            setData(res.data.getProductById);
            setImage(res.data.getProductById.images);
            setComputer(res.data.getProductById.computerProperty);
            setIsLoading(true);
            } catch (error) {
            console.log(error);
            setIsLoading(true);
            }
      }
      fetchData()
    },[])
   
    const handleDelete = async () => {
        const res = await axios.delete(`${BASEURL}/api/v1/product/${id}`)
        navigate('/shop')
        };
        
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
{isLoading ? 
<>
<div class="container mb-5">

   <div class="row">
   {/* slide */}
   <div class="col-lg-9 ">
   <div className="container" >

  <div className="row g-0  ">
 <div className="col-2">
 <div className="card border-0">
      <Swiper
        direction='vertical'
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation,  Thumbs, Pagination]}
        className="swiper-container gallery-thumbs pb-5"
      >
       <ul className='list-unstyled text-center'>
        {image.map((item) => (
        <div key={item.id}> 
       <li className='pb-3'>
         <SwiperSlide className='pb-' style={{paddingBottom:"60px"}} >
          <img src={item.url} className='img-fluid hto rounded border border-dark' style={{height:"60px", width:"60px", objectFit:"cover", cursor:"pointer"}} />
          </SwiperSlide>
         </li>
        </div>
    ))}
    </ul>
      </Swiper>
  </div>
  </div>
  <div className="col-10">
        <div className="card">

    <div className="gall">
    <Swiper
       style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
        spaceBetween={0}
        // effect={'fade'}
        navigation= {true}
        pagination={{
          clickable: true,
        }}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation,  EffectFade, Thumbs, Pagination]}
        className='swiper-container gallery-top '
      >
    {image.map((item) => (
        <div key={item.id}> 
         <SwiperSlide className='border-0'>
          <img  src={item.url} className='img-fluid' style={{height:"400px", width:"770px", objectFit:"cover"}} />
        </SwiperSlide>
        </div>
    ))}
    </Swiper>
  </div>  
  </div>
  </div>
    </div>
   </div>
   </div>
{/*  */}

  <div class="col-lg-3 mb-5">
            <div class="right-content">
                    <h4>{data.name}</h4>
                    <span class="price text-dark">₦ {data.price}.00</span>
                 
                    <div class="quote">
                       <p >{data.brand}</p>
                    </div>
                     
 
                    {/* <div class="quantity-content">
                        <div class="left-content">
                            <h6>No. of Orders</h6>
                        </div>
                        <div class="right-content">
                            <div class="quantity buttons_added">
                                <input type="button" value="-" class="minus"/><input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode=""/><input type="button" value="+" class="plus"/>
                            </div>
                        </div>
                    </div> */}
                    <div class="">
                        <h4 className='mt-4'>Total: ₦ {data.price}.00</h4>
                    </div>
                    <p>In stock</p>
                       <ul class="list-unstyled d-flex mt-3" >
                        <li><i class="fa fa-star" style={{color:"#f4be1d"}}></i></li>
                        <li><i class="fa fa-star" style={{color:"#f4be1d"}}></i></li>
                        <li><i class="fa fa-star" style={{color:"#f4be1d"}}></i></li>
                        <li><i class="fa fa-star" style={{color:"#f4be1d"}}></i></li>
                        <li><i class="fa fa-star" style={{color:"#f4be1d"}}></i></li>
                      
                    </ul>
                            <div className="row justify-content-md-end mt-3">
                                <div className="col-6">
                                    <div className="">
                                    <button className='btn btn-dark mt-3'><b>Add To Cart</b></button>
                                    </div>
                                </div>
                                <div className="col-6">
                                  {currentAdmin ? (
                                    <div className="text-end">
                                    <div className="d-flex justify-content-md-end mt-4 ">
                                    <img src={hgdelete} className='img-fluid  me-5' style={{width:'20px', cursor:"pointer"}} onClick={handleDelete}  alt="" />
                                    </div>
                                   </div>

                                  ) :(
                                    <div></div>
                                  )}
                             
                                </div>
                            </div>
                   
        </div>
  </div>
  </div>

{data.category !== 'Computer' ?   
<div className="container mt-5  mb-5">
<div className="row ">
  <div className="col-lg-12">
  <h4 className='fw-bold mb-3 mt-3'>Product Detail</h4>
  <hr className='text-danger' />
  <div className="card border-0">
  <div class="description mt-2 mb-5" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.description)}}></div>
    </div>
  </div>
  </div>
</div>

 : 

<div>
<div className="container mt-5 ">
<div className="row ">
  <div className="col-lg-12">
  <h4 className='fw-bold mb-3 mt-3'>Overview</h4>
  <hr className='text-danger' />
  <div className="card border-0">
  <div class="description mt-2 mb-5" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.description)}}></div>
    </div>
  </div>
  </div>
</div>
{/*  */}
<div>
  {computer.map((com) =>(
    <div key={com.id}>
    <h4 className='fw-bold mb-3'>Description</h4>
    <table class="table table-bordered" style={{width:"100%"}}>
    <thead>
    <tr >
    </tr>
    </thead>
    <tbody>
    <tr>
     <th scope="row" style={{width:"30%"}}>Brand</th>
     <td style={{width:"60%"}}>{data.brand} </td>
    </tr>
    <tr>
     <th scope="row">Series</th>
     <td colspan="2">
     {com.series}
     </td>
    </tr>
    <tr>
     <th scope="row">Item model number</th>
     <td colspan="2">
     {com.model}
     </td>
    </tr>
    <tr>
     <th scope="row">Item Weight</th>
     <td>
     {com.weight}
     </td>
    </tr>
    <tr>
     <th scope="row">Product Dimensions</th>
     <td>
     {com.dimension}
     </td>
    </tr>
    <tr>
     <th scope="row">Item Dimensions LxWxH</th>
     <td>
     {com.item}
     </td>
    </tr>
    <tr>
     <th scope="row">Color</th>
     <td>
     {com.color}
     </td>
    </tr>
    <tr>
     <th scope="row">Hardware Platform</th>
     <td>
     {com.hardware}
     </td>
    </tr>
    <tr>
     <th scope="row">Operating System</th>
     <td>
     {com.os}
     </td>
    </tr>
    <tr>
     <th scope="row">Processor Brand</th>
     <td>
     {com.processor}
     </td>
    </tr>
    <tr>
     <th scope="row">Number of Processors</th>
     <td>
     {com.number}
     </td>
    </tr>
    <tr>
     <th scope="row">Computer Memory Type</th>
     <td>
     {com.memory}
     </td>
    </tr>
    <tr>
     <th scope="row">RAM</th>
     <td>
     {com.ram}
     </td>
    </tr>
    <tr>
     <th scope="row">Hard Drive</th>
     <td>
     {com.drive}
     </td>
    </tr>
    <tr>
     <th scope="row">Screen display size</th>
     <td >
     {com.display}
     </td>
    </tr>
    <tr>
     <th scope="row">Screen Resolution</th>
     <td >
     {com.resolution}
     </td>
    </tr>
    <tr>
     <th scope="row">Graphics Coprocessor</th>
     <td >
     {com.graphics}
     </td>
    </tr>
    <tr>
     <th scope="row">Voltage</th>
     <td >
     {com.voltage}
     </td>
    </tr>
    <tr>
     <th scope="row">Batteries</th>
     <td >
     {com.battery}
     </td>
    </tr>
    <tr>
     <th scope="row">Wireless Type</th>
     <td>
     {com.wireless}
     </td>
    </tr>
    </tbody>
    </table>
    </div>
    
    ))} 

</div>
</div> 
 }
</div>
</>
: 
<div className="container">
<div className="row">
 <div className="col-md-12">
     <div className="d-flex justify-content-center">
       <div className='my-5 py-5'>
     <Loading  />
     </div>
   </div>
 </div>
</div>
</div>
}
</section>


    </>
    );
}

export default SingleProduct;
