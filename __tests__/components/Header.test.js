import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../../src/components/Header";

describe("Header component", () => {
  test("Header should render Table, Card, and List text when clicking menu icon", () => {
    render(<Header />);

    expect.assertions(6);
    expect(screen.queryByText("Table")).not.toBeInTheDocument();
    expect(screen.queryByText("Card")).not.toBeInTheDocument();
    expect(screen.queryByText("List")).not.toBeInTheDocument();

    userEvent.click(screen.getByRole("button"));

    expect(screen.getByText("Table")).toBeInTheDocument();
    expect(screen.getByText("Card")).toBeInTheDocument();
    expect(screen.getByText("List")).toBeInTheDocument();
  });
});
