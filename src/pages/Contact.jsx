import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
    flex items-center justify-center px-4 py-16">
      
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 
      rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]
      p-10 w-full max-w-6xl">

        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>

        <h2 className="relative text-4xl md:text-5xl font-extrabold text-white 
        text-center mb-12 tracking-tight">
          Get in Touch with{" "}
          <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            Gullu
          </span>
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info Section */}
          <div className="text-white space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-300 leading-relaxed">
                Got questions, feedback, or need help choosing the perfect gadget?
                Our team is always ready to help.
              </p>
            </div>

            <div className="space-y-4 text-gray-200">
              <p className="flex items-center gap-3">
                <span className="text-xl">📍</span> 123 Tech Lane, Kolkata, India
              </p>
              <p className="flex items-center gap-3">
                <span className="text-xl">📧</span> support@gullumart.com
              </p>
              <p className="flex items-center gap-3">
                <span className="text-xl">📞</span> +91 98765 43210
              </p>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-gray-300">
                ⏱️ Support available 24/7 <br />
                ⚡ Average response time: under 2 hours
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-5 py-3 bg-white/20 border border-white/30
                text-white rounded-2xl placeholder-gray-300
                focus:outline-none focus:ring-2 focus:ring-red-500
                transition"
              />
            </div>

            <div>
              <label className="block text-white mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-5 py-3 bg-white/20 border border-white/30
                text-white rounded-2xl placeholder-gray-300
                focus:outline-none focus:ring-2 focus:ring-purple-500
                transition"
              />
            </div>

            <div>
              <label className="block text-white mb-1 font-medium">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us how we can help you..."
                className="w-full px-5 py-3 bg-white/20 border border-white/30
                text-white rounded-2xl placeholder-gray-300 resize-none
                focus:outline-none focus:ring-2 focus:ring-red-500
                transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-purple-500
              text-white font-semibold py-3 rounded-2xl
              hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(239,68,68,0.5)]
              transition-all duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
