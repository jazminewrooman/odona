import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectExplanation from './components/ProjectExplanation';
import ProjectsSection from './components/ProjectsSection';
import StakingInterface from './components/StakingInterface';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [stakingData, setStakingData] = useState({
    totalStaked: 0,
    girlsSupported: 0,
    projectsSupported: 0
  });

  const updateStaking = (amount, projectName) => {
    setStakingData(prev => ({
      totalStaked: prev.totalStaked + amount,
      girlsSupported: prev.girlsSupported + Math.floor(amount / 10),
      projectsSupported: prev.projectsSupported + 1
    }));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProjectExplanation />
              <ProjectsSection />
            </>
          } />
          <Route path="/staking" element={
            <StakingInterface onStake={updateStaking} />
          } />
          <Route path="/dashboard" element={
            <Dashboard stakingData={stakingData} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
