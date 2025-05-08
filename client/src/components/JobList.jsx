import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/trending-jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <JobContainer>
      <h2>Trending Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} at {job.company}
          </li>
        ))}
      </ul>
    </JobContainer>
  );
};

export default JobList;

const JobContainer = styled.div`
  padding: 20px;
`;
