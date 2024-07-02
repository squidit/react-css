# VideoHelper

A helper class for video-related operations.

## Description

`VideoHelper` is a utility class that provides methods for extracting information from video files.

## Methods

### `getCodecName(file: File): Promise<string>`

Retrieves the codec name from a video file.

- `file`: The video file from which to extract the codec name.
- Returns: A promise that resolves to the codec name as a string.

## Example Usage

```typescript
import VideoHelper from './VideoHelper'; // Assuming the class is in a file named VideoHelper.js

// Create an instance of VideoHelper
const videoHelper = new VideoHelper();

// Get the codec name from a video file
const file = new File([""], "example.mp4"); // Example file, replace with a real file
videoHelper.getCodecName(file).then(codecName => {
  console.log('Codec Name:', codecName);
});
```
