import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Loginpg = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user in AuthContext (real apps would call an API here)
    login({
      name: formData.name || formData.email.split("@")[0],
      email: formData.email,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT INFO */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-red-500 to-pink-500 text-white p-10">
          <h2 className="text-4xl font-bold mb-4">
            {isLogin ? "Welcome Back!" : "Hello, Friend!"}
          </h2>
          <p className="text-center mb-6">
            {isLogin
              ? "Login to continue shopping with us"
              : "Sign up and start your journey with GulluMart"}
          </p>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="border-2 border-white px-6 py-2 rounded-full
            hover:bg-white hover:text-red-500 transition"
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-500">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
                required
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg
              hover:bg-red-600 transition font-semibold"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          {/* MOBILE TOGGLE */}
          <p className="text-center mt-5 md:hidden">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-red-500 font-semibold"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpg;

