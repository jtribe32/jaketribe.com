import React from 'react'
import Head from 'next/head'
import tw from 'twin.macro'
import styled from 'styled-components'
import { H1, P } from 'components/Html'

const Left = styled('div')`
  ${tw`text-center`}
`
const Right = styled('div')`
  ${tw`pr-8`}
`
const Text = styled('div')`
  ${tw`pt-1/5`}
`
const ResumeButton = styled('button')`
  ${tw` mb-4 bg-blue-400 hover:(bg-blue-500) font-semibold text-white py-2 px-4 border-transparent rounded`}
`
const SocialLink = styled('a')`
  ${tw`inline-block mb-4 bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white py-2 px-3 border border-blue-400 hover:border-transparent border-solid rounded`}
`

export default function About() {
  return (
    <div>
      <Head title="Jake Tribe | About Me" />
      <div tw="grid grid-cols-1 md:(grid-cols-2)">
        <Left>
          <img
            src={require('public/img/profile.JPG')}
            alt="Jake Tribe Profile"
            tw="w-2/3"
          />
        </Left>
        <Right>
          <Text>
            <H1>Hey, I'm Jake.</H1>
            <P>
              I am currently a front-end developer at Nozzle.io working on their
              website and web application. I am also in my final year studying
              Information Systems at Brigham Young University and will graduate
              in December of 2021.
            </P>
            <P>
              My interests include Technology, Basketball and Golf. Dependable
              and hardworking, I can pick up new skills and methods of working
              with ease while applying previously learnt skills efficiently.
              Skills and specialties include SQL, JavaScript, React.js, Swift,
              VBA, Tableau, ASP.NET, Python, Analytical Skills, Reasoning Skills
              and Communication Skills
            </P>
            <form method="get" action="Jake_Tribe_Resume.pdf">
              <ResumeButton type="submit">Resume</ResumeButton>
            </form>
            <div tw="space-x-2">
              <SocialLink href="mailto:jacobtribe@me.com?subject=Website%20Inquiry">
                <i className="far fa-envelope fa-lg"></i>
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jaketribe1997/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in fa-lg"></i>
              </SocialLink>
              <SocialLink href="https://github.com/jtribe32" target="_blank">
                <i className="fab fa-github fa-lg"></i>
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/jtribe32/"
                target="_blank"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </SocialLink>
            </div>
          </Text>
        </Right>
      </div>
    </div>
  )
}
