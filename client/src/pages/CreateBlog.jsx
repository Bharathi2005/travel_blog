import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";

const CreateBlog = () => {
  const { setBlogs } = useContext(BlogContext);
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    location: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(), // Unique ID
      title: formData.title,
      image: URL.createObjectURL(formData.image), // Use object URL for preview
      place: formData.location,
      description: formData.content,
    };
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    setFormData({ title: "", image: null, location: "", content: "" }); // Reset form
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-gray-100 p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="title"
              placeholder="Enter blog title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Image:</label>
            <input
              type="file"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <textarea
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="content"
              placeholder="Enter blog content"
              value={formData.content}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;