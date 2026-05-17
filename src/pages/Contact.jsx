import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen theme-page flex items-center justify-center px-4 py-16">
      
      <div className="relative theme-card border-theme p-10 w-full max-w-6xl">

        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <h2 className="relative text-4xl md:text-5xl font-extrabold 
        text-center mb-12 tracking-tight">
          Get in Touch with{" "}
          <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            Gullu
          </span>
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-white">Contact Information</h3>
              <p className="text-muted leading-relaxed">
                Got questions, feedback, or need help choosing the perfect gadget?
                Our team is always ready to help.
              </p>
            </div>

            <div className="space-y-4 text-muted">
              <p className="flex items-center gap-3">
                Location: 123 Tech Lane, Kolkata, India
              </p>
              <p className="flex items-center gap-3">
                Email: support@gullumart.com
              </p>
              <p className="flex items-center gap-3">
                Phone: +91 xxxxxxxxxxxx
              </p>
            </div>

            <div className="pt-6 border-t border-theme">
              <p className="text-sm text-muted">
                Support available 24/7 <br />
                Average response time: under 2 hours
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
                className="w-full px-5 py-3 input-base bg-surface border-theme text-white rounded-2xl placeholder-gray-400 focus:ring-2 focus:ring-red-500 transition"
              />
            </div>

            <div>
              <label className="block text-white mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-5 py-3 input-base bg-surface border-theme text-white rounded-2xl placeholder-gray-400 focus:ring-2 focus:ring-red-500 transition"
              />
            </div>

            <div>
              <label className="block text-white mb-1 font-medium">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us how we can help you..."
                className="w-full px-5 py-3 input-base bg-surface border-theme text-white rounded-2xl placeholder-gray-400 resize-none focus:ring-2 focus:ring-red-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full theme-button btn-primary font-semibold py-3 rounded-2xl transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
