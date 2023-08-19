import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { RoutesLink } from "routes";
import { PrivateRoutes, PublicRoutes } from "components/protected";

describe("PrivateRoutes", () => {
  it("renders Outlet when user is authenticated", () => {
    localStorage.setItem("access", "yourAuthToken");
    const { container } = render(
      <MemoryRouter initialEntries={[RoutesLink.HOME]}>
        <PrivateRoutes />
      </MemoryRouter>,
    );
    expect(container.querySelector("Outlet")).toBeInTheDocument();
  });

  it("redirects to LOGIN when user is not authenticated", () => {
    localStorage.removeItem("access");
    const { container } = render(
      <MemoryRouter initialEntries={[RoutesLink.HOME]}>
        <PrivateRoutes />
      </MemoryRouter>,
    );
    expect(container.querySelector("Navigate")).toBeInTheDocument();
    expect(container.querySelector("Navigate")).toHaveAttribute(
      "to",
      RoutesLink.LOGIN,
    );
  });
});

describe("PublicRoutes", () => {
  it("renders Outlet when user is authenticated", () => {
    localStorage.setItem("access", "yourAuthToken");
    const { container } = render(
      <MemoryRouter initialEntries={[RoutesLink.LOGIN]}>
        <PublicRoutes />
      </MemoryRouter>,
    );
    expect(container.querySelector("Outlet")).toBeInTheDocument();
  });

  it("redirects to HOME when user is not authenticated", () => {
    localStorage.removeItem("access");
    const { container } = render(
      <MemoryRouter initialEntries={[RoutesLink.LOGIN]}>
        <PublicRoutes />
      </MemoryRouter>,
    );
    expect(container.querySelector("Navigate")).toBeInTheDocument();
    expect(container.querySelector("Navigate")).toHaveAttribute(
      "to",
      RoutesLink.HOME,
    );
  });
});
