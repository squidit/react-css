# SqObjectHelper

A utility class for handling objects.

## Description

`SqObjectHelper` is a utility class that provides methods for comparing, manipulating, and parsing objects.

## Methods

### `compareObjects(x: IObject, y: IObject): boolean`

Compares two objects for equality.

- `x`: The first object.
- `y`: The second object.
- Returns: `true` if the objects are equal, `false` otherwise.

### `compareArrays(arr1: Array<any>, arr2: Array<any>): boolean`

Compares two arrays for equality.

- `arr1`: The first array.
- `arr2`: The second array.
- Returns: `true` if the arrays are equal, `false` otherwise.

### `sumPerKey(object: IObject, key: string): any`

Calculates the sum of values for a specific key in an object.

- `object`: The object containing key-value pairs.
- `key`: The key for which to calculate the sum.
- Returns: The sum of values for the specified key.

### `sumPerKeyList(object: IObject, keys: string[]): any`

Calculates the sum of values for multiple keys in an object.

- `object`: The object containing key-value pairs.
- `keys`: An array of keys for which to calculate the sum.
- Returns: The sum of values for the specified keys.

### `parseQueryStringToObject(queryString = ''): any`

Parses a query string into an object.

- `queryString`: The query string to parse.
- Returns: The parsed object.

### `getProperty(prop: any, key: string, shouldReturnNumber = true): any`

Gets a property value from an object.

- `prop`: The object containing the property.
- `key`: The key of the property to retrieve.
- `shouldReturnNumber`: Optional. Specifies whether to return 0 if the property does not exist (default is `true`).
- Returns: The value of the specified property.

### `arraysMatch(arr1: Array<any>, arr2: Array<any>): boolean`

Checks if two arrays are identical.

- `arr1`: The first array.
- `arr2`: The second array.
- Returns: `true` if the arrays are identical, `false` otherwise.

### `arraySum(arr: Array<number>): number`

Calculates the sum of values in an array of numbers.

- `arr`: The array of numbers.
- Returns: The sum of values in the array.

### `getArrayDiff(array1: Array<any> = [], array2: Array<any> = []): Array<any>`

Finds the difference between two arrays.

- `array1`: The first array.
- `array2`: The second array.
- Returns: An array containing elements present in one array but not the other.

### `getObjectArrayDiff(otherArray: Array<any>, key: string): (current: IObject) => boolean`

Finds the difference between an array of objects and another array based on a specific key.

- `otherArray`: The other array of objects for comparison.
- `key`: The key to compare objects.
- Returns: A function that takes a current object and returns `true` if it is not found in the other array based on the specified key.


## Example Usage

```typescript
import SqObjectHelper from './SqObjectHelper'; // Assuming the class is in a file named SqObjectHelper.js

// Create an instance of SqObjectHelper
const objectHelper = new SqObjectHelper();

// Compare two objects for equality
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
console.log('Objects Equal:', objectHelper.compareObjects(obj1, obj2));

// Calculate the sum of values for a specific key in an array of objects
const data = [{ value: 10 }, { value: 20 }, { value: 30 }];
console.log('Sum of Values:', objectHelper.sumPerKey(data, 'value'));

// Parse a query string into an object
const queryString = 'name=John&age=30';
console.log('Parsed Query String:', objectHelper.parseQueryStringToObject(queryString));
```
