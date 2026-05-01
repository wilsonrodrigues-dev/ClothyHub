import { useContext } from "react";
import { register,login } from "../services/auth.api.js";
import { AuthContext } from "../auth.context.jsx";

export const useauth=()=>{
    const context=useContext(AuthContext)
    const {loading,setLoading,user,setUser}=context

    async function handleRegister({fullname,email,contact,password,isSeller=false}) {
        try {
            setLoading(true)
            const data=await register({fullname,email,contact,password,isSeller})
            setUser(data)
            setLoading(false)
            return data
        } catch (err) {
            console.log("hook error",err)
        }
    }
    
    async function handleLogin({email,password}) {
        try {
            setLoading(true)
            const data=await login({email,password})
            setUser(data)
            setLoading(false)
            return data

        } catch (err) {
            console.log("hook error",err)
        }
        
    }


    return ({loading,user,handleRegister,handleLogin})


}