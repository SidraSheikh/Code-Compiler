import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      navigate("/auth"); 
    };

    logoutUser(); 
  }, [navigate]);

  return <div>Logging out...</div>;
}

export default LogoutPage;
