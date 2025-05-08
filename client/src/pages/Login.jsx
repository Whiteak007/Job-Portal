// Path: src/pages/Home.js
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "./Login.css";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home-container">
      <Navbar />
      <motion.section
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="hero">
        <img
          src="/images/banner.jpg"
          alt="jobsphere Banner"
          className="banner"
        />
        <h2>Find Your Next Opportunity!</h2>
        <p>Join a network of professionals and explore top job listings.</p>
        <button className="cta">Sign Up Now</button>
        <button className="cta">Explore Jobs</button>
      </motion.section>
    </motion.div>
  );
};

export default Home;
