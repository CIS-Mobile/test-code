import React, { useState, useEffect } from "react";
import SignupForm from "./SignupForm";
import { useAppState } from "./StateContext";
import { Alert, Button, Box } from "@mui/material";

const SignupPage = () => {
  const { email, password, firstName, lastName } = useAppState();
  const [formValid, setFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // new state variable

  const setFormValidHandler = (newValue) => {
    if (formValid !== newValue) {
      setFormValid(newValue);
    }
  };

  const isFormValid = () => {
    return email.valid && password.valid && firstName.valid && lastName.valid;
  };

  useEffect(() => {
    setFormValidHandler(isFormValid());

    return () => {};
  }, [isFormValid, setFormValidHandler]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // set formSubmitted to true on submit
  };

  <Button variant="contained" onClick={() => handleSubmit()}>
    Submit
  </Button>;

  return (
    <div>
      <Box
        component="form"
        sx={{
          m: 1,
          width: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        autoComplete="off"
      >
        <h1>SIGNUP PAGE</h1>
        <h3>Form is valid? {formValid ? "YES" : "NO"}</h3>
        <SignupForm />
        <div>
          <Button variant="contained" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </div>

        <div>
          {formSubmitted && <p>Form submitted!</p>}{" "}
          {/* new element to render on form submission */}
        </div>
      </Box>

      <br />
      <br />
      <br />
      {!email?.valid && email?.data?.length > 0 && (
        <Alert variant="outlined" severity="error">
          `Invalid Email`
        </Alert>
      )}
      {!password.valid && password.data.length > 0 && (
        <Alert variant="outlined" severity="error">
          `Invalid Password`
        </Alert>
      )}
      {!firstName.valid && firstName.data.length > 0 && (
        <Alert variant="outlined" severity="error">
          `Invalid First Name`
        </Alert>
      )}
      {!lastName.valid && lastName.data.length > 0 && (
        <Alert variant="outlined" severity="error">
          `Invalid Last Name`
        </Alert>
      )}
    </div>
  );
};

export default SignupPage;
