import fc from "fast-check";
import { describe, expect, test } from "vitest";

import { add, makeAnObject } from "../add.js";

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

  test("a failing test", () => {
    const result = add(2, 2);

    expect(result).toStrictEqual(4);
  });

  describe("when a test is nested", () => {
    test("it should pass", () => {
      expect(true).toBe(true);
    });

    test("it should fail", () => {
      expect(true).toBe(true);
    });

    test("snapshot", () => {
      expect(makeAnObject()).toMatchSnapshot();
    });

    test("inline snapshot", () => {
      expect(makeAnObject()).toMatchInlineSnapshot();
    });
  });
});
