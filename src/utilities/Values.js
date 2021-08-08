import afrikan from './../images/afrikan.png'
import covidafrik from './../images/ampleefi.png'
import portfolio from './../images/portfolio.PNG'
import procurement from './../images/procurement.jpeg'
import funds from './../images/funds.jpeg'
export const author_name = 'Bjorn-Donald Bassey'
export const author_dob = 'April 24, 1997'
export const author_email = 'bjorndonaldb@gmail.com'

export const portfolio_items = [
  {
    id: 'modal-01',
    title: 'Bjorn-Donald Bassey',
    image: <img src={portfolio} alt='' />,
    types: ['Web Development', 'ReactJS'],
    description: `I built a personal portfolio site to showcase my skills, resume and help clients get in contact with me.
    https://bjorn-portfolio.herokuapp.com/home.`,
    link: 'https://bjorn-portfolio.herokuapp.com/'
  },
  {
    id: 'modal-02',
    title: 'ThisisAfrikan',
    image: <img src={afrikan} alt='' />,
    types: ['Web Development', 'Express', 'ReactJS'],
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
    types: ['Web Development', 'ReactJS'],
    description: `I was in charge of the front end for the website. I made use of HTML, SCSS and React.js.`,
    link: 'https://testampleefi.herokuapp.com/'
  },
  {
    id: 'modal-03',
    title: 'Procurement App',
    image: <img src={procurement} alt='' />,
    types: ['Mobile Development', 'React Native'],
    description: `This is a design concept created with React Native. Designs were procured from dribbble.com.`,
    link: 'https://github.com/bjorndonald/procurement'
  },
  {
    id: 'modal-04',
    title: 'Funds',
    image: <img src={funds} alt='' />,
    types: ['Mobile Development', 'React Native'],
    description: `This is fintech app that facilitated payment with the use of qr codes.`,
    link: 'https://github.com/bjorndonald/funds'
  },
  {
    id: 'modal-05',
    title: 'Funds',
    image: <img src={funds} alt='' />,
    types: ['Web Development', 'Django'],
    description: `This is the official website for the University of Calabar Teaching Hospital. This was created with Django for the backend and HTNL/CSS for the frontend. I also used jQuery to add features to the site.`,
    link: 'https://www.ucthcalabar.gov.ng'
  }
]
