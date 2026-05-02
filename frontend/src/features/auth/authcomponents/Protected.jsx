import React from "react";
import { useauth } from "../Hooks/useauth";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user, loading } = useauth();

  if (loading) {
    return (
      <main>
        <h1>Loading....</h1>
      </main>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;