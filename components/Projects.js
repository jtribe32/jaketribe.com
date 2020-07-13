import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  padding: 3rem;
  background: #f1c40f;

  i {
    margin: 1rem;
  }
`

export default function Projects() {
  return (
    <Container>
      <ProjectOne>
        <h2>Projects Worked On</h2>
        <img src="nozzle.png" />
      </ProjectOne>
      <ProjectTwo>
        <img src="rpChiro.png" />
      </ProjectTwo>
    </Container>
  )
}
