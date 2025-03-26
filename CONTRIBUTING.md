# Contributing

We love having contributors to Evergreen, let's help get you set up and running.

## Local setup

Close [the repo](https://github.com/wrap-org/evergreen) and install the dependencies with `npm i`.

The storybook development environment can be booted up using `npm run storybook`.

## Commit messages and semantic versioning

Evergreen uses [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) formatting
and uses the scope of the commit message to generate the semantic version of new releases, as well
as automatically generating a [changelog](https://evergreen.wrap.ngo/?path=/docs/changelog--docs).

Commits that use the `feat` or `fix` scope will update the semantic version and you can use an
exclamation mark after the scope to indicate a breaking change (`feat!: removed the button component`).

All commit messages **will be added to the changelog** so please be considerate with your message descriptions.

A new version of the library will be automatically tagged and published when PRs are merged into the `main` branch.

## Updating tokens

The [design tokens](https://evergreen.wrap.ngo/?path=/docs/foundations-tokens-button--docs) live in
[a separate repo](https://github.com/wrap-org/tokens) so they can be consumed in environments that
do not support Evergreen components as well as by us.

This repo follows the same processes for [commit messages and semantic versioning](https://evergreen.wrap.ngo/?path=/docs/contributing--docs#commit-messages-and-semantic-versioning) as outlined above in this doc.

## Writing components

Evergreen is a web component library that can be used in any ecosystem, but the components are divided into 3
categories: utilities, css web components and full/lit web components.

### Utilities

Utility components are actually just CSS classes. Use a utility component when:
- you want to add a behaviour to semantic HTML elements and other components
- you expect only one class of this group to be added to an element
- you don't want to add extra DOM elements
- you don't require typescript completion in the editor

Some examples of existing utilities are: [spacing](https://evergreen.wrap.ngo/?path=/docs/foundations-utilities-spacing--docs), [theme](https://evergreen.wrap.ngo/?path=/docs/foundations-utilities-theme--docs) and [text helpers](https://evergreen.wrap.ngo/?path=/docs/foundations-utilities-text--docs)

### CSS web components

Whilst web components can be registered to the
[CustomElementRegistry](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry), it is still
perfectly valid to use custom element syntax and not use Javascript to register the element to the browser.

This has a performance advantage because we don't need to wait for the Javascript to download, parse,
and run before the element can be used properly on the page.

In order to get the same developer exprience, we create Typescript types for the component that define its
props, so developers will still get type completion and auto suggest when using the component, as well as
compilation failures if the component is used incorrectly.

Use a CSS web component when:
- There is no component subtree (shadow dom)
- A component has multiple props

Most of the components in Evergreen are CSS web components, which makes it incredibly performant and light
weight. Some examples are: [button](https://evergreen.wrap.ngo/?path=/docs/components-control-button--docs),
[section](https://evergreen.wrap.ngo/?path=/docs/components-canvas-section--docs) and [box](https://evergreen.wrap.ngo/?path=/docs/components-canvas-box--docs).

### Full/Lit web components

Some components need to be a bit more complex, with Javascript interactions or shadow DOM subtrees. We use the [Lit framework](https://lit.dev/) to create web components where necessary.

Use a lit web component when:
- You need to render a component shadow DOM sub tree
- You need named component slots
- The component provides a Javascript driven interaction that is built in

Some examples of lit web components in Evergreen currently are: [section-img](https://evergreen.wrap.ngo/?path=/story/components-canvas-section--with-image), [collapse](https://evergreen.wrap.ngo/?path=/docs/components-composition-collapse--docs), [icon](https://evergreen.wrap.ngo/?path=/docs/components-content-icon--docs).

### Component principles

We have a few component principles that we try to stick to when writing Evergreen components.

- Expose semantic elements and content. Don't render semantic HTML or content inside shadow DOM. Instead,
wrap the component around existing semantic HTML elements or content. This helps expose the ability to
add accessibility helpers, such as aria attributes and makes sure the content will be available even if
Javascript fails.
- Component styling should use [CEA (Component, Element, Attribute) styling](https://etch.co/blog/bem-for-web-components). Components should be styled in light DOM CSS where possible for performance, rather than using JS injected styling. Components should use `part` attributes to expose `::part()` selectors for styling shadow
DOM elements from the light DOM.
- Components should follow [Diamond UI](https://diamond.etch.co/) grouping, falling into one of the groups: composition, canvas, content or control.
- Components should not control their own width, unless they are a composition designed purely for that (like [wrapper](https://evergreen.wrap.ngo/?path=/docs/components-composition-wrapper--docs)), and should either expand to fit their content if they are inline or expand to fit their parent if they are a block level component.
- Use what the web gives you for free. Where possible, use existing semantic elements, such a `dialog` (see [modal](https://evergreen.wrap.ngo/?path=/docs/components-composition-modal--docs) and [drawer](https://evergreen.wrap.ngo/?path=/docs/components-canvas-drawer--docs)), rather than recreating the custom behaviour in Javascript. Push semantic HTML and aria as far as possible before resorting to JS.
- Web components are not templates. Web components should be considered as extensions to the HTML spec and not templating components. Think about the way you interact with a `button`, `a`, `section` or `h1` and try to mirror that
in the way the component is designed.
- CSS values, where possible, should use the design tokens defined in the [tokens package](https://github.com/wrap-org/tokens). "Magic" values (those not defined in the tokens), lead to inconsistencies and maintenance issues down the line.
- A component should never reference another component in its CSS. This prevents unexpected side effects when refactoring components.
- Primitive props are preferred where possible (string, number, etc). Simpler props are easier to test and provide more visibiliy of the possible permutations.
- A components provides an interface (props and event emitters) and an output. Other than passing values to this interface, a components inner code should never be referenced anywhere else in the codebase to prevent unexpected side effects.
- All components and classes are prefixed with `evg-` to denote they are from the Evergreen Design System.
- Where components must have a margin (although ideally, a component has no outer spacing), a bottom margin is preferred to a top margin. By keeping all margin unidirectional the results of component interactions are more predicatable (less margin collapse rules to worry about).
- All interactive elements should show a visual difference when hovered on and when focused on. This helps to show the user what is interactive and aids keyboard navigation. An appropriate mouse pointer style should also be set. Focus styles should be as close to browser default as possible to match user expectations.

### Documenting components

- There should be a storybook story for each component
- The first story should have the same name as the component and have all props hooked to the storybook args table
- Subsequent stories should be examples of common configurations of components
- Combinations of components can be documented in the recipes section
- List accessibility and usage guidelines inside the component docs description field
