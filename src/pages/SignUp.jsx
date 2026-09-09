import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Signup functionality is handled in /login page (tab switcher)
const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login", { replace: true });
  }, []);
  return null;
};

export default SignUp;

