import { useEffect } from "react";



 const scrollTop = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [])
 }

 export default scrollTop