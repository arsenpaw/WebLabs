import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.BACKEND_URL + '/api/', // Replace with your actual base URL
});

// Add a request interceptor to attach the JWT token
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
