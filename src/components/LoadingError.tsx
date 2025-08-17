export function Loading({ label = 'Loading...' }) {
    return <div role="status" aria-live="polite">{label}</div>;
  }
  
  export function ErrorBox({ message = 'Error' }: { message?: string }) {
    return (
      <div role="alert" style={{ background: '#ffff', color: 'red', border: '1px solid red', padding: '0.75rem', borderRadius: 8 }}>
        {'Error Loading data...'}
      </div>
    );
  }
  