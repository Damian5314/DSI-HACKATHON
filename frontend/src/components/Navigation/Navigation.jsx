import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#2196F3',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = (isActive) => ({
    color: 'white',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle(location.pathname === '/')}>
        🗺️ Kaart
      </Link>
      <Link to="/events" style={linkStyle(location.pathname === '/events')}>
        📋 Events
      </Link>
      <Link to="/profile" style={linkStyle(location.pathname === '/profile')}>
        👤 Profiel
      </Link>
    </nav>
  );
}

export default Navigation;
