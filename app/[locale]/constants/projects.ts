import { StaticImageData } from "next/image";

import cover1 from "@/assets/images/projects/project1/cover.png";
import cover10 from "@/assets/images/projects/project10/cover.png";
import cover11 from "@/assets/images/projects/project11/cover.png";
import cover12 from "@/assets/images/projects/project12/cover.png";
import cover13 from "@/assets/images/projects/project13/cover.png";
import cover14 from "@/assets/images/projects/project14/cover.png";
import cover2 from "@/assets/images/projects/project2/cover.png";
import cover3 from "@/assets/images/projects/project3/cover.png";
import cover4 from "@/assets/images/projects/project4/cover.png";
import cover5 from "@/assets/images/projects/project5/cover.png";
import cover6 from "@/assets/images/projects/project6/cover.png";
import cover7 from "@/assets/images/projects/project7/cover.png";
import cover8 from "@/assets/images/projects/project8/cover.png";
import cover9 from "@/assets/images/projects/project9/cover.png";

// import snippet1 from "@/assets/images/projects/project1/cover.png";
// import cover2 from "@/assets/images/projects/project2/cover.png";
// import cover3 from "@/assets/images/projects/project3/cover.png";
// import cover4 from "@/assets/images/projects/project4/cover.png";
// import cover5 from "@/assets/images/projects/project5/cover.png";

// import cover1 from "@/assets/images/projects/project1/cover.png";
// import cover2 from "@/assets/images/projects/project2/cover.png";
// import cover3 from "@/assets/images/projects/project3/cover.png";
// import cover4 from "@/assets/images/projects/project4/cover.png";
// import cover5 from "@/assets/images/projects/project5/cover.png";

// import cover1 from "@/assets/images/projects/project1/cover.png";
// import cover2 from "@/assets/images/projects/project2/cover.png";
// import cover3 from "@/assets/images/projects/project3/cover.png";
// import cover4 from "@/assets/images/projects/project4/cover.png";
// import cover5 from "@/assets/images/projects/project5/cover.png";

export interface Project {
  id?: number;
  development: "backend" | "frontend";
  type: "test" | "commercial" | "individual" | "team";
  name: string;
  categories: string[];
  image: StaticImageData;
  url?: string;
  features?: string[];
  problem?: string;
  solution?: string;
  onClick?: () => void;
  links?: {
    website?: string;
    github?: string;
  };
  content?: {
    title?: string;
    description?: string;
    description2?: string;
    description3?: string;
    description4?: string;
    description5?: string;
    image1?: StaticImageData;
    image2?: StaticImageData;
    image3?: StaticImageData;
    image4?: StaticImageData;
    image5?: StaticImageData;
  };
}

