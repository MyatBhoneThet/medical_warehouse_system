// src/utils/axiosInstance.js
import axios from 'axios';
import { BASE_URL } from './apiPaths';

// custom Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL, // http://localhost:8000 || prod link
  timeout: 30000,
});

// REQUEST INTERCEPTOR (runs BEFORE every request)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const isFormData =
      typeof FormData !== 'undefined' && config.data instanceof FormData;

    if (!isFormData) {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Accept'] = 'application/json';
    } else {
      delete config.headers['Content-Type']; // browser sets it
    }

    if (import.meta.env.DEV) {
      console.log(
        '[API] →',
        config.method?.toUpperCase(),
        `${config.baseURL}${config.url}`
      );
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR (runs AFTER a response or error)
axiosInstance.interceptors.response.use(
  (response) => response, // if successful, return the response
  (error) => { // if error, handle it
    const status = error?.response?.status; // HTTP status code(401, 404, 500)
    const url = error?.config?.url || '';

    if (import.meta.env.DEV) { // log error
      console.error(
        '[API ERROR]',
        status,
        url,
        error?.response?.data || error.message
      );
    }

    // auto logout on token expiry or invalid
    if (
      status === 401 &&
      !/\/api\/v1\/auth\/(login|register|google|github|me)$/i.test(url)
    ) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
