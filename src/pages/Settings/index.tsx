import React from "react";
import {getUser, logOut} from "utils/user";
import Customer from "pages/Settings/Customer";
import Mechanic from "./Mechanic";

const Settings = () => {
    const user = getUser();
    if (!user) {
        logOut();
    }

    return (
        <div>
            <div>{user?.role === "CUSTOMER" ? <Customer/> : <Mechanic/>}</div>
        </div>
    );
};

export default Settings;
