import { useState } from "react"
import Navbar from "./Navbar"
import { Link, useNavigate } from "react-router-dom"
 
const Register = () => {
    const [Username,setUsername]=useState("")
    const [Password,setPassword]=useState("")
    const navigate = useNavigate();
    async function register(e) {
        e.preventDefault();
         
        const response=await fetch('https://blog-backend-8di5.onrender.com/register',{
                method:'POST',
                body:JSON.stringify({Username,Password}),
                headers:{'Content-Type':'application/json'},
            }); 
            if(response.ok==false){
                alert('registration failed');
            }else{
                 
                alert('registration sucesfull');
                navigate('/login');
                 
            }
    }
  return (
    <div>
      <Navbar/>
      <div className="d-flex justify-content-center align-items-center  vh-100">
            <div className=" bg-secondary-subtle p-3 rounded w-25 ">
                <h2>Register</h2>
                <form onSubmit={register}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label"><strong>Name</strong> </label>
                        <input type="text" className="form-control rounded-0"   placeholder="Enter Name" name="name" value={Username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label"><strong>password</strong> </label>
                        <input type="password" className="form-control rounded-0"   placeholder="Enter password" name="password" value={Password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                </form>
                <p>Already Have An Account <Link to="/login" type="submit" >Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register
