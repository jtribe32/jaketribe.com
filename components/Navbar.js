/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
//

const NavbarStyles = styled('header')`
${tw` top-0 w-full h-32 `}
  z-index: 1000;
  .inner {
    ${tw`mx-auto flex items-center justify-between relative h-full px-4`}
    max-width: ${props => props.theme.maxWidth}px;
    perspective: 1000px;
  }

  .logo {
    flex: 0 0 auto;
    width: 160px;
    margin: 8px 0 5px 10px;
    transition: all .3s ease;
  }

  .linkbar {
    ${tw`flex items-center`}
  
  }

  .links {
    ${tw`flex items-center`}
    transition: all .3s ease;
    backface-visibility: hidden;

  
  }

  .link {
    ${tw`text-gray-500 relative`}
    transition: all .1s ease-out;

    > div {
      > a {
        ${tw`block`}
        padding: 16px 10px;
        transition: all .2s ease-out;

       
      }
    }
  }

  .links > .link:hover > a {
    text-shadow: 0 2px 20px rgba(0,0,0,.7);
  }



  
  }
}
`

const links = [
  {
    name: 'Work',
    path: '/',
  },

  {
    name: 'About',
    path: '/about',
  },
]

export default function Navbar() {
  const LinkItem = (link, i) => (
    <div key={i} className="link">
      <div itemProp="name">
        <Link key={i} href={link.path}>
          <a itemProp="url">{link.name}</a>
        </Link>
      </div>
    </div>
  )

  return (
    <NavbarStyles>
      <div className="inner">
        <Link href="/">
          <a
            className="logo"
            itemScope
            itemType="http://schema.org/Organization"
            itemProp="url"
          >
            <span>
              <img
                src={require('public/img/Logo.png')}
                alt="logo"
                tw="w-full"
              />
            </span>
          </a>
        </Link>
        <div className="menuToggle"></div>
        <nav className="linkbar">
          <div
            className="links"
            itemScope
            itemType="http://www.schema.org/SiteNavigationElement"
          >
            {links.map(LinkItem)}
          </div>
        </nav>
      </div>
    </NavbarStyles>
  )
}
