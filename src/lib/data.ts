import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink, faPlay } from "@fortawesome/free-solid-svg-icons"

interface PortfolioProp {
  image: {
    type: 'icon' | 'image'
    link: string | IconProp
  },
  stack: string[],
  title: string
  description: string
  links: {
    icon: IconProp,
    url: string
  }[]
}
export const portfolioList: PortfolioProp[] = [
  {
    image: {
      type: 'image',
      link: 'https://cloutra.com/icon.png'
    },
    stack: ['React', 'Bootstrap', 'Redux', 'Nodejs'],
    description: "Cloutra's Labs-as-a-Service platform provides hands-on labs in Cloud Computing, Cybersecurity, Data Science, Software Development,  and more.",
    title: 'Cloutra',
    links: [{
      icon: faLink,
      url: 'https://cloutra.com'
    }]
  },
  {
    image: {
      type: 'icon',
      link: faPlay
    },
    stack: ['Nextjs', 'Nodejs', 'Flutter'],
    description: "Fast and Reliable delivery service. Bridging the Gap Between Businesses and Logistics Services",
    title: 'Ditosell',
    links: [{
      icon: faLink,
      url: 'https://ditosell.com'
    }]
  },
  {
    image: {
      type: 'image',
      link: 'https://www.imointerns.app/_next/image?url=%2Ffavicon-dark.png&w=256&q=75'
    },
    stack: ['Nextjs', 'Graphql', 'Nodejs', 'Nextjs', 'TailwindCSS'],
    description: "Access to a large network of remote interns from Tech, Business Admin, Sales & Marketing etc.",
    title: 'Imointerns',
    links: [{
      icon: faLink,
      url: 'https://www.imointerns.app'
    }]
  },
  {
    image: {
      type: 'image',
      link: 'https://my.guideapp.co/assets/logo-small.ff009cfe.png'
    },
    stack: ['React', 'Redux', 'Bootstrap'],
    description: "Level up with creators who coach you on in-demand production skills with fun short video courses",
    title: 'Guideapp',
    links: [{
      icon: faLink,
      url: 'https://www.guideapp.co'
    }]
  },
]

export const openSource: PortfolioProp[] = [
  {
    image: {
      type: 'icon',
      link: faGithub
    },
    stack: ['Typescript'],
    description: "Prisma ORM for 10-60GB high storage IndexDB on the browser",
    title: 'Prisma-IndexDB',
    links: [{
      icon: faGithub,
      url: 'https://github.com/johnsonfash/indexDB-prisma'
    }]
  },
  {
    image: {
      type: 'icon',
      link: faGithub
    },
    stack: ['PHP'],
    description: "A light weight (< 1mb), expressive, easy to configure, and less ambiguous framework for PHP",
    title: 'Simple PHP',
    links: [{
      icon: faGithub,
      url: 'https://github.com/johnsonfash/simple-php-framework'
    }]
  }
]

export const members = [
  {
    name: 'Colins David',
    role: 'Ui Designer',
    image: '/ope.png'
  },
  {
    name: 'Olamide Joshua',
    role: 'Backend Developer',
    image: '/mem-2.png'
  },
  {
    name: 'Timileyin Babatunde',
    role: 'Frontend Developer',
    image: '/mem-1.png'
  }
]