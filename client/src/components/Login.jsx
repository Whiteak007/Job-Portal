import React, { useState } from "react";
// import { loginUser } from "../../../api/index.js";

const Login = () => {
  const [credentials, setCredentials] = useState({ 
    email: "", 
    password: "" 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!credentials.email || !credentials.password) {
      setError("Please fill in all fields");
      return;
    }

    if (!credentials.email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await loginUser(credentials);
      console.log("Login Successful:", response.data);
      // Clear password field after successful login
      setCredentials({...credentials, password: ""});
      // Here you would typically redirect or update app state
    } catch (error) {
      console.error("Login Failed:", error);
      setError(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div style={{color: "red"}}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;