import React, { useContext, useState, useEffect } from "react";
import Card, { UserContext } from "./context";
import Alert from 'react-bootstrap/Alert';

function Withdraw(){
    const [ balance, setBalance ] = useState();
    const { user } = useContext(UserContext);
    const [show, setShow]         = useState(true);
    const [withdraw, setWithdraw]   = useState('');
    const [status, setStatus]     = useState('');
    const [isEnable, setIsEnable] = useState(false);
  
    function validate(amount){
      const newAmount = user[0].balance - amount;
      if(amount < 0 || isNaN(amount)){
        setStatus("Please insert a valid, positive number");
        setTimeout(() => setStatus(''),3000);
        return false;} else{
      if (newAmount < 0) {
        setStatus("You don't have enought money to make this transaction");
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    
      return true;
  }
}
  
    function handleWithdraw(){
      let amount= Number(withdraw);
      if (!validate(amount)) return;
      user[0].balance -= amount;
      let newBalance = user[0].balance;
      setBalance(newBalance);
      setWithdraw('');
      setShow(false);
    }
    function clearForm(){
      setWithdraw('');
      setShow(true);
    }
  
    useEffect(() => {
      withdraw ? setIsEnable(true) : setIsEnable(false);
    }, [withdraw]);
  
    return (
      <Card
      bgcolor="#fff"
      txtcolor="#333"
        header="Withdraw"
        title="Your current Balance is:"
        subtitle={user[0].balance}
        status= {status ? (<Alert className="alert-danger">{status}</Alert>): (<></>)}
        body={show ? (  
                <>
               
                <input type="input" className="form-control" id="name" placeholder="Enter Withdraw" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
               
                <button type="submit" className="btn btn-custom" onClick={handleWithdraw} disabled={!isEnable}>Submit Withdraw</button>
                </>
              ):(
                <>
                 <Alert className="alert-success">
              Your Withdraw was made Successfully!
             </Alert>
                <button type="submit" className="btn btn-custom" onClick={clearForm}>make another Withdraw</button>
                </>
              )}
      />    
    )
  }
export default Withdraw;