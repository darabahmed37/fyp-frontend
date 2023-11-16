import React from "react";
import { toast } from "react-toastify";
import {TextField, Button, Typography} from "@mui/material";
import { changePassword } from "../../api/change-password";

export const ChangePasswordForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const password = formData.get("password");
    const confirm = formData.get("confirm");
    console.log(password);
    if (password !== confirm) {
      alert("New password and confirm password do not match");
      return;
    }

    changePassword(password as string, confirm as string).then(() => {
      toast.success("Password Changed");
    });

    // Send the new password to the server
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        maxWidth: "40em",
        gap: "1em",
          marginTop:"1em"
      }}
    >
      <Typography fontWeight={"500"}>Change Password</Typography>

      <TextField
        id="new-password"
        label="New Password"
        type="password"
        name={"password"}
        required
      />
      <TextField
        id="confirm-password"
        label="Confirm Password"
        type="password"
        name={"confirm"}
        required
      />
      <Button variant="contained" type="submit">
        Change Password
      </Button>
    </form>
  );
};

const Customer = () => {
  return (
    <div>
      <ChangePasswordForm />
    </div>
  );
};

export default Customer;
