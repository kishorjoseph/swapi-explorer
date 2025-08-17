import { Link } from 'react-router-dom';

export default function Home() {
  const tiles = [
    { to: '/people', label: 'People' },
    { to: '/planets', label: 'Planets' },
    { to: '/species', label: 'Species' },
    { to: '/starships', label: 'Starships' },
    { to: '/vehicles', label: 'Vehicles' },
  ];

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <h1>Explore the Star Wars Universe</h1>
      <div
        style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        }}
      >
        {tiles.map(t => (
          <Link
            key={t.to}
            to={t.to}
            style={{
              padding: '1rem',
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
