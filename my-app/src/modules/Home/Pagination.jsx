export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
}
