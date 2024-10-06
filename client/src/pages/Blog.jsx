// src/pages/Blog.js

import { useEffect, useState } from "react";
import { getBlogs } from "../services/api";
import Blogcard from "../components/Blogcard";
import { toast } from "sonner";
import { MessageCircleWarning } from "lucide-react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await getBlogs();
      setBlogs(response.data);
    } catch (error) {
      console.error(error);
      toast("Failed to fetch blogs.", {
        className:
          "bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
        icon: <MessageCircleWarning />,
      });
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Latest Blog Posts
      </h1>
      <div className="container mx-auto">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Blogcard
              key={blog._id}
              title={blog.title}
              img={blog.img}
              location={blog.location}
              content={blog.content}
              id={blog._id}
              fetchBlogs={fetchBlogs}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">No blog posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
