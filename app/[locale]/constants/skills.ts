import { StaticImageData } from "next/image";

import crudFront from "@/assets/images/skills/tech/front/crud.png";
import figma from "@/assets/images/skills/tech/front/figma.png";
import gitHub from "@/assets/images/skills/tech/front/git-hub.png";
import git from "@/assets/images/skills/tech/front/git.png";
import html from "@/assets/images/skills/tech/front/html.png";
import js from "@/assets/images/skills/tech/front/js.png";
import next from "@/assets/images/skills/tech/front/next-js-1.png";
import parcel from "@/assets/images/skills/tech/front/parcel.png";
import reactNative from "@/assets/images/skills/tech/front/react-native.png";
import react from "@/assets/images/skills/tech/front/react.png";
import redux from "@/assets/images/skills/tech/front/redux.png";
import restApiFront from "@/assets/images/skills/tech/front/rest-api.png";
import ts from "@/assets/images/skills/tech/front/ts.png";
import webpack from "@/assets/images/skills/tech/front/webpack.png";

import crudBack from "@/assets/images/skills/tech/back/crud.png";
import express from "@/assets/images/skills/tech/back/express-js.png";
import firebase from "@/assets/images/skills/tech/back/firebase.png";
import jwt from "@/assets/images/skills/tech/back/jwt.png";
import mongo from "@/assets/images/skills/tech/back/mongo-db.png";
import node from "@/assets/images/skills/tech/back/node-js.png";
import postman from "@/assets/images/skills/tech/back/postman.png";
import restApiBack from "@/assets/images/skills/tech/back/rest-api.png";
import sendGrid from "@/assets/images/skills/tech/back/send-grid.png";

import css from "@/assets/images/skills/tech/styles/css.png";
import mui from "@/assets/images/skills/tech/styles/mui.png";
import sass from "@/assets/images/skills/tech/styles/sass.png";
import tailwind from "@/assets/images/skills/tech/styles/tailwind.png";

import atlassian from "@/assets/images/skills/soft/atlassian.png";
import jira from "@/assets/images/skills/soft/jira.png";
import scrum from "@/assets/images/skills/soft/scrum.png";
import trello from "@/assets/images/skills/soft/trello.png";

interface Skill {
  title: string;
  image: StaticImageData;
  type: "soft" | "back" | "front" | "styles";
}

export const skills: Skill[] = [
  {
    type: "front",
    title: "JS",
    image: js,
  },
  { type: "front", title: "TS", image: ts },
  { type: "front", title: "REACT", image: react },
  { type: "front", title: "REDUX", image: redux },
  { type: "front", title: "NEXT", image: next },
  { type: "front", title: "CRUD FRONTEND", image: crudFront },
  { type: "front", title: "FIGMA", image: figma },
  { type: "front", title: "GIT", image: git },
  { type: "front", title: "GITHUB", image: gitHub },
  { type: "front", title: "HTML", image: html },
  { type: "front", title: "PARCEL", image: parcel },
  { type: "front", title: "REACT NATIVE", image: reactNative },
  { type: "front", title: "REST-API FRONTEND", image: restApiFront },
  { type: "front", title: "WEBPACK", image: webpack },

  { type: "back", title: "CRUD BACKEND", image: crudBack },
  { type: "back", title: "EXPRESS JS", image: express },
  { type: "back", title: "FIREBASE", image: firebase },
  { type: "back", title: "JWT", image: jwt },
  { type: "back", title: "MONGO DB", image: mongo },
  { type: "back", title: "NODE JS", image: node },
  { type: "back", title: "POSTMAN", image: postman },
  { type: "back", title: "REST-API BACKEND", image: restApiBack },
  { type: "back", title: "SEND-GRID", image: sendGrid },

  { type: "styles", title: "CSS", image: css },
  { type: "styles", title: "MUI", image: mui },
  { type: "styles", title: "SASS", image: sass },
  { type: "styles", title: "TAILWIND", image: tailwind },

  { type: "soft", title: "ATLASSIAN", image: atlassian },
  { type: "soft", title: "JIRA", image: jira },
  { type: "soft", title: "SCRUM", image: scrum },
  { type: "soft", title: "TRELLO", image: trello },
];
