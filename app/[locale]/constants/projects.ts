import { StaticImageData } from "next/image";

import project1 from "@/assets/images/projects/project1.png";
import project2 from "@/assets/images/projects/project2.png";
import project3 from "@/assets/images/projects/project3.png";

export interface Project {
  id?: number;
  url?: string;
  title: string;
  image: StaticImageData | string;
  categories: string[];
  summary?: string;
  introduction?: string;
  onClick?: () => void;
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
    id: 1,
    url: "pathname-of-project",
    title: "Title 1",
    introduction: "intro 1",
    image: project1,
    categories: ["web", "design"],
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
    id: 2,
    url: "pathname-of-project",
    title: "Title 2",
    introduction: "intro 2",
    image: project2,
    categories: ["web", "design"],
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
    id: 3,
    url: "pathname-of-project",
    title: "Title 3",
    introduction: "intro 3",
    image: project3,
    categories: ["web", "design"],
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
