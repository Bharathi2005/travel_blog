// src/services/api.js

import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs"; // Update if different

// Get all blogs
export const getBlogs = async () => {
  return await axios.get(API_URL);
};

// Get a single blog by ID
export const getBlogById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// Create a new blog
export const createBlog = async (blogData) => {
  return await axios.post(API_URL, blogData);
};

// Edit a blog
export const editBlog = async (id, blogData) => {
  return await axios.put(`${API_URL}/${id}`, blogData);
};

// Delete a blog
export const deleteBlog = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
