import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import MapView from './pages/MapView';
import EventsList from './pages/EventsList';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<MapView />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
