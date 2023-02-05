import React from "react"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-top: 1rem;
`

const Image = ({ src, alt }) => {
  return <StyledImg src={src} alt={alt} />
}

export default Image
