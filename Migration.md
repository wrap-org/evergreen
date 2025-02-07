# Migration

## v8 -> v9

### Tokens
- `breakpoint.scss` has been replaced with `size.scss`. The structure is slightly different, but the key values remain almost the same.
  - `tablet` -> `lg`
  - `desktop` -> `xl`
  - `max` -> `xxxl`

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
