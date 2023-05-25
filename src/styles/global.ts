import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme['base-text']};

    width: 100vw;
    height: 100vh;

    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
