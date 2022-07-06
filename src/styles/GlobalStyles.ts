import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    align-items: center;
    justify-content: center;
    
    font-family: 'Allerta Stencil', sans-serif;
  }
`
