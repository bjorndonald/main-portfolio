import React from 'react'
import { portfolio_items } from '../../utilities/Values'
import liberty from './../../images/afrikan.png'

const Item = props => {
  return (
    <div class='bgrid folio-item'>
      <div class='item-wrap'>
        {/* <img src={liberty} alt='Liberty' /> */}
        {props.item.image}
        <a
          href={'#' + props.item.id}
          onClick={props.portfolioPopup}
          class='overlay'
        >
          <div class='folio-item-table'>
            <div class='folio-item-cell'>
              <h3 class='folio-title'>{props.item.title}</h3>
              <span class='folio-types'>Web Development</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

const Modal = props => {
  return (
    <div id={props.item.id} class='popup-modal slider mfp-hide'>
      <div class='media'>
        {/* <img src={liberty} alt='' /> */}
        {props.item.image}
      </div>

      <div class='description-box'>
        <h4>{props.item.title}</h4>
        <p>{props.item.description}</p>

        <div class='categories'>Web Development</div>
      </div>

      <div class='link-box'>
        <a href={props.item.link}>Link</a>
        <a href='#' class='popup-modal-dismiss'>
          Close
        </a>
      </div>
    </div>
  )
}

function Portfolio (props) {
  return (
    <section id='portfolio'>
      <div class='row section-intro'>
        <div class='col-twelve'>
          <h5>Portfolio</h5>
          <h1>Check Out Some of My Works.</h1>

          <p class='lead'>
            Here are some of the notable projects both personal and professional
            which I have completed durring my career. There will be more
            additions soon.
          </p>
        </div>
      </div>

      <div class='row portfolio-content'>
        <div class='col-twelve'>
          <div id='folio-wrapper' class='block-1-2 block-mob-full stack'>
            <Item item={portfolio_items[0]} {...props} />
            <Item item={portfolio_items[1]} {...props} />
            <Item item={portfolio_items[2]} {...props} />

            <Modal item={portfolio_items[0]} {...props} />
            <Modal item={portfolio_items[1]} {...props} />
            <Modal item={portfolio_items[2]} {...props} />
          </div>
          {/* Modal ends here */}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
