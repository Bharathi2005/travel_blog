import { useContext, useEffect, useState } from "react";
import { getBlogs } from "../services/api";
import { BlogContext } from "../context/BlogContext";
import Modal from "../components/Modal";

const Blog = () => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchBlogs = async () => {
    try {
      const { data } = await getBlogs();
      console.log(data);
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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
          Explore our latest travel adventures from different places around the
          world!
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{blog.location}</p>
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
          image={selectedBlog.img}
          place={selectedBlog.location}
          description={selectedBlog.desc}
        />
      )}
    </div>
  );
};

export default Blog;
