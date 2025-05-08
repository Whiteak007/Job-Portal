import { motion } from "framer-motion";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDropzone } from "react-dropzone";
import "./JobApply.css";

const jobList = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    status: "Apply Now",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DevWorks",
    location: "Bangalore",
    status: "Apply Now",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignPro",
    location: "Mumbai",
    status: "Apply Now",
  },
];

const JobApply = () => {
  const [jobs, setJobs] = useState(jobList);
  const [resumeFile, setResumeFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setResumeFile(acceptedFiles[0]);
  };

  const handleApply = (id) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, status: "Applied ✅" } : job
      )
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "application/pdf",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="job-apply-container">
      <Navbar />
      <h2>Find & Apply for Jobs</h2>

      <motion.ul className="job-list">
        {jobs.map((job) => (
          <motion.li key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>
              <strong>Company:</strong> {job.company}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <button onClick={() => handleApply(job.id)}>{job.status}</button>
          </motion.li>
        ))}
      </motion.ul>

      <h2>Upload Your Resume</h2>
      <div className="resume-upload-container" {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Click or Drag to Upload Resume (PDF)</p>
        {resumeFile && <p>Selected: {resumeFile.name}</p>}
      </div>
    </motion.div>
  );
};

export default JobApply;
