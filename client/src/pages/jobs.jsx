// Path: src/pages/Jobs.js
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((response) => setJobs(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Available Jobs</h1>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}>
        {jobs.map((job) => (
          <motion.li
            key={job._id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}>
            {job.title} at {job.company}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Jobs;
