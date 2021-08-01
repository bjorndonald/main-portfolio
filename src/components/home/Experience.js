import React from 'react'

function Experience () {
  return (
    <section id='resume' class='grey-section'>
      <div class='row section-intro'>
        <div class='col-twelve'>
          <h5>Resume</h5>
          <h1>More of my credentials.</h1>

          <p class='lead'>
            Below is a list of my work experience and educational credentials.
          </p>
        </div>
      </div>

      <div class='row resume-timeline'>
        <div class='col-twelve resume-header'>
          <h2>Work Experience</h2>
        </div>
        <div class='col-twelve'>
          <div class='timeline-wrap'>
            <div class='timeline-block'>
              <div class='timeline-ico'>
                <i class='fa fa-briefcase'></i>
              </div>

              <div class='timeline-header'>
                <h3>Full Stack Developer</h3>
                <p>August 2020 - Present</p>
              </div>

              <div class='timeline-content'>
                <h4>University of Calabar Teaching Hospital</h4>
                <p>
                  I am in charge of building and maintaining the hospital's
                  website. The website was needed to provide information on all
                  doctors and services provided at the hospital. The website was
                  created with Django, the python framework, as the backend
                  while the frontend was created with HTML and CSS with
                  bootstrap modules.
                </p>
              </div>
            </div>

            <div class='timeline-block'>
              <div class='timeline-ico'>
                <i class='fa fa-briefcase'></i>
              </div>

              <div class='timeline-header'>
                <h3>Full Stack Developer</h3>
                <p>November 2020 - July 2021</p>
              </div>

              <div class='timeline-content'>
                <h4>This is Afrikan</h4>
                <p>
                  Thisisafrikan is a luxury shoe brand based in Toronto,
                  targeting African-American customers in Canada/North America.
                  I worked with this brand as full stack developer, building
                  numerous iterations of their launched site (thisisafrikan.com)
                  I joined the team for various strategic planning sessions
                  where I gave insight and was available to consult on
                  functional elements, the feasibility of some proposed
                  features, and other advisory help. I was also responsible for
                  the onboarding of junior developers and played a supervisory
                  role to ensure the successful deployment of planned features.
                </p>
              </div>
            </div>

            <div class='timeline-block'>
              <div class='timeline-ico'>
                <i class='fa fa-briefcase'></i>
              </div>

              <div class='timeline-header'>
                <h3>Intern Developer</h3>
                <p>March 2017 - September 2017</p>
              </div>

              <div class='timeline-content'>
                <h4>Crackle Nigeria Limited</h4>
                <p>
                  I aided the website development team by creating implementing
                  widgets for their web products. The company used ASP.NET MVC
                  for most of their projects but I mostly worked with HTML, CSS
                  & JQuery to created
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='row resume-timeline'>
        <div class='col-twelve resume-header'>
          <h2>Education</h2>
        </div>

        <div class='col-twelve'>
          <div class='timeline-wrap'>
            <div class='timeline-block'>
              <div class='timeline-ico'>
                <i class='fa fa-graduation-cap'></i>
              </div>

              <div class='timeline-header'>
                <h3>Bachelor Degree</h3>
                <p>September 2013 - October 2018</p>
              </div>

              <div class='timeline-content'>
                <h4>Afe Babalola University</h4>
                <p>
                  I completed my bachelor's degree in Computer Engineering
                  graduating with a Second Class Upper Honours. During my time
                  in university, I applied myself in separate personal projects
                  to help hone my skills which enabled me to gain an internship
                  position in Crackle Nigeria Limited. I was also an active
                  member of the school's robotics club.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
