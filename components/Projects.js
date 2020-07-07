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
      <h2>Skills</h2>
      <h4>Programming Languages &amp; tools</h4>
      <i className="fab fa-html5 fa-3x"></i>
      <i className="fab fa-css3-alt fa-3x"></i>
      <i className="fab fa-js-square fa-3x"></i>
      <i className="fab fa-node-js fa-3x"></i>
      <i className="fab fa-react fa-3x"></i>
      <i className="fab fa-swift fa-3x"></i>
      <i className="fab fa-github fa-3x"></i>
    </Container>
  )
}
