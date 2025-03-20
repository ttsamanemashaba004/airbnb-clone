import axios from "axios"
import React, {useState} from "react"
import { backendUrl } from "../App"
import { toast } from "react-toastify"
import LoginNav from "./LoginNav"
import "./Login.css"

const Login = ({ setToken }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
        e.preventDefault();
        const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
        if (response.data.success) {
            setToken(response.data.token)
        } else {
            toast.error(response.data.message)
        }
         
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
}
  
  return (
    <>
      <LoginNav />
      <div className="login-form-container">
        <div className="login-form">
          <h1 className="form-header">Login</h1>
          <form onSubmit={onSubmitHandler}>
            <div className="title_input">
              <p className="input-title">Username</p>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='your@email.com' required className="inputs" />
            </div>
            <div className="title_input">
              <p className="input-title">Password</p>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Enter your password' required className="inputs" />
              <p className="input-title forgot-password">Forgot Password ?</p>
            </div>
            <div className="login-button-container">
              <button className="login-button"> Login </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
