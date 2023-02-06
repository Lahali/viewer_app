import React from "react"
import styled from "styled-components"
import { Image } from "../atoms"
import { useConversorColor } from "../../hooks"
import { dimensions } from "../../styles/index"

const StyledCard = styled.div`
  position: relative;
  display: inline-block;
  :hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`

const StyledText = styled.p`
  position: ${({ position }) => position || "absolute"};
  font-size: ${({ fontSize }) => fontSize || dimensions.font.base};
  bottom: ${({ bottom }) => bottom || "20px"};
  margin-left: ${({ marginLeft }) => marginLeft || "0.5rem"};
  padding: ${({ padding }) => padding || "5px"};
  color: ${({ color }) => color || "white"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
`

const Card = ({ src, alt, bgColor }) => {
  const hexColor = bgColor
  const { color } = useConversorColor(hexColor)

  return (
    <StyledCard>
      <Image src={src} alt={alt} />
      <StyledText fontSize={dimensions.font.xl} color={color}>
        Title of card
      </StyledText>
      <StyledText fontSize={dimensions.font.base} color={color} bottom="2px">
        Subtitle
      </StyledText>
    </StyledCard>
  )
}

export default Card
