import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// Placeholder components for MainContent and Footer
function MainContent() {
  return <div>Main Content Area</div>;
}

function Footer() {
  return <footer className="bg-gray-200 text-center p-4">© 2023 Your Company</footer>;
}