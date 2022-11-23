import React, { useContext } from "react";
import Card, { UserContext } from "./context";
import Table from 'react-bootstrap/Table';



function AllData(){
  const { user } = useContext(UserContext);

  const usersList = user.map((user, i) => {
    return(

          <tr key={i}>
            <td>{i}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.balance}</td>
          </tr>
      
    );
    });

  
  return (
    <Card
    bgcolor="#fff"
    txtcolor="#333"
    header="All Data"
    body= {
      <>
      <Table striped bordered hover size="sm">
    <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>email</th>
          <th>password</th>
          <th>balance</th>
        </tr>
      </thead>
      <tbody>
        {usersList}
      </tbody>
      </Table>

      </>
    }
  
    
    />
   
  );
}

export default AllData;