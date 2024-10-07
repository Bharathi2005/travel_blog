import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext"; // Adjust the import if necessary
import Modal from "../components/Modal";

const Blog = () => {
  const { blogs } = useContext(BlogContext); // Assuming BlogContext provides blogs
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-blue-300 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Latest Blog Posts</h1>
        <p className="mt-4 text-gray-600">
          Explore our latest travel adventures from different places around the world!
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{blog.place}</p>
              <button
                onClick={() => handleReadMore(blog)}
                className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedBlog.title}
          image={selectedBlog.image} // Pass image to Modal
          place={selectedBlog.place}   // Pass place to Modal
          description={selectedBlog.description} // Pass description to Modal
        />
      )}
    </div>
  );
};

export default Blog;