import React, { Component } from 'react'
import About from '../../components/home/About'
import Experience from '../../components/home/Experience'
import Header from '../../components/home/Header'
import Hero from '../../components/home/Hero'
import Portfolio from '../../components/home/Portfolio'
import Contact from '../../components/home/Contact'
// import { MaginificPopup } from 'react-magnific-popup'
import axios from 'axios'
import $ from 'jquery'
import 'magnific-popup'
import './home.scss'
import Services from '../../components/home/Services'
import Footer from '../../components/home/Footer'

export class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      input: {}
    }
  }

  menuToggle = e => {
    var toggleButton = $('.menu-toggle'),
      nav = $('.main-navigation')

    e.preventDefault()
    toggleButton.toggleClass('is-clicked')
    nav.slideToggle()
  }
  componentDidMount () {
    $('.item-wrap a').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'
    })
    // $('.owl-carousel').owlCarousel()

    $('.smoothscroll').on('click', function (e) {
      e.preventDefault()

      var target = this.hash,
        $target = $(target)

      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top
          },
          800,
          'swing',
          function () {
            window.location.hash = target
          }
        )
    })

    $('#loader').fadeOut('slow', function () {
      // will fade out the whole DIV that covers the website.
      $('#preloader')
        .delay(300)
        .fadeOut('slow')
    })
  }

  portfolioPopup = () => {
    // MaginificPopup.trigger('.item-wrap a', 'open')

    $('.mfp-hide').toggle()
  }

  onInputChange = (val, type) => {
    var input = this.state.input
    input[type] = val
    this.setState({
      input
    })
  }

  sendEmail = async () => {
    const input = this.state.input
    const response = await axios.post(
      'https://headerng.herokuapp.com/https://bjorn-stripe.herokuapp.com/portfolio_email/',
      { input }
    )
    const { status, error } = response.data
    console.log(status)
  }

  render () {
    return (
      <div id='home'>
        <div id='preloader'>
          <div id='loader'></div>
        </div>
        <Header menuToggle={this.menuToggle} />
        <Hero />
        <About />
        <Experience />
        <Portfolio portfolioPopup={this.portfolioPopup} />
        {/* <Services /> */}
        <Contact
          input={this.state.input}
          sendEmail={this.sendEmail}
          onInputChange={this.onInputChange}
        />
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({})

export default Home
