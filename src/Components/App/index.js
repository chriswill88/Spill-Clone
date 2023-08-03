import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

//Pages needed: signup, login, inviteCode, basicInfo
//My components
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import InviteCode from '../InviteCode';
import BasicInfo from '../BasicInfo';
// import 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/inviteCode" element={<InviteCode />} />
        <Route path="/basicInfo" element={<BasicInfo />} />
        {/* <Route path="/users" element={<Users />} /> */}
      </Routes>
    </Router>
  );
};

export default App;



