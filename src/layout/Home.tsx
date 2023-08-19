import React, {FC, useState} from "react";
import {Box, Tab, Tabs} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";
import {logOut} from "utils/user";

const Home: FC = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{width: "100%", bgcolor: "#f5f5f5", position: "relative"}}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab
                        label="Home"
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                    <Tab
                        label="About"
                        onClick={() => {
                            navigate("/about");
                        }}
                    />
                    <Tab
                        label="Settings"
                        onClick={() => {
                            navigate("/settings");
                        }}
                    />
                    <Tab
                        label={"Logout"}
                        sx={{position: "absolute", right: 0}}
                        onClick={(e) => {
                            logOut();
                        }}
                    />
                </Tabs>
            </Box>

            <Box
                sx={{
                    maxWidth: "1280px",
                    margin: "auto",
                    marginTop: "1em",
                }}
            >
                <Outlet/>
            </Box>
        </>
    );
};

export default Home;
