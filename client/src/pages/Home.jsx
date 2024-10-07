import React from 'react';
import home2 from '../assets/img/home1.png'; // Importing the image

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Set Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${home2})` }} // Correct inline style for background image
        ></div>

        {/* Overlay and Text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Explore the World with Us</h1>
            <p className="text-xl mb-6">
              Join our community of travel enthusiasts to share and document your journeys.
            </p>
            
          </div>
        </div>
      </div>

      {/* About Travel Section */}
      <div className="w-full py-16 px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Travel?</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
          Traveling opens up new worlds, both literally and figuratively. It gives us a chance to experience different cultures, savor unique cuisines, and step outside our everyday lives. Whether it’s the bustling streets of a new city, the serene landscapes of nature, or the historical landmarks that tell stories of old, travel fills our hearts with wonder and excitement.
        </p>
        <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
          Meeting new people, learning new languages, and immersing ourselves in diverse traditions enriches our understanding of the world. It challenges our perspectives, enhances our creativity, and fosters personal growth. Travel is not just about the destinations; it's about the journey, the memories we create, and the stories we bring back with us.
        </p>
        <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
          Through our travel blog, we aim to inspire your next adventure, whether you're exploring far-flung destinations or discovering hidden gems in your own backyard. Let’s embrace the unknown, seek out the unexplored, and make every moment count.
        </p>

       
      
        </div>
      </div>
    
  );
};

export default Home;
