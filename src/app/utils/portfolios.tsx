import { StaticImageData } from "next/image";

import portfolio2 from "../../public/portfolios/portfolio2.png";
import portfolio3 from "../../public/portfolios/portfolio3.png";
import portfolio4 from "../../public/portfolios/portfolio4.png";
import portfolio5 from "../../public/portfolios/portfolio5.png";
import portfolio6 from "../../public/portfolios/portfolio6.png";
import portfolio7 from "../../public/portfolios/portfolio7.png";
import portfolio8 from "../../public/portfolios/portfolio8.png";
import snippet1 from "../../public/portfolios/snippet1.png";
import snippet2 from "../../public/portfolios/snippet2.png";
import snippet3 from "../../public/portfolios/snippet3.png";
import snippet4 from "../../public/portfolios/snippet4.png";

export interface Portfolio {
  id?: number;
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

export const portfolios: Portfolio[] = [
  {
    id: 1,
    name: "Snippet Master",
    categories: ["Design", "Web Development"],
    image: snippet1,
    url: "snippet-master",
    features: [
      "Multi Role Authentication",
      "Browse snippets",
      "Create snippets",
      "Edit snippets",
      "Delete snippets",
      "View other users' snippets",
      "Create an account",
      "Sign in",
      "Sign out",
      "Infinite scroll",
      "Supports many Languages",
      "Advanced search",
      "Responsive design",
      "And more...",
    ],
    problem:
      "Have you ever been in a situation where you needed to save a snippet some common code snippets on 1 location so that you can access it anywhere?",
    solution:
      "SnippetMaster is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb, this tool provides comprehensive the ability to save, edit, and delete your snippets as well as view other users' snippets.",
    links: {
      website: "https://snippetmater-early-testingdep.vercel.app/",
      github: "https://github.com/Maclinz/Snippet-Master-Reboot",
    },
    content: {
      title: "Snippet Master",
      description:
        "Snippet Master is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb.",
      image1: snippet2,
      image2: snippet3,
      image3: snippet4,
      image4: snippet1,
      image5: snippet2,
    },
  },

  {
    id: 2,
    name: "E-commerce Website",
    categories: ["Web Development"],
    image: portfolio2,
    url: "e-commerce-website",
    features: [
      "Multi Role Authentication",
      "Browse snippets",
      "Create snippets",
      "Edit snippets",
      "Delete snippets",
      "View other users' snippets",
      "Create an account",
      "Sign in",
      "Sign out",
      "Infinite scroll",
      "Supports many Languages",
      "Advanced search",
      "Responsive design",
      "And more...",
    ],
    problem:
      "Have you ever been in a situation where you needed to save a snippet some common code snippets on 1 location so that you can access it anywhere?",
    solution:
      "SnippetMaster is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb, this tool provides comprehensive the ability to save, edit, and delete your snippets as well as view other users' snippets.",
    links: {
      website: "https://snippetmater-early-testingdep.vercel.app/",
      github: "https://github.com/Maclinz/Snippet-Master-Reboot",
    },
    content: {
      title: "Snippet Master",
      description:
        "Snippet Master is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb.",
      image1: snippet2,
      image2: snippet3,
      image3: snippet4,
      image4: snippet1,
      image5: snippet2,
    },
  },
  {
    id: 3,
    name: "Travel Blog",
    categories: ["Web Development", "Design"],
    image: portfolio3,
    url: "travel-blog",
    features: [
      "Multi Role Authentication",
      "Browse snippets",
      "Create snippets",
      "Edit snippets",
      "Delete snippets",
      "View other users' snippets",
      "Create an account",
      "Sign in",
      "Sign out",
      "Infinite scroll",
      "Supports many Languages",
      "Advanced search",
      "Responsive design",
      "And more...",
    ],
    problem:
      "Have you ever been in a situation where you needed to save a snippet some common code snippets on 1 location so that you can access it anywhere?",
    solution:
      "SnippetMaster is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb, this tool provides comprehensive the ability to save, edit, and delete your snippets as well as view other users' snippets.",
    links: {
      website: "https://snippetmater-early-testingdep.vercel.app/",
      github: "https://github.com/Maclinz/Snippet-Master-Reboot",
    },
    content: {
      title: "Snippet Master",
      description:
        "Snippet Master is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb.",
      image1: snippet2,
      image2: snippet3,
      image3: snippet4,
      image4: snippet1,
      image5: snippet2,
    },
  },
  {
    id: 4,
    name: "E-learning Platform",
    categories: ["Web Development"],
    image: portfolio4,
    url: "e-learning-platform",
    features: [
      "Multi Role Authentication",
      "Browse snippets",
      "Create snippets",
      "Edit snippets",
      "Delete snippets",
      "View other users' snippets",
      "Create an account",
      "Sign in",
      "Sign out",
      "Infinite scroll",
      "Supports many Languages",
      "Advanced search",
      "Responsive design",
      "And more...",
    ],
    problem:
      "Have you ever been in a situation where you needed to save a snippet some common code snippets on 1 location so that you can access it anywhere?",
    solution:
      "SnippetMaster is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb, this tool provides comprehensive the ability to save, edit, and delete your snippets as well as view other users' snippets.",
    links: {
      website: "https://snippetmater-early-testingdep.vercel.app/",
      github: "https://github.com/Maclinz/Snippet-Master-Reboot",
    },
    content: {
      title: "Snippet Master",
      description:
        "Snippet Master is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb.",
      image1: snippet2,
      image2: snippet3,
      image3: snippet4,
      image4: snippet1,
      image5: snippet2,
    },
  },
  {
    id: 5,
    name: "Portfolio Website",
    categories: ["Web Development", "Design"],
    image: portfolio5,
    url: "portfolio-website",
    features: [
      "Multi Role Authentication",
      "Browse snippets",
      "Create snippets",
      "Edit snippets",
      "Delete snippets",
      "View other users' snippets",
      "Create an account",
      "Sign in",
      "Sign out",
      "Infinite scroll",
      "Supports many Languages",
      "Advanced search",
      "Responsive design",
      "And more...",
    ],
    problem:
      "Have you ever been in a situation where you needed to save a snippet some common code snippets on 1 location so that you can access it anywhere?",
    solution:
      "SnippetMaster is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb, this tool provides comprehensive the ability to save, edit, and delete your snippets as well as view other users' snippets.",
    links: {
      website: "https://snippetmater-early-testingdep.vercel.app/",
      github: "https://github.com/Maclinz/Snippet-Master-Reboot",
    },
    content: {
      title: "Snippet Master",
      description:
        "Snippet Master is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb.",
      image1: snippet2,
      image2: snippet3,
      image3: snippet4,
      image4: snippet1,
      image5: snippet2,
    },
  },
  {
    id: 6,
    name: "Mobile Game Development",
    categories: ["Game Development"],
    image: portfolio6,
    url: "mobile-game-development",
    features: [
      "Multi Role Authentication",
      "Browse snippets",
      "Create snippets",
      "Edit snippets",
      "Delete snippets",
      "View other users' snippets",
      "Create an account",
      "Sign in",
      "Sign out",
      "Infinite scroll",
      "Supports many Languages",
      "Advanced search",
      "Responsive design",
      "And more...",
    ],
    problem:
      "Have you ever been in a situation where you needed to save a snippet some common code snippets on 1 location so that you can access it anywhere?",
    solution:
      "SnippetMaster is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb, this tool provides comprehensive the ability to save, edit, and delete your snippets as well as view other users' snippets.",
    links: {
      website: "https://snippetmater-early-testingdep.vercel.app/",
      github: "https://github.com/Maclinz/Snippet-Master-Reboot",
    },
    content: {
      title: "Snippet Master",
      description:
        "Snippet Master is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb.",
      image1: snippet2,
      image2: snippet3,
      image3: snippet4,
      image4: snippet1,
      image5: snippet2,
    },
  },
  {
    id: 7,
    name: "UI/UX Design",
    categories: ["Design", "UI/UX"],
    image: portfolio7,
    url: "ui-ux-design",
    features: [
      "Multi Role Authentication",
      "Browse snippets",
      "Create snippets",
      "Edit snippets",
      "Delete snippets",
      "View other users' snippets",
      "Create an account",
      "Sign in",
      "Sign out",
      "Infinite scroll",
      "Supports many Languages",
      "Advanced search",
      "Responsive design",
      "And more...",
    ],
    problem:
      "Have you ever been in a situation where you needed to save a snippet some common code snippets on 1 location so that you can access it anywhere?",
    solution:
      "SnippetMaster is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb, this tool provides comprehensive the ability to save, edit, and delete your snippets as well as view other users' snippets.",
    links: {
      website: "https://snippetmater-early-testingdep.vercel.app/",
      github: "https://github.com/Maclinz/Snippet-Master-Reboot",
    },
    content: {
      title: "Snippet Master",
      description:
        "Snippet Master is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb.",
      image1: snippet2,
      image2: snippet3,
      image3: snippet4,
      image4: snippet1,
      image5: snippet2,
    },
  },
  {
    id: 8,
    name: "Social Media App",
    categories: ["Web Development", "Design"],
    image: portfolio8,
    url: "social-media-app",
    features: [
      "Multi Role Authentication",
      "Browse snippets",
      "Create snippets",
      "Edit snippets",
      "Delete snippets",
      "View other users' snippets",
      "Create an account",
      "Sign in",
      "Sign out",
      "Infinite scroll",
      "Supports many Languages",
      "Advanced search",
      "Responsive design",
      "And more...",
    ],
    problem:
      "Have you ever been in a situation where you needed to save a snippet some common code snippets on 1 location so that you can access it anywhere?",
    solution:
      "SnippetMaster is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb, this tool provides comprehensive the ability to save, edit, and delete your snippets as well as view other users' snippets.",
    links: {
      website: "https://snippetmater-early-testingdep.vercel.app/",
      github: "https://github.com/Maclinz/Snippet-Master-Reboot",
    },
    content: {
      title: "Snippet Master",
      description:
        "Snippet Master is a web application that allows you to save your most important snippets which can be accessed anywhere. Powered by React, Next.js, Node.js, and MongoDb.",
      image1: snippet2,
      image2: snippet3,
      image3: snippet4,
      image4: snippet1,
      image5: snippet2,
    },
  },
];
