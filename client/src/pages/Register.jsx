import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const navigate = useNavigate();

  const register = () => {
    axios.post(`api/auth/register`, {
      name,
      username,
      email,
      password
    }, {
        withCredentials: true
      }).then(() => {
        console.log("registered");
        setUsername("");
        setConfirmPassword("");
        setName("");
        setPassword("");
        setEmail("");
       navigate("/login"); 
      }).catch(() => {
        console.log("Something went wrong");
      })
  }

  return (
    <>
      <div className="grid md:grid-cols-12">
        <div className="col-span-4 px-10 flex justify-center h-screen items-center flex-col w-full">
          <h1 className="text-5xl text-start self-start font-bold">Register</h1>
          <div className="w-full flex flex-col gap-5 justify-center items-center my-5 mx-5 py-5">
            <TextField
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              variant="outlined"
              label="Name"
              type="text"
              className="w-full rounded-lg"
              InputProps={{ sx: { borderRadius: 2 } }}
            />
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              placeholder="A unique username"
              variant="outlined"
              label="Username"
              type="text"
              className="w-full rounded-lg"
              InputProps={{ sx: { borderRadius: 2 } }}
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              placeholder="john@example.com"
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
              placeholder="A strong password"
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
            <TextField
              onChange={(e) => setConfirmPassword(e.target.value)}
              variant="outlined"
              label="Confirm Password"
              placeholder="Your strong password again"
              type={showConfirmPassword ? "text" : "password"}
              className="w-full rounded-lg"
              InputProps={{
                sx: { borderRadius: 2 },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color="primary"
                      edge="end"
                      onClick={toggleConfirmPassword}
                    >
                      {showConfirmPassword ? (
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
          <div className="flex justify-end items-center w-full">
            <Button onClick={register} variant="contained">Register</Button>
          </div>
          <div className="justify-self-end bottom-20 absolute">
            <NavLink to="/login">
              <Button variant="text">Have an account? Login</Button>
            </NavLink>
          </div>
        </div>
        <div className="col-span-8 h-screen hidden md:flex justify-center items-center  bg-primary">
          <img src={Logo} alt="survin logo" className="h-full m-10" />
        </div>
      </div>
    </>
  );
}

export default Register;

