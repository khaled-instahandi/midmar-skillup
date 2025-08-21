import React, { useState } from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import Checkbox from "../../elements/Checkbox/Checkbox";
import InputField from "../../elements/DynamicInput/InputField";
import Button from "../../elements/Buttons/Button";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // const role = "apprentice";
    // const role = "coach";
    //   const role = "admin";

    // const role = "coordinator";
    localStorage.setItem("role", email);

    console.log(email, password, rememberMe);
    if (email === "coach") {
      navigate("/coach/interactive-panel");
    } else if (email === "apprentice") {
      navigate("/dashboard-apprentice");
    } else if (email === "admin") {
      navigate("/dashboard");
    } else if (email === "coordinator") {
      navigate("/dashboard-coordinator");
    } else if (email === "system-admin") {
      navigate("/dashboard-system-admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          {/* Your logo here */}
          <img src={logo} alt="Skill Up" />
        </div>
        <h2>Sign into Your Account</h2>
        <h4 style={{ userSelect: "text" }}>
          "apprentice" - "coach" - "admin" <br /> "coordinator" - "system-admin"{" "}
        </h4>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            {/* <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        /> */}
            <InputField
              label={"Email"}
              type="text"
              placeholder={"Email"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <InputField
              label={"Password"}
              type="password"
              placeholder={"Password"}
            />
          </div>
          <div className="form-utilities">
            <Checkbox
              label={"Remember me"}
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <Button
            label="Login"
            onClick={() => console.log("Clicked button")}
            className="button-login"
            fontSize={"1.5rem"}
            width={"100%"}
            height={"auto"}
          />{" "}
        </form>
      </div>
      <div className="sharp-background"></div>
    </div>
  );
};

export default Login;
