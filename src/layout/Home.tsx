import React, { FC, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Outlet } from "react-router-dom";
import { logOut } from "utils/user";

const Home: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "#f5f5f5", position: "relative" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Home" href={"/"} />
          <Tab label="About" />
          <Tab label="Settings" href={"/settings"} />
          <Tab
            label={"Logout"}
            sx={{ position: "absolute", right: 0 }}
            onClick={(e) => {
              logOut();
            }}
          />
        </Tabs>
      </Box>
      <Outlet />
    </>
  );
};

export default Home;
