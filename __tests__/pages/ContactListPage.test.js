import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactListPage from "../../src/pages/ContactListPage";
// import { prettyDOM } from '@testing-library/dom';

test("user can add contact", () => {
  render(<ContactListPage />);
  // const { debug } = render(<ContactListPage />);

  expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument;

  // fire event
  fireEvent.click(screen.getByRole("button", { name: /add/i }));
  // todo gettin error here

  // check add contact modal is open
  expect(screen.findByText("Add new contact")).toBeInTheDocument;
});
