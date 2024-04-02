# SqColorsHelper

A utility class for handling colors.

## Description

`SqColorsHelper` is a utility class that provides methods for color manipulation.

## Methods

### `getCssVariableValue(variableName: string): string`

Retrieves the value of a CSS variable.

- `variableName`: The name of the CSS variable.
- Returns: The value of the CSS variable, or the variable name if not found.

### `lightenDarkenColor(color: string, amount: number): string`

Lightens or darkens a color by a specified amount.

- `color`: The color in hexadecimal format.
- `amount`: The amount by which to lighten or darken the color.
- Returns: The resulting color in hexadecimal format.


## Example Usage

```typescript
import SqColorsHelper from './SqColorsHelper'; // Assuming the class is in a file named SqColorsHelper.js

// Create an instance of SqColorsHelper
const colorsHelper = new SqColorsHelper();

// Retrieve the value of a CSS variable named '--primary-color'
const primaryColor = colorsHelper.getCssVariableValue('--primary-color');

// Lighten the primary color by 20%
const lightenedColor = colorsHelper.lightenDarkenColor(primaryColor, 20);

console.log('Original Primary Color:', primaryColor);
console.log('Lightened Primary Color:', lightenedColor);
```
