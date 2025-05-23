import { expect, test } from "vitest";
export class RomanNumeral {
    romanToInt(value) {
        const romanNumerals = {
            'I': 1,
        };
        let total = 0;
        let prevValue = 0;
        for (let i = value.length - 1; i >= 0; i--) {
            const currentValue = romanNumerals[value[i]];
            if (currentValue < prevValue) {
                total -= currentValue;
            }
            else {
                total += currentValue;
            }
            prevValue = currentValue;
        }
        return total;
    }
}
test.each([
    ["I", 1],
    ["II", 2],
    ["III", 3],
])("Roman numeral %s should be %d", (roman, expected) => {
    const romanNumeral = new RomanNumeral();
    expect(romanNumeral.romanToInt(roman)).toBe(expected);
});
//# sourceMappingURL=roman-numerals.test.js.map