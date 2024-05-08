# SqEventEmitter

A utility class for event handling using EventEmitter pattern.

## Description

`Emitter` provides methods for registering event listeners, emitting events, and removing event listeners.

## Methods

### `on(event: any, fn: any): void`

Registers an event listener for the specified event.

- `event`: The event to listen for.
- `fn`: The callback function to be invoked when the event is emitted.

### `once(event: any, fn: any): void`

Registers an event listener that will be called at most once for a particular event.

- `event`: The event to listen for.
- `fn`: The callback function to be invoked when the event is emitted.

### `off(event: any, fn?: any): void`

Removes the specified event listener or all listeners for the specified event.

- `event`: The event to remove listeners from.
- `fn`: (Optional) The specific listener function to remove. If not provided, removes all listeners for the event.

### `emit(event: any, payload: any): void`

Emits the specified event with an optional payload.

- `event`: The event to emit.
- `payload`: (Optional) The data to pass to event listeners.

## Example Usage

```javascript
import Emitter from './Emitter'; // Assuming the class is in a file named Emitter.js

// Emit event inside a component:
Emitter.emit('hover', hover);

// To listen on every change:
componentDidMount() {
  Emitter.on('hover', (hover) => {
    // Your code here
  });
}

componentWillUnmount() {
  Emitter.off('hover');
}

// To listen once:
componentDidMount() {
  Emitter.once('hover', (hover) => {
    // Your code here
  });
}

componentWillUnmount() {
  Emitter.off('hover');
}
```