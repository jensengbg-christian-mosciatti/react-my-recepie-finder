import { createGlobalStyle } from 'styled-components'

// ${'' /* @import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Open+Sans&display=swap'); */}
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background:  linear-gradient(to bottom, #ffdee4, #ffccd6) ;
    font-family: 'Open Sans', Helvetica, Sans-Serif;
    font-size: max( calc(14px + 1vw), 2vw ) ;
    color: #582C4D;
    min-height: 100vh;
  }

  h1  {
    font-family: 'Covered By Your Grace', cursive;
  }
  h2, h3, h4, h5, h6, button, input[type='submit'] {

  font-family: 'Rubik', sans-serif;
  }
`

export default GlobalStyle
