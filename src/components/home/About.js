import React from 'react'
import { author_dob, author_email, author_name } from '../../utilities/Values'
import profile_pic from './../../images/profile-pic.png'

function About () {
  return (
    <section id='about'>
      <div class='row section-intro'>
        <div class='col-twelve'>
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>

          <div class='intro-info'>
            <img src={profile_pic} alt='Profile Picture' />

            <p class='lead'>
              I am a web and mobile developer have experience creating all sorts
              of sites and apps; rebuilding, maintaining, or improving the
              frontend and backend of portfolio sites, e-commerce stores,
              informational sites, platforms for nonprofits, institutions,
              fintechs, and more.
            </p>
          </div>
        </div>
      </div>

      <div class='row about-content'>
        <div class='col-six tab-full'>
          <h3>Profile</h3>
          <p>
            Here is a some personal information about me. If further information
            is required, that can be provided on request by email. Due to
            security concerns, I neglected to include my full address.
          </p>

          <ul class='info-list'>
            <li>
              <strong>Fullname:</strong>
              <span>{author_name}</span>
            </li>
            <li>
              <strong>Birth Date:</strong>
              <span>{author_dob}</span>
            </li>
            <li>
              <strong>Job:</strong>
              <span>Freelancer, Full Stack Developer</span>
            </li>

            <li>
              <strong>Email:</strong>
              <span>{author_email}</span>
            </li>
          </ul>
        </div>

        <div class='col-six tab-full'>
          <h3>Skills</h3>
          <p>
            I'm familiar with collaborating with teams worldwide bringing my
            skills and knowledge to help develop ideas. Here are the languages
            and frameworks I am most familiar with:
          </p>

          <div className='skill-list'>
            <p>
              <strong>FRONTEND SKILLS:</strong>
            </p>

            <ul class='skills'>
              <li>
                <h6>HTML5</h6>
              </li>
              <li>
                <h6>CSS3</h6>
              </li>
              <li>
                <h6>JQuery</h6>
              </li>
              <li>
                <h6>PHP</h6>
              </li>
              <li>
                <h6>Wordpress</h6>
              </li>
            </ul>

            <p>
              <strong>BACKEND SKILLS:</strong>
            </p>

            <ul class='skills'>
              <li>
                <h6>DJANGO</h6>
              </li>
              <li>
                <h6>NODE</h6>
              </li>
              <li>
                <h6>PHP</h6>
              </li>
              <li>
                <h6>MYSQL</h6>
              </li>
            </ul>

            <p>
              <strong>MOBILE DEVELOPMENT SKILLS:</strong>
            </p>

            <ul class='skills'>
              <li>
                <h6>REACT NATIVE</h6>
              </li>
              <li>
                <h6>ANDROID</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class='row button-section'>
        <div class='col-twelve'>
          <a href='#contact' title='Hire Me' class='button stroke smoothscroll'>
            Hire Me
          </a>
          <a href='#' title='Download CV' class='button button-primary'>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
