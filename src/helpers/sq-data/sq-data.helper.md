# DataHelper

A utility class for handling date, phone number, and time-related operations.

## Description

`DataHelper` is a utility class that provides methods for formatting dates, phone numbers, calculating age, and formatting time-related texts.

## Methods

### `formatDate(date: string): string`

Formats a date string into the "dd-MM-yyyy" format.

- `date`: The date string to format.
- Returns: The formatted date string.

### `formatPhoneNumber(phoneNumber: string): string`

Formats a phone number into a Brazilian phone number format.

- `phoneNumber`: The phone number string to format.
- Returns: The formatted phone number string.

### `calcAge(year: number, month: number, day: number): number`

Calculates the age based on the provided birth year, month, and day.

- `year`: The birth year.
- `month`: The birth month (1-based index).
- `day`: The birth day of the month.
- Returns: The calculated age as a number.

### `formatTimeText(seconds: number, periodSeconds: number, period: string): string`

Formats a time-related text based on the provided seconds, period seconds, and period name.

- `seconds`: The total seconds.
- `periodSeconds`: The duration of the period in seconds.
- `period`: The name of the period (e.g., "year", "month", "day", "hour").
- Returns: The formatted time-related text string.

### `formatTimeFormatAgo(date: string): string`

Formats a date string into a relative time format (e.g., "today", "1 year ago", "3 months ago").

- `date`: The date string to format.
- Returns: The formatted relative time string.

## Example Usage

```typescript
import DataHelper from './DataHelper'; // Assuming the class is in a file named DataHelper.js

// Create an instance of DataHelper
const dataHelper = new DataHelper();

// Format a date
const dateString = '2024-05-08';
const formattedDate = dataHelper.formatDate(dateString);
console.log('Formatted Date:', formattedDate);

// Format a phone number
const phoneNumber = '+551234567890';
const formattedPhoneNumber = dataHelper.formatPhoneNumber(phoneNumber);
console.log('Formatted Phone Number:', formattedPhoneNumber);

// Calculate age
const birthYear = 1990;
const birthMonth = 1; // January
const birthDay = 1;
const age = dataHelper.calcAge(birthYear, birthMonth, birthDay);
console.log('Age:', age);

// Format time text
const seconds = 3600;
const periodSeconds = 3600;
const period = 'hour';
const formattedTimeText = dataHelper.formatTimeText(seconds, periodSeconds, period);
console.log('Formatted Time Text:', formattedTimeText);

// Format time format ago
const dateAgoString = '2024-05-07T12:00:00Z';
const formattedTimeAgo = dataHelper.formatTimeFormatAgo(dateAgoString);
console.log('Formatted Time Ago:', formattedTimeAgo);
```
