import React from 'react'
import tw from 'twin.macro'
import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'
import { P, Ul, Li } from 'components/Html'

const HeadLogo = styled('img')`
  border-radius: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
`
const Header = styled('h2')`
  ${tw`text-center text-3xl my-16 font-bold text-blue-500 `}
`

const SubHeader = styled('h3')`
  ${tw` text-xl mb-4 text-blue-500 font-semibold`}
`

const PresentationButton = styled('button')`
  ${tw`mb-4 bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white py-2 px-3 border border-blue-400 hover:border-transparent border-solid rounded`}
`

export default function GoogleUxWebsite() {
  return (
    <>
      <HeadLogo
        src={require('public/img/djRecommendationLogo.png')}
        alt="Google UX Certificate App"
      />
      <h1 tw="text-center mt-4 mb-8 text-2xl text-green-500 font-bold">
        Nashville Music Charity - Google UX Certificate Website
      </h1>
      <div tw="grid grid-cols-2">
        <div>
          <SubHeader tw="text-center">Project Vision</SubHeader>
          <P>
            A responsive website that allows people to donate to the nashville
            music charity
          </P>
          <P>Project Duration: July 2021 - June 2021</P>
        </div>
        <div>
          <SubHeader tw="text-center">Problem</SubHeader>
          People want an easy fun way to donate to the Nashville Music Charity
          but have problems with complicated or boring websites.
        </div>
      </div>

      <div tw="grid grid-cols-2">
        <div tw="my-auto p-4 ">
          <Header>Understanding the user</Header>
          <SubHeader tw="text-lg">Pain Points</SubHeader>
          <Ul>
            <Li tw="pb-4">
              Trust - Many people do not trust charities or where their money
              will be spent when they donate.
            </Li>
            <Li tw="pb-4">
              Complicated - Majority of Charity websites are hard to understand
              and use.
            </Li>
          </Ul>
        </div>
        <div>
          <img
            src={require('public/img/googleWebsiteUser.png')}
            tw="w-full"
            alt="User Persona"
          />
        </div>
      </div>
      <Header>Starting the Design</Header>

      <div tw="grid grid-cols-2">
        <div tw="my-auto p-4">
          <SubHeader tw="text-lg">Low-Fidelity prototype</SubHeader>
          <P>
            Using all the digital wireframes, I created a low-fidelity
            prototype. The primary user flow I tested was donating to the
            charity in order to use it in the usability study.
          </P>{' '}
          <P>
            View the prototype at{' '}
            <a
              href="https://xd.adobe.com/view/3044b0c1-d2b2-4321-b590-755949d5b002-6517/"
              tw="text-blue-500 hover:(cursor-pointer underline)"
            >
              Lo-fi Prototype
            </a>
          </P>
        </div>
        <img
          src={require('public/img/googleWebsitePrototype.png')}
          tw="w-full"
          alt="Low-Fidelity Prototype"
        />
      </div>
      <Header>Refining the Design</Header>

      <div tw="grid grid-cols-2">
        <div tw="my-auto p-4">
          <SubHeader>Usability Study Findings</SubHeader>

          <Ul tw="pb-8">
            <Li>
              Fun - Donators want to feel like they are having fun when they
              donate.
            </Li>
            <Li>
              More navigation - Users felt that there was not enough buttons to
              navigate.
            </Li>
          </Ul>
          <SubHeader tw="text-lg">High-Fidelity prototype</SubHeader>

          <P>
            The final high-fidelity protype presented cleaner user flows and
            easier navigation. It also solved the pain points discussed earlier.
          </P>
          <P>
            View the prototype at{' '}
            <a
              href="https://xd.adobe.com/view/5c685f91-f175-479e-a356-9dcaaf911f84-093b/"
              tw="text-blue-500 hover:(cursor-pointer underline)"
            >
              Hi-Fi Prototype
            </a>
          </P>
        </div>
        <img
          src={require('public/img/googleWebsiteFinal.png')}
          tw="w-full"
          alt="High-Fidelity Prototype"
        />
      </div>
      <Header>Solutions</Header>
      <div tw="grid grid-cols-2">
        <div tw="text-center">
          <i
            className="fas fa-plus-circle fa-lg"
            tw="text-7xl mb-4 text-green-500"
          ></i>
          <P>Added better navigation.</P>
        </div>
        <div tw="text-center">
          <i
            className="fas fa-thumbs-up fa-lg"
            tw="text-7xl mb-4  text-blue-500"
          ></i>
          <P>Added animation to make the feeling more fun.</P>
        </div>
      </div>
      <Header>Takeaways</Header>
      <div tw="grid grid-cols-2">
        <div>
          <SubHeader>Impact</SubHeader>
          <P>
            The website allows people to donate to the Nashville Music Charity
            and make a difference in kids lives.
          </P>
        </div>
        <div>
          <SubHeader>What I Learned</SubHeader>
          <P>
            I learned that it is important to design for different devices so
            that a user will have a good experience no matter how they access
            it.
          </P>
        </div>
      </div>
    </>
  )
}
