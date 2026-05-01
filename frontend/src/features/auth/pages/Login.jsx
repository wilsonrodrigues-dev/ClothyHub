import React, { useEffec,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useauth } from "../Hooks/useauth.js";

const Login = () => {

  const navigate=useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {loading,user,handleRegister,handleLogin}=useauth()


  const handleLoginSubmit= async(e)=>{
    e.preventDefault()
    const res=await handleLogin({email,password})
    console.log("final res",res)
    navigate("/")
  }

  if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <main className="authmain">
      <div className="authcontainer">
        <div className="registercontainer">
          <h1>Welcome Back</h1>
          <h3>Sign In to start Shoping</h3>
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="email">Email</label>

            <input type="email" name="email" id="email" value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} />

            <label htmlFor="password">Password</label>

            <input type="password" name="password" id="password" value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }} />

            <button type="submit">Sign In</button>
          </form>
          <hr />
          <div>
            <div className="gooogle">
              <div className="logo"></div>
              <h3>Sign up with Google</h3>
            </div>
          </div>
          <p>
            Don't Have an Account? <Link to={"/register"}>Sign Up</Link>
          </p>
        </div>
      </div>
      <div className="img">
        <img src="https://wallpapercave.com/wp/wp10668538.jpg" alt="" />
      </div>
    </main>
  );
};

export default Login;
