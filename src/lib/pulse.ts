import { css } from 'lit';

export const pulse = css`
  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }

  :host {
    --evg-loading-delay: 0.5s;
    --evg-transition-duration-enter: 0.5s;
    --evg-transition-duration-pulse: 1.5s;
    --evg-transition-timing-enter: ease-in-out;
    --evg-transition-timing-pulse: ease-in-out;

    animation:
      fade-in var(--evg-transition-duration-enter) forwards
        var(--evg-transition-timing-enter) var(--evg-loading-delay),
      pulse var(--evg-transition-duration-pulse) infinite
        var(--evg-transition-timing-pulse);
    appearance: none;
    background: linear-gradient(
      to right,
      color-mix(in srgb, var(--evg-theme-color) 7.5%, transparent) 0%,
      color-mix(in srgb, var(--evg-theme-background) 50%, transparent) 33.33%,
      color-mix(in srgb, var(--evg-theme-color) 7.5%, transparent) 100%
    );
    background-size: 200% 100%;
    color: transparent;
    display: inline-block;
    opacity: 0;
    pointer-events: none;
    user-select: none;
  }
`;
