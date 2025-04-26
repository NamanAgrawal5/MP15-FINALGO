import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/topBar';
import Login from './pages/login.jsx';
import Register from './pages/Register.jsx';
import CandlestickChart from './pages/Home';
import Alpha from './components/AlphaVantage.jsx';
import LandingPage from './pages/landingPage.jsx';
import './App.css'
import UserProfile from './pages/UserProfile.jsx';
function App() {
  return (
    <Router>
      <div className="app-container">
        <TopBar />
        <div className="content-container">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/reg' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<CandlestickChart />} />
            <Route path='/alpha' element={<Alpha />} />
            <Route path='/profile' element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
