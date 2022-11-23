import React from "react";
import Card  from "./context";
import { ArrowRight } from 'react-bootstrap-icons';

function Home(){
  return (
    <>
    <Card
    bgcolor="#fff"
    txtcolor="#333"
      header="BadBank"
      title2="Welcome to the bank"
      text={ "You can move around using the navigation bar."}
      body={(<img src="./bank2.svg" className="img-fluid" alt="Responsive image"/>)}
    />    
   
    </>
  );  
}

export default Home;