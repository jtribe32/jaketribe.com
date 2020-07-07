import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  padding: 3rem;
  background: #3498db;
`

export default function Experience() {
  return (
    <Container>
      <h2>Experience</h2>
      <h4>Nozzle.io</h4>
      <ul>
        <li>
          Responsible for website management and development using React.js
        </li>
        <li>
          Participated in using GitHub to manage version control of Company
          website
        </li>
        <li>
          Collaborated with industry leaders to learn new technologies more
          efficiently
        </li>
      </ul>
      <h4>The Naccarato Leadership Center</h4>
      <ul>
        <li>
          Responsible for a 500% increase in opening rate for a weekly email
          marketing campaign
        </li>
        <li>
          Responsible for comprehensive redesign and development of company
          website
        </li>

        <li>
          Lead for database management. Ensuring data is clean, current and
          organized driving efficiency and better analytics
        </li>
        <li>
          Lead for all technical troubleshooting and solutions for the
          organization
        </li>
      </ul>
    </Container>
  )
}