export const projectsEnglishLang: Project[] = [
  {
    id: 1,
    development: "frontend",
    type: "commercial",
    name: "IMConsulting",
    categories: ["Business project", "js", "Next", "Tailwind css"],
    image: cover1,
    url: "i-m-consulting",
    features: [
      "App router",
      "Responsive design",
      "Parallax effect",
      "And more...",
    ],
    problem: "Attracting clients",
    solution:
      "Creating a website with an attractive interface, easy navigation and promotion of targeted actions",
    links: {
      website: "https://im-consulting.vercel.app/",
      github: "https://github.com/SoftRyzen-internship/IM-CONSULTING",
    },
    content: {
      title: "IMConsulting",
      description: "Website for business trainer and coach Illy Mushkovsky",
      // image1: "@/assets/images/projects/project1/snippet1.png",
      // image2: "@/assets/images/projects/project1/snippet2.png",
      // image3: "@/assets/images/projects/project1/snippet3.png",
      // image4: "@/assets/images/projects/project1/snippet4.png",
      // image5: "@/assets/images/projects/project1/snippet5.png",
    },
  },

  {
    id: 2,
    development: "frontend",
    type: "commercial",
    name: "4.5.0",
    categories: ["Social project", "ts", "Next", "scss"],
    image: cover2,
    url: "4-5-0",
    features: [
      "Admin panel",
      "Sign in",
      "Sign out",
      "Landing website",
      "Responsive design",
      "Different sliders",
      "And more...",
    ],
    problem:
      "Now during the war in Ukraine there are many organizations that help people - one of them is 4.5.0, which requires a website to work more efficiently",
    solution:
      "Our website solves this problem - there is introductory information about the organization, a form for registering for the issuance of humanitarian aid, and also a payment system is connected for those who want to help the organization and make donations",
    links: {
      website: "https://450-kherson-humanitarian-landing-page.vercel.app",
      github:
        "https://github.com/baza-trainee/450-kherson-humanitarian-landing-page",
    },
    content: {
      title: "4.5.0",
      description: "Website for a public organization '4.5.0'",
      // image1: "@/assets/images/projects/project2/snippet1.png",
      // image2: "@/assets/images/projects/project2/snippet2.png",
      // image3: "@/assets/images/projects/project2/snippet3.png",
      // image4: "@/assets/images/projects/project2/snippet4.png",
      // image5: "@/assets/images/projects/project2/snippet5.png",
    },
  },
  {
    id: 3,
    type: "test",
    development: "frontend",
    name: "Carp Travel",
    categories: ["ts", "Next", "Tailwind css"],
    image: cover3,
    url: "carp-travel",
    features: [
      "Possibility to supports many languages",
      "Responsive design",
      "Different sliders",
      "And more...",
    ],
    problem: "The company need modern and unique website",
    solution: "I create a functional one",
    links: {
      website: "https://test-soft-ryzen.vercel.app/",
      github: "https://github.com/Anastasia-front/test-soft-ryzen",
    },
    content: {
      title: "Carp Travel",
      description: "'Carp Travel' adaptive website",
      // image1: "@/assets/images/projects/project3/snippet1.png",
      // image2: "@/assets/images/projects/project3/snippet2.png",
      // image3: "@/assets/images/projects/project3/snippet3.png",
      // image4: "@/assets/images/projects/project3/snippet4.png",
      // image5: "@/assets/images/projects/project3/snippet5.png",
    },
  },
  {
    id: 4,
    type: "team",
    development: "frontend",
    name: "Task Pro",
    categories: ["js", "React", "Redux", "css"],
    image: cover4,
    url: "task-pro",
    features: [
      "Frontend",
      "Backend",
      "Create an account",
      "Sign in",
      "Sign out",
      "Responsive design",
      "Create boards/columns/tasks",
      "Edit user/board/column/task information",
      "Delete user/board/column/task information",
      "Drag & drop",
      "Email support ",
      "And more...",
    ],
    problem:
      "People often need to plan their lives in different areas of activity - there is a reason to create an appropriate application that solves this need",
    solution: "The application 'Task Pro' is just a scheduler",
    links: {
      website: "https://tkachenko01001.github.io/project-REACT_NODE/",
      github: "https://github.com/Tkachenko01001/project-REACT_NODE",
    },
    content: {
      title: "Task Pro",
      description: "Application-scheduler",
      // image1: "@/assets/images/projects/project4/snippet1.png",
      // image2: "@/assets/images/projects/project4/snippet2.png",
      // image3: "@/assets/images/projects/project4/snippet3.png",
      // image4: "@/assets/images/projects/project4/snippet4.png",
      // image5: "@/assets/images/projects/project4/snippet5.png",
    },
  },
  {
    id: 5,
    type: "individual",
    development: "frontend",
    name: "Photo app",
    categories: ["js", "React Native", "Redux", "Firebase", "css"],
    image: cover5,
    url: "photo-app",
    features: [
      "Create an account",
      "Sign in",
      "Sign out",
      "Responsive design",
      "Infinite scroll",
      "Create post/comment",
      "Add/monitor/delete likes",
      "Edit user information",
      "And more...",
    ],
    problem:
      "We all love to share our photos with society - you can create a special mobile application for this",
    solution: "'Photo app' is exactly what is needed for this",
    links: {
      website:
        "https://expo.dev/@nastia0109/EXAMPLE?serviceType=classic&distribution=expo-go&release-channel=expamle-app",
      github:
        "https://github.com/Anastasia-front/photo-network_first-react-native-individual-project",
    },
    content: {
      title: "Photo app",
      description:
        "An application where you can: - register, enter and exit the application; - change your avatar and nickname; - download and delete your posts or comments on them; - see other users' posts, add comments and likes to them; - open the location where the post was made; - share your cool photos!)",
      // image1: "@/assets/images/projects/project5/snippet1.png",
      // image2: "@/assets/images/projects/project5/snippet2.png",
      // image3: "@/assets/images/projects/project5/snippet3.png",
      // image4: "@/assets/images/projects/project5/snippet4.png",
      // image5: "@/assets/images/projects/project5/snippet5.png",
    },
  },
  {
    id: 6,
    type: "team",
    development: "frontend",
    name: "News",
    categories: ["js", "scss", "html"],
    image: cover6,
    url: "news",
    features: [
      "Advanced search",
      "Responsive design",
      "Light/Dark mode",
      "Pagination",
      "New York Times Api",

      "And more...",
    ],
    problem:
      "Everyone reads the news and needs a convenient website to easily find, track what they read, save and delete articles they like",
    solution:
      "The News site is very convenient and has all the necessary functionality",
    links: {
      website: "https://anastasia-front.github.io/news-team-project/",
      github: "https://github.com/Anastasia-front/news-team-project",
    },
    content: {
      title: "News",
      description: "Very convenient 'News' website ",
      // image1: "@/assets/images/projects/project6/snippet1.png",
      // image2: "@/assets/images/projects/project6/snippet2.png",
      // image3: "@/assets/images/projects/project6/snippet3.png",
      // image4: "@/assets/images/projects/project6/snippet4.png",
      // image5: "@/assets/images/projects/project6/snippet5.png",
    },
  },
  {
    id: 7,
    type: "individual",
    development: "frontend",
    name: "Cinema search",
    categories: ["js", "React", "styled-components"],
    image: cover7,
    url: "cinema-search",
    features: [
      "Responsive design",
      "Advanced search",
      "Infinite scroll",
      "And more...",
    ],
    problem:
      "All people love to watch movies - but it’s also interesting to know what the movie is about, genre, rating, cast. Therefore, there is a need for a convenient website with search and necessary information about films",
    solution:
      "The 'Cinema search' application is beautiful, convenient and has detailed information about each movie in the search",
    links: {
      website: "https://anastasia-front.github.io/movie-app/",
      github: "https://github.com/Anastasia-front/movie-app",
    },
    content: {
      title: "Cinema search",
      description: "SPA with routing",
      // image1: "@/assets/images/projects/project7/snippet1.png",
      // image2: "@/assets/images/projects/project7/snippet2.png",
      // image3: "@/assets/images/projects/project7/snippet3.png",
      // image4: "@/assets/images/projects/project7/snippet4.png",
      // image5: "@/assets/images/projects/project7/snippet5.png",
    },
  },
  {
    id: 8,
    type: "team",
    development: "frontend",
    name: "IceCream",
    categories: ["js", "scss", "html", "parcel"],
    image: cover8,
    url: "ice-cream",
    features: ["Responsive design", "And more..."],
    problem:
      "A company producing and selling ice cream needed a beautiful information website and its products",
    solution:
      "A team of novice student developers from the course took on the implementation of an adaptive website, which they successfully completed",
    links: {
      website: "https://margomarm.github.io/team-project-icecream/",
      github: "https://github.com/Anastasia-front/team-project-icecream",
    },
    content: {
      title: "IceCream",
      description: "IceCream website",
      // image1: "@/assets/images/projects/project8/snippet1.png",
      // image2: "@/assets/images/projects/project8/snippet2.png",
      // image3: "@/assets/images/projects/project8/snippet3.png",
      // image4: "@/assets/images/projects/project8/snippet4.png",
      // image5: "@/assets/images/projects/project8/snippet5.png",
    },
  },
  {
    id: 9,
    type: "individual",
    development: "frontend",
    name: "Website for Instagram",
    categories: ["ts", "React", "scss", "html", "parcel"],
    image: cover9,
    url: "website-for-instagram",
    features: ["Responsive design", "Parallax effect", "And more..."],
    problem:
      "I needed a site where all my links to social networking pages and the necessary resources for contacting me were collected",
    solution: "I have created a corresponding website",
    links: {
      website: "https://instagram-header-link.netlify.app/",
      github: "https://github.com/Anastasia-front/instagram-link",
    },
    content: {
      title: "Website for Instagram",
      description: "IceCream website",
      // image1: "@/assets/images/projects/project9/snippet1.png",
      // image2: "@/assets/images/projects/project9/snippet2.png",
      // image3: "@/assets/images/projects/project9/snippet3.png",
      // image4: "@/assets/images/projects/project9/snippet4.png",
      // image5: "@/assets/images/projects/project9/snippet5.png",
    },
  },
  {
    id: 10,
    type: "individual",
    development: "frontend",
    name: "My blog",
    categories: ["js", "css", "scss", "html"],
    image: cover10,
    url: "my-blog",
    features: ["Responsive design", "And more..."],
    problem: "I always wanted to have my own website",
    solution:
      "First, before taking the courses, I created my own website for practice",
    links: {
      website: "https://Anastasia-front.github.io/My-blog/",
      github: "https://github.com/Anastasia-front/My-blog",
    },
    content: {
      title: "My blog",
      description:
        "This is my own adaptive website where I collected all the information about myself (this project can be considered a portfolio of my starting works)",
      // image1: "@/assets/images/projects/project10/snippet1.png",
      // image2: "@/assets/images/projects/project10/snippet2.png",
      // image3: "@/assets/images/projects/project10/snippet3.png",
      // image4: "@/assets/images/projects/project10/snippet4.png",
      // image5: "@/assets/images/projects/project10/snippet5.png",
    },
  },
  {
    id: 11,
    type: "individual",
    development: "frontend",
    name: "PhoneBook App",
    categories: ["js", "React", "mui", "styled-components"],
    image: cover11,
    url: "phonebook-app",
    features: [
      "Create an account",
      "Sign in",
      "Sign out",
      "Responsive design",
      "Add/delete/edit contacts",
      "And more...",
    ],
    problem:
      "Everyone needs to store their contacts somewhere - so you need to create a convenient application for this",
    solution:
      "PhoneBook App copes well with the task of a phone book like in phones",
    links: {
      website: "https://anastasia-front.github.io/phonebook-app/",
      github: "https://github.com/Anastasia-front/phonebook-app",
    },
    content: {
      title: "PhoneBook App",
      description:
        "Contact book application with asynchronous operations and user authorization",
      // image1: "@/assets/images/projects/project11/snippet1.png",
      // image2: "@/assets/images/projects/project11/snippet2.png",
      // image3: "@/assets/images/projects/project11/snippet3.png",
      // image4: "@/assets/images/projects/project11/snippet4.png",
      // image5: "@/assets/images/projects/project11/snippet5.png",
    },
  },
  {
    id: 12,
    type: "test",
    development: "frontend",
    name: "First test",
    categories: ["js", "React", "Redux", "styled-components", "html"],
    image: cover12,
    url: "first-test",
    features: ["Responsive design", "And more..."],
    problem:
      "There was an assignment to do a test from the course in 5 days, but I found out about it late and completed it in 10 hours",
    solution:
      "All points from the technical specifications were implemented (including additional ones)",
    links: {
      website: "https://anastasia-front.github.io/first-tech-test/",
      github: "https://github.com/Anastasia-front/first-tech-test",
    },
    content: {
      title: "First test",
      description:
        "Create tweet cards and add interactivity at the click of a button + pagination, routing, tweet filtering",
      // image1: "@/assets/images/projects/project12/snippet1.png",
      // image2: "@/assets/images/projects/project12/snippet2.png",
      // image3: "@/assets/images/projects/project12/snippet3.png",
      // image4: "@/assets/images/projects/project12/snippet4.png",
      // image5: "@/assets/images/projects/project12/snippet5.png",
    },
  },
  {
    id: 13,
    development: "backend",
    type: "individual",
    name: "CLI",
    categories: ["js", "Node", "Nodemon", "Yargs"],
    image: cover13,
    url: "cli",
    features: ["Command line interface"],
    problem: "There was a need to create CLI",
    solution: "This is the first homework of backend in courses",
    links: {
      website: "",
      github:
        "https://github.com/Anastasia-front/first-acquaintance-with-node.js",
    },
    content: {
      title: "CLI",
      description: "CLI (Command line interface) application",
      // image1: "@/assets/images/projects/project13/snippet1.png",
      // image2: "@/assets/images/projects/project13/snippet2.png",
      // image3: "@/assets/images/projects/project13/snippet3.png",
      // image4: "@/assets/images/projects/project13/snippet4.png",
      // image5: "@/assets/images/projects/project13/snippet5.png",
    },
  },
  {
    id: 14,
    development: "backend",
    type: "individual",
    name: "REST API",
    categories: ["js", "Node", "Mongoose", "Express"],
    image: cover14,
    url: "rest-api",
    features: ["Contacts backend"],
    problem:
      "There is a need to create a phone book application and you need REST API",
    solution: "This project fits this need perfectly",
    links: {
      website: "https://contacts-backend-eikd.onrender.com",
      github: "https://github.com/Anastasia-front/nodejs-first-rest-api",
    },
    content: {
      title: "REST API",
      description: "Backend for a phone book application",
      // image1: "@/assets/images/projects/project14/snippet1.png",
      // image2: "@/assets/images/projects/project14/snippet2.png",
      // image3: "@/assets/images/projects/project14/snippet3.png",
      // image4: "@/assets/images/projects/project14/snippet4.png",
      // image5: "@/assets/images/projects/project14/snippet5.png",
    },
  },
];

