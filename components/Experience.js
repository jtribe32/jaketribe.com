import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  padding: 3rem;
  background: #3498db;
`

const Right = styled('span')`
  float: right;
  vertical-align: sub;
`

const Entry = styled('div')`
  margin-bottom: 3rem;
`

const SubText = styled('div')`
  padding-left: 2rem;
  font-size: 1rem;
`
const Company = styled('div')`
  font-size: 1.25rem;
`

export default function Experience() {
  return (
    <Container>
      <h2>Experience</h2>
      <Entry>
        <Company>
          Nozzle.io <Right>Feb 2020 - Current</Right>
        </Company>

        <SubText>Front End Intern</SubText>
      </Entry>
      <Entry>
        <Company>
          Naccarato Leadership Center <Right>May 2019- Dec 2019</Right>
        </Company>
        <SubText>I.T. Specialist</SubText>
      </Entry>
    </Container>
  )
}
