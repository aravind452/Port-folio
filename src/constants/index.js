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
    technologies: ["Javascript", "ReactJS", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Weather Application",
    image: project1,
    description:
      "Created a responsive weather website with an intuitive design, featuring accurate current conditions and forecasts via a reliable API, and location-based search for global weather updates, enhancing user experience.",
    technologies: ["HTML", "CSS", "ReactJS", "API"],
    link: "https://rain-radar.netlify.app/",
  },
  {
    title: "FoodZapp Application",
    image: project2,
    description:
      "Designed and implemented secure user authentication (Signup and SignIn), developed menu and cart management, and built a responsive, user-friendly interface optimized for desktop and mobile devices.",
    technologies: ["HTML", "CSS", "ReactJS", "ExpressJS", "MongoDB"],
    link: "https://github.com/aravind452/FoodZapp",
  },
  {
    title: "GitLocus",
    image: project3,
    description:
      "GitLocus is a website designed to help users discover repositories for popular programming languages. It offers an easy-to-navigate interface and detailed information to streamline finding and exploring relevant repositories.",
    technologies: ["HTML", "CSS", "ReactJS", "ExpressJS", "MongoDB"],
    link: "https://gitlocus.onrender.com/",
  },
  {
    title: "Employee Management System",
    image: project4,
    description:
      "The Employee Management System, implemented using Java and MySQL, allows users to add, view, update, and delete employees. It features employee filtering, search functionality, and average salary calculation, utilizing the Java Development Kit (JDK) and MySQL Database.",
    technologies: ["JAVA", "MySQL"],
    link: "https://github.com/aravind452/Employee-Management-System-Console-Based",
  },
  {
    title: "Pharmacy Management System",
    image: project5,
    description:
      "The Pharmacy Management System offers robust user authentication for login and signup, facilitating secure access. It empowers users to seamlessly add medicines to inventory, make purchases, and manage sales, purchases, and stocks. With integrated functionalities, it ensures scalability and reliability to meet the diverse operational needs of pharmacies effectively.",
    technologies: ["HTML", "CSS", "ReactJS"],
    link: "https://github.com/aravind452/Pharmacy",
  },
];

export const CONTACT = {
  phoneNo: "+91 9962121087 ",
  email: "aravindj2002@outlook.com",
};
