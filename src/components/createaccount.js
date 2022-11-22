import React, { useState, useContext, useEffect } from "react";
import Card, { UserContext } from "./context";
import Alert from 'react-bootstrap/Alert';

function CreateAccount(){
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [isEnable, setIsEnable] = useState('');
  const {user, setUser}         = useContext(UserContext);


  function validate(field, label){
      if (!field) {
        setStatus('Please insert ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
  
  function validatePass(field, label){
    if (!field) {
      setStatus('Please insert ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    } else if(field.length < 8){
      setStatus('Password must have at least 8 characters');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}


  function handleCreate(){
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validatePass(password, 'password')) return;
    user.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

function changeButton(value1, value2, value3){

  if((value1.length + value2.length + value3.length) > 0){
  setIsEnable(true)
} else{setIsEnable(false)}
}
  useEffect(() => {
    changeButton(name, email, password);
  }, [name, email, password]);
  

  return (
    <>
     
    <Card
      bgcolor="#fff"
      txtcolor="#333"
      header="Create Account"
      status={status ? (<Alert className="alert-danger">{status}</Alert>): (<></>)}
      body={show ? (  
              <>
              <label>Name</label>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              <label>Email address</label>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              <label>Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-custom" onClick={handleCreate} disabled={!isEnable}>Create Account</button>
              </>
            ):(
              <>
               <Alert className="alert-success">
               Your Account was created Successfully!
             </Alert>
             
              <button type="submit" className="btn btn-custom" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
    </>
  )
}

export default CreateAccount;