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
- **Storybook Components:** Build interfaces efficiently with our coded components, complete with documentation, usage guidelines, and examples.
- **Brand Guidelines:** Access WRAP's complete brand guidelines on Frontify, including logos, tone of voice, photography direction, and printed media.

By using these resources, you can create experiences that feel cohesive and authentic to the WRAP brand while saving time on your projects.

## Good to know

### Methodology

> Evergreen follows the proven principles established by the [Diamond methodology](https://diamond.etch.co/).

Evergreen is built upon the Diamond methodology principles outlined at [diamond.etch.co](https://diamond.etch.co/). This approach ensures:

- **Scalability:** Components are designed to function consistently across various contexts and screen sizes
- **Maintainability:** Clear separation of concerns makes the system easier to update and extend
- **Flexibility:** The system balances standardisation with adaptability for specific use cases
- **Efficiency:** Reusable patterns reduce redundancy and accelerate development

Diamond methodology emphasises the importance of design tokens as the atomic elements that feed into our component architecture, creating a cohesive system that can evolve while maintaining consistency across WRAP's digital ecosystem.

### Accessibility

> Creating experiences that work for everyone, regardless of ability or context.
>

Accessibility is a core principle of Evergreen, not an afterthought. All components are designed and built with accessibility in mind to ensure WRAP's digital experiences are usable by everyone:

- **Compliance:** Components are built to meet WCAG 2.1 AA standards at minimum, with AAA compliance where possible
- **Keyboard Navigation:** All interactive elements are fully keyboard accessible with visible focus states
- **Screen Reader Support:** Proper semantic markup and ARIA attributes ensure compatibility with assistive technologies
- **Colour Contrast:** Text and interactive elements maintain sufficient contrast ratios for readability
- **Responsive Design:** Interfaces adapt appropriately to different viewport sizes and zoom levels
- **Reduced Motion:** Animations respect user preferences for reduced motion when specified

Our commitment to accessibility reflects WRAP's mission to create inclusive experiences that serve all users equally.

### Browsers and devices

> Supporting a wide range of modern browsers and devices to reach all users.
>

Evergreen is built for broad compatibility across modern digital environments:

- **Browsers:** Full support for the latest versions of Chrome, Firefox, Safari, and Edge
- **Operating Systems:** Compatible with current versions of Windows, macOS, iOS, and Android
- **Devices:** Responsive design ensures proper function across desktops, laptops, tablets, and smartphones
- **Legacy Support:** Limited support for older browsers with graceful degradation where possible
- **Testing:** Regular cross-browser and device testing ensures consistent performance

While we optimise for modern browsers and devices, we implement progressive enhancement techniques to ensure core functionality remains accessible even in less capable environments. This balanced approach allows us to leverage modern capabilities while maintaining broad accessibility.

## Contributing

Please read through our [contributing guidelines](https://evergreen.wrap.ngo/?path=/docs/contributing--docs). Included are directions for local setup, coding standards, and notes on component development.

## Versioning

Evergreen is maintained under the [Semantic Versioning guidelines](https://semver.org/).

See the [Releases section](https://github.com/wrap-org/evergreen/releases) of our GitHub project for changelogs for each release version of Evergreen.
