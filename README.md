<h1 align="center">
  <img width="300" src="https://evergreen.wrap.ngo/logo.png" alt="Evergreen design system">
</h1>

> [WRAP](https://www.wrap.ngo/)’s official design system – serving as the primary resource for creating and improving our websites and applications.

🐛 [Report a bug](https://github.com/wrap-org/evergreen/issues/new?labels=bug&template=bug_report.md&title=Screen%20Reader%20Only+bug+report)
|
[Request a feature](https://github.com/wrap-org/evergreen/issues/new?labels=enhancement&template=feature_request.md&title=Screen%20Reader%20Only+new+feature) 🙏

🚀 [Live documentation](https://evergreen.wrap.ngo) 🚀

Evergreen represents our commitment to creating cohesive, accessible, and user-friendly experiences across our entire digital ecosystem.

- **Consistency:** Ensures visual harmony, accessibility compliance, and recognizable brand identity across all touchpoints
- **Clarity:** Provides designers and developers with straightforward guidelines for creating and implementing components
- **Efficiency:** Reduces design and development time through reusable patterns and shared resources
- **Quality:** Maintains high standards as we scale our digital presence and collaborations

## Quick start

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

## Who should use Evergreen

Evergreen serves as a resource for:

- WRAP's internal design and development teams
- Partner organizations collaborating on WRAP initiatives
- External suppliers and agencies contributing to WRAP projects
- Anyone building digital experiences within the WRAP ecosystem

## How to get started

Evergreen provides tools for both designers and developers:

- **Figma Resources:** Design with our component library, design tokens, and templates to create experiences that align with WRAP's visual identity.
- **[Storybook Components](https://evergreen.wrap.ngo/):** Build interfaces efficiently with our coded components, complete with documentation, usage guidelines, and examples.
- **[Brand Guidelines](https://brand.wrap.ngo):** Access WRAP's complete brand guidelines on Frontify, including logos, tone of voice, photography direction, and printed media.

By using these resources, you can create experiences that feel cohesive and authentic to the WRAP brand while saving time on your projects.

## Contributing

Please read through our [contributing guidelines](https://evergreen.wrap.ngo/?path=/docs/contributing--docs). Included are directions for local setup, coding standards, and notes on component development.

## Versioning

Evergreen is maintained under the [Semantic Versioning guidelines](https://semver.org/).

See the [Releases section](https://github.com/wrap-org/evergreen/releases) of our GitHub project for changelogs for each release version of Evergreen.
