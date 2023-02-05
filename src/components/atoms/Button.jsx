import React from "react"
import styled from "styled-components"
import { dimensions } from "../../styles"

const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  padding: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  height: auto;
  text-align: center;
  font-size: ${dimensions.font.base};
  :hover {
    background-color: black;
    color: white;
  }
`

const Button = ({ children, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
