import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Logo from "../assets/logo.svg";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="grid md:grid-cols-12">
        <div className="col-span-4 px-10 flex justify-center h-screen items-center flex-col w-full">
          <h1 className="text-5xl text-start self-start font-bold">Login</h1>
          <div className="w-full flex flex-col gap-5 justify-center items-center my-5 mx-5 py-5">
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              label="Email"
              type="email"
              className="w-full rounded-lg"
              InputProps={{ sx: { borderRadius: 2 } }}
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              label="Password"
              type={showPassword ? "text" : "password"}
              className="w-full rounded-lg"
              InputProps={{
                sx: { borderRadius: 2 },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color="primary"
                      edge="end"
                      onClick={togglePassword}
                    >
                      {showPassword ? (
                        <Icon icon={"ph:eye-slash"} />
                      ) : (
                        <Icon icon={"ph:eye"} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <Button variant="text">Forgot your password?</Button>
            <Button variant="contained">Login</Button>
          </div>
          <div className="justify-self-end bottom-20 absolute">
            <Button variant="text">Don't have an account? Register</Button>
          </div>
        </div>
        <div className="col-span-8 h-screen hidden md:flex justify-center items-center  bg-primary">
          <img src={Logo} alt="survin logo" className="h-full m-10" />
        </div>
      </div>
    </>
  );
}

export default App;
