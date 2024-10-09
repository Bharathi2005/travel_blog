import { useContext, useRef, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { addBlog } from "../services/api";

export const CreateBlog = () => {
  const { setBlogs } = useContext(BlogContext);
  const [formData, setFormData] = useState({
    title: "",
    img: "",
    location: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(),
      title: formData.title,
      img: formData.img,
      location: formData.location,
      desc: formData.desc,
    };
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    handleAddBlog();
    setFormData({ title: "", img: "", location: "", desc: "" });
  };

  const titler = useRef(null);
  const locationr = useRef(null);
  const descr = useRef(null);

  const handleAddBlog = async () => {
    const blogdata = {
      title: titler.current.value,
      img: formData.img,
      location: locationr.current.value,
      desc: descr.current.value,
    };
    try {
      const res = await addBlog(blogdata);
      console.log(res);
      if (res.status === 200) {
        console.log("ADDED");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div
      className="min-h-screen bg-opacity-10 flex clr items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://ik.imagekit.io/fdc5q1zdo/home1.png?updatedAt=1728384534897')`,
      }}
    >
      <div className="bg-white bg-opacity-10 p-8 mt-20 rounded shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold  mb-4">Create a New Blog Post</h1>
        <form onSubmit={handleSubmit} className="h-45">
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="title"
              ref={titler}
              placeholder="Enter blog title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="img"
              placeholder="Enter image URL"
              value={formData.img}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="location"
              ref={locationr}
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <textarea
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="desc"
              ref={descr}
              placeholder="Enter blog content"
              value={formData.desc}
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
