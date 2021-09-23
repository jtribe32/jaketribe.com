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
          <Strong tw="text-blue-400 ">Challenge:</Strong> Customers were
          interested in being coached by Jim Naccarato but became uninterested
          once they saw an outdated website.
        </p>
        <p tw="py-4">
          <Strong tw="text-blue-400 ">Solution:</Strong> Redesign and manage a
          basic website for The Naccarato Leadership Center.
        </p>
        <p tw="py-4">
          <Strong tw="text-blue-400 ">Role:</Strong> Full-Stack Developer
        </p>
        <p tw="py-4">
          <Strong tw="text-blue-400 ">Tools:</Strong> Javascript, Html, CSS,
          Bootstrap
        </p>
      </div>
      <div tw="grid md:(grid-cols-2) grid-cols-1 text-center">
        <div>
          <img
            src={require('public/img/rpWebsite/oldHomePage.png')}
            tw="w-full"
            alt="Naccarato Old Home Page"
          />
        </div>

        <div>
          <img
            src={require('public/img/rpWebsite/newHomePage.png')}
            tw="w-full"
            alt="Naccarato New Home Page"
          />
        </div>
        <div>
          <img
            src={require('public/img/rpWebsite/oldAbout.png')}
            tw="w-full"
            alt="Naccarato Old About Page"
          />
        </div>

        <div>
          <img
            src={require('public/img/rpWebsite/newAbout.png')}
            tw="w-full"
            alt="Naccarato New About Page"
          />
        </div>
        <div>
          <img
            src={require('public/img/rpWebsite/oldTestimonials.png')}
            tw="w-full"
            alt="Naccarato Old Testimonials Page"
          />
        </div>

        <div>
          <img
            src={require('public/img/rpWebsite/newTestimonials.png')}
            tw="w-full"
            alt="Naccarato New Testimonials Page"
          />
        </div>
      </div>
    </>
  )
}
