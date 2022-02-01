import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import Counter from "../../src/components/Counter";

import store from "../../src/redux/store/store";
import { Provider } from 'react-redux';

test("user can add, subtract, add", async () => {
    render(
        <Provider store={store}>
            <Counter user='Philip'/>
        </Provider>
    );

    await waitFor(() => {
        expect(screen.getByText(/Philip/i)).toBeInTheDocument();
    });

    expect(screen.getByRole("button", { name: "Increment value" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Decrement value" })).toBeInTheDocument();
    expect(screen.getByText(/0/i));

    userEvent.click(screen.getByRole("button", { name: "Increment value" }));

    await waitFor(() => {
        expect(screen.queryByText(/0/i)).not.toBeInTheDocument();
    });
    expect(screen.getByText(/1/i));

    userEvent.click(screen.getByRole("button", { name: "Decrement value" }));

    await waitFor(() => {
        expect(screen.queryByText(/1/i)).not.toBeInTheDocument();
    });
    expect(screen.getByText(/0/i)).toBeInTheDocument();


    userEvent.click(screen.getByRole("button", { name: "Increment value" }));

    await waitFor(() => {
        expect(screen.queryByText(/0/i)).not.toBeInTheDocument();
    });
    expect(screen.getByText(/1/i));

    await waitFor(() => {
       expect(screen.getByText(/Fry/i)).toBeInTheDocument();
    });
});
