import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactListPage from "../../../src/pages/ContactListPage";

// todo: was having trouble grabbing the edit icon button associated with a listitem. the checkbox shows up in the printed DOM but not the edit icon button. check the component
// todo: write expect for avatar icons
test("Initial page render is as expected", () => {
    // const { debug } = render(<ContactListPage />);
    render(<ContactListPage />);

    // get list component
    const list = screen.getByRole('list');

    // test it has expected contacts and each contact list item has the correct subcomponents
    expect(within(list).getByRole("button", { name: /Bender Bending Rodriguez/i })).toBeInTheDocument();
    expect(within(within(list).getByRole("button", { name: /Bender Bending Rodriguez/i })).getByRole('checkbox', { checked: false})).toBeInTheDocument();


    expect(within(list).getByRole("button", { name: /philip j fry/i })).toBeInTheDocument();
    expect(within(within(list).getByRole("button", { name: /philip j fry/i })).getByRole('checkbox', { checked: false})).toBeInTheDocument();


    expect(within(list).getByRole("button", { name: /Turanga Leela/i })).toBeInTheDocument();
    expect(within(within(list).getByRole("button", { name: /Turanga Leela/i })).getByRole('checkbox', { checked: false})).toBeInTheDocument();

    // test rest of components were rendered
    // https://testing-library.com/docs/queries/byrole - aria-label
    expect(screen.getByRole("button", { name: "add-contact" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "delete-contact" })).toBeInTheDocument();
});
