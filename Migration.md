# Migration

## v8 -> v9

### Tokens
- All tokens have has `--mobius-` replaced with `--evg-`
- `breakpoint.scss` has been replaced with `size.scss`. The structure is slightly different, but the key values remain almost the same.
  - `tablet` -> `lg`
  - `desktop` -> `xl`
  - `max` -> `xxxl`
- Container colours have been removed
- Breakpoint variables have been removed
- Stream has been split out from colours into it's own `--evg-stream-` collection
- State has been split out from colours into it's own `--evg-state-` collection
- The color tokens `body`, `body-muted`, `background`, `background-muted`, `accent`, `link` have been removed in favour of using themes.
- `skin` tokens have been renamed to `theme`
- colors `cloud-75`, `white` and `black` have been removed
- `stream` colours have been removed


### Utilities
- `Text`has been replaced with text utility classes. e.g. `.evg-text-size-lg`
- `TextAlign`, `Lead` and `Title` components have been removed and should use the text utility classes instead.
- `Skin` has been replaced with theme utility classes. e.g. `.evg-theme-dark`
- `Spacing` has been replaced with spacing utility classes. e.g. `.evg-spacing-bottom-md`

### Components
- `Wrap` has been replaced with `evg-wrap`
  - Wrap sizes have been updated
    - `tablet` -> `lg`
    - `desktop` -> `xl`
    - `max` -> `xxxl`
- `Grid` and `evg-grid-item` have been replaced with `evg-grid` and `evg-grid-item`
  - Grid breakpoint names have been changed
    - xs -> small-mobile
    - *new* - mobile
    - sm -> large-mobile
    - md -> small-tablet
    - lg -> tablet
    - xl -> large-tablet
    - xxl -> small-desktop
    - xxxl -> desktop
    - *new* -> large-desktop
    - desktop -> large-tablet
    - max -> desktop
  - Grid props have been updated
    - `inset`, `insetFluid` and `insetVerticalFluid` have been removed
    - `wrap` is now string only e.g. `wrap="wrap"`
    - `justify` is now `justify-content`
    - `align` is now `align-items`
    - `spacing` is now `gap`
    - `full-width` has been removed
  - Grid Item props have been updated
    - `align` has been removed
    - `flex` is now `fill`
    - `order` has been removed
- `App` has been replaced with `evg-app`
  - `App.Header`, `App.Main` and `App.Footer` have been removed. There are `header` and `footer` slots in `evg-app`.
- `Section` has been replaced with `evg-section`. The new component is able to handle it's own vertical padding via the `padding` prop.
- `ContainerSvg` has been removed and will stay local to the LA portal
- `Container` has been removed and will stay local to the LA portal
- `Input`, `Textarea` and `Select` are now `evg-input`
  - `prefix` and `suffix` are no longer props on these and should be passed in as an svg or icon child component
  - These components control their own validation state display via the `state` prop
