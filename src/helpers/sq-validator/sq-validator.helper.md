# SqValidatorHelper

A utility class for validating various data types.

## Description

`SqValidatorHelper` is a utility class that provides methods for validating data such as names, emails, dates, URLs, CPFs, CNPJs, and more.

## Methods

### `xor(x: any, y: any): boolean`

Performs an exclusive OR operation on two values.

- `x`: The first value.
- `y`: The second value.
- Returns: `true` if exactly one of the values is truthy, `false` otherwise.

### `nameSpecialChars(name: string): boolean`

Checks if a name contains only special characters.

- `name`: The name to validate.
- Returns: `true` if the name contains only letters and special characters, `false` otherwise.

### `fullName(name: string): boolean`

Checks if a full name contains at least two names.

- `name`: The full name to validate.
- Returns: `true` if the full name contains at least two names, `false` otherwise.

### `email(email: string): boolean`

Validates an email address.

- `email`: The email address to validate.
- Returns: `true` if the email address is valid, `false` otherwise.

### `ageLessThan(value: string, referenceNumber: number): boolean`

Checks if a person's age is less than a specified reference number.

- `value`: The birth date of the person.
- `referenceNumber`: The reference number for comparison.
- Returns: `true` if the age is less than the reference number, `false` otherwise.

### `ageOverThan(value: string, referenceNumber: number): boolean`

Checks if a person's age is greater than a specified reference number.

- `value`: The birth date of the person.
- `referenceNumber`: The reference number for comparison.
- Returns: `true` if the age is greater than the reference number, `false` otherwise.

### `url(url: string): boolean`

Validates a URL.

- `url`: The URL to validate.
- Returns: `true` if the URL is valid, `false` otherwise.

### `date(date: string): boolean`

Validates a date string.

- `date`: The date string to validate.
- Returns: `true` if the date string is valid, `false` otherwise.

### `cnpj(value: string): boolean`

Validates a CNPJ (Brazilian company registration number).

- `value`: The CNPJ to validate.
- Returns: `true` if the CNPJ is valid, `false` otherwise.

### `phone(phone: string): boolean`

Validates a phone number.

- `phone`: The phone number to validate.
- Returns: `true` if the phone number is valid, `false` otherwise.

### `cpf(value: string): boolean`

Validates a CPF (Brazilian individual taxpayer registry number).

- `value`: The CPF to validate.
- Returns: `true` if the CPF is valid, `false` otherwise.

### `recordEmployment(recordEmployment: string): boolean`

Validates a record of employment number.

- `recordEmployment`: The record of employment number to validate.
- Returns: `true` if the record of employment number is valid, `false` otherwise.

### `setCpfMask(cpf: string): string`

Applies a CPF mask to a string.

- `cpf`: The CPF to apply the mask to.
- Returns: The CPF string with the applied mask.

### `setCnpjMask(cnpj: string): string`

Applies a CNPJ mask to a string.

- `cnpj`: The CNPJ to apply the mask to.
- Returns: The CNPJ string with the applied mask.


## Example Usage

```typescript
import SqValidatorHelper from './SqValidatorHelper'; // Assuming the class is in a file named SqValidatorHelper.js

// Create an instance of SqValidatorHelper
const validator = new SqValidatorHelper();

// Validate if a string is a valid email address
const isValidEmail = validator.email('example@example.com');
console.log('Is valid email:', isValidEmail);

// Validate if a string represents an age over 18 years
const isOver18 = validator.ageOverThan('2000-01-01', 18);
console.log('Is over 18:', isOver18);

// Format a CPF number with mask
const cpfNumber = '12345678909';
const formattedCpf = validator.setCpfMask(cpfNumber);
console.log('Formatted CPF:', formattedCpf);
```
