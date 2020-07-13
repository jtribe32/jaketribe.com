import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  padding: 3rem;
  background: #f1c40f;

  img {
    margin: 1rem;
  }
`

export default function Projects() {
  return (
    <div>
      <Container>
        <h2>Projects Worked On</h2>
        <img src="../public/nozzle.png" />
      </Container>
      <Container>
        <img src="../public/rpChiro.png" />
      </Container>
      <Container>
        <img src="../public/rpEmail.png" />
      </Container>
    </div>
  )
}
