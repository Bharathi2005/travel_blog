import { Link } from "react-router-dom";
import { Edit, Trash } from "lucide-react";
import { deleteBlog } from "../services/api";
import { toast } from "sonner";
import { MessageCircleWarning } from "lucide-react";

const Blogcard = ({ title, img, location, content, id, fetchBlogs }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const response = await deleteBlog(id);
        if (response.status === 200) {
          toast("Blog deleted successfully!", {
            className:
              "bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
            icon: <Trash />,
          });
          fetchBlogs();
        }
      } catch (error) {
        console.error(error);
        toast("Failed to delete blog.", {
          className:
            "bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold",
          icon: <MessageCircleWarning />,
        });
      }
    }
  };

  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:flex-shrink-0">
          <img
            src={img}
            alt={title}
            className="h-48 w-full object-cover md:w-48"
          />
        </div>
        {/* Content Section */}
        <div className="p-8 w-full">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {location}
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            {title}
          </h2>
          <p className="mt-2 text-gray-500">{content.substring(0, 200)}...</p>
          {/* Action Buttons */}
          <div className="mt-4 flex justify-end gap-4">
            <Link
              to={`/edit-blog/${id}`}
              className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
            >
              <Edit size={18} /> Edit
            </Link>
            <button
              onClick={handleDelete}
              className="text-red-500 hover:text-red-700 flex items-center gap-1"
            >
              <Trash size={18} /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
