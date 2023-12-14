
import computerHeader from './caption/computerHeader.webp'
import './computer.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import { BASEURL } from '../../../BaseURL/BaseURL';
import Loading from '../../../components/Loading/Loading';
import axios from 'axios';




const Computer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/product/`);
        const filtered = response.data.getAllProducts.filter(user => user.category === 'Computer')
        console.log(filtered)
        setData(filtered);
        setIsLoading(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(true);
      }
    };
    fetchData();
  }, []);



 const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = pageNumber => setCurrentPage(pageNumber);

  const previousPage = () => {
    if (currentPage !== 1) {
       setCurrentPage(currentPage - 1);
    }
 };

 const nextPage = () => {
  if (currentPage !== Math.ceil(data.length / postsPerPage)) {
     setCurrentPage(currentPage + 1);
  }
};


    return (
 <>
{/* Header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${computerHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Computers</h2>
   <h5 class=" mt-4 text-white text-center">Have what you need to run your business with maximum efficiency and reliability</h5>
   <p class="lead text-white text-center">Properly used, a computer can help you become more organized, work more efficiently, and accomplish more tasks.</p>
 </div>
</div>

<main class="container-fluid">
<div class="row g-0 ">
<div class="col-md-9 ">
<section class="ftco-section" id="skills-section">
		<div class="container">
			<div class="row justify-content-center   pt-4 pb-4">
        <h6>SHOWING 1–20 OF 32 RESULTS</h6>
			</div>
			<div class="row g-1 progress-circle ">
	
		{/* computer */}
    {isLoading ? (      
            currentPosts?.map((product) => {
              return(
                <div class="col-lg-3 mb-4" key={product.id}>
                <Link className='text-decoration-none text-dark' to={`/product/${product._id}`}>
                <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                  <div className="text-center take">
                  <img src={product.cloudinary_id[0].url} className='img-fluid' style={{height:"130px", width:"130px", objectFit:"cover"}}  alt="" />
                  </div>
                 <h5 class="fw-normal pt-3">{product.name} </h5>
                 <p className='lead fs-6'>{product.category}</p>
                 <div class="stars" style={{color:'black'}}>
                 <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                 </div>
                  <div class="d-flex justify-content-between">
                 <p className='mt-2 px-1 text-danger'>₦ {product.price}.00</p>
                 <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
               </div>
               </div>
               </Link>
               </div>
               
            )
              })
                  ) : (
                   
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
            )}



    
    <div className="mt-5">
      <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} className={'mt-5'} 	currentPage={currentPage}  previousPage={previousPage} nextPage={nextPage} />
    </div>


















{/* 

		  <div class="col-lg-3 mb-4">
				<div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={computer2} className='img-fluid pt-1' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">APPLE IMAC 21.5-(MHK03LL/A) 2020</h5>
			   <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦877,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>
		 </div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-4  bg-body rounded">
                <div className="text-center take">
                <img src={computer3} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-4">Apple MacBook Pro 14″ M1 Pro Chip</h5>
			   <p className='lead fs-6 pt-3'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦1,407,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={computer4} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">Asus MO3450 ZENBOOK FLIP 14.0″ TOUCH Laptop</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦757,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>


		<div class="col-lg-3 mb-4">
	            <div class=" mx-1  border shadow-lg p-4  bg-body rounded">
                <div className="text-center take">
                <img src={computer5} className='img-fluid pt-4' style={{paddingBottom:"25px"}} alt="" />
                </div>
               <h5 class="fw-normal pt-4">Apple Macbook Pro With Apple M1 Chip -13</h5>
               <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦907,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
           </div>
           </div>
		   </div>
		  <div class="col-lg-3 mb-4">
				<div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={computer6} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">Asus AMD Dual Core 8GB RAM 1TB HDD Backlit Keyboard 14″ Win 10</h5>
			   <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦186,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>
		 </div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-4  bg-body rounded">
                <div className="text-center take">
                <img src={computer7} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal">Asus E410 Intel Celeron N4020 4GB RAM 128GB</h5>
			         <p className='lead fs-6 pt-4'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦182,700.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={computer8} className='img-fluid pt-4' style={{paddingBottom:"12px"}} alt="" />
                </div>
               <h5 class="fw-normal pt-4">Asus X515JF-BR323T Intel Core I5 15.6″HD Win 10 2GB GRAPHICS</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦430,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
  
  
		<div class="col-lg-3 mb-4">
	            <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={computer9} className='img-fluid pt-5 pb-4' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-1">Dell G3 GAMING 15 3500</h5>
               <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦494,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
           </div>
           </div>
		   </div>
		  <div class="col-lg-3 mb-4">
				<div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                <div className="text-center take">
                <img src={computer10} className='img-fluid pt-5 pb-4' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-4">Dell Inspiron 13-7306-7941BLK CONVERTIBLE</h5>
			   <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦757,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>
		 </div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-4  bg-body rounded">
                <div className="text-center take">
                <img src={computer11} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-4">Dell Inspiron 13-I5379-5043GRY-PUS 2 In 1</h5>
			   <p className='lead fs-6 pt-3'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦462,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={computer12} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">Dell Inspiron 13-I5379-7923GRY-PUS 2 In 1</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦388,150.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>


		 <div class="col-lg-3 mb-4" >
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take" style={{height:"10rem"}}>
                <img src={computer13} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">Dell Inspiron 14-7490-7842SLV</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦527,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4" style={{height:"10rem"}}>
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={computer14} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">Dell Inspiron15-3501BLK-PUS</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦263,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4" >
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded" style={{height:"22.4rem"}}>
                <div className="text-center take">
                <img src={computer15} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">Asus MO3450 ZENBOOK FLIP 14.0″ TOUCH Laptop</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦757,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">  
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded" style={{height:"22.4rem"}}>
                <div className="text-center take">
                <img src={computer16} className='img-fluid' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">Dell Latitude 3410</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦227,700.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
    
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1 border shadow-lg p-3 bg-body rounded" style={{}}>
                <div className="text-center take">
                <img src={computer17} className='img-fluid' style={{paddingTop:"2.5rem"}} alt="" />
                </div>
               <h5 class="fw-normal pt-5">Dell Vostro 3400</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦263,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={computer18} className='img-fluid pt-5' style={{}} alt="" />
                </div>
               <h5 class="fw-normal">Dell Vostro 3500</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦352,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={computer19} className='img-fluid pt-5' style={{}} alt="" />
                </div>
               <h5 class="fw-normal pt-5">Dell Vostro 3501</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦263,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>
		 <div class="col-lg-3 mb-4">
		 <div class=" mx-1  border shadow-lg p-3 bg-body rounded">
                <div className="text-center take">
                <img src={computer20} className='img-fluid' style={{paddingTop:"1.2rem"}} alt="" />
                </div>
               <h5 class="fw-normal pt-3">Hp 14 AMD RYZEN 3 3250U 12GB RAM 1TB HDD Windows 10</h5>
			        <p className='lead fs-6'>Computer</p>
               <div class="stars" style={{color:'black'}}>
               <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
               </div>
                <div class="d-flex justify-content-between">
               <p className='mt-2 px-1 text-danger'>₦247,000.00</p>
               <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
              </div>
              </div>				
		</div>

     */}
		</div>
		</div>
	</section>
</div>
<div class="col-md-3  mb-5">
      <div class="position-sticky p-3" style={{top:"2rem"}}>
        <div class="mb-3 mt-4 rounded">
          {/* form */}
        <form class="d-flex mb-3 pb-5 pt-5">
        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-success me-5" type="submit">Search</button>
        </form>
          <h4 class="">Categories</h4>
          <ul className="list-unstyled">
            <li>Computers</li>
            <li>Office Equipment</li>
            <li>POS System</li>
            <li>Printers</li>
          </ul>
            {/* range */}
          <h4 class="">Filter by price</h4>
          <input type="range"/>
          {/* range end */}


        </div>
      </div>
</div>
</div>
</main> 

</>
    );
}

export default Computer;
