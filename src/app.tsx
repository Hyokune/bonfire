import { setup } from 'goober';
import { createGlobalStyles } from 'goober/global';
import { shouldForwardProp } from 'goober/should-forward-prop';
import React from 'react';

import DirectoryManager from './directory-manager';

export const PRIMARY_COLOR = 'rgb(190, 198, 212)';

const GlobalStyles = createGlobalStyles`
  @font-face {
    font-family: 'TmonMonsori';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/TmonMonsori.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Jefferies';
    src: url('public/fonts/jefferies.ttf');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  strong,
  b {
    font-weight: 700;
  }

  body {
    height: 100%;
    color: ${PRIMARY_COLOR};
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-family: 'TmonMonsori', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.025rem;
    background-color: rgb(42, 48, 60);
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  input {
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    color: ${PRIMARY_COLOR};
    background-color: transparent;
  }
`;

setup(
  React.createElement,
  undefined,
  undefined,
  shouldForwardProp((prop) => prop[0] !== '$'), // Prevents props from forwarding that start with `$` symbol
);

const App = () => (
  <>
    <DirectoryManager />
    <GlobalStyles />
  </>
);

export default App;
