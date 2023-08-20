import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Dashboard from "pages/Dashboard";
import { IServices } from "../../utils/types";

describe("Dashboard Component", () => {
  const mockItems: IServices[] = [
    {
      image: "image1.jpg",
      description: "Description 1",
      title: "Title 1",
      id: "1",
    },
    {
      image: "image2.jpg",
      description: "Description 2",
      title: "Title 2",
      id: "2",
    },
  ];

  beforeAll(() => {
    // Mock getRequest function from utils/axios
    jest.mock("utils/axios", () => ({
      getRequest: jest.fn(() => Promise.resolve({ data: mockItems } as any)),
    }));

    // Mock process.env
    process.env.REACT_APP_BASE_BACKEND_URL = "https://example.com";
  });

  afterAll(() => {
    jest.clearAllMocks();
    delete process.env.REACT_APP_BASE_BACKEND_URL;
  });

  it("renders the Dashboard component with items", async () => {
    render(<Dashboard />);

    await waitFor(() => {
      const cards = screen.getAllByRole("presentation");
      expect(cards).toHaveLength(mockItems.length);
    });
  });

  it("navigates to service details on card click", async () => {
    render(<Dashboard />);

    await waitFor(() => {
      const cards = screen.getAllByRole("presentation");
      fireEvent.click(cards[0]);

      // Test navigation logic here
    });
  });

  // You can add more test cases for specific behavior or edge cases
});
