import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactCardPage from "../../src/pages/ContactCardPage";

describe("Contact card page", () => {
  test("Contact card page should load", () => {
    render(<ContactCardPage />);

    expect(screen.getAllByText("This is the contact card page!!")).toHaveLength(
      5
    );
  });
});
