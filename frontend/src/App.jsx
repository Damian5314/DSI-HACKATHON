import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './components/Navigation/Navigation';
import MapView from './pages/MapView';
import EventsList from './pages/EventsList';
import Profile from './pages/Profile';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<MapView />} />
            <Route path="/events" element={<EventsList />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
