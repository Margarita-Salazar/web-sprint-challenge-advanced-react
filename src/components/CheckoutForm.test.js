import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/Checkout Form/i)

    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const firstName = screen.getByLabelText(/First Name:/i)
    userEvent.type(firstName, "John")

    const lastName = screen.getByLabelText(/Last Name:/i)
    userEvent.type(lastName, "Doe")

    const address = screen.getByLabelText(/Address:/i)
    userEvent.type(address, "1234 Main Street")

    const city = screen.getByLabelText(/City:/i)
    userEvent.type(city, "City")

    const state = screen.getByLabelText(/State:/i)
    userEvent.type(state, "State")

    const zip = screen.getByLabelText(/Zip:/i)
    userEvent.type(zip, "1234")

    const button = screen.getByRole("button")
    userEvent.click(button)

    
    const message = await screen.getByText("You have ordered some plants! Woo-hoo!")
    expect(message).toBeInTheDocument();

    
});
