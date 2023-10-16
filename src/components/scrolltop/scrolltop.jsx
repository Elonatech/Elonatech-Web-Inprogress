import { useEffect } from "react";



 const scrollTop = ({result}) => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [result])
 }

 export default scrollTop