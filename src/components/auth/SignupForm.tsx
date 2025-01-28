import { Button, TextField, Link as MuiLink } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroredEmail, setErroredEmail] = useState(false);
  const [erroredPassword, setErroredPassword] = useState(false);

  function validateInputs(){
    if(!email){
        setErroredEmail(true)
    } else {
        setErroredEmail(false)
    }
    if(!password){
        setErroredPassword(true)
    } else{
        setErroredPassword(false)
    }
  }

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-6xl font-medium">Cryptostats</h1>
      <div className="flex flex-col gap-4">
        <TextField
          label="Email"
          className="w-80"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={erroredEmail}
          helperText={erroredEmail && "Please enter valid email"}
        />
        <TextField
          label="Password"
          className="w-80"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          error={erroredPassword}
          helperText={erroredPassword && "Please enter a valid password"}
        />
        <Link to="/login">
          <MuiLink>Log In</MuiLink>
        </Link>
      </div>
      <Button variant="contained" className="w-80" onClick={validateInputs}>
        <span className="p-1">Sign Up</span>
      </Button>
    </div>
  );
}
