import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=KoHo&display=swap');
@import url('https://fonts.googleapis.com/css?family=Work+Sans:200&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates&display=swap&subset=cyrillic');

 html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}

main {
  z-index: 200;
  margin-bottom: 200px;
  box-shadow: 3px 2px 2px 0 rgba(51,51,51,0.5);
}
`
