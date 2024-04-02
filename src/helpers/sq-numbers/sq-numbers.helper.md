# SqNumbersHelper

A utility class for handling numbers.

## Description

`SqNumbersHelper` is a utility class that provides methods for number transformation and formatting.

## Methods

### `thousandTransform(value: number, args = 0): string`

Transforms a number into a human-readable format with thousands suffixes.

- `value`: The number to transform.
- `args`: The number of decimal places to round to (default is 0).
- Returns: The transformed number with a suffix indicating the magnitude.

### `fileSize(size: number): string`

Converts a file size in bytes to a human-readable format.

- `size`: The file size in bytes.
- Returns: The file size in a human-readable format (e.g., "10 KB", "2.5 MB").

### `formatPercent(number = 0, lang = 'pt'): string`

Formats a number as a percentage.

- `number`: The number to format as a percentage.
- `lang`: The language to use for formatting (default is 'pt').
- Returns: The formatted percentage string.

### `formatStandardNumber({ lang = 'en', number = 0 }): string`

Formats a number using standard notation.

- `lang`: The language to use for formatting (default is 'en').
- `number`: The number to format.
- Returns: The formatted number string.

### `formatCompactNumber({ lang = 'en', number = 0 }): string`

Formats a number using compact notation.

- `lang`: The language to use for formatting (default is 'en').
- `number`: The number to format.
- Returns: The formatted number string.

### `percentageDifference(initialValue: number, finalValue: number, lang = 'pt'): string`

Calculates the percentage difference between two values.

- `initialValue`: The initial value.
- `finalValue`: The final value.
- `lang`: The language to use for formatting (default is 'pt').
- Returns: The percentage difference between the initial and final values as a formatted string.

### `convertMoneyValue(number: number, lang = 'pt', currency = 'BRL'): string`

Formats a number as currency.

- `number`: The number to format as currency.
- `lang`: The language to use for formatting (default is 'pt').
- `currency`: The currency code to use (default is 'BRL' for Brazilian Real).
- Returns: The formatted currency string.


## Example Usage

```typescript
import SqNumbersHelper from './SqNumbersHelper'; // Assuming the class is in a file named SqNumbersHelper.js

// Create an instance of SqNumbersHelper
const numbersHelper = new SqNumbersHelper();

// Format a number with thousand separator and 2 decimal places
const formattedNumber = numbersHelper.thousandTransform(1234567.89, 2);
console.log('Formatted Number:', formattedNumber);

// Calculate the percentage difference between two values
const initial = 100;
const final = 150;
const percentageDiff = numbersHelper.percentageDifference(initial, final);
console.log('Percentage Difference:', percentageDiff);

// Convert a number into a currency string
const moneyValue = 1234.56;
const formattedMoney = numbersHelper.convertMoneyValue(moneyValue);
console.log('Formatted Money:', formattedMoney);
```
