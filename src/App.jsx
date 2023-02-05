import { createGlobalStyle } from "styled-components"
import { Home } from "./components/pages"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway', sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App
