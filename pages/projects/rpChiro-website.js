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

export default function RpChiro() {
  return (
    <>
      <Head title="Jake Tribe | The Naccarato Leadership Center Website" />
      <HeadLogo
        src={require('public/img/rpChiroLogo.png')}
        alt="The Naccarato Leadership Center Logo"
      />
      <h1 tw="text-center my-4 text-2xl">
        The Naccarato Leadership Center Website
      </h1>
      <div tw="mx-16 text-lg">
        <p tw="py-4">
          <Strong>Challenge:</Strong> Customers were interested in being coached
          by Jim Naccarato but became uninterested once they saw an outdated
          website.
        </p>
        <p tw="py-4">
          <Strong>Solution:</Strong> Redesign and manage a basic website for The
          Naccarato Leadership Center.
        </p>
        <p tw="py-4">
          <Strong>Role:</Strong> Full-Stack Developer
        </p>
        <p tw="py-4">
          <Strong>Tools:</Strong> Javascript, Html, CSS, Bootstrap
        </p>
      </div>
      <div tw="text-center pt-16 text-xl">More coming soon...</div>
    </>
  )
}
