import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="nav-logo">Community Events</h1>
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            🗺️ Kaart
          </Link>
          <Link
            to="/events"
            className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
          >
            📋 Events
          </Link>
          <Link
            to="/profile"
            className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            👤 Profiel
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
