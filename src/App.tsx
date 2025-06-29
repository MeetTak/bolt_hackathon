import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Map } from './pages/Map';
import { Report } from './pages/Report';
import { Profile } from './pages/Profile';
import { AdoptSpot } from './pages/AdoptSpot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
        <Header />
        <main className="pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/report" element={<Report />} />
            <Route path="/adopt" element={<AdoptSpot />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;