import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CommonDashboard({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = location.state || {}; 

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome {role } to Your Dashboard</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </header>
        <section className="dashboard-content">
          {children} 
        </section>
      </main>
    </div>
  );
}

export default CommonDashboard;
