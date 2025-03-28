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
    --evg-loading-duration-pulse: 2.4s;

    animation:
      fade-in 0.5s forwards var(--evg-transition-enter),
      pulse var(--evg-loading-duration-pulse) infinite
        var(--evg-transition-timing);
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
