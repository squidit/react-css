# SqStringsHelper

A utility class for handling strings.

## Description

`SqStringsHelper` is a utility class that provides methods for string manipulation.

## Methods

### `capitalizeFirstLetter(string: string): string`

Capitalizes the first letter of a string.

- `string`: The input string.
- Returns: The input string with the first letter capitalized.

### `stringToRegexWithScapedSpecialChars(string: string): RegExp`

Converts a string into a regular expression with escaped special characters.

- `string`: The input string.
- Returns: A regular expression with escaped special characters.


## Example Usage

```typescript
import SqStringsHelper from './SqStringsHelper'; // Assuming the class is in a file named SqStringsHelper.js

// Create an instance of SqStringsHelper
const stringsHelper = new SqStringsHelper();

// Capitalize the first letter of a string
const str1 = 'hello world';
const capitalizedStr = stringsHelper.capitalizeFirstLetter(str1);
console.log('Capitalized String:', capitalizedStr);

// Escape special characters in a string for use in a regular expression
const str2 = 'foo.bar';
const escapedRegex = stringsHelper.stringToRegexWithScapedSpecialChars(str2);
console.log('Escaped Regex:', escapedRegex);
```
