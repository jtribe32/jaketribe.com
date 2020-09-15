import React from 'react'
import Head from '../components/Head.js'
import App from 'next/app'

import styled from 'styled-components'

import Card from '../components/Card'
import Experience from '../components/Experience.js'
import Skills from '../components/Skills.js'
import Education from '../components/Education'
import Footer from '../components/Footer'
import Projects from '../components/Projects.js'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const GlobalStyles = styled('div')`
  font-family: 'Overpass', 'Helvetica', 'Georgia', sans-serif;
  color: white;
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
  top: 20%;
  left: 15%;

  @media only screen and (max-width: 600px) {
    position: static;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`

const Right = styled('div')`
  position: absolute;
  right: 0%;
  top: 0%;
  width: 50%;

  @media only screen and (max-width: 600px) {
    position: static;
    width: 100%;
  }
`

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <GlobalStyles>
        <Head />
        <Left>
          <Card />
        </Left>
        <Right>
          <Projects />
          <Experience />
          <Education />
          <Skills />
          <Footer />
        </Right>
      </GlobalStyles>
    </>
  )
}
