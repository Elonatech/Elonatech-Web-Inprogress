import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
// import './infinte.css

const Infinite = () => {

    const [dataSource , setDataSource] = useState(Array.from({length:10}));
    const [hasMore , setHasMore] = useState(true)
 
    const fetchMoreData = () =>{
     if(dataSource.length < 100){
      // MAKING API CALL
      setTimeout(() =>{
       setDataSource(dataSource.concat(Array.from({length:10})))  
        }, 500);
        } else {
          setHasMore(false) ;
        }
      
    }

    return (
    <>

<div class="container-fluid bg-secondary py-5 " style={{height:"500px" , marginBottom:"20px", backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Office Equipment</h2>
   <h5 class=" mt-4 text-white text-center">Do twice as much work simultaneously with quality office equipment</h5>
   <p class="lead text-white text-center">Increase productivity and the overall operating speed of your office operations and staff overall performance.</p>
 </div>
</div>



<InfiniteScroll className="mb-5" style={{overflowY:"hidden" , textAlign:"center"}}
dataLength={dataSource.length} 
next={fetchMoreData} 
hasMore={hasMore}
loader={   <div class="spinner-border text-danger" style={{marginLeft:"90px"}}></div>}
endMessage={<h4 style={{marginLeft:"140px"}}>You are all set!!!</h4>}
>

{dataSource.map((item , index)=>{
    return (
   

<div className=" ms-5 border border-3 mt-3  col-md-7">This is a div #{index + 1} inside InfinteScroll</div>
      
    )
})} 





</InfiniteScroll>
            
    </>
    );
}

export default Infinite;
