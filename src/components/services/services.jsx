

const Services = () => {
    return (
<>
<header style={{marginTop:'100px'}}>
   <div class="container mb-5">
    <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
          <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
          <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
        </div>
      </div>
    </div>
  </header>    


   <div class="container-fluid">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm" style={{ border:'none'}}>
                <img  class="mx-auto d-block" src="https://www.dell.com/content/dam/web-resources/cross-project/images/backgrounds/services-for-home-blue.svg" width="100" height="70" alt="home"/>
                {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> --> */}
              <div class="card-body">
                <h3 class="d-flex justify-content-center">SERVICES FOR HOME</h3>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-center align-items-center">
                    <button class="btn btn-primary" type="button">Primary action</button>
                </div>
              </div>
            </div>
            
          </div>
          <div class="col">
            <div class="card shadow-sm"style={{ border:'none'}}>
                <img  class="mx-auto d-block" src="https://www.dell.com/content/dam/web-resources/cross-project/images/backgrounds/small-business-services-blue.svg" width="100" height="70" alt="home"/>
                 {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
              <div class="card-body">
                <h3 class="d-flex justify-content-center">SERVICES FOR HOME</h3>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-center align-items-center">
                    <button class="btn btn-primary" type="button">Primary action</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm" style={{ border:'none'}}>
                <img  class="mx-auto d-block" src="https://www.dell.com/content/dam/web-resources/cross-project/images/icons/network-horiz-blue-01.svg" width="100" height="70" alt="home"/>
                {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
              <div class="card-body">
                <h3 class="d-flex justify-content-center">SERVICES FOR HOME</h3>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-center align-items-center">
                    <button class="btn btn-primary" type="button">Primary action</button>
                </div>
              </div>
            </div>
          </div>
          </div>
   </div>  
</>
    );
}

export default Services;
