type Props = {
    page: number;
    totalCount: number; // Total items
    pageSize?: number; // default 10
    onPageChange: (page: number) => void;
    hasNext?: boolean;     
    hasPrevious?: boolean; 
  };
  
  export default function Pagination({
    page, totalCount, onPageChange, pageSize = 10, hasNext, hasPrevious,
  }: Props) {
    const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1 || hasPrevious === false}
          aria-label="Previous page"
        >
          ◀ Prev
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages || hasNext === false}
          aria-label="Next page"
        >
          Next ▶
        </button>
      </div>
    );
  }
  