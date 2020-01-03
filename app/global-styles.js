import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  header{
    height: 150px;
  }

  Footer{
    height:300px;
    background: linear-gradient(180deg, rgba(0, 128, 255, 0) 0%, rgba(80, 160, 237, 0.7) 18.23%, rgba(80, 160, 237, 0.8) 44.79%, #0060FF 99.48%);
  }


  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Exo 2', sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
