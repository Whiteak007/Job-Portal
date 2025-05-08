import { motion } from "framer-motion";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDropzone } from "react-dropzone";
import "./Profile.css";

const Profile = () => {
  const [profilePic, setProfilePic] = useState("/images/default-avatar.png");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const imageUrl = URL.createObjectURL(file);
    setProfilePic(imageUrl);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="profile-container">
      <Navbar />

      <motion.section
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="profile-header">
        {/* Profile Picture Upload */}
        <div className="profile-pic-container" {...getRootProps()}>
          <input {...getInputProps()} />
          <img src={profilePic} alt="Profile Avatar" className="avatar" />
          <p>Click or Drag to Upload</p>
        </div>

        <h2>John Doe</h2>
        <p>Software Engineer | React Developer</p>
      </motion.section>

      <motion.section className="profile-content">
        <div className="profile-card">
          <h3>Experience</h3>
          <p>Senior Developer at XYZ Tech</p>
          <p>Junior Developer at ABC Solutions</p>
        </div>

        <div className="profile-card">
          <h3>Education</h3>
          <p>MCA – ABC University</p>
          <p>B.Sc Computer Science – XYZ Institute</p>
        </div>

        <div className="profile-card">
          <h3>Skills</h3>
          <ul>
            <motion.li whileHover={{ scale: 1.1 }}>React.js</motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>Node.js</motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>MongoDB</motion.li>
          </ul>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Profile;
