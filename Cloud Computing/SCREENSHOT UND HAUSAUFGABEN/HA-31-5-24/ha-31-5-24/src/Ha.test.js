import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


test("fügt einen neuen Benutzer hinzu und zeigt ihn in der Liste an", async () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  
  const emailInput = screen.getByLabelText(/email/i);
  
  const addButton = screen.getByRole("button", { name: /add user/i });

  userEvent.type(nameInput, "Akin Kale");
  userEvent.type(emailInput, "Akinkale@example.com");

  userEvent.click(addButton);

  const newUserName = await screen.findByText("Akin Kale");
  const newUserEmail = await screen.findByText("Akinkale@example.com");

  expect(newUserName).toBeInTheDocument();
  expect(newUserEmail).toBeInTheDocument();
});
