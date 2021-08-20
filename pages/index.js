import React from 'react'
import 'twin.macro'
import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'

const Card = styled('div')`
  position: relative;

  img {
    opacity: 1;
    display: block;
    width: 100%;
    height: 300px;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  :hover {
    cursor: pointer;

    img {
      opacity: 0.4;
      webkit-filter: blur(4px); /* Chrome, Safari, Opera */
      filter: blur(4px);
    }
    .middle {
      opacity: 1;
    }
  }
`

const Text = styled('div')`
  color: black;
  font-size: 16px;
  padding: 16px 32px;
`

export default function Work() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Head
        title="Jake Tribe"
        description="Personal portfolio for Jake Tribe"
      />
      <main>
        <div tw="grid grid-cols-1 md:(grid-cols-2) lg:(grid-cols-3)">
          <Link href="./projects/nozzle-website">
            <Card>
              <img
                src={require('public/img/nozzleWebsite.png')}
                alt="Nozzle Website"
              />
              <div className="middle">
                <Text tw="text-xl">Nozzle.io Website</Text>
              </div>
            </Card>
          </Link>
          <Link href="./projects/nozzle-app">
            <Card>
              <img src={require('public/img/nozzleApp.png')} alt="Nozzle App" />
              <div className="middle">
                <Text tw="text-xl">Nozzle.io App</Text>
              </div>
            </Card>
          </Link>

          <Card>
            <Link href="./projects/rpChiro-website">
              <img
                src={require('public/img/rpChiro.png')}
                alt="rpChiro Website"
              />
            </Link>
            <Link href="./projects/rpChiro-website">
              <div className="middle">
                <Text tw="text-xl">
                  The Naccarato Leadership Center Website
                </Text>
              </div>
            </Link>
          </Card>

          <Link href="./projects/google-ux-app">
            <Card>
              <img
                src={require('public/img/googleHiFi.png')}
                alt="Google UX Certificate App"
              />
              <div className="middle">
                <Text tw="text-xl">Google UX Certificate App</Text>
              </div>
            </Card>
          </Link>
          <Link href="./projects/google-ux-website">
            <Card>
              <img
                src={require('public/img/googleWebsiteFinal.png')}
                alt="Google UX Certificate Website"
              />
              <div className="middle">
                <Text tw="text-xl">Google UX Certificate Website</Text>
              </div>
            </Card>
          </Link>
          <Link href="./projects/google-ux-socialGood">
            <Card>
              <img
                src={require('public/img/socialGoodFinal.png')}
                alt="Google UX Certificate Social Good"
              />
              <div className="middle">
                <Text tw="text-xl">Google UX Certificate Social Good</Text>
              </div>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}
