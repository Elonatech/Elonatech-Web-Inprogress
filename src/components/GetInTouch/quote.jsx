import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: 'px solid #000',
  boxShadow: 24,
  p: 4,
};







const Quote = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <>
      <button className='btn btn-primary' onClick={handleOpen}>Apply Now</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style} className="rounded">
       
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="">
                    <h4 className='ms-2'>Quote</h4> 
                    </div>
                </div>
                <div className="col-6">
                    <div className="">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" class="btn-close mt-2" aria-label="Close"></button>
                     </div>
                    </div>
                </div>
                  </div>
     <hr />
      <div className=" row px-3">
                <div class="col-6">
              <div class=" mt-2">
                <label for="validationCustom01" class="form-label fw-bold">Full name<span>*</span> </label>
                  <input type="text" class="form-control" placeholder="Full name" aria-label="First name"/>
                </div>
                <div class="col mt-3">
                <label for="validationCustom01" class="form-label fw-bold">Company name<span>*</span> </label>
                  <input type="text"  class="form-control" placeholder="Last name" aria-label="Company name"/>
                </div>
              </div>
              <div className=" row mt-3">
                <div class=" col-md-7">
                <label for="validationCustom01" class="form-label fw-bold">Email<span>*</span> </label>
                  <input type="text"  class="form-control" placeholder="Email" aria-label="Last name"/>
                </div>
                <div class=" col-md-5">
                <label for="validationCustom01" class="form-label w-100 fw-bold">Phone Number<span>*</span> </label>
                  <input type="text"  class="form-control" placeholder="080 xxxx xxxx" aria-label="Last name"/>
                </div>
            </div>
             
            <div className="row mt-3">
                <div class=" col">
                <label for="validationCustom01" class="form-label fw-bold">Title Of Project<span>*</span> </label>
                  <input type="text"  class="form-control" placeholder="Title Of Project" aria-label="Last name"/>
                </div>
                <div class=" col">
                <label for="validationCustom01" class="form-label w-100 fw-bold">Project Location<span>*</span> </label>
                  <input type="text"  class="form-control" placeholder="Project Location" aria-label="Last name"/>
                </div>
                </div>

            
                  <div className='col mt-3 ' style={{marginBottom:"4rem"}}>
                  <label  for="validationCustom01" class="form-label fw-bold">Cover Letter</label> 
                  <ReactQuill 
                  theme="snow"
                   className='' 
                    placeholder="cover letter" 
                    style={{height:"100px",}} 
                    />
                  </div>
                <div class="form-floating mt-3 " >
              </div>
            </div>
           <div className="text-end mt-4">
          <button className='btn btn-primary pe-4 ps-4'>Close</button>
           <button className='btn btn-primary pe-4 ps-4 ms-3'>Submit</button>
         </div>
        </Box>
      </Modal>



            
        </>
    );
}

export default Quote;
