import React from 'react';

const Main = () => {
    return (
<>
{/* consult */}
<nav class="navbar navbar navbar-dark bg-body-secondary">
<div class="container ">
  <div class="row g-4 py-4">
    <div class="col d-flex align-items-end ">
      <div> 
        <h3 class="fs-2 mt-4 mb-3 ">Featured title</h3> 
        <p>Want to know how to increase your brand visibility, boost audience engagement, drive traffic, increase social media followers, promote your products and service online and increase sales for your business?
          Elonatech offers tailored advice on how to reach and engage your audience better, increase conversion and maximize profit through a bespoke monthly/yearly digital marketing plan for your business</p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Button with data-bs-target
        </button>
        {/* <!-- form --> */}
        <div class="collapse" id="collapseExample">
          <form>
            <div class="mb-2 mt-4">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  </div>
</nav>

</>
    );
}

export default Main;
