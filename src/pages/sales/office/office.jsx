import officeHeader from './captions/officeHeader1.jpg'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import { BASEURL } from '../../../BaseURL/BaseURL';
import Loading from '../../../components/Loading/Loading';
import axios from 'axios';







const Office = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/product/`);
        const filtered = response.data.getAllProducts.filter(user => user.category === 'Office')
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
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${officeHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Office Equipment</h2>
   <h5 class=" mt-4 text-white text-center">Do twice as much work simultaneously with quality office equipment</h5>
   <p class="lead text-white text-center">Increase productivity and the overall operating speed of your office operations and staff overall performance.</p>
 </div>
</div>

{/* start */}
<main class="container-fluid">
<div class="row g-0 ">
<div class="col-md-9 ">
<section class="ftco-section" id="skills-section">
		<div class="container">
			<div class="row justify-content-center   pt-4 pb-4">
        <h6>SHOWING 1–20 OF 32 RESULTS</h6>
			</div>
			<div class="row g-1 progress-circle ">
				{/*  */}

       {isLoading ? (      
            currentPosts?.map((product) => {
              return(
                <div class="col-lg-3 mb-4" key={product.id}>
                <Link className='text-decoration-none text-dark' to={`/product/${product._id}`}>
                <div class=" mx-1  border shadow-lg p-3  bg-body rounded">
                  <div className="text-center take">
                  <img src={product.images[0].url} className='img-fluid' style={{height:"130px", width:"130px", objectFit:"cover"}}  alt="" />
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
            <li><Link to={'/computers'} className='text-decoration-none text-dark'>Computers</Link></li>
            <li><Link to={'/office-equipment'}  className='text-decoration-none text-dark'>Office Equipment</Link></li>
            <li><Link to={'/pos'} className='text-decoration-none text-dark'>POS System</Link></li>
            <li><Link to={'/printer-sales'} className='text-decoration-none text-dark'>Printers</Link></li>
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
{/* End */}
    
     </>
    );
}

export default Office;
