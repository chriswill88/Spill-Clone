import React from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

const LoginButton = () => {
  let navigate = useNavigate(); 
  
  const handleClick = () => {
    navigate("/login");
  };
  
    return <button onClick={handleClick} id="loginButton">Login</button>;
  };
 
const GetStartedButton = () => {
  let navigate = useNavigate(); 
  
  const handleClick = () => {
    navigate("/inviteCode");
  };

    return <button onClick={handleClick} id="getStarted">Get Started</button>;
};

const SignUp = () => {
    return (
    <div className="lava-lamp-background">
        <h1 id="signUp">Spill is visual conversation at the speed of culture</h1>
        <LoginButton />
        <GetStartedButton />
    </div>
    );
  };
  
  export default SignUp;