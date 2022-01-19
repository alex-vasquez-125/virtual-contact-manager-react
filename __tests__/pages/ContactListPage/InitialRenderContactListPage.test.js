import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactListPage from "../../../src/pages/ContactListPage";
// import { prettyDOM } from '@testing-library/dom';

test("ListItem demo - Initial page render is as expected", () => {
  render(<ContactListPage />);
  // const { debug } = render(<ContactListPage />);

  // debug(screen.getAllByRole("listitem").find(listItem => {
  //     return within(listItem).getByText("Bender Bending Rodriguez");
  //   })
  // );

  const contactList = screen.getAllByRole("listitem");

  expect(contactList).toHaveLength(3);
  expect(screen.getAllByRole("listitem").find(listItem => {
          return within(listItem).getByText("Bender Bending Rodriguez");
        })
  ).toBeInTheDocument();
});

// todo: was having trouble grabbing the edit icon button associated with a listitem. the checkbox shows up in the printed DOM but not the edit icon button. check the component
// todo: write expect for avatar icons
test("List demo - Initial page render is as expected", () => {
    // const { debug } = render(<ContactListPage />);
    render(<ContactListPage />);

    // get list component
    const list = screen.getByRole('list');

    // test it has expected contacts and each contact list item has the correct subcomponents
    expect(within(list).getByRole("button", { name: /Bender Bending Rodriguez/i }));
    expect(within(screen.getByRole("button", { name: /Bender Bending Rodriguez/i })).getByRole('checkbox', { checked: false})).toBeInTheDocument;


    expect(within(list).getByRole("button", { name: /philip j fry/i }));
    expect(within(within(list).getByRole("button", { name: /philip j fry/i })).getByRole('checkbox', { checked: false})).toBeInTheDocument;


    expect(within(list).getByRole("button", { name: /Turanga Leela/i }));
    expect(within(within(list).getByRole("button", { name: /Turanga Leela/i })).getByRole('checkbox', { checked: false})).toBeInTheDocument;

    // test rest of components were rendered
    // https://testing-library.com/docs/queries/byrole - aria-label
    expect(screen.getAllByRole("button", { name: /add/i })).toBeInTheDocument;
    expect(screen.getAllByRole("button", { name: /delete/i })).toBeInTheDocument
});
