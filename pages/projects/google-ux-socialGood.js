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

export default function GoogleUxSocialGood() {
  return (
    <>
      <HeadLogo
        src={require('public/img/foodLogo.jpeg')}
        alt="Google UX Certificate App"
      />
      <h1 tw="text-center mt-4 mb-8 text-2xl text-green-500 font-bold">
        Easy Cooking - Google UX Certificate Social Good
      </h1>
      <div tw="grid grid-cols-2">
        <div>
          <SubHeader tw="text-center">Project Vision</SubHeader>
          <P>
            An app and responsive website that allows those who struggle with
            technology to easily find recipes.
          </P>
          <P>Project Duration: June 2021 - August 2021</P>
        </div>
        <div>
          <SubHeader tw="text-center">Problem</SubHeader>
          People who struggle with technology are often frustrated because they
          can't find new recipes like their more tech-savy friends.
        </div>
      </div>

      <div tw="grid grid-cols-2">
        <div tw="my-auto p-4 ">
          <Header>Understanding the user</Header>
          <SubHeader tw="text-lg">Pain Points</SubHeader>
          <Ul>
            <Li tw="pb-4">
              Tech - Our target user struggles with understanding the basics of
              using technology.
            </Li>
            <Li tw="pb-4">
              New - Our target user wants to find new recipes that they can make
              for their families.
            </Li>
            <Li tw="pb-4">
              Ease of Use - Platforms offering recipes are clunky and hard to
              use.
            </Li>
          </Ul>
        </div>
        <div>
          <img
            src={require('public/img/socialGoodPersona.jpg')}
            tw="w-full"
            alt="User Persona"
          />
        </div>
      </div>
      <Header>Starting the Design</Header>
      <div tw="grid grid-cols-2">
        <img
          src={require('public/img/socialGoodWireframe.png')}
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
            prototype. The primary user flow I tested was finding a recipe in
            order to use it in the usability study.
          </P>{' '}
          <P>
            View the prototype at{' '}
            <a
              href="https://xd.adobe.com/view/155c775e-ebd7-4340-94c4-827e3339e49d-400f/"
              tw="text-blue-500 hover:(cursor-pointer underline)"
            >
              Lo-fi Prototype
            </a>
          </P>
        </div>
        <img
          src={require('public/img/socialGoodPrototype.png')}
          tw="w-full"
          alt="Low-Fidelity Prototype"
        />
      </div>
      <Header>Refining the Design</Header>

      <div tw="grid grid-cols-2">
        <div tw="my-auto p-4">
          <SubHeader>Usability Study Findings</SubHeader>

          <Ul tw="pb-8">
            <Li>Save - Users want to save recipes that they like for later.</Li>
            <Li>
              Pictures - Users want more pictures to see what they are goig to
              make.
            </Li>
            <Li>Text-size - users who can't see as well want bigger text.</Li>
          </Ul>
          <SubHeader tw="text-lg">High-Fidelity prototype</SubHeader>

          <P>
            The final high-fidelity protype presented cleaner user flows and
            easier navigation. It also solved the pain points discussed earlier.
          </P>
          <P>
            View the prototype at{' '}
            <a
              href="https://xd.adobe.com/view/155c775e-ebd7-4340-94c4-827e3339e49d-400f/"
              tw="text-blue-500 hover:(cursor-pointer underline)"
            >
              Hi-Fi Prototype
            </a>
          </P>
        </div>
        <img
          src={require('public/img/socialGoodAppFinal.png')}
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
          <P>Allow people to save recipes.</P>
        </div>
        <div tw="text-center">
          <i
            className="fas fa-thumbs-up fa-lg"
            tw="text-7xl mb-4  text-blue-500"
          ></i>
          <P>Increase the amount of pictures of the recipes.</P>
        </div>
        <div tw="text-center">
          <i
            className="fas fa-bullseye fa-lg"
            tw="text-7xl mb-4 text-red-500"
          ></i>
          <P>
            Increase text size so that people can focus on what they need to.
          </P>
        </div>
      </div>
      <Header>Takeaways</Header>
      <div tw="grid grid-cols-2">
        <div>
          <SubHeader>Impact</SubHeader>
          <P>The app makes users happy and more able to wow their family.</P>
        </div>
        <div>
          <SubHeader>What I Learned</SubHeader>
          <P>
            I have learned that a website should support an app and that
            together they can create a user experience that is of value.
          </P>
        </div>
      </div>

      <form
        method="get"
        action="../socialGoodPresentation.pptx"
        tw="text-center mt-16"
      >
        <PresentationButton type="submit">View Presentation</PresentationButton>
      </form>
    </>
  )
}
