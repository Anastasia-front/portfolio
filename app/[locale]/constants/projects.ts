// export interface Project {
//   id?: number;
//   url?: string;
//   title: string;
//   image: StaticImageData | string;
//   categories: string[];
//   summary?: string;
//   introduction?: string;
//   onClick?: () => void;
//   list?: {
//     title?: string;
//     description?: string;
//   }[];
//   featuredProject?: {
//     name?: string;
//     categories?: string[];
//     description?: string;
//     image?: StaticImageData;
//   };
// }

export interface Project {
  id?: string;
  url?: string;
  title: string;
  image: string;
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
    image?: string;
  };
}

// export const projects: Project[] = [
//   {
//     id: 1,
//     url: "title-1",
//     title: "Title 1",
//     introduction: "intro 1",
//     image: project1,
//     categories: ["web", "design"],
//     list: [
//       {
//         title: "title 1",
//         description: "description 1",
//       },
//     ],
//     featuredProject: {
//       name: "name",
//       categories: ["project", "Web Development"],
//       description: "description 1",
//       image: project1,
//     },
//     summary: "summary",
//   },
//   {
//     id: 2,
//     url: "title-2",
//     title: "Title 2",
//     introduction: "intro 2",
//     image: project2,
//     categories: ["web", "design"],
//     list: [
//       {
//         title: "title 2",
//         description: "description 2",
//       },
//     ],
//     featuredProject: {
//       name: "name",
//       categories: ["project", "Web Development"],
//       description: "description 2",
//       image: project2,
//     },
//     summary: "summary",
//   },
//   {
//     id: 3,
//     url: "title-3",
//     title: "Title 3",
//     introduction: "intro 3",
//     image: project3,
//     categories: ["web", "design"],
//     list: [
//       {
//         title: "title 3",
//         description: "description 3",
//       },
//     ],
//     featuredProject: {
//       name: "name",
//       categories: ["project", "Web Development"],
//       description: "description 3",
//       image: project3,
//     },
//     summary: "summary",
//   },
// ];
