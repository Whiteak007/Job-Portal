import axios from 'axios';

const API_BASE_URL = "http://localhost:5000/api";

// Create axios instance for consistent configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const loginUser = async (credentials) => {
  return api.post('/auth/login', credentials);
};

export const getJobs = async () => {
  return api.get('/jobs');
};

export const updateProfile = async (profileData) => {
  return api.put('/profile', profileData);
};

export const sendMessage = async (messageData) => {
  return api.post('/chat/send', messageData);
};

// Add response and error interceptors if needed
api.interceptors.response.use(
  response => response,
  error => {
    // You can handle global API errors here
    return Promise.reject(error);
  }
);