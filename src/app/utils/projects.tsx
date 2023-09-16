import { StaticImageData } from "next/image";
import project1 from "../../public/projects/project1.png";
import project2 from "../../public/projects/project2.png";
import project3 from "../../public/projects/project3.png";

interface Project {
  title?: string;
  introduction?: string;
  image?: StaticImageData;
  summary?: string;
  list?: {
    title?: string;
    description?: string;
  }[];
  featuredProject?: {
    name?: string;
    categories?: string[];
    description?: string;
    image?: StaticImageData;
  };
}

export const projects: Project[] = [
  {
    title: "Title 1",
    introduction: "intro 1",
    image: project1,
    list: [
      {
        title: "title 1",
        description: "description 1",
      },
    ],
    featuredProject: {
      name: "name",
      categories: ["project", "Web Development"],
      description: "description 1",
      image: project1,
    },
    summary: "summary",
  },
  {
    title: "Title 2",
    introduction: "intro 2",
    image: project2,
    list: [
      {
        title: "title 2",
        description: "description 2",
      },
    ],
    featuredProject: {
      name: "name",
      categories: ["project", "Web Development"],
      description: "description 2",
      image: project2,
    },
    summary: "summary",
  },
  {
    title: "Title 3",
    introduction: "intro 3",
    image: project3,
    list: [
      {
        title: "title 3",
        description: "description 3",
      },
    ],
    featuredProject: {
      name: "name",
      categories: ["project", "Web Development"],
      description: "description 3",
      image: project3,
    },
    summary: "summary",
  },
];
