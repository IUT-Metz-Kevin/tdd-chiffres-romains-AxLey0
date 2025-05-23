// Write your test here
import { expect, test } from "vitest";


export class RomanNumeral {

    
    romanToInt(value: string): number {
        const romanNumerals: { [key: string]: number } = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
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
    ["VI", 6],
    ["VII", 7],
    ["VIII", 8],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
    ["MMXXIII", 2023]
    ])("Roman numeral %s should be %d", (roman, expected) => {
    const romanNumeral = new RomanNumeral();
    expect(romanNumeral.romanToInt(roman)).toBe(expected);
    });
