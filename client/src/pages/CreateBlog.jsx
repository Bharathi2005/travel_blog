import { useState } from "react";
import { createBlog } from "../services/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Check, MessageCircleWarning } from "lucide-react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!img.trim()) {
      newErrors.img = "Image URL is required";
    } else {
      const imgRegex = /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
      if (!imgRegex.test(img)) newErrors.img = "Enter a valid image URL";
    }
    if (!location.trim()) newErrors.location = "Location is required";
    if (!content.trim()) newErrors.content = "Content is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
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

    const blogData = { title, img, location, content };
    setLoading(true);

    try {
      const response = await createBlog(blogData);
      if (response.status === 201) {
        toast("Blog created successfully!", {
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
          : "Failed to create blog.";
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
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-gray-100 p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Content:</label>
            <textarea
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="content"
            ></textarea>
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
