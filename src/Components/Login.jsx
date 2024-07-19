import { useContext, useState } from "react"
import Navbar from "./Navbar"
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "./Usercontext";
 
const Login = () => {
  const [userName,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[redirect,setRedirect]=useState(false);
  const {setUserInfo} = useContext(UserContext);
  
  async function login(e) {
     e.preventDefault();
    const response=await fetch('https://backend-2-uerp.onrender.com/login',{
      method:'POST',
      body:JSON.stringify({userName,password}),
      headers:{'Content-Type':'application/json'},
      credentials:'include'
     });
  if(response.ok){
      setRedirect(true);
  }
}

  if(redirect){
    return <Navigate to={'/'}/>
  } 
  return (
    <div>
      <Navbar/>
      <div className="d-flex justify-content-center align-items-center  vh-100">
            <div className=" bg-secondary-subtle p-3 rounded w-25 ">
                <h2>Login</h2>
                <form onSubmit={login}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label"><strong>Name</strong> </label>
                        <input type="text" className="form-control rounded-0"   placeholder="Enter Name" name="name" value={userName} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label"><strong>password</strong> </label>
                        <input type="password" className="form-control rounded-0"   placeholder="Enter password" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                </form>
                <p>Not Having Account<Link to="/register" type="submit" >Register</Link></p>
                 
            </div>
        </div>
    </div>
  )
}

export default Login
