
import React,{useState} from "react";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import {  useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png"

import './ForgetPassword.css'

const ForgetPassword =()=>
{
    const Navigate=useNavigate();

    const navigation=()=>
    {
      Navigate("/")
    }

  return(

    <>
    <div className="background-container">
    <div className="imageContainer">
        <img className="logo" src={logo} />
      </div>
    <div className="mainContainer">
        <div className="subMainContainerLogin">
        </div>
        <div className="submainContainerForget">
        <h1 className="login">
        Forgot Pssword?
        </h1>
        <label htmlFor="email" className="field-label">
          Email
        </label>
            <TextField placeholder="Enter you Email" className="textField" id="outlined-basic" variant="outlined" />
        <div className="buttonContainer">
        <Button className="authButton">Send Email</Button>
        </div>
        <a onClick={navigation} className="linkForget">Back to Login</a>
        </div>
    </div>
    </div>
    </>
  )

}
export default ForgetPassword;