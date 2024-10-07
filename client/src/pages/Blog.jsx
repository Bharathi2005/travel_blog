import React from 'react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Exploring the Majestic Mountains",
      place: "Himalayas, Nepal",
      description: "Discover the beauty of the Himalayas with breathtaking views, thrilling treks, and serene nature.",
      image: "https://example.com/himalayas.jpg",
    },
    {
      id: 2,
      title: "A Journey Through the Streets of Tokyo",
      place: "Tokyo, Japan",
      description: "Experience the vibrant city life, explore traditional temples, and enjoy the unique cuisine of Tokyo.",
      image: "https://example.com/tokyo.jpg",
    },
    {
      id: 3,
      title: "Relaxing on the Beaches of Bali",
      place: "Bali, Indonesia",
      description: "Soak up the sun on Bali’s pristine beaches, enjoy water sports, and discover local culture.",
      image: "https://example.com/bali.jpg",
    },
    {
      id: 4,
      title: "Exploring the Cultural Wonders of Paris",
      place: "Paris, France",
      description: "Visit iconic landmarks like the Eiffel Tower and immerse yourself in Parisian art and history.",
      image: "https://example.com/paris.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
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
