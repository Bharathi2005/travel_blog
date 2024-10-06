import { useState, useEffect } from "react";
import { getBlogById, editBlog } from "../services/api";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { Check, MessageCircleWarning } from "lucide-react";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    img: "",
    location: "",
    content: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlogById(id);
        setBlog({
          title: response.data.title,
          img: response.data.img,
          location: response.data.location,
          content: response.data.content,
        });
      } catch (error) {
        console.error(error);
        toast("Failed to fetch blog details.", {
          className:
            "bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
          icon: <MessageCircleWarning />,
        });
      }
    };

    fetchBlog();
  }, [id]);

  const validate = () => {
    const newErrors = {};

    if (!blog.title.trim()) newErrors.title = "Title is required";
    if (!blog.img.trim()) {
      newErrors.img = "Image URL is required";
    } else {
      const imgRegex = /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
      if (!imgRegex.test(blog.img)) newErrors.img = "Enter a valid image URL";
    }
    if (!blog.location.trim()) newErrors.location = "Location is required";
    if (!blog.content.trim()) newErrors.content = "Content is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors in the form.", {
        className:
          "bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
        icon: <MessageCircleWarning />,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await editBlog(id, blog);
      if (response.status === 200) {
        toast("Blog updated successfully!", {
          className:
            "bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
          icon: <Check />,
        });
        navigate("/blog");
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Failed to update blog.";
      toast.error(errorMessage, {
        className:
          "bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
        icon: <MessageCircleWarning />,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Edit Blog Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Field */}
          <div>
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              className={`mt-1 p-2 w-full border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded`}
              value={blog.title}
              onChange={handleChange}
              required
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Image URL Field */}
          <div>
            <label className="block text-gray-700">Image URL:</label>
            <input
              type="url"
              name="img"
              className={`mt-1 p-2 w-full border ${
                errors.img ? "border-red-500" : "border-gray-300"
              } rounded`}
              value={blog.img}
              onChange={handleChange}
              required
            />
            {errors.img && (
              <p className="text-red-500 text-sm mt-1">{errors.img}</p>
            )}
            {/* Image Preview */}
            {blog.img && (
              <div className="mt-2">
                <img
                  src={blog.img}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                    toast.error(
                      "Invalid image URL. Showing placeholder image.",
                      {
                        className:
                          "bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
                        icon: <MessageCircleWarning />,
                      }
                    );
                  }}
                />
              </div>
            )}
          </div>

          {/* Location Field */}
          <div>
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              name="location"
              className={`mt-1 p-2 w-full border ${
                errors.location ? "border-red-500" : "border-gray-300"
              } rounded`}
              value={blog.location}
              onChange={handleChange}
              required
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location}</p>
            )}
          </div>

          {/* Content Field */}
          <div>
            <label className="block text-gray-700">Content:</label>
            <textarea
              name="content"
              className={`mt-1 p-2 w-full border ${
                errors.content ? "border-red-500" : "border-gray-300"
              } rounded h-32`}
              value={blog.content}
              onChange={handleChange}
              required
            ></textarea>
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
