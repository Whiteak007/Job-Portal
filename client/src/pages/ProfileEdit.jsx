// Path: src/pages/ProfileEdit.js
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "./ProfileEdit.css";

const ProfileEdit = () => {
  const { register, handleSubmit } = useForm();
  const [profile, setProfile] = useState({
    name: "John Doe",
    bio: "Software Engineer | React Developer",
    location: "India",
    experience: [
      "Senior Developer at XYZ Tech",
      "Junior Developer at ABC Solutions",
    ],
    skills: ["React.js", "Node.js", "MongoDB"],
  });

  const onSubmit = (data) => {
    setProfile({
      ...profile,
      name: data.name,
      bio: data.bio,
      location: data.location,
      experience: data.experience.split(","),
      skills: data.skills.split(","),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="profile-edit-container">
      <Navbar />
      <h2>Edit Your Profile</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="profile-edit-form">
        <label>Name:</label>
        <input type="text" defaultValue={profile.name} {...register("name")} />

        <label>Bio:</label>
        <input type="text" defaultValue={profile.bio} {...register("bio")} />

        <label>Location:</label>
        <input
          type="text"
          defaultValue={profile.location}
          {...register("location")}
        />

        <label>Experience (comma separated):</label>
        <input
          type="text"
          defaultValue={profile.experience.join(", ")}
          {...register("experience")}
        />

        <label>Skills (comma separated):</label>
        <input
          type="text"
          defaultValue={profile.skills.join(", ")}
          {...register("skills")}
        />

        <button type="submit">Save Changes</button>
      </form>

      <motion.div
        className="preview-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <h3>Live Preview:</h3>
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Bio:</strong> {profile.bio}
        </p>
        <p>
          <strong>Location:</strong> {profile.location}
        </p>
        <p>
          <strong>Experience:</strong> {profile.experience.join(", ")}
        </p>
        <p>
          <strong>Skills:</strong> {profile.skills.join(", ")}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProfileEdit;
