import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './shopWrite.css';
import  { useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import axios from 'axios';
import { BASEURL } from '../../../../BaseURL/BaseURL';


const shopWrite = () => {
     
    const getInitialState = () => {
    const value = "Pos";
    return value;
    };



    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState(getInitialState);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);


    //handle images
    const handleImage = (e) =>{
        const files = Array.from(e.target.files);
        files.forEach(file =>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () =>{
                setImages(oldArray => [...oldArray, reader.result ])
            }
        })
 }

const navigate = useNavigate();

//submit the form
    const handleSubmit = async (e) =>{
        setLoading(true);
        e.preventDefault();
        const newData = {
            name, 
            description, 
            price, 
            brand, 
            category, 
            images
        }
        try {
            const data = await axios.post(`${BASEURL}/api/v1/product/create`, newData)
            if  (data.success === true){
                setLoading(false);
                setImages([]);
                toast.success('slide created successfully');
            }
            navigate('/shop')
        } catch (error) {
            console.log(error)
            toast.error(error);
        }

    }

  return (
<>
    <div className=' container bg-size py-5' style={{marginTop:"5rem", }}>
        <h4 className='text-center mb-5 fw-bold'> Office, Pos and Printer Upload</h4>
        <div className="" style={{}}>
            <div className="row">
                <div class="mb-3 col-md-6">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Gadget Name'  onChange={(e) => setName(e.target.value)} aria-describedby="emailHelp"  />
                </div>
                <div class="mb-3 col-md-6">
                    <label for="exampleInputEmail1" class="form-label">Brand</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Brand Name' onChange={(e) => setBrand(e.target.value)}  aria-describedby="emailHelp"  />
                </div>
            </div>
             <div className="row">
                <div class="mb-3 col-md-4 mt-2">             
                    <label for="price">Price:</label>
                    <input type="text" id="price" class="form-control" onChange={(e) => setPrice(e.target.value)}  name="price" placeholder="Enter price" ></input>
                </div>
                <div class="mb-3 col-md-4">
                    <label for="formFile" class="form-label">File</label>
                    <input onChange={handleImage} type="file" id="formupload" name="image" className="form-control" multiple />
                </div>
                <div class="mb-3 col-md-4">
               <label for="exampleInputEmail1" class="form-label">Categories</label>
              <select  class="form-select" value={category} onChange={(e) => setCategory(e.target.value)}  id="inputGroupSelect01">
              <option value="Pos System">Pos System</option>
              <option value="Office">Office</option>
              <option value="Printer">Printer</option>
             </select>
             </div>
            </div> 
            <div class="mb-3" >
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <div className="editorContainer" id="exampleFormControlTextarea1">
            <ReactQuill className="editor" theme="snow" onChange={(value) => setDescription(value)} />
           </div>
          </div>
          <div className="col-md-5 mt-3">
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>{loading ? "Uploading..." : "Upload"}</button>
          </div>
        </div>
    </div> 
</>
  )
}

export default shopWrite