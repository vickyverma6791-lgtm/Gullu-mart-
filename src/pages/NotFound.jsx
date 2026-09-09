import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen theme-page flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-primary opacity-20 select-none">404</h1>
      <h2 className="text-3xl font-bold theme-text -mt-8 mb-3">Page Not Found</h2>
      <p className="text-muted mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="theme-button btn-primary px-8 py-3 rounded-xl font-semibold"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="border border-theme px-8 py-3 rounded-xl font-semibold hover:bg-surface transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
