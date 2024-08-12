<p align="center">
  <img src="https://github.com/user-attachments/assets/f6be2ec9-9aa9-4bc3-afac-89b5ca7e0b96" width="256px" align="center" alt="logo" />

  <h1 align="center">@squidit/react-css</h1>
  <p align="center">This repository contains a React component library developed to facilitate the creation of consistent and elegant interfaces, following a custom style guide. The included components are highly customizable and designed to be reusable across a variety of React projects.</p>
</p>

## Welcome to Wake Design System

⚡ Get the experience by browsing one of [our platforms](https://app.squidit.com.br)!

This framework provides low level utilities and UI components for building
custom experiences.

<hr style={{ borderWidth: "0", margin: "2rem 0" }} />

## Style

Our Design System can be seen [here](https://css.squidit.com.br/styleguide)

## Components

UI Components are currently offered as React (Web) components.

## Installation

1. Node version >= 18
2. To use this library in your React project, you can install it via npm or yarn:

```Bash
npm install @squidit/css @squidit/react-css
```
or
```Bash
yarn add @squidit/css @squidit/react-css
```

3. Add to your style.scss main file

```scss
$fontsFolderPath: "@squidit/css/dist/fonts";
@import "@squidit/css/src/scss/squid.scss";
@import "@squidit/react-css/dist/style.css";
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

## Translations

The lib is available in English, Portuguese and Spanish. By default it is loaded in English, but you can change the lib language to Portuguese or Spanish as follows:

In your project's index, import the functions responsible for translating the lib, define the translation structure and call the translation function.

Here's an example on StackBlitz:

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-uitsef?embed=1&file=src%2Fmain.tsx"
  width="100%"
  height="500px"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
></iframe>


It is also possible to change translations for individual components, as shown in the example below

<iframe
  src="https://stackblitz.com/edit/vitejs-vite-uitsef?embed=1&file=src%2FApp.tsx"
  width="100%"
  height="500px"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
></iframe>

## Customization

This library allows high flexibility and customization of the components. You can modify the default styles of the components using specific props or by overriding the styles via CSS.

## License

This project is licensed under the [MIT License](LICENSE).
