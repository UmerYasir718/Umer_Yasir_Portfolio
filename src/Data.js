import bootStrap from "./assets/tech/bootstrap.png";
import css from "./assets/tech/css.png";
import expressJs from "./assets/tech/expressjs.png";
import html from "./assets/tech/html.png";
import js from "./assets/tech/js.png";
import mongoDB from "./assets/tech/mongodb.png";
import nodeJs from "./assets/tech/nodejs.png";
import reactJs from "./assets/tech/reactjs.png"; // Fixed typo
import redux from "./assets/tech/redux.png";
import tailwind from "./assets/tech/tailwind.png";
import figma from "./assets/tools/figma.png";
import git from "./assets/tools/git.png";
import github from "./assets/tools/github.png";
import insomnia from "./assets/tools/insomnia.png";
import intellij from "./assets/tools/intellij.png";
import npm from "./assets/tools/npm.png";
import postman from "./assets/tools/postman.png";
import vscode from "./assets/tools/vscode.png";

const techData = [
  { name: "HTML", id: 1, image: html },
  { name: "CSS", id: 2, image: css },
  { name: "JavaScript", id: 3, image: js },
  { name: "BootStrap", id: 4, image: bootStrap },
  { name: "ReactJs", id: 5, image: reactJs },
  { name: "Redux", id: 6, image: redux },
  { name: "NodeJs", id: 7, image: nodeJs },
  { name: "ExpressJS", id: 8, image: expressJs },
  { name: "MongoDB", id: 9, image: mongoDB },
  { name: "Tailwind", id: 10, image: tailwind },
  // { name: "SpringBoot", id: 11, image: springBoot },
];

const toolsData = [
  { name: "VSCode", id: 8, image: vscode },
  { name: "IntelliJ", id: 5, image: intellij },
  { name: "Git", id: 2, image: git },
  { name: "GitHub", id: 3, image: github },
  { name: "Insomnia", id: 4, image: insomnia },
  { name: "Postman", id: 7, image: postman },
  { name: "npm", id: 6, image: npm },
  { name: "Figma", id: 1, image: figma },
];
const projectData = [
  {
    id: 1,
    name: "AI Blog App",
    tech: "React ,NodeJs",
    description:
      "AI Blog App ON MERN Create blog based on topic and keywords ,secure data of users,mongoose to store data.In addition the Bootstrap,openai,auth0 and stripe are include in it.",
    codeLink: "https://code.visualstudio.com/",
    viewLink: "https://code.visualstudio.com/",
    image: vscode,
  },
  {
    id: 2,
    name: "IntelliJ",
    tech: "IDE",
    description: "A powerful IDE for Java and other languages.",
    codeLink: "https://www.jetbrains.com/idea/",
    viewLink: "https://www.jetbrains.com/idea/",
    image: intellij,
  },
  {
    id: 3,
    name: "Git",
    tech: "Version Control",
    description: "A distributed version control system.",
    codeLink: "https://git-scm.com/",
    viewLink: "https://git-scm.com/",
    image: git,
  },
  {
    id: 4,
    name: "GitHub",
    tech: "Repository Hosting",
    description: "A platform for version control and collaboration.",
    codeLink: "https://github.com/",
    viewLink: "https://github.com/",
    image: github,
  },
  {
    id: 5,
    name: "Insomnia",
    tech: "API Client",
    description: "A powerful REST API client.",
    codeLink: "https://insomnia.rest/",
    viewLink: "https://insomnia.rest/",
    image: insomnia,
  },
  {
    id: 6,
    name: "Postman",
    tech: "API Testing",
    description: "A platform for API development.",
    codeLink: "https://www.postman.com/",
    viewLink: "https://www.postman.com/",
    image: postman,
  },
  {
    id: 7,
    name: "npm",
    tech: "Package Manager",
    description: "A package manager for JavaScript.",
    codeLink: "https://www.npmjs.com/",
    viewLink: "https://www.npmjs.com/",
    image: npm,
  },
  {
    id: 8,
    name: "Figma",
    tech: "Design Tool",
    description: "A collaborative interface design tool.",
    codeLink: "https://www.figma.com/",
    viewLink: "https://www.figma.com/",
    image: figma,
  },
];

export { projectData, techData, toolsData };
