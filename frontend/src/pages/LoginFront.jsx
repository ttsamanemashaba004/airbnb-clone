import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/LocationContext";
import axios from "axios";
import { toast } from "react-toastify";
import "./LoginFront.css";
import LoginNav from "../components/LoginNav";

const LoginFront = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { token, setToken, navigate, backendUrl } = useContext(LocationContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="px-24">
      <LoginNav />
      <div className="login-form-container">
        <div className="login-form">
          <h1 className="form-header">{currentState}</h1>
          <form onSubmit={onSubmitHandler}>
            {currentState === "Login" ? (
              ""
            ) : (
              <div className="title_input">
                <p className="input-title">Name</p>
                <input
                  type="text"
                  placeholder="name"
                  required
                  className="inputs"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
            )}
            <div className="title_input">
              <p className="input-title">Email</p>
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="inputs"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="title_input">
              <p className="input-title">Password</p>
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="inputs"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <p className="input-title forgot-password">Forgot Password ?</p>
              {currentState === "Login" ? (
                <p
                  onClick={() => setCurrentState("Sign Up")}
                  className="input-title forgot-password cursor-pointer"
                >
                  Create account
                </p>
              ) : (
                <p
                  onClick={() => setCurrentState("Login")}
                  className="input-title forgot-password cursor-pointer"
                >
                  Login Here
                </p>
              )}
            </div>
            <div className="login-button-container">
              <button className="login-button">
                {" "}
                {currentState === "Login" ? "Login" : "Sign Up"}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFront;
