// Write your test here
import { expect, test } from "vitest";

test.each([
    ["I", 1],
    ["II", 2],
    ["III", 3],
    ])("Roman numeral %s should be %d", (roman, expected) => {
    expect(romanToInt(roman)).toBe(expected);
    });
