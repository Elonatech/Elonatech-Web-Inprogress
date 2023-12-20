import React, { useState } from 'react';
import { BASEURL } from "../../BaseURL/BaseURL";
import { FiEye , FiEyeOff } from "react-icons/fi";
import elonatech from './caption/Elonatech.png';
import Getintouch from "../GetInTouch/getintouch";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const AdminLogin = () => {
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
   
    let navigate =  useNavigate();

     const handleSubmit = async (e) =>{
     e.preventDefault();
      const newUser = {
      email,
      password
    }
    try {
      
      const res =  await axios.post(`${BASEURL}/api/v1/auth/login`, newUser, {headers:{"Content-Type":"application/json"}})
      localStorage.setItem('token', JSON.stringify(res.data.access))
      navigate('/dashboard');
    } catch (error) {
      console.log(error)
    } 
}
return (
        <>
{/* Header */}
<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Login</h2>
   <h5 class=" mt-4 text-white text-center"></h5>
   <p class="lead text-white text-center"></p>
 </div>
</div>
    <div className="container mb-5" style={{marginTop:"70px", boxShadow:"rgba(0, 0, 0, 0.4) 0px 30px 90px"}} >
    <div className="row">
     <div className="col-md-7">
     <form action="" onSubmit={handleSubmit} className='mx-auto '>
      <h4 className='text-center mt-5 fw-bold'>Admin Login</h4>
        <div class="mb-3 mt-5">
            <label for="exampleInputEmail1" class="form-label fs-5 fw-bold "> Email </label>
            <div className="border border rounded">  
            <input type="email" class="form-control form-controli border-0" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div id="emailHelp" class="form-text fw-bold text-white ">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
            <label for="exampleInputPassword1" class="form-label fs-5 fw-bold ">Password</label>
            <div className="d-flex justify-content-between form-control">
                <input className='input-password form-controli border-0' type={showPassword ? 'text' : 'password'} value={password}   onChange={(e) => setPassword(e.target.value)} />
                <div type="button" onClick={handleTogglePassword}>
                {showPassword ? <FiEye /> : <FiEyeOff />} 
                </div>
            </div>
        </div>
        <button type="submit"  class="btn btn-danger pe-5 ps-5 btn-lg mt-4 mb-5"><h4>Login</h4></button>
    </form>
     </div>
     <div className="col-md-5">
        <img src={elonatech} className="img-fluid" alt="" />
     </div>
    </div>
   
    </div>

    <Getintouch />
            
        </>
    );
}

export default AdminLogin;
