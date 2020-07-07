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
      <ul>
        <li>GPA 3.51</li>
        <li>Member of BYU Tech Club and Association for Information Systems</li>
      </ul>
      <h4>Woods Cross High School</h4>
      <ul>
        <li>Graduated High Honor Roll</li>
        <li>ACT 32/36, 97th Percentile</li>
        <li>
          Participated as a team member for the Basketball, Golf, and Tennis
          teams
        </li>
      </ul>
    </Container>
  )
}
