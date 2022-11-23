import React, { useContext } from "react";
import Card, { UserContext } from "./context";
import Table from 'react-bootstrap/Table';


function Transactions(){
  const { transaction } = useContext(UserContext);


    const transactionList = transaction.map((transaction, i) => {
      return(
  
            <tr key={i}>
              <td>{i}</td>
              <td>{transaction.operation}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.balance}</td>
            
            </tr>
        
      );
      });
  
  return (
    <Card
    bgcolor="#fff"
    txtcolor="#333"
    header="All Transactions"
    body= {
      <>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>operation</th>
          <th>amount</th>
          <th>balance</th>
        </tr>
      </thead>
      <tbody>
      {transactionList}
      </tbody>
      </Table>
      </>
    }
  
    
    />
   
  );
}

export default Transactions;