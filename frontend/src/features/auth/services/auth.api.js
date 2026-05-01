import axios from 'axios'

const api=axios.create({
    baseURL:"http://localhost:3000/api",
    withCredentials:true
})


export async function register({fullname,email,contact,password,isSeller}) {
    try {
        console.log("api check res",isSeller)
        const response=await api.post("/auth/register",{fullname,email,contact,password,isSeller})
        console.log(response)
        return response
        
    } catch (err) {
        console.log("api error",err)
        
    }
    
}
export async function login({email,password}) {
    try {
        const response=await api.post("/auth/login",{email,password})
        return response
        
    } catch (err) {
        console.log("api done",err)
        
    }
    
}
