import React from 'react'

function Contact (props) {
  return (
    <section id='contact'>
      <div class='row section-intro'>
        <div class='col-twelve'>
          <h5>Contact</h5>
          <h1>I'd Love To Hear From You.</h1>

          <p class='lead'>
            {/* Lorem ipsum Do commodo in proident enim in dolor cupidatat
            adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
            ipsum Consectetur ut in in eu do. */}
          </p>
        </div>
      </div>

      <div class='row contact-form'>
        <div class='col-twelve'>
          {/* <form name='contactForm' id='contactForm'> */}
          <fieldset>
            <div class='form-field'>
              <input
                name='contactName'
                type='text'
                id='contactName'
                placeholder='Name'
                value={props.input.name}
                minlength='2'
                required=''
              />
            </div>
            <div class='form-field'>
              <input
                name='contactEmail'
                type='email'
                id='contactEmail'
                placeholder='Email'
                value={props.input.email}
                required=''
              />
            </div>
            <div class='form-field'>
              <input
                name='contactSubject'
                type='text'
                id='contactSubject'
                placeholder='Subject'
                value={props.input.subject}
              />
            </div>
            <div class='form-field'>
              <textarea
                name='contactMessage'
                id='contactMessage'
                placeholder='message'
                rows='10'
                cols='50'
                required=''
                value={props.input.message}
              ></textarea>
            </div>
            <div class='form-field'>
              <button class='submitform' onClick={props.sendEmail}>
                Submit
              </button>
              <div id='submit-loader'>
                <div class='text-loader'>Sending...</div>
                <div class='s-loader'>
                  <div class='bounce1'></div>
                  <div class='bounce2'></div>
                  <div class='bounce3'></div>
                </div>
              </div>
            </div>
          </fieldset>
          {/* </form> */}

          <div id='message-warning'></div>

          <div id='message-success'>
            <i class='fa fa-check'></i>Your message was sent, thank you!
            <br />
          </div>
        </div>
      </div>

      <div class='row contact-info'>
        <div class='col-four tab-full'>
          <div class='icon'>
            <i class='icon-pin'></i>
          </div>

          <h5>Where to find me</h5>

          <p>
            Calabar
            <br />
            Cross-River State
            <br />
            Nigeria.
          </p>
        </div>

        <div class='col-four tab-full collapse'>
          <div class='icon'>
            <i class='icon-mail'></i>
          </div>

          <h5>Email Me At</h5>

          <p>
            bjorndonaldb@gmail.com
            <br />
            bjorndonaldb@yahoo.com
          </p>
        </div>

        <div class='col-four tab-full'>
          <div class='icon'>
            <i class='icon-phone'></i>
          </div>

          <h5>Call Me At</h5>

          <p>
            Phone: (+234) 818 818 3562
            <br />
            Mobile: (+234) 905 293 8845
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
