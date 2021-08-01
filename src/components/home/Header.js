import React from 'react'

function Header (props) {
  return (
    <header>
      <div class='row'>
        <div class='top-bar'>
          <a class='menu-toggle' onClick={props.menuToggle} href='#'>
            <span>Menu</span>
          </a>

          <div class='logo'>
            <a>BJORN</a>
          </div>

          <nav id='main-nav-wrap'>
            <ul class='main-navigation'>
              <li class='current'>
                <a class='smoothscroll' href='#home'>
                  Home
                </a>
              </li>
              <li>
                <a class='smoothscroll' href='#about'>
                  About
                </a>
              </li>
              <li>
                <a class='smoothscroll' href='#resume'>
                  Resume
                </a>
              </li>
              <li>
                <a class='smoothscroll' href='#portfolio'>
                  Portfolio
                </a>
              </li>
              {/* <li>
                <a class='smoothscroll' href=''>
                  Services
                </a>
              </li> */}
              <li>
                <a class='smoothscroll' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
