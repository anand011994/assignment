// import React from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

// const pieData = [
//   { name: "Not Started", value: 92, color: "#FF7043" },
//   { name: "In Progress", value: 58, color: "#FFA726" },
//   { name: "Cancelled", value: 20, color: "#EF5350" },
//   { name: "Completed", value: 16, color: "#66BB6A" },
// ];

// const barData = [
//   { name: "Development", Completed: 41 },
//   { name: "Learning", Completed: 71 },
//   { name: "Team", Completed: 55 },
// ];

// const GoalsVisualization = () => {
//   return (
//     <div className="goals-container">
//       <header className="header">
//         <input type="text" placeholder="Global Search" className="search-bar" />
//       </header>

//       <section className="goal-overview">
//         <div className="goal-summary">
//           <h3>Goals Status</h3>
//           <p><strong>45%</strong> Total Complete</p>
//         </div>
//         <div className="goal-categories">
//           <div className="category-box">
//             <h4>Development Goals</h4>
//             <p>41% Completed</p>
//           </div>
//           <div className="category-box">
//             <h4>Learning Goals</h4>
//             <p>71% Completed</p>
//           </div>
//         </div>
//       </section>

//       <section className="chart-container">
//         <h2>Goals Status Breakdown</h2>
//         <PieChart width={300} height={300}>
//           <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
//             {pieData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </section>

//       <section className="chart-container">
//         <h2>Goal Completion Overview</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="Completed" fill="#007bff" />
//           </BarChart>
//         </ResponsiveContainer>
//       </section>

//       <section className="goal-list">
//         <h2>My Goals</h2>
//         <div className="goal-item">
//           <h3>Get 50k total active users by March end in TMS</h3>
//           <p>Status: <span className="in-progress">In Progress</span></p>
//           <p>Due Date: <strong>31/03/25</strong></p>
//           <p>Weightage: <strong>40%</strong></p>
//         </div>
//         <button className="load-more">Load More +</button>
//       </section>
//     </div>
//   );
// };

// const styles = `
// .goals-container {
//   font-family: Arial, sans-serif;
//   padding: 20px;
//   max-width: 900px;
//   margin: auto;
//   background: #f8f9fa;
// }

// .header {
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;
// }

// .search-bar {
//   width: 100%;
//   max-width: 400px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// }

// .goal-overview {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #fff;
//   padding: 15px;
//   border-radius: 5px;
//   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
// }

// .chart-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: #fff;
//   padding: 20px;
//   border-radius: 5px;
//   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
// }

// .goal-summary {
//   text-align: left;
//   font-size: 1.2em;
// }

// .goal-categories {
//   display: flex;
//   gap: 15px;
// }

// .category-box {
//   background: #e3f2fd;
//   padding: 15px;
//   border-radius: 5px;
//   text-align: center;
// }

// .goal-list {
//   background: #fff;
//   padding: 15px;
//   border-radius: 5px;
//   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
// }

// .goal-item {
//   border-bottom: 1px solid #ddd;
//   padding: 15px 0;
// }

// .in-progress {
//   color: #ff9800;
//   font-weight: bold;
// }

// .load-more {
//   background: #007bff;
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   width: 100%;
//   margin-top: 10px;
// }
// `;

// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);

// export default GoalsVisualization;

import React, { useState } from 'react';

const GoalsVisualizationPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.dropdown-toggle') === null) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="search-container">
              <span className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </span>
              <input type="text" className="search-input" placeholder="Global Search" />
            </div>

            <div className="nav-actions">
              <div className="dropdown">
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                  <span>Goals</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                <div className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
                  <a href="#" className="dropdown-item">My Goals</a>
                  <a href="#" className="dropdown-item">Team Goals</a>
                  <a href="#" className="dropdown-item">Department Goals</a>
                  <a href="#" className="dropdown-item">Create Goal</a>
                </div>
              </div>

              <button className="icon-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                </svg>
              </button>

              <button className="profile-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <h1 className="page-title">Goals & their Visualisation Page</h1>

          {/* Stats Overview Row */}
          <div className="stats-grid">
            {/* Total Completion */}
            <div className="stats-card">
              <div className="stats-card-header">
                <h3 className="stats-card-title">Goals Status</h3>
              </div>
              <p className="stats-label">Total Complete</p>

              <div className="circular-progress">
                <div className="progress-ring"></div>
                <div className="progress-ring-fill" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 0)', transform: 'rotate(162deg)' }}></div>
                <div className="progress-ring-inner"></div>
                <span className="progress-value">45%</span>
              </div>

              <div className="stats-details">
                <p><span className="font-medium">186</span> Total Goals</p>
                <div className="grid">
                  <p><span className="font-medium">92</span> Not Started</p>
                  <p><span className="font-medium">58</span> In Progress</p>
                  <p><span className="font-medium">20</span> Cancelled</p>
                  <p><span className="font-medium">16</span> Completed</p>
                </div>
              </div>
            </div>

            {/* Development Goals */}
            <div className="stats-card">
              <div className="stats-card-header">
                <h3 className="stats-card-title">Development Goal</h3>
                <span className="percentage-display">41%</span>
              </div>

              <div className="progress-bar-container">
                <div className="progress-bar-label">
                  <span>Development Goals</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '41%' }}></div>
                </div>
              </div>
            </div>

            {/* Learning Goals */}
            <div className="stats-card">
              <div className="stats-card-header">
                <h3 className="stats-card-title">Learning Goals</h3>
                <span className="percentage-display">71%</span>
              </div>

              <div className="progress-bar-container">
                <div className="progress-bar-label">
                  <span>Learning Goals</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '71%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Period */}
          <div className="period-card">
            <div>
              <span className="period-label">Current Period</span>
              <div className="period-dates">
                <span className="period-date">01/01/2025</span>
                <span className="period-date">31/03/2025</span>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn btn-outline">Team Goals</button>
              <button className="btn btn-primary">Create Goal</button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="tab-nav">
            <span className="tab-item">My Goals: 20</span>
            <span className="tab-item">Manager's Goals: 5</span>
            <a href="#" className="tab-link">Send Approval Request</a>
          </div>

          {/* Goals List */}
          <div className="goal-list">
            {/* Goal 1 */}
            <div className="goal-card">
              <div className="goal-header">
                <h4 className="goal-title">Get 50k total active users by March end in TMS</h4>
                <span className="goal-progress">61%</span>
              </div>
              <div className="goal-meta">
                <span>Status: In Progress</span>
                <span>Due Date: 31/03/25</span>
                <span>Weightage: 40%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '61%' }}></div>
              </div>
            </div>

            {/* Goal 2 */}
            <div className="goal-card">
              <div className="goal-header">
                <h4 className="goal-title">Get 50k total active users by March end in TMS</h4>
                <span className="goal-progress">61%</span>
              </div>
              <div className="goal-meta">
                <span>Status: In Progress</span>
                <span>Due Date: 31/03/25</span>
                <span>Weightage: 40%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '61%' }}></div>
              </div>
            </div>

            {/* Goal 3 */}
            <div className="goal-card">
              <div className="goal-header">
                <h4 className="goal-title">Get 50k total active users by March end in TMS</h4>
                <span className="goal-progress">61%</span>
              </div>
              <div className="goal-meta">
                <span>Status: In Progress</span>
                <span>Due Date: 31/03/25</span>
                <span>Weightage: 40%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '61%' }}></div>
              </div>
            </div>

            {/* Goal 4 */}
            <div className="goal-card">
              <div className="goal-header">
                <h4 className="goal-title">Get 50k total active users by March end in TMS</h4>
                <span className="goal-progress">61%</span>
              </div>
              <div className="goal-meta">
                <span>Status: In Progress</span>
                <span>Due Date: 31/03/25</span>
                <span>Weightage: 40%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '61%' }}></div>
              </div>
            </div>

            <button className="load-more">Load More +</button>
          </div>
        </div>
      </main>

      <style jsx>{`
        /* Reset & Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .app-container {
          background-color: #f5f5f5;
          color: #333;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* Header Styles */
        .header {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 12px 0;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .search-container {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }

        .search-input {
          padding: 8px 12px 8px 35px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          width: 260px;
          font-size: 14px;
        }

        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-toggle {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          color: #4b5563;
          cursor: pointer;
          font-size: 14px;
        }

        .dropdown-toggle:hover {
          color: #3b82f6;
        }

        .dropdown-menu {
          position: absolute;
          right: 0;
          top: 100%;
          margin-top: 8px;
          width: 180px;
          background: white;
          border-radius: 6px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 10;
          display: none;
        }

        .dropdown-menu.active {
          display: block;
        }

        .dropdown-item {
          display: block;
          padding: 8px 16px;
          color: #4b5563;
          text-decoration: none;
          font-size: 14px;
        }

        .dropdown-item:hover {
          background-color: #f3f4f6;
        }

        .icon-button {
          background: none;
          border: none;
          cursor: pointer;
          color: #6b7280;
        }

        .icon-button:hover {
          color: #3b82f6;
        }

        .profile-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #dbeafe;
          color: #3b82f6;
          border: none;
          cursor: pointer;
        }

        /* Main Content Styles */
        .main-content {
          padding: 24px 0;
        }

        .page-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .stats-card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 24px;
        }

        .stats-card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .stats-card-title {
          font-size: 18px;
          font-weight: 500;
        }

        .stats-label {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 16px;
        }

        .circular-progress {
          position: relative;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .progress-ring {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 16px solid #e5e7eb;
          position: absolute;
        }

        .progress-ring-fill {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 16px solid transparent;
          border-top-color: #5b9bd5;
          transform: rotate(-90deg);
        }

        .progress-ring-inner {
          position: absolute;
          width: 108px;
          height: 108px;
          border-radius: 50%;
          background-color: white;
        }

        .progress-value {
          position: relative;
          z-index: 2;
          font-size: 30px;
          font-weight: 700;
          color: #5b9bd5;
        }

        .stats-details {
          font-size: 14px;
          margin-top: 8px;
        }

        .stats-details p {
          margin-bottom: 4px;
        }

        .stats-details .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .font-medium {
          font-weight: 500;
        }

        .percentage-display {
          font-size: 24px;
          font-weight: 700;
          color: #5b9bd5;
        }

        .progress-bar-container {
          margin-top: 24px;
        }

        .progress-bar-label {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
        }

        .progress-bar {
          width: 100%;
          height: 10px;
          background-color: #e5e7eb;
          border-radius: 9999px;
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 9999px;
          background-color: #5b9bd5;
        }

        /* Period Card Styles */
        .period-card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 16px;
          margin-bottom: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .period-label {
          font-size: 14px;
          color: #6b7280;
        }

        .period-dates {
          display: flex;
          gap: 16px;
          margin-top: 4px;
        }

        .period-date {
          font-weight: 500;
        }

        .action-buttons {
          display: flex;
          gap: 16px;
        }

        .btn {
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          border: none;
        }

        .btn-outline {
          background-color: white;
          border: 1px solid #5b9bd5;
          color: #5b9bd5;
        }

        .btn-outline:hover {
          background-color: #f0f9ff;
        }

        .btn-primary {
          background-color: #5b9bd5;
          color: white;
        }

        .btn-primary:hover {
          background-color: #4a8ac4;
        }

        /* Tab Navigation */
        .tab-nav {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .tab-item {
          font-size: 14px;
          font-weight: 500;
          margin-right: 24px;
        }

        .tab-link {
          color: #5b9bd5;
          text-decoration: none;
          font-size: 14px;
        }

        .tab-link:hover {
          text-decoration: underline;
        }

        /* Goal List */
        .goal-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .goal-card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 16px;
        }

        .goal-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .goal-title {
          font-weight: 500;
        }

        .goal-progress {
          font-weight: 700;
          color: #5b9bd5;
        }

        .goal-meta {
          display: flex;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 8px;
        }

        .goal-meta span {
          margin-right: 16px;
        }

        .load-more {
          width: 100%;
          text-align: center;
          padding: 8px 0;
          color: #5b9bd5;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
        }

        .load-more:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default GoalsVisualizationPage;

