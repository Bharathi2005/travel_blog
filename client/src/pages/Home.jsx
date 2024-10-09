import React from "react";

const Home = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/fdc5q1zdo/home1.png?updatedAt=1728384534897')`,
          }}
        ></div>
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
      </div>
      <div className="relative w-full py-16 px-8 text-center bg-opacity-60 mt-16">
        <h1 className="text-6xl font-bold text-white mb-8">Explore the World with Us</h1>
        <p className="text-xl text-white mb-6 max-w-4xl mx-auto">
          Join our community of travel enthusiasts to share and document your journeys.
        </p>
        <div className="w-full py-16 px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Why Travel?</h2>
          <p className="text-lg text-white mb-6 max-w-4xl mx-auto">
            Traveling opens up new worlds, both literally and figuratively. It gives us a chance to experience different cultures, savor unique cuisines, and step outside our everyday lives. Whether it’s the bustling streets of a new city, the serene landscapes of nature, or the historical landmarks that tell stories of old, travel fills our hearts with wonder and excitement.
          </p>
          <p className="text-lg text-white mb-6 max-w-4xl mx-auto">
            Meeting new people, learning new languages, and immersing ourselves in diverse traditions enriches our understanding of the world. It challenges our perspectives, enhances our creativity, and fosters personal growth. Travel is not just about the destinations; it's about the journey, the memories we create, and the stories we bring back with us.
          </p>
          <p className="text-lg text-white mb-6 max-w-4xl mx-auto">
            Through our travel blog, we aim to inspire your next adventure, whether you're exploring far-flung destinations or discovering hidden gems in your own backyard. Let’s embrace the unknown, seek out the unexplored, and make every moment count.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;