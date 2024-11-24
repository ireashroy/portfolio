const projects = [
  {
    name: "Banking ChatBot for Better Customer Service",
    description: "Developed a chatbot to enhance customer service by automating offline banking services, helping customers instantly access information on loans, credit cards, and more.",
    duration: "10/09/2024 – Current",
    category: "Software Development"
  },
  {
    name: "Multitask Mobile Application Development",
    description: "Led a team to develop a mobile app with multiple functionalities like a calculator, compass, calendar, weather updates, and alarm. Published on Google Play Store.",
    duration: "10/09/2023 – 30/12/2023",
    category: "Mobile Development"
  },
  {
    name: "Canteen Recommendation Application",
    description: "Developed a software requirements specification for a canteen recommendation app that optimizes ordering during peak hours, with features like real-time delivery tracking.",
    duration: "10/09/2023 – 20/12/2023",
    category: "Software Engineering"
  },
  {
    name: "Research on Version Control Systems (DevOps Practices)",
    description: "Researched the impact of version control systems on DevOps, examining tools and best practices for optimizing deployment and continuous integration.",
    duration: "24/04/2024 – 27/05/2024",
    category: "DevOps"
  },
  {
    name: "Research on Cloud Computing under Parallel Computing",
    description: "Explored cloud computing in parallel systems focusing on resource management and performance as part of a software development research project.",
    duration: "26/05/2024 – 25/06/2024",
    category: "Cloud Computing"
  }
];

const workExperience = [
  {
      role: "Research Assistant",
      company: "Zhengzhou University",
      duration: "01/05/2023 – 30/09/2024",
      city: "Zhengzhou",
      country: "China",
      description: "Assisted in literature reviews, data collection, and research material organization for research projects. Collaborated with international scholars to enhance the research workflow."
  },
  {
      role: "Class Representative",
      company: "Zhengzhou University",
      duration: "01/10/2023 – Current",
      city: "Zhengzhou",
      country: "China",
      description: "Facilitated communication between students and faculty, resolved student issues, and ensured compliance with university policies. Monitored student well-being and assisted with academic tasks."
  },
  {
      role: "Campus Ambassador",
      company: "Bangladesh-China Youth Student Association",
      duration: "20/09/2024 – Current",
      city: "Zhengzhou",
      country: "China",
      description: "Promoted cultural exchange and supported Bangladeshi students in China by organizing events and offering guidance on scholarships and employment opportunities."
  }
];

const digitalSkills = {
  programmingLanguages: ["Python", "Java", "C/C++", "JavaScript", "HTML", "CSS"],
  frameworks: ["OpenCV", "Sci-kit Learn", "Node.js", "Express.js", "Bootstrap"],
  databases: ["MySQL", "MongoDB", "Firebase"],
  technologies: ["Machine Learning", "Deep Learning", "DevOps", "Cloud Computing", "Object-Oriented Programming"],
  ides: ["VS Code", "Android Studio", "Anaconda"],
  others: ["Microsoft Office (Word, Excel, PowerPoint)", "Adobe (Photoshop, Illustrator, Premiere Pro)"]
};

const references = [
  {
    name: "Dr. Xiaofei Nan",
    position: "Associate Professor, School of Computer Science and AI",
    institution: "Zhengzhou University",
    contact: "iexfnan@zzu.edu.cn"
  },
  {
    name: "Dr. Li Yafei",
    position: "Professor, School of Computer Science and AI",
    institution: "Zhengzhou University",
    contact: "ieyfli@zzu.edu.cn"
  }
];

// Display Projects
const displayProjects = () => {
  const listElement = document.getElementById('projects-list');
  projects.forEach(project => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${project.name}</strong> (${project.duration}): ${project.description} <br>
      <em>Category: ${project.category}</em>
    `;
    listElement.appendChild(li);
  });
};

// Display Work Experience
const displayWorkExperience = () => {
  const listElement = document.getElementById('work-experience-list');
  workExperience.forEach(experience => {
      const li = document.createElement('li');
      li.innerHTML = `
          <strong>${experience.role}</strong> at ${experience.company} (${experience.duration}) <br>
          <em>Location: ${experience.city}, ${experience.country}</em> <br>
          ${experience.description}
      `;
      listElement.appendChild(li);
  });
};

// Display Skills
const displaySkills = () => {
  const listElement = document.getElementById('skills-list');
  digitalSkills.programmingLanguages.concat(
    digitalSkills.frameworks, 
    digitalSkills.databases, 
    digitalSkills.technologies, 
    digitalSkills.ides, 
    digitalSkills.others
  ).forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    listElement.appendChild(li);
  });
};

// Display References
const displayReferences = () => {
  const listElement = document.getElementById('references-list');
  references.forEach(reference => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${reference.name}</strong>, ${reference.position} at ${reference.institution}<br><a href="mailto:${reference.contact}">${reference.contact}</a>`;
    listElement.appendChild(li);
  });
};

// On Page Load
window.onload = () => {
  // Display content
  displayProjects();
  displayWorkExperience();
  displaySkills();
  displayReferences();
};
