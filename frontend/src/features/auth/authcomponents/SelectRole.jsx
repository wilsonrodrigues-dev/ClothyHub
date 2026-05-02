import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SelectRole = () => {
  const navigate = useNavigate();

  const handleRole = async (role) => {
    await axios.post("/auth/setrole", { role }, { withCredentials: true });

    if (role === "seller") {
      navigate("/sellerdashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <h2>Select your role</h2>
      <button onClick={() => handleRole("buyer")}>Buyer</button>
      <button onClick={() => handleRole("seller")}>Seller</button>
    </div>
  );
}


export default SelectRole