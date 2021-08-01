import React, { Component } from 'react'

export class Hero extends Component {
  render () {
    return (
      <section id='intro'>
        <div class='intro-overlay'></div>

        <div class='intro-content'>
          <div class='row'>
            <div class='col-twelve'>
              <h5>Hello, World.</h5>
              <h1>I'm Bjorn-Donald.</h1>

              <p class='intro-position'>
                <span>Front-end Developer</span>
                <span>Mobile Developer</span>
              </p>

              <a class='button stroke smoothscroll' href='#about' title='about'>
                More About Me
              </a>
            </div>
          </div>
        </div>

        <ul class='intro-social'>
          <li>
            <a href='https://github.com/bjorndonald'>
              <i class='fa fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/JD_Bassey'>
              <i class='fa fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/bjorn-donald-bassey-868094167/'>
              <i class='fa fa-linkedin'></i>
            </a>
          </li>
        </ul>
      </section>
    )
  }
}

export default Hero
