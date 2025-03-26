<h1 align="center">
  <img width="300" src="https://evergreen.wrap.ngo/logo.png" alt="Evergreen design system">
</h1>
<br />
<br />

The Evergreen Design System is a lightweight, flexible, set of web components that can be used to create
beautiful, performant, experiences in any framework.

[Report a bug](https://github.com/wrap-org/evergreen/issues/new?labels=bug&template=bug_report.md&title=Screen%20Reader%20Only+bug+report)
[Request a feature](https://github.com/wrap-org/evergreen/issues/new?labels=enhancement&template=feature_request.md&title=Screen%20Reader%20Only+new+feature)

# Storybook docs

[Live demo](https://evergreen.wrap.ngo)

# Quick start

Install the module.

```bash
npm install --save @wrap.ngo/evergreen
```

Add the global CSS in your main app file or CSS.

```js
import '@wrap.ngo/evergreen/src/styles/main.scss';

// Optional font face
import '@wrap.ngo/evergreen/src/styles/fonts.scss';
```

Components can be used by importing them into the files to be used or they can be installed once globally (because web components are all registered to a [global registry](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry) on the window).

```js
import '@wrap.ngo/evergreen/components/control/Button/Button';
```

Use the component anywhere in HTML or JSX.

```html
<evg-button variant="primary">
  <button type="button">
    Button text
  </button>
</evg-button>
```

Head over to the [page setup guide](https://evergreen.wrap.ngo/?path=/docs/guides-page-setup--docs) for information on setting up your first page.

# Contributing

Please read through our [contributing guidelines](./CONTRIBUTING.md). Included are directions for local setup, coding standards, and notes on component development.

# Versioning

Evergreen is maintained under the [Semantic Versioning guidelines](https://semver.org/).

See the [Releases section](https://github.com/wrap-org/evergreen/releases) of our GitHub project for changelogs for each release version of Evergreen.
