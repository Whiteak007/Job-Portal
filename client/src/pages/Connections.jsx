import { motion } from "framer-motion";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Connections.css";

const usersData = [
  {
    id: 1,
    name: "Aman Gupta",
    role: "Full Stack Developer",
    profilePic: "/images/user1.png",
  },
  {
    id: 2,
    name: "Ritika Sharma",
    role: "UI/UX Designer",
    profilePic: "/images/user2.png",
  },
  { 
    id: 3,
    name: "Vikram Patel",
    role: "Data Scientist",
    profilePic: "/images/user3.png",
  },
];

const Connections = () => {
  const [connections, setConnections] = useState(usersData);

  const handleFollow = (id) => {
    setConnections(
      connections.map((user) =>
        user.id === id ? { ...user, followed: !user.followed } : user
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="connections-container">
      <Navbar />
      <h2>Connect with Professionals</h2>

      <motion.ul className="connections-list">
        {connections.map((user) => (
          <motion.li key={user.id} className="connection-card">
            <img
              src={user.profilePic}
              alt={`${user.name} Avatar`}
              className="avatar"
            />
            <h3>{user.name}</h3>
            <p>{user.role}</p>
            <button onClick={() => handleFollow(user.id)}>
              {user.followed ? "Unfollow" : "Follow"}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Connections;
