
const BlogWrite = () => {
    return (
        <div>
       
<div className="container">

<form className=" ">
<div className="container  mb-5">
<div className="row">
<div className="col-md-8">
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>

  <div class="mb-3" >
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea style={{overflowY:"scroll"}} class="form-control" id="exampleFormControlTextarea1" rows="14"></textarea>
 </div>
</div>
<div className="col-md-4">
<div class="mb-3 mt-2">
  <label for="formFile" class="form-label"></label>
  <input class="form-control" type="file" id="formFile"/>
</div>  

{/*  */}
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Author</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>


<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
 Trends
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
   News
  </label>
</div>




</div>
<div className="col-md-5 mt-3">
<button type="submit" class="btn btn-primary">Publish</button>
</div>
</div>
</div>
</form> 
</div>
</div>
    );
}

export default BlogWrite;
