import React from "react";
import { render, screen } from "@testing-library/react";
import ContactTablePage from "../../src/pages/ContactTablePage";

describe("Contact table page", () => {
  test("Contact table page should load", () => {
    render(<ContactTablePage />);

    expect(screen.getAllByText("This is the contact table page!")).toHaveLength(
      5
    );
  });
});
