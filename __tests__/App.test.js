import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";

describe("App initial setup", () => {
  test("App should render and display text", () => {
    render(<App />);
    const paragraphElement = screen.getByText(/Hello World! How we doin?/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
