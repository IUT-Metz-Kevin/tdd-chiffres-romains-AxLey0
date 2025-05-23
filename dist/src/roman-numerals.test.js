import { expect, test } from "vitest";
import { romanToInt } from "./roman-numerals.js";
test.each([
    ["I", 1],
    ["II", 2],
    ["III", 3],
])("Roman numeral %s should be %d", (roman, expected) => {
    expect(romanToInt(roman)).toBe(expected);
});
//# sourceMappingURL=roman-numerals.test.js.map