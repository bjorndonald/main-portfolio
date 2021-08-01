import React from 'react'

function Footer () {
  return (
    <footer>
      <div class='row'>
        <div class='col-six tab-full pull-right social'>
          <ul class='footer-social'>
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
        </div>

        <div class='col-eight tab-full'>
          <div class='copyright'>
            <span>© Copyright 2018 </span>
            <span>
              Design by <a href='http://www.styleshout.com/'>styleshout</a>
            </span>
            <span>Coded by Bjorn-Donald Bassey</span>
          </div>
        </div>

        <div id='go-top'>
          <a class='smoothscroll' title='Back to Top' href='#intro'>
            <i class='fa fa-long-arrow-up'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
