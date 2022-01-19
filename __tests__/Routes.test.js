import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import Routes from "../src/Routes";

describe("Routes should render", () => {
  test("Root page should render", () => {
    render(<Routes />);

    expect.assertions(1);
    expect(screen.getByText(/Hello World! How we doin?/i)).toBeInTheDocument();
  });

  test("Navigate to table page", async () => {
    render(<Routes />, { wrapper: MemoryRouter });

    userEvent.click(screen.getByRole("button"));

    userEvent.click(screen.getByText("Table"));

    await waitFor(() => {
      expect(screen.queryByText("Table")).not.toBeInTheDocument();
      expect(screen.queryByText("Card")).not.toBeInTheDocument();
      expect(screen.queryByText("List")).not.toBeInTheDocument();
      expect(
        screen.getAllByText("This is the contact table page!")
      ).toHaveLength(5);
    });
  });

  test("Navigate to card page", async () => {
    render(<Routes />, { wrapper: MemoryRouter });

    userEvent.click(screen.getByRole("button"));

    userEvent.click(screen.getByText("Card"));

    await waitFor(() => {
      expect(screen.queryByText("Table")).not.toBeInTheDocument();
      expect(screen.queryByText("Card")).not.toBeInTheDocument();
      expect(screen.queryByText("List")).not.toBeInTheDocument();
      expect(
        screen.getAllByText("This is the contact card page!!")
      ).toHaveLength(5);
    });
  });

  test("Navigate to list page", async () => {
    render(<Routes />, { wrapper: MemoryRouter });

    userEvent.click(screen.getByRole("button"));

    userEvent.click(screen.getByText("List"));

    await waitFor(() => {
      expect(screen.queryByText("Table")).not.toBeInTheDocument();
      expect(screen.queryByText("Card")).not.toBeInTheDocument();
      expect(screen.queryByText("List")).not.toBeInTheDocument();

      // expect(screen.getAllByRole());
    });
  });
});
