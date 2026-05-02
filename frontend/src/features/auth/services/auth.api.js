import axios from 'axios'

const api=axios.create({
    baseURL:"/api/auth",
    withCredentials:true
})


export async function register({fullname,email,contact,password,isSeller}) {
    try {
        console.log("api check res",isSeller)
        const response=await api.post("/register",{fullname,email,contact,password,isSeller})
        console.log(response)
        return response
        
    } catch (err) {
        console.log("api error",err)
        
    }
    
}

export async function login({email,password}) {
    try {
        const response=await api.post("/login",{email,password})
        return response
        
    } catch (err) {
        console.log("api done",err)
        
    }
    
}

export async function getMe() {
    try {
        const res=await api.get("/getMe")
        return res.data
    } catch (error) {
        console.log("api error", error.response?.data || error.message);
        return null;
        
    }
}
