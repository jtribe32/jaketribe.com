import React from 'react'
import App from 'next/app'
import tw from 'twin.macro'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'
import reset from 'styled-reset'
//

import { GA_TRACKING_ID } from 'lib/gtag'
import Theme, { ThemeContext } from 'utils/Theme'

import Head from 'next/Head'
import NavWrapper from 'components/NavWrapper'
import Container from 'components/Container'

const GlobalStyles = createGlobalStyle`
  ${reset};
  html, body, body, [data-reactroot] {
    ${tw`min-h-full w-full bg-white`}
   
  }
  html, body {
    ${tw` text-base leading-none font-normal`}
    font-family: "Overpass", "Helvetica", "Georgia", sans-serif;
    
  }
  * {
    ${tw`box-border`}
  }
  a {
     ${tw`no-underline`}
    color: inherit;
  }
  [data-name="mojs-shape"] {
     ${tw`fixed! pointer-events-none`}
    z-index: 99999999;
  }

  
`

function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={Theme}>
      <StyledThemeProvider theme={Theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head title="Jake Tribe">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        <link
          href="//fonts.googleapis.com/css?family=Overpass:200,300,400,400i,600,700,800"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <NavWrapper>
        <Container>
          <Component {...pageProps} />
        </Container>
      </NavWrapper>
    </ThemeProvider>
  )
}
