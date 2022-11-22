import React, { useState, useMemo } from "react";
import './App.css';
import NavBar from "./components/navbar";
import CreateAccount from "./components/createaccount";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import AllData from "./components/alldata";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/context";


function App() {

  const [ user, setUser ] = useState([{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]);
  const providerValue = useMemo(() => ({user, setUser}),[user, setUser]);
  return (
    <BrowserRouter>
      <NavBar/>
        <div className="container" style={{padding: "40px"}}>
        <UserContext.Provider value={providerValue}>
        <Routes>
        
             <Route path="/" exact element={<Home/>} />
             <Route path="/createaccount/" element={<CreateAccount/>} />
             <Route path="/deposit/" element={<Deposit/>} />
             <Route path="/withdraw/" element={<Withdraw/>} />
             <Route path="/alldata/" element={<AllData/>} />
         
          </Routes>
          </UserContext.Provider>      
        </div>
     
    </BrowserRouter>
  );
}

export default App;
