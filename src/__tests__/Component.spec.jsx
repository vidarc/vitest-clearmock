import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { expect, test, beforeEach } from "vitest";

import { Component } from "../Component";

beforeEach(() => {
  cleanup();
});

test.fails("should fail", async () => {
  render(<Component name="testing" />);

  const element = await screen.findByText(/Hello Matt/);
  expect(element).toBeDefined();
});

test("a react component", async () => {
  render(<Component name="Matt" />);

  const element = await screen.findByText(/Hello Matt/);
  expect(element).toBeDefined();
});
