import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useauth } from '../Hooks/useauth';


const SelectRole = () => {
  const navigate = useNavigate();
  const {setrole}=useauth()

  const handleRole = async (role) => {
    await setrole({role})

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