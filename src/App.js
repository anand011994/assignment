import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Not Started", value: 92, color: "#FF7043" },
  { name: "In Progress", value: 58, color: "#FFA726" },
  { name: "Cancelled", value: 20, color: "#EF5350" },
  { name: "Completed", value: 16, color: "#66BB6A" },
];

const barData = [
  { name: "Development", Completed: 41 },
  { name: "Learning", Completed: 71 },
  { name: "Team", Completed: 55 },
];

const GoalsVisualization = () => {
  return (
    <div className="goals-container">
      <header className="header">
        <input type="text" placeholder="Global Search" className="search-bar" />
      </header>

      <section className="goal-overview">
        <div className="goal-summary">
          <h3>Goals Status</h3>
          <p><strong>45%</strong> Total Complete</p>
        </div>
        <div className="goal-categories">
          <div className="category-box">
            <h4>Development Goals</h4>
            <p>41% Completed</p>
          </div>
          <div className="category-box">
            <h4>Learning Goals</h4>
            <p>71% Completed</p>
          </div>
        </div>
      </section>

      <section className="chart-container">
        <h2>Goals Status Breakdown</h2>
        <PieChart width={300} height={300}>
          <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </section>

      <section className="chart-container">
        <h2>Goal Completion Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Completed" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section className="goal-list">
        <h2>My Goals</h2>
        <div className="goal-item">
          <h3>Get 50k total active users by March end in TMS</h3>
          <p>Status: <span className="in-progress">In Progress</span></p>
          <p>Due Date: <strong>31/03/25</strong></p>
          <p>Weightage: <strong>40%</strong></p>
        </div>
        <button className="load-more">Load More +</button>
      </section>
    </div>
  );
};

const styles = `
.goals-container {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 900px;
  margin: auto;
  background: #f8f9fa;
}

.header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.goal-overview {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.goal-summary {
  text-align: left;
  font-size: 1.2em;
}

.goal-categories {
  display: flex;
  gap: 15px;
}

.category-box {
  background: #e3f2fd;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
}

.goal-list {
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.goal-item {
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
}

.in-progress {
  color: #ff9800;
  font-weight: bold;
}

.load-more {
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default GoalsVisualization;

