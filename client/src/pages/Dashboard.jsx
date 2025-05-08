import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      status: "Applied ✅",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DevWorks",
      status: "Pending ⏳",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "DesignPro",
      status: "Rejected ❌",
    },
  ]);

  const [profileViews, setProfileViews] = useState(154);
  const [connections, setConnections] = useState(85);

  return (
    <div className="dashboard-container">
      <Navbar />
      <h2>Dashboard Overview</h2>

      <div className="stats-box">
        <div className="stat">
          <h3>{profileViews}</h3>
          <p>Profile Views</p>
        </div>
        <div className="stat">
          <h3>{connections}</h3>
          <p>Connections</p>
        </div>
      </div>

      <h2>Job Applications</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>Status: {job.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
