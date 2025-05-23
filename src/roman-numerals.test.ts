// Write your test here
import { expect, test } from "vitest";


export class RomanNumeral {

    
    romanToInt(value: string): number {
        const romanNumerals: { [key: string]: number } = {
            'I': 1,
            'V': 5,
        };

        let total = 0;
        let prevValue = 0;

        for (let i = value.length - 1; i >= 0; i--) {
            const currentValue = romanNumerals[value[i]];

            if (currentValue < prevValue) {
                total -= currentValue;
            } else {
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
    ["IV", 4],
    ["V", 5],
    ])("Roman numeral %s should be %d", (roman, expected) => {
    const romanNumeral = new RomanNumeral();
    expect(romanNumeral.romanToInt(roman)).toBe(expected);
    });
