import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <img
          src="https://example.com/your-attractive-image.jpg"
          alt="Travel Background"
          className="w-full h-[80vh] object-cover"
        />
        {/* Overlay and Text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Explore the World with Us</h1>
            <p className="text-lg mb-6">
              Join our community of travel enthusiasts to share and document your journeys.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* About Travel Section */}
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Travel?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Traveling opens up new worlds, both literally and figuratively. It gives us a chance to experience different cultures, savor unique cuisines, and step outside our everyday lives. Whether it’s the bustling streets of a new city, the serene landscapes of nature, or the historical landmarks that tell stories of old, travel fills our hearts with wonder and excitement.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Meeting new people, learning new languages, and immersing ourselves in diverse traditions enriches our understanding of the world. It challenges our perspectives, enhances our creativity, and fosters personal growth. Travel is not just about the destinations; it's about the journey, the memories we create, and the stories we bring back with us.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Through our travel blog, we aim to inspire your next adventure, whether you're exploring far-flung destinations or discovering hidden gems in your own backyard. Let’s embrace the unknown, seek out the unexplored, and make every moment count.
        </p>
        <div className="mt-8">
          <img
            src='../assets/img/home.jfif'
            alt="Exploring the World"
            className="w-full md:w-2/3 mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Features of Our Travel Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-yellow-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.51 5 12 5c4.49 0 8.268 2.943 9.542 7-.023.033-.032.062-.034.092A9.062 9.062 0 0112 19c-4.49 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Personalized Recommendations</h3>
            <p className="text-gray-600">Get custom travel recommendations based on your preferences and past experiences.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-yellow-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.517C17.343 18.686 13.75 21 12 21c-1.75 0-5.343-2.314-7.428-5.483a9.97 9.97 0 012.62-3.786c1.11-.96 2.218-1.37 3.313-1.305.142-.68.456-1.306.952-1.794C12.374 8.054 12.879 8 13.5 8c.813 0 1.518.244 2.154.704.26.181.473.426.632.72.16.296.246.628.253.972a9.935 9.935 0 012.889 2.557z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v4m0 0l3 3m-3-3L9 7m12 4v1.5a2.5 2.5 0 01-5 0v-1.5M6.58 14.01l.02.02A2.504 2.504 0 019 15.5h1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Interactive Maps</h3>
            <p className="text-gray-600">Discover and explore new destinations using our interactive travel maps.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-yellow-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 10h18M3 15h18M3 20h18" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Curated Travel Guides</h3>
            <p className="text-gray-600">Access in-depth travel guides created by our experienced travel bloggers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
