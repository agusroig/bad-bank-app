import React, { useContext, useState, useEffect } from "react";
import Card, { UserContext } from "./context";
import Alert from 'react-bootstrap/Alert';

function Deposit(){
  const [ balance, setBalance ] = useState();
  const { user, transaction, setTransaction } = useContext(UserContext);
  const [show, setShow]         = useState(true);
  const [deposit, setDeposit]   = useState('');
  const [status, setStatus]     = useState('');
  const [isEnable, setIsEnable] = useState(false);

  function validate(amount){
    if (amount < 0 || isNaN(amount)) {
      setStatus('Please insert a valid, positive number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

function addTransaction(amount, balance){
  transaction.push({operation:'deposit',amount,balance});

}

  function handleDeposit(){
    let amount= Number(deposit);
    if (!validate(amount)) return;
    user[0].balance += amount;
    let newBalance = user[0].balance;
    setBalance(newBalance);
    setDeposit('');
    addTransaction(amount, newBalance);
    setShow(false);
  }
  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  useEffect(() => {
    deposit ? setIsEnable(true) : setIsEnable(false);
  }, [deposit]);

  return (
    <Card
    bgcolor="#fff"
    txtcolor="#333"
      header="Deposit"
      title="Your current Balance is:"
      subtitle={user[0].balance}
      status= {status ? (<Alert className="alert-danger">{status}</Alert>): (<></>)}
      body={show ? (  
              <>
              <input type="input" className="form-control" id="name" placeholder="Enter deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
             
              <button type="submit" className="btn btn-custom" onClick={handleDeposit} disabled={!isEnable}>Submit Deposit</button>
              </>
            ):(
              <>
              <Alert className="alert-success">
              Your Deposit was made Successfully!
             </Alert>
              <button type="submit" className="btn btn-custom" onClick={clearForm}>make another Deposit</button>
              </>
            )}
    />    
  )
  
}

export default Deposit;