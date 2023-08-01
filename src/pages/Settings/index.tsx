import React from "react";
import { getUser, logOut } from "utils/user";
import Customer from "pages/Settings/Customer";
import Driver from "pages/Settings/Driver";

const Settings = () => {
  const user = getUser();
  if (!user) {
    logOut();
  }

  return (
    <div>
      i AM SETTINGS
      <div>{user?.role === "CUSTOMER" ? <Customer /> : <Driver />}</div>
    </div>
  );
};

export default Settings;
