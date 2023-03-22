import React, { useEffect, useState } from "react";
import validationFunctions from "./validation";
import { useAppState, useStateSetters } from "./StateContext";
import { TextField } from "@mui/material";

function SignupForm() {
  const { email, password, firstName, lastName } = useAppState();
  const { setEmail, setPassword, setFirstName, setLastName } =
    useStateSetters();



  const handleBlur = (fieldName, value) => {
    const validationFn = validationFunctions[fieldName];
    if (validationFn) {
      switch (fieldName) {
        case "email":
          setEmail({
            data: value,
            valid: validationFn(value),
          });
          break;
        case "password":
          setPassword({
            data: value,
            valid: validationFn(value),
          });
          break;
        case "firstName":
          setFirstName({
            data: value,
            valid: validationFn(value),
          });
          break;
        case "lastName":
          setLastName({
            data: value,
            valid: validationFn(value),
          });
          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
    console.log(email.valid);

    return () => {};
  }, [email]);

  return (
    <>
      
        <TextField
          id="outlined-controlled"
          label="Email"
          value={email?.data}
          onChange={(e) => {
            setEmail({ data: e.target.value, valid: email?.valid });
          }}
          onBlur={(e) => handleBlur("email", e.target.value)}
        />

        <TextField
          id="outlined-controlled"
          label="Password"
          value={password.data}
          onChange={(e) => {
            setPassword({ data: e.target.value, valid: password?.valid });
          }}
          onBlur={(e) => handleBlur("password", e.target.value)}
        />

        <TextField
          id="outlined-controlled"
          label="First name"
          value={firstName.data}
          onChange={(e) => {
            setFirstName({ data: e.target.value, valid: firstName?.valid });
          }}
          onBlur={(e) => handleBlur("firstName", e.target.value)}
        />

        <TextField
          id="outlined-controlled"
          label="Last name"
          value={lastName.data}
          onChange={(e) => {
            setLastName({ data: e.target.value, valid: lastName?.valid });
          }}
          onBlur={(e) => handleBlur("lastName", e.target.value)}
        />
    </>
  );
}

export default SignupForm;
