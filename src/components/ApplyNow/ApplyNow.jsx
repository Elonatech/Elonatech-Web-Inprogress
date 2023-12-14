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

const  ApplyNow = () =>{
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className='btn btn-primary' onClick={handleOpen}>Apply Now</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded">
        <div className=" px-3">
              <div class="row mt-2">
                <div class="col">
                <label for="validationCustom01" class="form-label fw-bold">First name<span>*</span> </label>
                  <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div class="col">
                <label for="validationCustom01" class="form-label fw-bold">Last name<span>*</span> </label>
                  <input type="text"  class="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
              </div>
              <div className="row mt-2">
                <div class=" col">
                <label for="validationCustom01" class="form-label fw-bold">Email<span>*</span> </label>
                  <input type="text"  class="form-control" placeholder="Email" aria-label="Last name"/>
                </div>
                <div class=" col">
                <label for="validationCustom01" class="form-label w-100 fw-bold">Phone Number<span>*</span> </label>
                  <input type="number"  class="form-control" placeholder="080 xxxx xxxx" aria-label="Last name"/>
                </div>
                </div>
                <div class="row mt-2">
                  <div class="col-4">
                    <label for="validationCustom01" class="form-label fw-bold">Gender<span>*</span> </label>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>male</option>
                      <option value="1">female</option>
                      </select>
                  </div>
                  <div class="col-8">
                    <label for="validationCustom01" class="form-label fw-bold">Residence<span>*</span> </label>
                    <input type="text"  class="form-control" placeholder="Current residence(State,Area,Nearest B/s)" aria-label="Last name"/>
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col-4">
                    <label for="validationCustom01" class="form-label fw-bold">Date of Birth<span>*</span> </label>
                    <input type="date"  class="form-control" placeholder="mm/dd/yy" aria-label="Last name"/>
                  </div>
                  <div class="col-8">
                  <div class="mb-2">
                    <label for="formGroupExampleInput" class="form-label fw-bold">Skills/Specialty<span>*</span> </label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="separate each skill with a comma " />
                  </div>
                  </div>
                </div>
                <div className="mt-2">
                <label for="inputState" class="form-label fw-bold">Job Category<span>*</span> </label>
                    <select id="inputState" class="form-select">
                      <option selected>Job Role Applying For?</option>
                      <option >Graphic Designer/Digital Marketer</option>
                      <option >Full Stack Web developer</option>
                      <option >Digital Marketer</option>
                      <option >Animations/Motion Graphics & UI/UX Graphic Designer</option>
                      <option >Systems/Network Engineer</option>
                      <option >Marketing & Sales Representative</option>
                    </select>
                </div>
                <div class="mt-2">
                  <label for="inputState" class="form-label fw-bold">Current Employment Status<span>*</span> </label>
                    <select id="inputState" class="form-select">
                      <option selected>Unemployed</option>
                      <option >Employed</option>
                      <option >Freelance</option>
                    </select>
                  </div>
                  <div class=" mt-3">
                    <label for="inputState" class="form-label fw-bold">Upload your CV (PDF) <span>*</span> </label>
                      <input type="file" class="form-control pt-1 " id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" style={{fontSize:'12px'}}/>
                    <p className='pt-2'>Accepted file types: pdf, Max. file size: 150 MB.</p>
                  </div>
                  <div className='col ' style={{marginBottom:"4rem"}}>
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
    </div>
  );
}

export default ApplyNow;