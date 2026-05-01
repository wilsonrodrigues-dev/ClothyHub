import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.style.scss";
import { useauth } from "../Hooks/useauth";

const Register = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const { loading, handleRegister } = useauth();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const res = await handleRegister({ fullname, email, contact, password });
    console.log(res);
    navigate("/login");
  };

    if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <main className="authmain">
      <div className="authcontainer">
        <div className="registercontainer">
          <h1>Create Account</h1>
          <h4>
            Fill your information below or register using your google account
          </h4>
          <form onSubmit={handleRegisterSubmit}>
            <label htmlFor="fullname">Fulllname</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Ex. Johan Doe"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="contact">Phone Number</label>
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="999999999"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Sign Up</button>
          </form>
          <hr />
          <div>
            <div className="gooogle">
              <div className="logo"></div>
              <h3>Sign up with Google</h3>
            </div>
          </div>
          <p>
            Already Have an Account? <Link to={"/login"}>Sign In</Link>
          </p>
        </div>
      </div>
      <div className="img">
        <img src="https://wallpapercave.com/wp/wp10668538.jpg" alt="" />
      </div>
    </main>
  );
};

export default Register;