export const projectsUkrainianLang: Project[] = [
  {
    id: 1,
    development: "frontend",
    type: "commercial",
    name: "IMConsulting",
    categories: ["Бізнес-проект", "js", "Next", "Tailwind css"],
    image: cover1,
    url: "i-m-consulting",
    features: [
      "Роутер додатку",
      "Адаптивний дизайн",
      "Паралакс-ефект",
      "І багато іншого...",
    ],
    problem: "Привертання клієнтів",
    solution:
      "Створення веб-сайту з привабливим інтерфейсом, зручною навігацією та долючення користувачів до цільових дій",
    links: {
      website: "https://im-consulting.vercel.app/",
      github: "https://github.com/SoftRyzen-internship/IM-CONSULTING",
    },
    content: {
      title: "IMConsulting",
      description: "Сайт для бізнес-тренера та коуча Іллі Мушковського",
    },
  },
  {
    id: 2,
    development: "frontend",
    type: "commercial",
    name: "4.5.0",
    categories: ["Соціальний проект", "ts", "Next", "scss"],
    image: cover2,
    url: "4-5-0",
    features: [
      "Панель адміністратора",
      "Вхід",
      "Вихід",
      "Лендінг",
      "Адаптивний дизайн",
      "Різні слайдери",
      "І багато іншого...",
    ],
    problem:
      "Під час війни в Україні існує багато організацій, які допомагають людям - одна з них - 4.5.0, яка потребує веб-сайту для більш ефективної роботи",
    solution:
      "Наш веб-сайт вирішує цю проблему - є повна інформація про організацію, форма для реєстрації на отримання гуманітарної допомоги, а також підключено платіжну систему для тих, хто хоче допомогти організації та здійснювати пожертви",
    links: {
      website: "https://450-kherson-humanitarian-landing-page.vercel.app",
      github:
        "https://github.com/baza-trainee/450-kherson-humanitarian-landing-page",
    },
    content: {
      title: "4.5.0",
      description: "Веб-сайт громадської організації '4.5.0'",
    },
  },
  {
    id: 3,
    development: "frontend",
    type: "test",
    name: "Carp Travel",
    categories: ["ts", "Next", "Tailwind css"],
    image: cover3,
    url: "carp-travel",
    features: [
      "Модлива підтримка багатьох мов",
      "Адаптивний дизайн",
      "Різні слайдери",
      "Та багато іншого...",
    ],
    problem: "Компанія потребує сучасного та унікального веб-сайту",
    solution: "Я створила функціональний веб-сайт",
    links: {
      website: "https://test-soft-ryzen.vercel.app/",
      github: "https://github.com/Anastasia-front/test-soft-ryzen",
    },
    content: {
      title: "Carp Travel",
      description: "Адаптивний веб-сайт 'Carp Travel'",
    },
  },
  {
    id: 4,
    development: "frontend",
    type: "team",
    name: "Task Pro",
    categories: ["js", "React", "Redux", "css"],
    image: cover4,
    url: "task-pro",
    features: [
      "Frontend",
      "Backend",
      "Створення облікового запису",
      "Вхід",
      "Вихід",
      "Адаптивний дизайн",
      "Створення дошок/стовпців/завдань",
      "Редагування інформації користувача/дошки/стовпця/завдання",
      "Видалення інформації користувача/дошки/стовпця/завдання",
      "Drag & drop",
      "Підтримка електронної пошти",
      "Та багато іншого...",
    ],
    problem:
      "Люди часто потребують планувати своє життя в різних сферах діяльності - є причина створити відповідний застосунок, який вирішить цю потребу",
    solution: "Додаток 'Task Pro' - це власне і є планувальник",
    links: {
      website: "https://tkachenko01001.github.io/project-REACT_NODE/",
      github: "https://github.com/Tkachenko01001/project-REACT_NODE",
    },
    content: {
      title: "Task Pro",
      description: "Додаток-планувальник",
    },
  },
  {
    id: 5,
    development: "frontend",
    type: "individual",
    name: "Photo app",
    categories: ["js", "React Native", "Redux", "Firebase", "css"],
    image: cover5,
    url: "photo-app",
    features: [
      "Створення облікового запису",
      "Вхід",
      "Вихід",
      "Адаптивний дизайн",
      "Нескінченна прокрутка",
      "Створення повідомлення/коментаря",
      "Додавання/видалення лайків",
      "Редагування інформації користувача",
      "Та багато іншого...",
    ],
    problem:
      "Ми всі любимо ділитися своїми фотографіями з громадськістю - можна створити спеціальний мобільний додаток для цього",
    solution: "'Photo app' - саме те, що потрібно",
    links: {
      website:
        "https://expo.dev/@nastia0109/EXAMPLE?serviceType=classic&distribution=expo-go&release-channel=expamle-app",
      github:
        "https://github.com/Anastasia-front/photo-network_first-react-native-individual-project",
    },
    content: {
      title: "Photo app",
      description:
        "Додаток, де можна: - зареєструватися, увійти та вийти з додатку; - змінити свій аватар та нікнейм; - завантажити та видалити свої дописи чи коментарі до них; - переглянути дописи інших користувачів, додавати коментарі та лайки до них; - відкрити місце, де був зроблений пост; - поділитися своїми класними фотографіями :)",
    },
  },
  {
    id: 6,
    development: "frontend",
    type: "team",
    name: "News",
    categories: ["js", "scss", "html"],
    image: cover6,
    url: "news",
    features: [
      "Розширений пошук",
      "Адаптивний дизайн",
      "Світлий/темний режим",
      "Пагінація",
      "API New York Times",
      "Та багато іншого...",
    ],
    problem:
      "Кожен читає новини і потребує зручного веб-сайту для легкості пошуку, відстеження того, що прочитано, збереження та видалення статей, які подобаються",
    solution:
      "'News' - це дуже зручний веб-сайт з усією необхідною функціональністю",
    links: {
      website: "https://anastasia-front.github.io/news-team-project/",
      github: "https://github.com/Anastasia-front/news-team-project",
    },
    content: {
      title: "News",
      description: "Дуже зручний веб-сайт 'News'",
    },
  },
  {
    id: 7,
    development: "frontend",
    type: "individual",
    name: "Cinema search",
    categories: ["js", "React", "styled-components"],
    image: cover7,
    url: "cinema-search",
    features: [
      "Адаптивний дизайн",
      "Розширений пошук",
      "Нескінченна прокрутка",
      "Та багато іншого...",
    ],
    problem:
      "Усі люди люблять дивитися фільми, а також цікаво знати, що за фільм, його сюжет, жанр, рейтинг та акторський склад. Тому потрібен зручний веб-сайт з можливістю пошуку та необхідною інформацією про фільми",
    solution:
      "Додаток 'Cinema search' гарний, зручний та містить повну інформацію про кожний фільм у пошуку",
    links: {
      website: "https://anastasia-front.github.io/movie-app/",
      github: "https://github.com/Anastasia-front/movie-app",
    },
    content: {
      title: "Cinema search",
      description: "Односторінковий додаток з можливістю маршрутизації",
    },
  },
  {
    id: 8,
    development: "frontend",
    type: "team",
    name: "IceCream",
    categories: ["js", "scss", "html", "parcel"],
    image: cover8,
    url: "ice-cream",
    features: ["Адаптивний дизайн", "Та багато іншого..."],
    problem:
      "Компанія, яка виробляє та продає морозиво, потребувала гарного інформаційного веб-сайту для своїх продуктів",
    solution:
      "Команда початківців студентів взяла на себе реалізацію адаптивного веб-сайту, яку успішно завершила",
    links: {
      website: "https://margomarm.github.io/team-project-icecream/",
      github: "https://github.com/Anastasia-front/team-project-icecream",
    },
    content: {
      title: "IceCream",
      description: "Веб-сайт для компанії, яка виготовляє та продає морозиво",
    },
  },
  {
    id: 9,
    development: "frontend",
    type: "individual",
    name: "Сайт для Instagram",
    categories: ["ts", "React", "scss", "html", "parcel"],
    image: cover9,
    url: "website-for-instagram",
    features: ["Адаптивний дизайн", "Паралакс ефект", "Та багато іншого..."],
    problem:
      "Мені знадобився сайт, де були б зібрані всі мої посилання на сторінки в соціальних мережах та необхідні ресурси для зв'язку зі мною",
    solution: "Я створила відповідний веб-сайт",
    links: {
      website: "https://instagram-header-link.netlify.app/",
      github: "https://github.com/Anastasia-front/instagram-link",
    },
    content: {
      title: "Сайт для Instagram",
      description: "Веб-сайт для посилань та зв'язку зі мною",
    },
  },
  {
    id: 10,
    development: "frontend",
    type: "individual",
    name: "Мій блог",
    categories: ["js", "css", "scss", "html"],
    image: cover10,
    url: "my-blog",
    features: ["Адаптивний дизайн", "Та багато іншого..."],
    problem: "Я завжди хотіла мати свій власний веб-сайт",
    solution:
      "Спочатку, перш ніж почати курси, я створила власний веб-сайт для практики",
    links: {
      website: "https://Anastasia-front.github.io/My-blog/",
      github: "https://github.com/Anastasia-front/My-blog",
    },
    content: {
      title: "Мій блог",
      description:
        "Це мій власний адаптивний веб-сайт, де я зібрала всю інформацію про себе (цей проект можна вважати портфоліо моїх початкових робіт)",
    },
  },
  {
    id: 11,
    development: "frontend",
    type: "individual",
    name: "Додаток 'Телефонна книга'",
    categories: ["js", "React", "mui", "styled-components"],
    image: cover11,
    url: "phonebook-app",
    features: [
      "Створення облікового запису",
      "Вхід",
      "ВИхід",
      "Адаптивний дизайн",
      "Додати/видалити/змінити контакти",
      "Та багато іншого...",
    ],
    problem:
      "Кожному потрібно десь зберігати свої контакти - отже, потрібно створити зручний додаток для цього",
    solution:
      "Додаток 'Телефонна книга' добре справляється з завданням телефонної книги, яка є в телефонах",
    links: {
      website: "https://anastasia-front.github.io/phonebook-app/",
      github: "https://github.com/Anastasia-front/phonebook-app",
    },
    content: {
      title: "Додаток 'Телефонна книга'",
      description: "Сайт з асинхронними операціями та авторизацією користувача",
    },
  },
  {
    id: 12,
    development: "frontend",
    type: "test",
    name: "Перший тест",
    categories: ["js", "React", "Redux", "styled-components", "html"],
    image: cover12,
    url: "first-test",
    features: ["Адаптивний дизайн", "Та багато іншого..."],
    problem:
      "Було завдання зробити тест на курсах протягом 5 днів, але я дізналася про нього пізно і виконала його за 10 годин",
    solution:
      "Всі пункти технічних завдань були реалізовані (включаючи додаткові)",
    links: {
      website: "https://anastasia-front.github.io/first-tech-test/",
      github: "https://github.com/Anastasia-front/first-tech-test",
    },
    content: {
      title: "Перший тест",
      description:
        "Створення карток твітів та додання інтерактивності за допомогою кнопок + пагінація, маршрутизація, фільтрація твітів",
    },
  },
  {
    id: 13,
    development: "backend",
    type: "individual",
    name: "CLI",
    categories: ["js", "Node", "Nodemon", "Yargs"],
    image: cover13,
    url: "cli",
    features: ["Інтерфейс командного рядка"],
    problem: "Була потреба створити інтерфейс командного рядка",
    solution: "Це перша домашня робота з backend на курсах",
    links: {
      website: "",
      github:
        "https://github.com/Anastasia-front/first-acquaintance-with-node.js",
    },
    content: {
      title: "CLI",
      description: "Додаток інтерфейсу командного рядка (CLI)",
    },
  },
  {
    id: 14,
    development: "backend",
    type: "individual",
    name: "REST API",
    categories: ["js", "Node", "Mongoose", "Express"],
    image: cover14,
    url: "rest-api",
    features: ["Backend для телефонної книги"],
    problem: "Є потреба створити додаток телефонної книги - потрібно REST API",
    solution: "Цей проект ідеально підходить для цієї потреби",
    links: {
      website: "https://contacts-backend-eikd.onrender.com",
      github: "https://github.com/Anastasia-front/nodejs-first-rest-api",
    },
    content: {
      title: "REST API",
      description: "Backend для додатка телефонної книги",
    },
  },
];
