import React from 'react'
import 'twin.macro'
import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'

const HeadLogo = styled('img')`
  border-radius: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
`

export default function NozzleApp() {
  return (
    <>
      <HeadLogo src={require('public/img/nozzleLogo.png')} alt="Nozzle App" />
      <h1 tw="text-center mt-4 text-2xl">Nozzle App</h1>
      <h2 tw="text-center mt-16">Description coming soon...</h2>
    </>
  )
}
