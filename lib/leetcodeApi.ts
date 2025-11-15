import axios from "axios";

export const API_URL = process.env.API_URL || "http://localhost:4000";

let token = "";

if (!token) {
  token = localStorage.getItem("access_token") || "";
  token = `Bearer ${token}`;
}

const axiosRequest = axios.create({
  headers: {
    Authorization: token,
    "Content-Type": "application/json",
  },
});

const request = {
  get: (path: string, data?: any) => {
    //use token in header
    return axiosRequest.get(`${API_URL}${path}`, data);
  },
  post: (path: string, data?: any) => {
    return axiosRequest.post(`${API_URL}${path}`, data);
  },

  patch: (path: string, data?: any) => {
    return axiosRequest.patch(`${API_URL}${path}`, data);
  },
  put: (path: string, data?: any) => {
    return axiosRequest.put(`${API_URL}${path}`, data);
  },
  delete: (path: string, data?: any) => {
    return axiosRequest.delete(`${API_URL}${path}`, data);
  },
};

const user = {
  getProfile: () => {
    return request.get("/api/user/profile");
  },
  updateProfile: (data: any) => {
    return request.patch("/api/user/profile", data);
  },
  getLeaderboard: () => {
    return request.get("/api/user/leaderboard");
  },
  updateLeaderboard: (data: any) => {
    return request.patch("/api/user/leaderboard", data);
  },
  deleteUser: (id: string) => {
    return request.delete(`/api/user/${id}`);
  },
};

const submission = {
  getSubmission: (id: string) => {
    return request.get(`/api/submission/${id}`);
  },
  getSubmissions: () => {
    return request.get(`/api/submission`);
  },
  createSubmission: (data: any) => {
    return request.post(`/api/submission`, data);
  },
  updateSubmission: (id: string, data: any) => {
    return request.put(`/api/submission/${id}`, data);
  },
  deleteSubmission: (id: string) => {
    return request.delete(`/api/submission/${id}`);
  },
};

const leetcodeApi = {
  user,
  submission,
};

export default leetcodeApi;
