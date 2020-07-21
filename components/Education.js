import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  padding: 3rem;
  background: #2ecc71;
`

export default function Education() {
  return (
    <Container>
      <h2>Education</h2>
      <h4>Brigham Young University</h4>
      <p>BS in Information Systems</p>
      <h4>Woods Cross High School</h4>
      <p>Graduated High Honor Roll </p>
    </Container>
  )
}
