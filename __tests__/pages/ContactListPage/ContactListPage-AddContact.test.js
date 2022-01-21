import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactListPage from "../../../src/pages/ContactListPage";
import userEvent from '@testing-library/user-event';

test("user can add contact with all values filled in", async () => {
  render(<ContactListPage />);

  // check components specific to this work flow on initial render
    // initial page html elements
  expect(screen.getByRole("button", { name: "add-contact" })).toBeInTheDocument();
    // dialog html elements
  expect(screen.queryByRole("heading", { name: "Add new contact" })).not.toBeInTheDocument();
  // another way to find this dialog html element - expect(screen.queryByText("Add new contact")).not.toBeInTheDocument();

  // the way material ui textfield works when required is true
  expect(screen.queryByText("First Name")).not.toBeInTheDocument();
  expect(screen.queryByText("First Name *")).not.toBeInTheDocument();
  // the way material ui textfield works when required is false
  expect(screen.queryAllByText("Middle Name")).toHaveLength(0);
  expect(screen.queryAllByText("Last Name")).toHaveLength(0);
  expect(screen.queryAllByText("Cell Phone Number")).toHaveLength(0);
  expect(screen.queryAllByText("Phone Number")).toHaveLength(0);
  expect(screen.queryAllByText("Email Address")).toHaveLength(0);
  expect(screen.queryAllByText("Address")).toHaveLength(0);
  expect(screen.queryAllByText("State")).toHaveLength(0);
  expect(screen.queryAllByText("Zip Code")).toHaveLength(0);
  expect(screen.queryByText("Gender")).not.toBeInTheDocument();
  expect(screen.queryByRole("radio", { name: "Female"})).not.toBeInTheDocument();
  expect(screen.queryByRole("radio", { name: "Male" })).not.toBeInTheDocument();
  expect(screen.queryByRole("radio", { name: "Non-binary" })).not.toBeInTheDocument();
  expect(screen.queryByRole("radio", { name: "Prefer Not To Answer" })).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "new-contact-dialog-add-btn" })).not.toBeInTheDocument();

  // fire user event - click add contact button
  userEvent.click(screen.getByRole("button", { name: "add-contact" }));

  // check dialog/modal opened after clicking add button
    // dialog header
  expect(screen.getByRole("heading", { name: "Add new contact" })).toBeInTheDocument();
    // dialog content text
  expect(screen.getByText("Add contact details")).toBeInTheDocument();
    // form required fields
  expect(screen.getByText("First Name *")).toBeInTheDocument();
  expect(screen.getByText("First Name")).toBeInTheDocument();
    // form not required fields
  expect(screen.getAllByText("Middle Name")).toHaveLength(2);
  expect(screen.getAllByText("Last Name")).toHaveLength(2);
  expect(screen.getAllByText("Cell Phone Number")).toHaveLength(2);
  expect(screen.getAllByText("Phone Number")).toHaveLength(2);
  expect(screen.getAllByText("Email Address")).toHaveLength(2);
  expect(screen.getAllByText("Address")).toHaveLength(2);
  expect(screen.getAllByText("State")).toHaveLength(2);
  expect(screen.getAllByText("Zip Code")).toHaveLength(2);
    // radio group form label
  expect(screen.getByText("Gender")).toBeInTheDocument();
    // radio group
  expect(screen.getByRole("radio", { name: "Female" })).toBeInTheDocument();
  expect(screen.getByRole("radio", { name: "Male" })).toBeInTheDocument();
  expect(screen.getByRole("radio", { name: "Non-binary" })).toBeInTheDocument();
  expect(screen.getByRole("radio", { name: "Prefer Not To Answer" })).toBeInTheDocument();
    // submit new contact button
  expect(screen.getByRole("button", { name: "submit-new-contact-dialog-btn" })).toBeInTheDocument();

  // fire user event - fill in form textfields
  userEvent.type(screen.getByRole('textbox', { name: "First Name" }), "Hubert");
  userEvent.type(screen.getByRole('textbox', { name: "Middle Name" }), "J");
  userEvent.type(screen.getByRole('textbox', { name: "Last Name" }), "Farnsworth");
  userEvent.type(screen.getByRole('textbox', { name: "Cell Phone Number" }), "123-456-7890");
  userEvent.type(screen.getByRole('textbox', { name: "Phone Number" }), "123-123-4567");
  userEvent.type(screen.getByRole('textbox', { name: "Email Address" }), "email@email.com");
  userEvent.type(screen.getByRole('textbox', { name: "Address" }), "123 N Street");
  userEvent.type(screen.getByRole('textbox', { name: "State" }), "New New York");
  userEvent.type(screen.getByRole('textbox', { name: "Zip Code" }), "123456");
  // fire user event - select from radio group
  userEvent.click(screen.getByRole("radio", { name: "Male" }));

  // fire user event - submit the new contact
  userEvent.click(screen.getByRole("button", { name: "submit-new-contact-dialog-btn" }));

  // check the modal closed
  await waitFor(() => {
    expect(screen.queryByRole("heading", { name: "Add new contact" })).not.toBeInTheDocument();
  });
  expect(screen.queryByRole("heading", { name: "Add new contact" })).not.toBeInTheDocument();
  expect(screen.queryByText("First Name")).not.toBeInTheDocument();
  expect(screen.queryByText("First Name *")).not.toBeInTheDocument();
  expect(screen.queryAllByText("Middle Name")).toHaveLength(0);
  expect(screen.queryAllByText("Last Name")).toHaveLength(0);
  expect(screen.queryAllByText("Cell Phone Number")).toHaveLength(0);
  expect(screen.queryAllByText("Phone Number")).toHaveLength(0);
  expect(screen.queryAllByText("Email Address")).toHaveLength(0);
  expect(screen.queryAllByText("Address")).toHaveLength(0);
  expect(screen.queryAllByText("State")).toHaveLength(0);
  expect(screen.queryAllByText("Zip Code")).toHaveLength(0);
  expect(screen.queryByText("Gender")).not.toBeInTheDocument();
  expect(screen.queryByRole("radio", { name: "Female"})).not.toBeInTheDocument();
  expect(screen.queryByRole("radio", { name: "Male" })).not.toBeInTheDocument();
  expect(screen.queryByRole("radio", { name: "Non-binary" })).not.toBeInTheDocument();
  expect(screen.queryByRole("radio", { name: "Prefer Not To Answer" })).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "new-contact-dialog-add-btn" })).not.toBeInTheDocument();
  // check new contact added
  expect(within(screen.getByRole('list')).getByRole("button", { name: "Hubert J Farnsworth" })).toBeInTheDocument();
});

// test("user can add contact with only required fields filled in", () => {
//
// });
