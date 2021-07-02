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

export default function GoogleUxApp() {
  return (
    <>
      <HeadLogo
        src={require('public/img/djRecommendationLogo.png')}
        alt="Google UX Certificate App"
      />
      <h1 tw="text-center mt-4 mb-8 text-2xl text-green-500 font-bold">
        Dj Recommendation - Google UX Certificate App
      </h1>
      <div tw="grid grid-cols-2">
        <div>
          <SubHeader tw="text-center">Project Vision</SubHeader>
          <P>
            An app for DJs to mange music and curate playlists. This app would
            also allow the audience to recommend songs.
          </P>
          <P>Project Duration: May 2021 - July 2021</P>
        </div>
        <div>
          <SubHeader tw="text-center">Problem</SubHeader>
          DJs and audience members are often frustrated because they feel that
          the music being played is not enjoyed.
        </div>
      </div>

      <div tw="grid grid-cols-2">
        <div tw="my-auto p-4 ">
          <Header>Understanding the user</Header>
          <SubHeader tw="text-lg">Pain Points</SubHeader>
          <Ul>
            <Li tw="pb-4">
              Voice - Young adults want their voice heard on what songs they are
              hearing at parties.
            </Li>
            <Li tw="pb-4">
              Popular Vote - DJs need to play songs that are liked by the
              majority of the people at their parties
            </Li>
            <Li tw="pb-4">
              Ease of Use - Platforms offering sharing playlists are clunky and
              hard to use.
            </Li>
          </Ul>
        </div>
        <div>
          <img
            src={require('public/img/userProfile.png')}
            tw="w-full"
            alt="User Persona"
          />
        </div>
      </div>
      <Header>Starting the Design</Header>
      <div tw="grid grid-cols-2">
        <img
          src={require('public/img/googleWireframes.png')}
          tw="w-full"
          alt="wireframes"
        />
        <div tw="my-auto p-4">
          <SubHeader tw="text-lg">Paper wireframes</SubHeader>
          <P>
            I started by drafting a bunch of iterations of each screen of the
            app on paper. This allowed for quicker changes and prepared for a
            better digital wireframe. I then stared what I wanted to keep and
            made a combine wireframe.
          </P>
        </div>
      </div>
      <div tw="grid grid-cols-2">
        <div tw="my-auto p-4">
          <SubHeader tw="text-lg">Low-Fidelity prototype</SubHeader>
          <P>
            Using all the digital wireframes, I created a low-fidelity
            prototype. The primary user flow I tested was suggesting a song in
            order to use it in the usability study.
          </P>{' '}
          <P>
            View the prototype at{' '}
            <a
              href="https://www.figma.com/proto/V6bz90ipJvxI69fiR6PVoK/Song-Suggestion?node-id=19%3A75&scaling=min-zoom&page-id=19%3A2"
              tw="text-blue-500 hover:(cursor-pointer underline)"
            >
              Lo-fi Prototype
            </a>
          </P>
        </div>
        <img
          src={require('public/img/googleLoFi.png')}
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
              Preparation - Young adults want their voice heard on what songs
              they are hearing at parties.
            </Li>
            <Li>
              Invitations - DJs need to play songs that are liked by the
              majority of the people at their parties
            </Li>
            <Li>
              Counts - Platforms offering sharing playlists are clunky and hard
              to use.
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
              href="https://www.figma.com/proto/V6bz90ipJvxI69fiR6PVoK/Song-Suggestion?node-id=30%3A67&scaling=min-zoom&page-id=30%3A2"
              tw="text-blue-500 hover:(cursor-pointer underline)"
            >
              Hi-Fi Prototype
            </a>
          </P>
        </div>
        <img
          src={require('public/img/googleHiFi.png')}
          tw="w-full"
          alt="High-Fidelity Prototype"
        />
      </div>
      <Header>Solutions</Header>
      <div tw="grid grid-cols-3">
        <div tw="text-center">
          <i
            className="fas fa-plus-circle fa-lg"
            tw="text-7xl mb-4 text-green-500"
          ></i>
          <P>Allow people to suggest songs.</P>
        </div>
        <div tw="text-center">
          <i
            className="fas fa-thumbs-up fa-lg"
            tw="text-7xl mb-4  text-blue-500"
          ></i>
          <P>Users vote on songs and invite people on social media.</P>
        </div>
        <div tw="text-center">
          <i
            className="fas fa-bullseye fa-lg"
            tw="text-7xl mb-4 text-red-500"
          ></i>
          <P>An easy to use UI that is straight forward and simple.</P>
        </div>
      </div>
      <Header>Takeaways</Header>
      <div tw="grid grid-cols-2">
        <div>
          <SubHeader>Impact</SubHeader>
          <P>
            The app makes users feel like their voice is heard at parties. One
            quote from peer feedback: “Finally, I feel like I can tell the DJ
            what I want, and they will listen!”
          </P>
        </div>
        <div>
          <SubHeader>What I Learned</SubHeader>
          <P>
            While designing the DJ Recommendation app, I learned the process of
            UX Design. I was able to define the problem, ideate on ideas,
            research and present a prototype.
          </P>
        </div>
      </div>

      <form
        method="get"
        action="../DJ_Recommendation_Case_Study.pptx"
        tw="text-center mt-16"
      >
        <PresentationButton type="submit">View Presentation</PresentationButton>
      </form>
    </>
  )
}
