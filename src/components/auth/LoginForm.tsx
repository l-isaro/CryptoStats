import { Button, TextField } from "@mui/material";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-6xl font-medium">Cryptostats</h1>
      <div className="flex flex-col gap-4">
        <TextField label="Email" className="w-80" type="email" required/>
        <TextField label="Password" className="w-80" type="password" required/>
      </div>
      <Button variant="contained" className="w-80"><span className="p-1">Log In</span></Button>
    </div>
  )
}
