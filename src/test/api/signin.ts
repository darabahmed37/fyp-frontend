import axios from "axios";
import { signIn } from "api/sign-in";
// Mocking the postRequest function
jest.mock("utils/axios", () => ({
  postRequest: jest.fn(),
}));

describe("signIn function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should sign in successfully and return user data", async () => {
    // Arrange
    const mockResponse = {
      data: {
        id: 1,
        username: "testUser",
        // ... other user data
      },
    };

    (axios.post as jest.Mock).mockResolvedValue(mockResponse);

    // Act
    const result = await signIn("testUser", "password123");

    // Assert
    expect(axios.post).toHaveBeenCalledWith("/auth/signin", {
      username: "testUser",
      password: "password123",
    });
    expect(result).toEqual(mockResponse.data);
  });

  it("should handle sign in failure and throw an error", async () => {
    // Arrange
    const errorMessage = "Invalid credentials";

    (axios.post as jest.Mock).mockRejectedValue(new Error(errorMessage));

    // Act & Assert
    await expect(signIn("invalidUser", "invalidPassword")).rejects.toThrowError(
      errorMessage,
    );
  });
});
