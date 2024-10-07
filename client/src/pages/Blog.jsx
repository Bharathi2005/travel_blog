import React from 'react';
import home1 from '../assets/img/home1.png'
import h1 from '../assets/img/himalays.png'
import t1 from  '../assets/img/t1.png'
const Blog = () => {
  const blogs = [
    {
      id: 1,
      
      place: "Himalayas, Nepal",
      description: "Discover the beauty of the Himalayas with breathtaking views, thrilling treks, and serene nature.",
      image: h1,
    },
    {
      id: 2,
      
      place: "Tokyo, Japan",
      description: "Experience the vibrant city life, explore traditional temples, and enjoy the unique cuisine of Tokyo.",
      image: home1,
    },
    {
      id: 3,
      place: "Bali, Indonesia",
      description: "Soak up the sun on Bali’s pristine beaches, enjoy water sports, and discover local culture.",
      image: t1,
    },
  ];

  return (
    <div className="min-h-screen bg-blue-300 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Latest Blog Posts</h1>
        <p className="mt-4 text-gray-600">Explore our latest travel adventures from different places around the world!</p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{blog.place}</p>
              <p className="text-gray-700 mt-4">{blog.description}</p>
              <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
