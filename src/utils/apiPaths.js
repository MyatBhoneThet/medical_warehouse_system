// src/utils/apiPaths.js
export const BASE_URL = 'http://localhost:8000';
export const apiUrl = (path) => `${BASE_URL}${path}`;
// API endpoint paths centralized
export const API_PATHS = {
    AUTH: {
        LOGIN: "/api/v1/auth/login",
    }
}
    export default API_PATHS;
