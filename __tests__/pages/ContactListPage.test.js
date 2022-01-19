import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactListPage from "../../src/pages/ContactListPage";

describe("Contact list page", () => {
  test("Contact list page should render", () => {
    render(<ContactListPage />);

    // expect(screen.getAllByText('This is the contact list page!!!!')).toHaveLength(5);
  });
});

// todo: build this out
