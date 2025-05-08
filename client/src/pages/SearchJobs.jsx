import React, { useState } from "react";
import "./SearchJobs.css";

const jobData = [
  { id: 1, title: "Frontend Developer", location: "Mumbai", salary: 70000 },
  { id: 2, title: "Backend Engineer", location: "Bangalore", salary: 85000 },
  { id: 3, title: "UI/UX Designer", location: "Delhi", salary: 60000 },
];

const SearchJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");

  const filteredJobs = jobData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation ? job.location === selectedLocation : true) &&
      (selectedSalary ? job.salary >= selectedSalary : true)
  );

  return (
    <div className="search-container">
      <h2>Find Your Dream Job</h2>

      <input
        type="text"
        placeholder="Search by role..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select onChange={(e) => setSelectedLocation(e.target.value)}>
        <option value="">Filter by Location</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Delhi">Delhi</option>
      </select>

      <select onChange={(e) => setSelectedSalary(e.target.value)}>
        <option value="">Filter by Salary</option>
        <option value="60000">60,000+</option>
        <option value="70000">70,000+</option>
        <option value="80000">80,000+</option>
      </select>

      <div className="job-list">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>Location: {job.location}</p>
            <p>Salary: ₹{job.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchJobs;
