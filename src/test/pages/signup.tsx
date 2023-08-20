import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SignUp } from "pages";

describe("SignUp Component", () => {
  it("submits the form with valid data", async () => {
    // Mock validUserName and postRequest functions
    const mockValidUserName = jest.fn().mockResolvedValue(false);
    const mockPostRequest = jest.fn().mockResolvedValue({});

    jest.mock("api/sign-up", () => ({
      validUserName: mockValidUserName,
    }));
    jest.mock("utils/axios", () => ({
      postRequest: mockPostRequest,
    }));

    render(<SignUp />);

    // Simulate user input and form submission
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Test User" },
    });
    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText("Date of Birth"), {
      target: { value: "2023-08-12" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "testpassword" },
    });
    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));

    await waitFor(() => {
      expect(mockValidUserName).toHaveBeenCalledWith("testuser");
      expect(mockPostRequest).toHaveBeenCalledWith("/auth/signup", {
        username: "testuser",
        phoneNumber: "1234567890",
        name: "Test User",
        password: "testpassword",
        dob: "2023-08-12",
        role: undefined, // Set the role as needed
      });
      // Add more assertions as needed
    });
  });

  it("displays validation errors for empty fields", async () => {
    render(<SignUp />);

    const signUpButton = screen.getByRole("button", { name: /sign up/i });

    fireEvent.click(signUpButton);

    await waitFor(() => {
      const nameError = screen.getByText("Name is required");
      const usernameError = screen.getByText("Username is required");
      const emailError = screen.getByText("Email is required");
      const phoneNumberError = screen.getByText("Phone Number is required");
      const dobError = screen.getByText("Date of Birth is required");
      const passwordError = screen.getByText("Password is required");
      expect(nameError).toBeInTheDocument();
      expect(usernameError).toBeInTheDocument();
      expect(emailError).toBeInTheDocument();
      expect(phoneNumberError).toBeInTheDocument();
      expect(dobError).toBeInTheDocument();
      expect(passwordError).toBeInTheDocument();
    });
  });

  // Add more test cases for different scenarios
});
