import React from "react";
import { NavLink } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function NavBar(){
  // const renderTooltip = props => (
  //   <Tooltip {...props}>Tooltip for the register button</Tooltip>
  // );
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" activekey="/createaccount">
        <a className="navbar-brand" href="/">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>This is the Homepage</Tooltip>}>
            <li className="nav-item">
            <NavLink to="/" className="nav-link" >
                  Home
                </NavLink>
            </li>
            </OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={<Tooltip>Enter to Create Account</Tooltip>}>
            <li className="nav-item">
            <NavLink to="/createaccount" className="nav-link" >
                  Create Account
                </NavLink>
            </li>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Enter to make a Deposit</Tooltip>}>
            <li className="nav-item">
            <NavLink to="/deposit" className="nav-link" eventKey="link-1" exact activeClassName="active">
                  Deposit
                </NavLink>
            </li>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Enter to make a Withdraw</Tooltip>}>
            <li className="nav-item">
            <NavLink to="/withdraw" className="nav-link" eventKey="link-2" exact activeClassName="active">
                 Withdraw
                </NavLink>
            </li>
            </OverlayTrigger>
           
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Here you will find all registered users data</Tooltip>}>
            <li className="nav-item">
            <NavLink to="/alldata" className="nav-link" eventKey="link-4" exact activeClassName="active">
            AllData
                </NavLink>
            </li> 
            </OverlayTrigger>         
          </ul>
        </div>
      </nav>
      </>
    );
  }

  export default NavBar;