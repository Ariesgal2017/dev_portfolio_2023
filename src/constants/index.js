import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Lead Automation Engineer",
    icon: web,
  },
  {
    title: "Lab Support Technician",
    icon: mobile,
  },
  {
    title: "Semiconductor Product Validation Engineer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Lead Automation Engineer",
    company_name: "Intel Corp.",
    iconBg: "#383E56",
    date: "June 2022 - May 2023",
    points: [
      "As a Test Automation Engineer at Company Name, I played a pivotal role in ensuring the quality and reliability of our software products by designing, developing, and maintaining automated testing solutions. My work contributed to streamlining the testing process, reducing manual testing efforts, and enhancing the overall software quality and eliminated possibility for human error."
    ]
     
  },
  {
    title: "Lab Support Technician",
    company_name: "Intel Corp.",
    iconBg: "#E6DEDD",
    date: "Feb 2021 - June 2022",
    points: [
      "Provided essential technical support and assistance to the laboratory team, contributing to the smooth operation of research and testing activities. With a strong focus on precision, safety, and efficiency, I played a crucial role in maintaining laboratory equipment, managing inventory, and ensuring compliance with safety protocols. Here is an overview of my key responsibilities and achievements:"
    ]
  },
  {
    title: "Semiconductor Product Validation Engineer",
    company_name: "Intel Corp.",
    iconBg: "#383E56",
    date: "May 2020 - Feb 2021",
    points: [
      "Played a vital role in ensuring the reliability and performance of semiconductor products through rigorous testing and validation processes. This position required a deep understanding of semiconductor technology and the ability to execute complex validation procedures to meet industry standards and customer expectations."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Databyte PC Solutions, LLC",
    iconBg: "#E6DEDD",
    date: "Nov 2015 - Jan 2020",
    points: [
      "Played a crucial role in designing, developing, and maintaining innovative software solutions. My responsibilities encompassed the entire software development lifecycle, from initial concept to deployment and ongoing support. During my tenure, I consistently demonstrated strong problem-solving skills, a dedication to writing clean and efficient code, and a commitment to delivering high-quality software that met or exceeded client expectations."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
