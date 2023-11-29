import { useEffect, useState } from 'react';
import { Link, useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { BASEURL } from '../../BaseURL/BaseURL';
import hgdelete from './caption/delete.png'
import edit from './caption/editing.png';
import './blog.css';
import Loading from '../Loading/Loading';


const BlogDetails = () => {
const [title , setTitle] = useState('');
const [description, setDescription] = useState('');
const [author, setAuthor] = useState('');
const [category, setCategory] = useState('');
const [cloudinary_id , setCloudinary_id] = useState('');
const [isLoading, setIsLoading] = useState(false);

const { id } = useParams()
const navigate = useNavigate();

useEffect(() =>{
const fetchBlog = async ()=>{
    try {
    const res = await axios.get(`${BASEURL}/api/v1/blog/${id}`);
    setTitle(res.data.getBlogById.title)
    setDescription(res.data.getBlogById.description)
    setAuthor(res.data.getBlogById.author)
    setCategory(res.data.getBlogById.category)
    setCloudinary_id(res.data.getBlogById.cloudinary_id)  
    setIsLoading(true);
    } catch (error) {
    console.log(error);
    setIsLoading(true);
    }

}
fetchBlog()
},[]);

const handleDelete = async () => {
const res = await axios.delete(`${BASEURL}/api/v1/blog/${id}`)
console.log(res)
navigate('/blog')
};


return (
<>
{/* Header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"300px" ,marginBottom:"45px", backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-2  text-white text-center">Blog Details</h2>
   <h5 class=" mt-4 text-white text-center">Have what you need to run your business with maximum efficiency and reliability</h5>
 </div>
</div>


<div className="container mb-5">
   <div className="row">
   <div className="col-md-9">
    <div className="container">
        <div className="row">
        <div className="col-md-12 mt-4">
        <ol class="breadcrumb ">
            <li class="breadcrumb-item"> <Link className='text-dark' style={{textDecoration:"none"}} to={'/'}>Home</Link></li>
            <li class="breadcrumb-item"> <Link className='text-dark' to={'/blog'}   style={{textDecoration:"none"}} >Blog</Link></li> 
         </ol>
 {isLoading ? (         
<div>
<h3 className='fw-bold'>{title}</h3>
<div className="mt-4 ">
<div className="row">
<div className="col-md-12">
 <div className="card border-0 rounded ">
<img src={cloudinary_id} alt="" className="singlePostImg rounded" />
</div>
</div>
</div>
</div>
<div className="container-flui mt-3 mb-4">
<div className="row">
<div className="col-6 col-md-6">
<h6>Author: <span className='fst-italic ms-2'>{author}</span></h6>
</div>
<div className="col-6 col-md-6">
<div className="d-flex justify-content-end">
<img src={edit} className='img-fluid me-3' style={{width:'20px' , cursor:"pointer"}}  alt="" />
<img src={hgdelete} className='img-fluid' style={{width:'20px', cursor:"pointer"}} onClick={handleDelete}  alt="" />
</div>
</div>
</div>
</div>
<div className="description">{description}</div>
</div>
) : (
    <div className='' style={{marginLeft:"25rem"}}>
     <Loading  />
    </div>
)}
</div>
</div>
</div>





{/*  */}
<div className="container bg-light">
   <h3 className='fw-bold mb-3 mt-5 pt-4' style={{color:"#0b159d"}}>Related Posts</h3>
    <div className="row">
        <div className=" col col-md-3">
            <div className="">
                <h6 style={{color:"#0b159d"}}>Reasons Why You Need Digital Marketing for Your Business</h6>
                <p className='text-danger lead fs-6'>August 26, 2021</p>
            </div>
            </div>
        <div className="col-md-3">
        <div className="">
                <h6 style={{color:"#0b159d"}}>Professional, Creative & Responsive Websites</h6>
                <p className='text-danger lead fs-6'>August 26, 2021</p>
            </div>
            </div>
        <div className="col-md-3">
        <div className="">
                <h6 style={{color:"#0b159d"}}>Office Equipment & Consumables</h6>
                <p className='text-danger lead fs-6'>August 26, 2021</p>
            </div>
        </div>
        <div className="col-md-3">
        <div className="">
                <h6 style={{color:"#0b159d"}}>Printer Sales and Supply</h6>
                <p className='text-danger lead fs-6'>August 26, 2021</p>
            </div>  
        </div>
    </div>
</div>
</div>
   


<div className="col-md-3">
    <div className="mt-4">
        <h5 style={{color:"#34548c"}}>Categories</h5>
        <ul className='list-unstyled mt-2'>
            <li>News</li>
            <li>Trends</li>
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
    );
}

export default BlogDetails;
