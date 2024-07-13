import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `As a beginner in the field of Information Technology, I strive to
          associate myself with an organization where I can utilize my skills in
          the best possible manner, which further gives me an opportunity to
          grow in my career journey while contributing to the development of the
          organization.
`;

export const ABOUT_TEXT = `As a fresher in the tech industry, I am passionate about both
                front-end and back-end development. Proficient in creating
                dynamic and responsive web applications using a combination of
                front-end technologies like ReactJS and back-end frameworks like
                ExpressJS, ensuring seamless user experiences from start to
                finish.
`;

export const EXPERIENCES = [
  {
    year: "Nov 2022 - Jan 2023",
    role: "Full Stack Engineer",
    company: "Cognizant, Chennai (Remote)",
    description: `Developed the Pharmacy Management System application with a focus on ReactJS.
      Regularly analysed and maintained web application components, identifying areas of improvements and implementing fixes.,
      Contributed innovative ideas and feedback during team meetings, leading to improved design and development processes.,
      Utilized tools such as ReactJS, HTML, and CSS to deliver high-quality software.`,
    technologies: ["Javascript", "React.js", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Weather Application",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "ReactJS", "API"],
    link: "https://rain-radar.netlify.app/",
  },
  {
    title: "FoodZapp Application",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "ReactJS", "ExpressJS", "MongoDB"],
    link: "https://github.com/aravind452/FoodZapp",
  },
  {
    title: "GitLocus",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "ReactJS", "ExpressJS", "MongoDB"],
    link: "https://gitlocus.onrender.com/",
  },
  {
    title: "Employee Management System",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["JAVA"],
    link: "https://github.com/aravind452/Employee-Management-System-Console-Based",
  },
  {
    title: "Pharmacy Management System",
    image: project5,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "ReactJS"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9962121087 ",
  email: "aravindj2002@outlook.com",
};
