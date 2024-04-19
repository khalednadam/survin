import { TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="grid md:grid-cols-12">
        <div className="col-span-4 px-10 flex justify-center h-screen items-center flex-col w-full">
          <h1 className="text-5xl text-start self-start font-bold">Login</h1>
          <div className="w-full flex flex-col gap-2 justify-center items-center my-5 mx-5 py-5">
            <TextField
              variant="outlined"
              label="Email"
              type="email"
              className="w-full rounded-lg"
              InputProps={{ sx: { borderRadius: 3 } }}
            />
            <TextField
              variant="outlined"
              label="password"
              type="password"
              className="w-full rounded-lg"
              InputProps={{
                sx: { borderRadius: 2 },
                endAdornment: <Icon icon="ph:eye" width={30} />,
              }}
            />
          </div>
        </div>
        <div className="col-span-8 h-screen hidden md:flex bg-red-200"></div>
      </div>
    </>
  );
}

export default App;
