import fc from "fast-check";
import { describe, expect, test } from "vitest";

import { add } from "../add.js";

describe("testing add function", () => {
  test("adds correctly", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        const result = add(a, b);
        const expected = a + b;
        expect(result).toEqual(expected);
      }),
      { verbose: true }
    );
  });
});
