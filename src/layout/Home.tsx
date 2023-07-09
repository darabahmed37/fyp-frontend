import React, { FC, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Outlet } from "react-router-dom";
import {logOut} from "utils/user";

const Home: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", bgcolor: "background.secon", position: "relative" }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Settings" href={"/settings"} />
        <Tab label={"Logout"} sx={{ position: "absolute", right: 0 }} onClick={e=>{
          logOut()
        }}/>
      </Tabs>

      <Outlet />
    </Box>
  );
};

export default Home;
