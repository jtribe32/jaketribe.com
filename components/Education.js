import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  padding: 3rem;
  background: #2ecc71;

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
const School = styled('div')`
  font-size: 1.25rem;

  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`

export default function Education() {
  return (
    <Container>
      <h2>Education</h2>
      <Entry>
        <School>
          Brigham Young University <Right>2018 - Current</Right>
        </School>
        <SubText>BS in Information Systems</SubText>
      </Entry>
      <Entry>
        <School>
          Woods Cross High School <Right>2013 - 2016</Right>
        </School>
        <SubText>Graduated High Honor Roll </SubText>
      </Entry>
    </Container>
  )
}
