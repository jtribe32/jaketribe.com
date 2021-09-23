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
          <Strong tw="text-blue-400 ">Challenge:</Strong> Customers want an easy
          and simple way to know about Nozzle and what they offer.
        </p>
        <p tw="py-4">
          <Strong tw="text-blue-400 ">Solution:</Strong> Design and manage the
          marketing website to attract new customers and give information about
          Nozzle.
        </p>
        <p tw="py-4">
          <Strong tw="text-blue-400 ">Role:</Strong> Front-End Developer
        </p>
        <p tw="py-4">
          <Strong tw="text-blue-400 ">Tools:</Strong> React, Javascript, CSS,
          Tailwinds, Next.js, Contentful
        </p>
      </div>

      <img
        src={require('public/img/nozzleWebsite/homePage.png')}
        tw="w-full"
        alt="Nozzle Website Home Page"
      />
      <img
        src={require('public/img/nozzleWebsite/pricing.png')}
        tw="w-full"
        alt="Nozzle Website Pricing Page"
      />
      <img
        src={require('public/img/nozzleWebsite/blog.png')}
        tw="w-full"
        alt="Nozzle Website Blog Page"
      />
    </>
  )
}
