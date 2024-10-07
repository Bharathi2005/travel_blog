import React from 'react';

const CreateBlog = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-gray-100 p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
        <form>
          {/* Title Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="title"
              placeholder="Enter blog title"
            />
          </div>

          {/* Content Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Content:</label>
            <textarea
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="content"
              placeholder="Enter blog content"
            ></textarea>
          </div>

          {/* Location Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="location"
              placeholder="Enter location"
            />
          </div>

          {/* Image Upload Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Upload Image:</label>
            <input
              type="file"
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              name="image"
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
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
