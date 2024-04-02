# SqToastHelper

A utility class for displaying toast messages.

## Description

`SqToastHelper` is a utility class that provides methods for displaying toast messages with different styles.

## Methods

### `success(message: string, config: toastConfig): any`

Displays a success toast message.

- `message`: The message to display.
- `config`: Configuration options for the toast message.
- Returns: An object containing the message and configuration.

### `error(message: string, config: toastConfig): any`

Displays an error toast message.

- `message`: The message to display.
- `config`: Configuration options for the toast message.
- Returns: An object containing the message and configuration.

### `inverted(message: string, config: toastConfig): any`

Displays an inverted toast message.

- `message`: The message to display.
- `config`: Configuration options for the toast message.
- Returns: An object containing the message and configuration.

### `info(message: string, config: toastConfig): any`

Displays an informational toast message.

- `message`: The message to display.
- `config`: Configuration options for the toast message.
- Returns: An object containing the message and configuration.

### `warning(message: string, config: toastConfig): any`

Displays a warning toast message.

- `message`: The message to display.
- `config`: Configuration options for the toast message.
- Returns: An object containing the message and configuration.

### `grayscale(message: string, config: toastConfig): any`

Displays a grayscale toast message.

- `message`: The message to display.
- `config`: Configuration options for the toast message.
- Returns: An object containing the message and configuration.

### `custom(message: string, config: toastConfig): any`

Displays a custom toast message.

- `message`: The message to display.
- `config`: Configuration options for the toast message.
- Returns: An object containing the message and configuration.

### `default(message: string, config: toastConfig): any`

Displays a default toast message.

- `message`: The message to display.
- `config`: Configuration options for the toast message.
- Returns: An object containing the message and configuration.

### `show(message: string, config: toastConfig): any`

Displays a toast message.

- `message`: The message to display.
- `config`: Configuration options for the toast message.
- Returns: An object containing the message and configuration.

### `theme(message: string, config: toastConfig): any`

Displays a themed toast message.

- `message`: The message to display.
- `config`: Configuration options for the toast message.
- Returns: An object containing the message and configuration.


## Example Usage

```typescript
import SqToastHelper from './SqToastHelper'; // Assuming the class is in a file named SqToastHelper.js

// Create an instance of SqToastHelper
const toastHelper = new SqToastHelper();

// Display a success toast notification
toastHelper.toast.success('Operation successful');

// Display a warning toast notification with custom configuration
const config = { duration: 3000, position: 'bottom-right' };
toastHelper.toast.warning('Action may have consequences', config);
```
