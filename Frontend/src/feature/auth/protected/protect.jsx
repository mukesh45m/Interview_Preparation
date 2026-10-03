import React from "react";
import { useAuth } from "../../auth/hooks/useauth";
import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protect;
