import React from 'react'
import 'twin.macro'
import Head from 'next/head'
import styled from 'styled-components'

import { Strong } from '../../components/Html'

const HeadLogo = styled('img')`
  border-radius: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
`

export default function NozzleWebsite() {
  return (
    <>
      <Head title="Jake Tribe | Nozzle Website" />
      <HeadLogo
        src={require('public/img/nozzleWebsiteLogo.png')}
        alt="Nozzle Website Logo"
      />
      <h1 tw="text-center my-4 text-2xl">Nozzle Website</h1>
      <div tw="mx-16 text-lg">
        <p tw="py-4">
          <Strong>Challenge:</Strong> Customers want an easy and simple way to
          know about Nozzle and what they offer.
        </p>
        <p tw="py-4">
          <Strong>Solution:</Strong> Design and manage the marketing website to
          attract new customers and give information about Nozzle.
        </p>
        <p tw="py-4">
          <Strong>Role:</Strong> Front-End Developer
        </p>
        <p tw="py-4">
          <Strong>Tools:</Strong> React, Javascript, CSS, Tailwinds, Next.js,
          Contentful
        </p>
      </div>
      <div tw="text-center pt-16 text-xl">More coming soon...</div>
    </>
  )
}
