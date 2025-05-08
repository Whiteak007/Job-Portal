import React, { useState } from "react";
import "./RecruiterDashboard.css";

const initialJobs = [
  { id: 1, title: "Frontend Developer", applicants: 12, status: "Active" },
  { id: 2, title: "Backend Engineer", applicants: 8, status: "Paused" },
  { id: 3, title: "UI/UX Designer", applicants: 5, status: "Closed" },
];

const RecruiterDashboard = () => {
  const [jobs, setJobs] = useState(initialJobs);

  return (
    <div className="recruiter-dashboard">
      <h2>Recruiter Dashboard</h2>

      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>Applicants: {job.applicants}</p>
            <p>Status: {job.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruiterDashboard;