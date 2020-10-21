import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  padding: 3rem;
  background: #3498db;

  h2 {
    text-align: center;
  }
`

const Right = styled('span')`
  float: right;
  vertical-align: sub;
  font-size: 1rem;

  @media only screen and (max-width: 900px) {
    text-align: center;
    float: none;
    display: block;
  }
`

const Entry = styled('div')`
  margin-bottom: 3rem;
`

const SubText = styled('div')`
  padding-left: 2rem;
  font-size: 1rem;

  @media only screen and (max-width: 900px) {
    padding-left: 0;
    text-align: center;
  }
`
const Company = styled('div')`
  font-size: 1.25rem;

  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`

export default function Experience() {
  return (
    <Container>
      <h2>Experience</h2>
      <Entry>
        <Company>
          Nozzle.io <Right>Feb 2020 - Current</Right>
        </Company>

        <SubText>Front End Junior Developer</SubText>
      </Entry>
      <Entry>
        <Company>
          Naccarato Leadership Center <Right>May 2019 - Dec 2019</Right>
        </Company>
        <SubText>I.T. Specialist</SubText>
      </Entry>
    </Container>
  )
}
