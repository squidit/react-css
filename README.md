<p align="center">
    <img
    src="https://github.com/squidit/react-css/assets/56000334/88ce8652-37b0-4e34-af91-2f82a996fdae"
    width="256px" align="center" alt="logo" />
    <h1 align="center">@squidit/react-css</h1>
    <p align="center">This repository contains a React component library developed to facilitate the creation of consistent and elegant interfaces, following a custom style guide. The included components are highly customizable and designed to be reusable across a variety of React projects.</p>
</p>

## Table of contents

- [Installation](#installation)
- [How to Use](#how-to-use)
- [Customization](#customization)
- [License](#license)


## Installation

To use this library in your React project, you can install it via npm or yarn:

```bash
npm install @squidit/css @squidit/react-css
# or
yarn add @squidit/css @squidit/react-css
```

## How to Use

After installation, you can import and use the components as needed in your React components:

```jsx
import React from 'react';
import { SqButton } from '@squidit/react-css';

const MyComponent = () => {
  return (
    <div>
      <SqButton>Click Here</SqButton>
    </div>
  );
};

export default MyComponent;
```

## Customization

This library allows high flexibility and customization of the components. You can modify the default styles of the components using specific props or by overriding the styles via CSS.

## License

This project is licensed under the [MIT License](LICENSE).
