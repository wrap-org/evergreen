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

## Who should use Evergreen

Evergreen serves as a resource for:

- WRAP's internal design and development teams
- Partner organizations collaborating on WRAP initiatives
- External suppliers and agencies contributing to WRAP projects
- Anyone building digital experiences within the WRAP ecosystem

## How to get started

Evergreen provides tools for both designers and developers:

- **[Figma Resources](https://www.figma.com/design/yJ6UMIUFdnGkcqwn99oe0d/%F0%9F%8C%B2-Evergreen?node-id=2-2&p=f&t=YNt7unTt6dRbwRy6-0):** Design with our component library, design tokens, and templates to create experiences that align with WRAP's visual identity.
- **[Components](https://evergreen.wrap.ngo/):** Build interfaces efficiently with our coded components, complete with documentation, usage guidelines, and examples.
- **[Brand Guidelines](https://brand.wrap.ngo):** Access WRAP's complete brand guidelines on Frontify, including logos, tone of voice, photography direction, and printed media.

By using these resources, you can create experiences that feel cohesive and authentic to the WRAP brand while saving time on your projects.

## Website installation

Evergreen is distributed as an [NPM package](https://www.npmjs.com/package/@wrap.ngo/evergreen?activeTab=readme). The package contains exports for:

- Styles (`@wrap.ngo/evergreen/styles`) CSS to import global Evergreen styles
- Fonts (`@wrap.ngo/evergreen/fonts`) optional CSS to import Evergreen fonts
- Components (`@wrap.ngo/evergreen/components`) JS to register Evergreen components

### No build tools route

Evergreen is packaged to be used directly in the browser, and doesn't require any build.

[Here is a Codepen example](https://codepen.io/Dan-Webb/pen/OPymPKX) which shows how a CDN like esm.sh can be used to load Evergreen.

### Build tools route

First install the NPM package.

```bash
npm install --save @wrap.ngo/evergreen
```

Then, include the global CSS and JS in your main app file.

```js
// Global styles
import '@wrap.ngo/evergreen/styles';
// Optional font import
import '@wrap.ngo/evergreen/fonts';
// Component registration
import '@wrap.ngo/evergreen/components'
```

Use the components anywhere.

```html
<evg-button variant="primary">
  <button type="button">
    Button text
  </button>
</evg-button>
```

See the [example directory (`./example`)](https://github.com/wrap-org/evergreen/tree/main/example) for a working code example using Vite or head over to the [page setup guide](https://evergreen.wrap.ngo/?path=/docs/guides-page-setup--docs) for information on setting up your first page.

## Contributing

Please read through our [contributing guidelines](https://evergreen.wrap.ngo/?path=/docs/contributing--docs). Included are directions for local setup, coding standards, and notes on component development.

## Versioning

Evergreen is maintained under the [Semantic Versioning guidelines](https://semver.org/).

See the [Releases section](https://github.com/wrap-org/evergreen/releases) of our GitHub project for changelogs for each release version of Evergreen.
