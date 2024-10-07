import axios from "axios";
const API = import.meta.env.VITE_API;
//const API = "http://localhost:7000"
// const API = import.meta.env.APIMOCK
const getBlogs = () => axios.get(`${API}/blogs/`);
const getBlogbyID = (id) => axios.get(`${API}/blogs/view/${id}`);
const addBlog = (blogdata) => axios.post(`${API}/blogs/`, blogdata);
const editBlog = (id, blogdata) =>
  axios.put(`${API}/blogs/update/${id}`, blogdata);
const deleteBlog = (id) => axios.delete(`${API}/blogs/delete/${id}`);
const signup = (userData) => axios.post(`${API}/register`, userData);
const login = (credentials) => axios.post(`${API}/login`, credentials);
export { getBlogs, getBlogbyID, addBlog, editBlog, deleteBlog, signup, login };
