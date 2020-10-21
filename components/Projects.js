import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  img {
    width: 100%;
    text-align: center;
  }

  h2 {
    text-align: center;
  }
`

const ProjectOne = styled('div')`
  padding: 3rem;
  background: #2ecc71;
`
const ProjectTwo = styled('div')`
  padding: 3rem;
  background: #f1c40f;
`

export default function Projects() {
  return (
    <Container>
      <ProjectOne>
        <h2>Projects I've Worked On</h2>
        <a href="https://www.nozzle.io" target="_blank">
          <img src="nozzle.png" />
        </a>
      </ProjectOne>
      <ProjectTwo>
        <a href="https://www.rpchiro.com" target="_blank">
          <img src="rpChiro.png" />
        </a>
      </ProjectTwo>
    </Container>
  )
}
