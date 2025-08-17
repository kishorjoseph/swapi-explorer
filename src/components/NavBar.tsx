import { NavLink } from 'react-router-dom';

const tabs = [
  { to: '/people', label: 'People' },
  { to: '/planets', label: 'Planets' },
  { to: '/species', label: 'Species' },
  { to: '/starships', label: 'Starships' },
  { to: '/vehicles', label: 'Vehicles' },
];

export default function NavBar() {
  return (
    <header style={{ borderBottom: '1px solid #e5e7eb', background: '#0b1220', color: 'white' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ fontWeight: 700 }}>SWAPI Explorer</div>
        <nav style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {tabs.map(t => (
            <NavLink
              key={t.to}
              to={t.to}
              style={({ isActive }) => ({
                padding: '0.35rem 0.6rem',
                borderRadius: 8,
                textDecoration: 'none',
                color: 'white',
                background: isActive ? '#1f2937' : 'transparent',
              })}
            >
              {t.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
