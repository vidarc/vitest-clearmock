import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { Component } from "../Component";

test("a react component", async () => {
  render(<Component />);

  const element = await screen.findByText(/Hello/);
  expect(element).toBeDefined();
});
