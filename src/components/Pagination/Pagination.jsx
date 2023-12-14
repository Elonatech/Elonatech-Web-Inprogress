import { Link } from "react-router-dom";

const Pagination = ({postsPerPage, totalPosts, paginate , nextPage, previousPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination justify-content-center'>
      <li className='page-item' style={{color:"#34548c"}}>
          <Link onClick={previousPage}  className='page-link text-decoration-none' style={{color:"#34548c"}}>Prev</Link>
        </li> 
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`} style={{color:"#34548c"}}>
            <Link onClick={() => paginate(number)}  className='page-link text-decoration-none'> {number}</Link>
          </li>
        ))}
     <li className='page-item' style={{color:"#34548c"}}>
          <Link onClick={nextPage}  className='page-link text-decoration-none' style={{color:"#34548c"}}>Next</Link>
      </li> 
      </ul>
    </nav>
  );



};

export default Pagination;
