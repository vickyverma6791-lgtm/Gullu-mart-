import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("gullumart_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("gullumart_user", JSON.stringify(userData));
    toast.success(`Welcome back, ${userData.name || userData.email}!`);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("gullumart_user");
    toast.info("Logged out successfully.");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
