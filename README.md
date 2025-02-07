<h1 align="center">
  <img width="300" src="https://evergreen.wrap.ngo/logo.png" alt="Evergreen design system">
  <br>
  <br>
</h1>

# Storybook docs

[Live demo](https://evergreen.wrap.ngo)

# Install

```bash
npm install --save @wrap.ngo/evergreen
```

# Usage

Install the global CSS in your main app file

```js
import '@wrap.ngo/evergreen/src/styles/main.scss';
import '@wrap.ngo/evergreen/components.css';

// Optional font face
import '@wrap.ngo/evergreen/src/styles/fonts.scss';
```

Import a theme file

```js
import '@wrap.ngo/evergreen/src/styles/themes/default/main.scss';
```

```jsx
import React from 'react';
import { Button } from '@wrap.ngo/evergreen';

const MyComponent = () => (
  <Button
    type="primary"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </Button>
)
```
