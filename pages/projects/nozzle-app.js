import React from 'react'
import 'twin.macro'
import Head from 'next/head'
import styled from 'styled-components'

import { Strong } from 'components/Html'

const HeadLogo = styled('img')`
  border-radius: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
`

export default function NozzleApp() {
  return (
    <>
      <Head title="Jake Tribe | Nozzle App" />
      <HeadLogo src={require('public/img/nozzleLogo.png')} alt="Nozzle App" />
      <h1 tw="text-center my-8 text-2xl">Nozzle App</h1>
      <div tw="mx-16 text-lg">
        <p tw="py-4">
          <Strong tw="text-blue-400 ">Challenge:</Strong> People want to track
          how well they are doing on Google for specific keywords.
        </p>
        <p tw="py-4">
          <Strong tw="text-blue-400 ">Solution:</Strong> Design and manage an
          app that allows them to track their ranking for keywords with an easy
          to use user interface.
        </p>
        <p tw="py-4">
          <Strong tw="text-blue-400 ">Role:</Strong> Front-End Developer
        </p>
        <p tw="py-4">
          <Strong tw="text-blue-400 ">Tools:</Strong> React, Javascript,
          Typescript, CSS, Tailwinds, Next.js,
        </p>
      </div>
      <img
        src={require('public/img/nozzleApp/dashboards.png')}
        tw="w-full"
        alt="Nozzle App Dashboards"
      />
      <img
        src={require('public/img/nozzleApp/billing.png')}
        tw="w-full"
        alt="Nozzle App Billing Page"
      />
      <img
        src={require('public/img/nozzleApp/usage.png')}
        tw="w-full"
        alt="Nozzle App Usage Page"
      />
    </>
  )
}
