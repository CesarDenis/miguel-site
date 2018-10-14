import { injectGlobal } from 'styled-components';
import { normalize } from './normalize';

import theme from '../../config/theme';

injectGlobal`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    text-rendering: optimizeLegibility;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    color: ${theme.colors.text};
    background-color: ${theme.colors.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    color: ${theme.colors.textInvert};
    background-color: ${theme.colors.primary};
  }

  a {
    color: ${theme.colors.primary};
    transition: all 0.4s ease-in-out;
    text-decoration: none;

    &:hover, &:focus {
      color: ${theme.colors.text};
    }
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;

    &:hover, &:focus {
      color: inherit;
      text-decoration: none;
    }

    &:focus {
      outline: 0;
    }
  }
`;
