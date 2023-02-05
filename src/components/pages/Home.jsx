import React from "react"
import styled from "styled-components"
import { Button } from "../atoms"
import { Card } from "../organisms"
import { useFetch } from "../../hooks"

const StyledDiv = styled.div`
  columns: 3 230px;
  column-gap: 1em;
`

const Home = () => {
  const { images, page, setPage } = useFetch()
  return (
    <div style={{ padding: "1rem" }}>
      <Button onClick={() => setPage(page + 1)}>Cargar nuevas fotos</Button>
      <StyledDiv>
        {images.map((img) => (
          <Card
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description}
            bgColor={img.color}
          />
        ))}
      </StyledDiv>
    </div>
  )
}

export default Home
