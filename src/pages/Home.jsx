import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgba(0, 0, 0, 0.5)", borderRadius: "50%" }}
      onClick={onClick}
      aria-label="Next"
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgba(0, 0, 0, 0.5)", borderRadius: "50%" }}
      onClick={onClick}
      aria-label="Previous"
    />
  );
};

const HomePage = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "Great service! Found my dream home in no time.",
      author: "John Doe",
    },
    {
      id: 2,
      text: "The agents were very helpful and professional.",
      author: "Jane Smith",
    },
    {
      id: 3,
      text: "Highly recommend UrbanRoots for anyone looking to buy or rent.",
      author: "Alice Johnson",
    },
  ];

  const properties = [
    {
      id: 1,
      title: "Luxury Apartment",
      location: "New York",
      price: "$500,000",
      images: ["/house1.jpg", "/img1.jpg"], // Updated images for property 1
    },
    {
      id: 2,
      title: "Modern House",
      location: "Los Angeles",
      price: "$750,000",
      images: ["/house2.jpg", "/img2.jpg"], // Updated images for property 2
    },
    {
      id: 3,
      title: "Cozy Villa",
      location: "Chicago",
      price: "$1,200,000",
      images: ["/house3.jpg", "/img3.jpg"], // Updated images for property 3
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Slider settings with custom arrows
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md">
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/properties" className="text-gray-700 hover:text-blue-500">Properties</Link>
          <Link to="/agents" className="text-gray-700 hover:text-blue-500">Agents</Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-500">Blog</Link>
          <button className="border border-blue-500 px-4 py-2 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition">
            Log In
          </button>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <div className="relative bg-blue-50">
        <Link to="/properties">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/house.jpg')" }} // ✅ Corrected Image Path
          ></div>
          <div className="relative z-10 text-center py-32 bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold text-white">Easy way to find a perfect property</h2>
            <p className="text-gray-300 mt-4">We provide a complete service for buying, selling, and renting properties.</p>
          </div>
        </Link>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex justify-center bg-white shadow-lg p-5 rounded-lg mx-10 -mt-8 relative z-20">
        <form className="w-full max-w-4xl" onSubmit={(e) => e.preventDefault()}>
          <div className="flex space-x-3">
            {/* Location */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <select className="mt-1 block w-full p-3 border rounded-md shadow-sm">
                <option value="">Select Your City</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Property Type</label>
              <select className="mt-1 block w-full p-3 border rounded-md shadow-sm">
                <option value="">Choose Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Price Range</label>
              <select className="mt-1 block w-full p-3 border rounded-md shadow-sm">
                <option value="">Choose Price Range</option>
                <option value="$50k - $200k">$50k - $200k</option>
                <option value="$200k - $500k">$200k - $500k</option>
                <option value="$500k - $1M">$500k - $1M</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Featured Properties Section */}
      <div className="container mx-auto px-10 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Slider {...sliderSettings}>
                {property.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Property ${property.id} - ${index + 1}`} className="w-full h-48 object-cover"/>
                  </div>
                ))}
              </Slider>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{property.title}</h3>
                <p className="text-gray-700">{property.location}</p>
                <p className="text-gray-900 font-bold">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-10">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-700">"{reviews[currentReview].text}"</p>
              <p className="text-gray-900 font-bold mt-4">- {reviews[currentReview].author}</p>
            </div>
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition"
              aria-label="Previous Review"
            >
              &lt;
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition"
              aria-label="Next Review"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">UrbanRoots</h3>
              <p className="text-gray-400">Your trusted partner in real estate.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Quick Links</h3>
              <ul>
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
                <li><Link to="/agents" className="text-gray-400 hover:text-white">Agents</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: info@urbanroots.com</p>
              <p className="text-gray-400">Phone: +1 234 567 890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;