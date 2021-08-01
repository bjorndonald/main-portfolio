import afrikan from './../images/afrikan.png'
import covidafrik from './../images/ampleefi.png'
import portfolio from './../images/portfolio.PNG'
export const author_name = 'Bjorn-Donald Bassey'
export const author_dob = 'April 24, 1997'
export const author_email = 'bjorndonaldb@gmail.com'

export const portfolio_items = [
  {
    id: 'modal-01',
    title: 'Bjorn-Donald Bassey',
    image: <img src={portfolio} alt='' />,
    types: ['Web Development'],
    description: `I built a personal portfolio site to showcase my skills, resume and help clients get in contact with me.
    https://bjorn-portfolio.herokuapp.com/home.`,
    link: 'https://bjorn-portfolio.herokuapp.com/'
  },
  {
    id: 'modal-02',
    title: 'ThisisAfrikan',
    image: <img src={afrikan} alt='' />,
    types: ['Web Development'],
    description: `Thisisafrikan is a luxury shoe brand based in Toronto, targeting African-American customers in Canada/North America. The startup aims to upset conventional narratives to bring their customers a level of handcrafted luxury previously reserved for locations like New York, London, and Milan.
    I was the key web developer for this project. Working on both the frontend and backend, I programmed the store's backend with Express.js and Node.js. The frontend was built from Figma screens developed by the teams in house UI/UX developer and coded in HTML and SCSS.
    I integrated the stripe API and an email delivery service. I used the Shopify API to retrieve the products and the shopping cart, and Greensock.js to create the animations used in the website.
    One of my key achievements was helping build a psychometric system that delivers a unique, personalised shopping experience for each user based on their personality determined from a short, intuitive randomized test.
    https://thisisafrikan.com/`,
    link: 'https://www.thisisafrikan.com'
  },
  {
    id: 'modal-03',
    title: 'Ampleefi',
    image: <img src={covidafrik} alt='' />,
    types: ['Web Development'],
    description: `I was in charge of the front end for the website. I made use of HTML, SCSS and React.js.`,
    link: 'https://testampleefi.herokuapp.com/'
  }
]
