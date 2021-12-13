import { describe, expect, test } from "vitest";

import { add } from "../add.js";

describe("testing add function", () => {
  test("it adds 2 and 2 correctly", () => {
    const result = add(2, 2);

    expect(result).toStrictEqual(4);
  });
});
