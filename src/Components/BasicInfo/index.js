import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';

const BackButton = () => {
    
    let navigate = useNavigate(); 

    const handleClick = () => {
        
        navigate("/inviteCode");
        
    };

    return <button onClick={handleClick} id="backButton">Go Back</button>;
};

const ContinueButton = () => {
    let navigate = useNavigate(); 

    const handleClick = () => {
        navigate("/login");
    };

    return <button onClick={handleClick} id="continueBasicInfoButton">Continue</button>
};

const BasicInfo = () => {
    
    const [inputFullName, setFullName] = useState('')
  
    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };
    
    const [inputEmail, setEmail] = useState('')
  
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const [inputEmailCheck, setEmailCheck] = useState('')
  
    const handleEmailCheckChange = (event) => {
        setEmailCheck(event.target.value);
    };
    
    const [inputBirthday, setBirthday] = useState('')
  
    const handleBirthdayChange = (event) => {
        setBirthday(event.target.value);
    };
    
    const [inputCountry, setCountry] = useState('')
  
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };
    
    const [inputPhoneNumber, setPhoneNumber] = useState('')
  
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    
    
    return (
        <div className="lava-lamp-background">
            <BackButton />
            <h1 id="basicInfo">Basic info</h1>
            <input type="text" placeholder="Full Name" id="fullName" className="basicInfoPage" value={inputFullName} onChange={handleFullNameChange}/>
            <input type="text" placeholder="Email" id="email"  className="basicInfoPage" value={inputEmail} onChange={handleEmailChange}/>
            <input type="text" placeholder="Confirm Email" id="confirmEmail" className="basicInfoPage" value={inputEmailCheck} onChange={handleEmailCheckChange}/>
            <input type="text" placeholder="Date of birth (MM/DD/YYYY)" className="basicInfoPage" id="dateOfBirth" value={inputBirthday} onChange={handleBirthdayChange}/>
            <input type="text" placeholder="Country" id="country" className="basicInfoPage" value={inputCountry} onChange={handleCountryChange}/>
            <input type="text" placeholder="+1 Phone number" className="basicInfoPage" id="phoneNumber" value={inputPhoneNumber} onChange={handlePhoneNumberChange}/>
            <ContinueButton />
        </div>
    )
}

export default BasicInfo;
