import React from 'react'
import styled from 'styled-components'

const ProfilePic = styled('img')`
  width: 15rem;
  height: auto;
  border-radius: 8rem;
  border: 0.25rem solid #3498db;
  margin-bottom: 1rem;
`

const H1 = styled('h1')`
  font-size: 3rem;
  color: black;
`

const Icons = styled('div')`
  padding-bottom: 1rem;

  a {
    margin: 1rem;
    color: black;
  }
  .fa-github:hover {
    color: #333;
  }
  .fa-linkedin-in:hover {
    color: #0072b1;
  }
  .fa-instagram:hover {
    color: transparent;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    background: -webkit-radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    background-clip: text;
    -webkit-background-clip: text;
  }
  .fa-facebook-square:hover {
    color: #3b5998;
  }
`

const Contact = styled('button')`
  width: 8rem;
  height: 3rem;
  background: #3498db;
  border-radius: 3rem;
  border: none;
  transition: all 0.2s ease-in-out;

  a {
    color: white;
  }

  &:hover {
    transform: scale(1.05);
  }
`

export default function Card() {
  return (
    <div>
      <ProfilePic src="headshot.jpg" />
      <H1>Jake Tribe</H1>
      <Icons>
        <a
          href="https://github.com/jtribe32"
          className="fab fa-github fa-2x "
          target="_blank "
        ></a>

        <a
          href="https://www.linkedin.com/in/jaketribe1997/"
          className="fab fa-linkedin-in fa-2x "
          target="_blank"
        ></a>

        <a
          href="https://www.instagram.com/jtribe32/"
          className="fab fa-instagram fa-2x "
          target="_blank"
        ></a>
        <a
          href="https://www.facebook.com/jacob.tribe.9"
          className="fab fa-facebook-square fa-2x"
          target="_blank"
        ></a>
      </Icons>
      <Contact>
        <a href="mailto:jacobtribe@me.com?subject=Website%20Inquiry">
          Contact Me
        </a>
      </Contact>
    </div>
  )
}
