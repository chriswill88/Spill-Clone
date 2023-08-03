import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

const SignIn = () => {
    const [inputHandle, setHandle] = useState('');
    const [inputPassword, setPassword] = useState('')
  
    const handleInputChange = (event) => {
      setHandle(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    const BackButton = () => {
      let navigate = useNavigate(); 
      
      const handleClick = () => {
        navigate("/");
      };
    
        return <button onClick={handleClick} id="backButton">Go Back</button>;
    };
    
    const NextButton = () => {
      let navigate = useNavigate(); 
      
      const handleClick = () => {
        navigate("/inviteCode");
      };
      
      return <button onClick={handleClick} id="next">Next</button>
    }
    
    return(
      <div className="lava-lamp-background">
        <BackButton />
        <h1 id="loginText">Login to Spill</h1>
        <input type="text" placeholder="Handle" id="handle" value={inputHandle} onChange={handleInputChange} />
        <input type="text" placeholder="Password" id="password" value={inputPassword} onChange={handlePasswordChange}/>
        <NextButton />
        <p id="passwordReset">Forgot Password?</p>
    </div>
    )
  }
  
  export default SignIn;