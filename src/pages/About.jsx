import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4 sm:px-6 lg:px-20">
      
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10 space-y-14">
        
        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About{" "}
            <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              GulluMart
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We’re not just selling electronics — we’re helping you build a smarter,
            faster, and more connected lifestyle.
          </p>
        </div>

        {/* INTRO */}
        <div className="text-gray-700 text-lg leading-relaxed">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-red-600">GulluMart</span>, your
            trusted destination for modern electronics, gadgets, and tech
            accessories. Whether you’re upgrading your workspace, enhancing your
            entertainment, or exploring the latest innovations, we’re here to
            support every step of your tech journey.
          </p>
        </div>

        {/* MISSION + VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-purple-50">
            <h2 className="text-2xl font-bold text-red-600 mb-3">
              🚀 Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is simple: make high-quality technology accessible to
              everyone. We carefully curate products that deliver performance,
              reliability, and value — so you can shop with confidence.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-red-50">
            <h2 className="text-2xl font-bold text-red-600 mb-3">
              🌍 Our Vision
            </h2>
            <p className="text-gray-700">
              We envision a future where technology seamlessly improves everyday
              life. GulluMart aims to stay ahead of trends, bringing you innovative
              solutions that are practical, affordable, and future-ready.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose{" "}
            <span className="text-red-600">GulluMart?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Premium & trusted brands",
              "Fast & secure delivery",
              "Easy returns policy",
              "24/7 customer support",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl
                hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* USER FOCUSED SECTION */}
        <div className="text-center bg-gray-900 text-white rounded-3xl p-10 space-y-4">
          <h3 className="text-3xl font-bold">
            Built for <span className="text-red-400">You</span>
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Whether you’re a student, a professional, a gamer, or a tech enthusiast —
            GulluMart is designed to give you a smooth, reliable, and enjoyable
            shopping experience.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Ready to explore the future of shopping?
          </h3>
          <Link to="/products">
            <button
              className="bg-gradient-to-r from-red-500 to-purple-500
              text-white px-8 py-3 rounded-full font-semibold
              hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Start Shopping 🚀
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
