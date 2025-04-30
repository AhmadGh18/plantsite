import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Save token to localStorage
      localStorage.setItem("auth_token", token);

      // Optional: Fetch user info
      axios
        .get("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // Save user if needed
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/"); // Redirect to home or dashboard
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
          navigate("/login");
        });
    } else {
      navigate("/login");
    }
  }, []);

  return <p>Logging you in...</p>;
};

export default AuthCallback;
