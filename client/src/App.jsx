import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage"; // New Landing Page
import Home from "./pages/Login";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Connections from "./pages/Connections";
import ProfileEdit from "./pages/ProfileEdit";
import JobApply from "./pages/JobApply";
import Chat from "./pages/Chat";
import {motion} from 'framer-motion'

const App = () => {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <LandingPage /> {/* ✅ Default Route is Now Landing Page */}
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/jobs"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <Jobs />
              </motion.div>
            }
          />
          <Route
            path="/profile"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <Profile />
              </motion.div>
            }
          />
          <Route
            path="/connections"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <Connections />
              </motion.div>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <ProfileEdit />
              </motion.div>
            }
          />
          <Route
            path="/jobs/apply"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <JobApply />
              </motion.div>
            }
          />
          <Route
            path="/chat"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <Chat />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
