import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
  padding: 3rem;
  background: #f1c40f;

  i {
    margin: 1rem;
  }
  @media only screen and (max-width: 900px) {
    text-align: center;
  }
  h2 {
    text-align: center;
  }
`

const Skill = styled('div')`
  .nameBox {
    position: relative;
    display: inline-block;
  }

  .nameBox .name {
    visibility: hidden;
    width: 100px;
    background-color: white;
    color: #f1c40f;
    text-align: center;
    border-radius: 50px;
    padding: 0px 0;
    position: absolute;
    z-index: 1;
    bottom: 90%;
    left: 50%;
    margin-left: -50px;
  }

  .nameBox .name::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }

  .nameBox:hover .name {
    visibility: visible;
  }
`

export default function Skills() {
  return (
    <Container>
      <h2>Skills</h2>
      <h4>Programming Languages &amp; tools</h4>
      <Skill>
        <div className="nameBox">
          <i className="fab fa-html5 fa-3x"></i>
          <div className="name">HTML</div>
        </div>
        <div className="nameBox">
          <i className="fab fa-css3-alt fa-3x"></i>
          <div className="name">CSS</div>
        </div>
        <div className="nameBox">
          <i className="fab fa-js-square fa-3x"></i>
          <div className="name">Javascript</div>
        </div>
        <div className="nameBox">
          <i className="fab fa-node-js fa-3x"></i>
          <div className="name">Node.js</div>
        </div>
        <div className="nameBox">
          <i className="fab fa-react fa-3x"></i>
          <div className="name">React</div>
        </div>
        <div className="nameBox">
          <i className="fab fa-swift fa-3x"></i>
          <div className="name">Swift</div>
        </div>
        <div className="nameBox">
          <i className="fab fa-github fa-3x"></i>
          <div className="name">Git</div>
        </div>
        <div className="nameBox">
          <i className="fab fa-python fa-3x"></i>
          <div className="name">Python</div>
        </div>
      </Skill>
    </Container>
  )
}
