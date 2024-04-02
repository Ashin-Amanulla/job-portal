import axios from "axios";

const BASE_URL = "http://localhost:7895"

const setupInterceptors = (instance) => {
    instance.interceptors.request.use((config) => {
      const token = localStorage.getItem("token") ;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }, (error) => {
      return Promise.reject(error);
    });
  
    instance.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      return Promise.reject(error);
    });
  };

const createAxiosInstance = (baseURL, defaultHeaders = {}) => {
    const instance = axios.create({ baseURL, headers: defaultHeaders });
    // setupInterceptors(instance);
    return instance;
};

export const ADMIN_INSTANCE = createAxiosInstance(`${BASE_URL}/api/admins`, { "Content-Type": "application/json" });
export const JOB_INSTANCE = createAxiosInstance(`${BASE_URL}/api/jobs`, { "Content-Type": "application/json" });