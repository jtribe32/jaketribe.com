import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  padding: 3rem;
  background: #3498db;
`

const Left = styled('div')``

const Right = styled('div')`
  display: inline;
`

export default function Experience() {
  return (
    <Container>
      <h2>Experience</h2>
      <Left>
        <h4>Nozzle.io</h4>
        <p>Front End Intern</p>
      </Left>
      <Right>Feb 2020 - Current</Right>
      <h4>The Naccarato Leadership Center</h4>
      <p>I.T. Specialist</p>
      <Right>May 2019 - Dec 2019</Right>
    </Container>
  )
}
