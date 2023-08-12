import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import {SignIn} from "pages";

describe("SignIn Component", () => {
  it("submits the form with valid credentials", async () => {
    // Mock signIn and getRequest functions
    const mockSignIn = jest.fn().mockResolvedValueOnce({
      access_token: "mockAccessToken",
      refresh_token: "mockRefreshToken",
    });
    const mockGetRequest = jest.fn().mockResolvedValueOnce({ data: {} });

    jest.mock("api/sign-in", () => ({
      signIn: mockSignIn,
    }));
    jest.mock("utils/axios", () => ({
      getRequest: mockGetRequest,
    }));

    render(<SignIn />);

    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const signInButton = screen.getByRole("button", { name: /sign in/i });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith("testuser", "testpassword");
      expect(mockGetRequest).toHaveBeenCalledWith("/user/profile");
      // Add more assertions as needed
    });
  });

  it("displays validation errors for empty fields", async () => {
    render(<SignIn />);

    const signInButton = screen.getByRole("button", { name: /sign in/i });

    fireEvent.click(signInButton);

    await waitFor(() => {
      const usernameError = screen.getByText("Username is required");
      const passwordError = screen.getByText("Password is required");
      expect(usernameError).toBeInTheDocument();
      expect(passwordError).toBeInTheDocument();
    });
  });

  // Add more test cases for different scenarios
});
