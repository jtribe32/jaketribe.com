import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//

const belowMobile = `@media(max-width: ${700}px)`

const FooterStyles = styled('div')`
  ${tw`relative p-4 z-1`}

  ${belowMobile} {
    .container {
      ${tw`block`}
    }
  }

  .container {
    ${tw`px-4 flex mr-16 items-baseline`}
  }

  .copyright {
    ${tw`inline-block text-right text-xs self-center`}
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="copyright">
          &copy; {`20${new Date().getYear() - 100}`} Jake Tribe
        </div>
      </div>
    </FooterStyles>
  )
}
