import { useContext, useEffect } from "react";
import { register, login, getMe,selectrole } from "../services/auth.api.js";
import { AuthContext } from "../auth.context.jsx";

export const useauth = () => {
  const context = useContext(AuthContext);
  const { loading, setLoading, user, setUser } = context;

  async function handleRegister({
    fullname,
    email,
    contact,
    password,
    isSeller = false,
  }) {
    try {
      setLoading(true);
      const { data } = await register({
        fullname,
        email,
        contact,
        password,
        isSeller,
      });
      setUser(data.user);
      setLoading(false);
      return data.user;
    } catch (err) {
      console.log("hook error", err);
    }
  }

  async function handleLogin({ email, password }) {
    try {
      setLoading(true);
      const { data } = await login({ email, password });
      setLoading(false);
      return data.user;
    } catch (err) {
      console.log("hook error", err);
    }
  }



  async function setrole({role}) {
    try {
      setLoading(true)
      const res=await selectrole({role})
      setLoading(false)
      return res
    } catch (error) {
      console.log(error)
    }
    
  }



  return { loading, user, handleRegister, handleLogin, setUser,setrole };
};
