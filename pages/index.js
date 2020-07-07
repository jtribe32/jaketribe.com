import React from 'react'
import Head from '../components/Head.js'

import styled from 'styled-components'

import Card from '../components/Card'
import Experience from '../components/Experience.js'
import Skills from '../components/Skills.js'
import Education from '../components/Education'
import Footer from '../components/Footer'

const GlobalStyles = styled('div')`
  font-family: 'Overpass', 'Helvetica', 'Georgia', sans-serif;
  a {
    text-decoration: none;
  }

  h2 {
    font-size: 3rem;
  }
`

const Left = styled('div')`
  text-align: center;
  position: fixed;
  top: 35%;
  left: 15%;
`

const Right = styled('div')`
  position: absolute;
  right: 0%;
  top: 0%;
  width: 50%;
`

export default function Home() {
  return (
    <GlobalStyles>
      <Head />
      <Left>
        <Card />
      </Left>
      <Right>
        <Experience />
        <Education />
        <Skills />
        <Footer />
      </Right>
    </GlobalStyles>
  )
}
