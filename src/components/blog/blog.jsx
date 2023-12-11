import React, { useState, useEffect } from 'react';
import axios from 'axios';
import blogHeader from './captions/9354657.jpg';
import { Link } from 'react-router-dom';
import { BASEURL } from '../../BaseURL/BaseURL';
import Loading from '../Loading/Loading';
import DOMPurify from 'dompurify';
import Pagination from '../Pagination/Pagination';




const Blog = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASEURL}/api/v1/blog/`);
          setData(response.data.getAllBlogs);
          setIsLoading(true);
        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(true);
        }
      };
      fetchData();
    }, []);
  


    // pagination

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
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
    <>
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" ,marginBottom:"45px", backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${blogHeader})`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Blog</h2>
   <h5 class=" mt-4 text-white text-center">Have what you need to run your business with maximum efficiency and reliability</h5>
   <p class="lead text-white text-center">Properly used, a computer can help you become more organized, work more efficiently, and accomplish more tasks.</p>
 </div>
</div>
{/* Sdf */}

<div className="container mb-5">
    <div className="row">
    <ol class="breadcrumb ms-5 ">
            <li class="breadcrumb-item"> <Link className='text-dark' style={{textDecoration:"none"}} to={'/'}>Home</Link></li>
            <li class="breadcrumb-item"> <Link className='text-dark' to={'/blog'}   style={{textDecoration:"none"}} >Blog</Link></li> 
        </ol>
   <div className="col-md-9">
    <div className="container">
        <div className="row">
            {isLoading ? (      
            currentPosts?.map((item) => (
                        <div className="col-md-12" key={item.id}>
                          <Link className='text-decoration-none text-dark' to={`${item._id}`}>
                                <div className="mt-4">
                                    <div className="row shadow" style={{width:"100%"}}>
                                        <div className="col-md-6" >
                                      <img src={item.cloudinary_id} className='img-fluid'  alt="" />
                                        </div>
                                        <div className="col-md-6">
                                            <h6 className='fs-6 pb-3'>{item.category}</h6>
                                            <h5 className='pb-3' style={{color:"#34548c"}}> <Link className='text-decoration-none' to={`${item._id}`}>{item.title}</Link></h5>
                                            <p className='fs-6 pb-4' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.description.slice(0,150))}}></p>
                                            <p className='fs-6'> {item.author} / {new Date(item.createdAt).toDateString()}   </p>
                                            </div>
                                        </div>
                                    </div>
                              </Link>
                        </div>
                ))
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
        </div>  
      <div className="mt-5">
      <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} className={'mt-5'} 	currentPage={currentPage}  previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
   </div>
    
<div className="col-md-3">
    <div className="mt-4">
        <h5 style={{color:"#34548c"}}>Categories</h5>
        <ul className='list-unstyled mt-2'>
            <li>News</li>
            <li>Trend</li>
        </ul>
        <h5 className='mt-2' style={{color:"#34548c"}}>Be the first to know</h5>
        <p>Enter your email address below to subscribe to our newsletter</p>
        <form>
        <div class="mb-2">
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email address'  aria-describedby="emailHelp"/>
       </div>
       <div class="d-grid gap-2">
       <button class="btn btn-danger" type="button">Subscribe</button>
    </div>
  <div class="mb-3 form-check mt-2">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label lead fs-6 " for="exampleCheck1">I accept the <a href="">Privacy Policy</a></label>
  </div>
</form>
</div>
</div>
</div>

</div>


    </>


    </>
    );


}

export default Blog;
