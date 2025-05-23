class RomanNumeral {
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
export {};
//# sourceMappingURL=roman-numerals.js.map