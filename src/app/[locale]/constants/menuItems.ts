const page = {
  name: {
    HOME: "home",
    ABOUT: "about",
    SKILLS: "skills",
    PROJECTS: "projects",
    PROJECT: "project",
    CONTACTS: "contacts",
  },
  route: {
    HOME: "/",
    ABOUT: "/about",
    SKILLS: "/skills",
    PROJECTS: "/projects",
    PROJECT: "/project",
    CONTACTS: "/contacts",
  },
};

export const menuItems = [
  {
    id: 1,
    translationKey: page.name.HOME,
    url: page.route.HOME,
  },
  {
    id: 2,
    translationKey: page.name.ABOUT,
    url: page.route.ABOUT,
  },
  {
    id: 3,
    translationKey: page.name.SKILLS,
    url: page.route.SKILLS,
  },
  {
    id: 4,
    translationKey: page.name.PROJECTS,
    url: page.route.PROJECTS,
  },
  {
    id: 5,
    translationKey: page.name.CONTACTS,
    url: page.route.CONTACTS,
  },
];
