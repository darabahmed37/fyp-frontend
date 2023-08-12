import axios from "axios";
import {validUserName} from "api/sign-up";
import {BASE_BACKEND_URL} from "config";

// Mocking the getRequest function
jest.mock("utils/axios", () => ({
  getRequest: jest.fn(),
}));

describe("validUserName function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return true for a valid username", async () => {
    // Arrange
    const validUsername = "testUser";
    const mockResponse = {
      data: true,
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    // Act
    const result = await validUserName(validUsername);

    // Assert
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_BACKEND_URL}/user/checkUserName?username=${validUsername}`
    );
    expect(result).toEqual(true);
  });

  it("should return false for an invalid username", async () => {
    // Arrange
    const invalidUsername = "invalidUser";
    const mockResponse = {
      data: false,
    };

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    // Act
    const result = await validUserName(invalidUsername);

    // Assert
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_BACKEND_URL}/user/checkUserName?username=${invalidUsername}`
    );
    expect(result).toEqual(false);
  });

  it("should handle API error and throw an error", async () => {
    // Arrange
    const mockErrorResponse = {
      response: {
        status: 500,
        data: {
          message: "Internal server error",
        },
      },
    };

    (axios.get as jest.Mock).mockRejectedValue(mockErrorResponse);

    // Act & Assert
    await expect(validUserName("testUser")).rejects.toThrowError("Internal server error");
  });

  it("should return false for an undefined username", async () => {
    // Act
    const result = await validUserName(undefined);

    // Assert
    expect(result).toEqual(false);
  });
});
