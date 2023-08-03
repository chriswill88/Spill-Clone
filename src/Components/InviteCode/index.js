import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

const BackButton = () => {
    let navigate = useNavigate(); 
    
    const handleClick = () => {
      navigate("/");
    };
  
      return <button onClick={handleClick} id="backButton">Go Back</button>;
  };
  
const ContinueButton = () => {
    let navigate = useNavigate(); 

    const handleClick = () => {
        navigate("/basicInfo");
    };

    return <button onClick={handleClick} id="continueButton">Continue</button>
};

const InviteCode = () => {
    const [inputInviteCode, setInviteCode] = useState('')
  
    const handleInviteCodeChange = (event) => {
        setInviteCode(event.target.value);
    };
        return(
        <div className="lava-lamp-background">
            <BackButton />
            <h1 id="inviteCode">Enter your invite code</h1>
            <input type="text" placeholder="Invite code" id="inviteCodeInput" value={inputInviteCode} onChange={handleInviteCodeChange}/>
            <p id="needCode">Don't have an invite code? <span id="joinWaitList">Join the Waitlist</span></p>
            <ContinueButton />
        </div>
    )
};

export default InviteCode;