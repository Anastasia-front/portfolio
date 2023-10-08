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
import vite from "@/assets/images/skills/tech/front/vite.png";
import webpack from "@/assets/images/skills/tech/front/webpack.png";

import bcrypt from "@/assets/images/skills/tech/back/bcrypt.png";
import cloudinary from "@/assets/images/skills/tech/back/cloudinary.png";
import cors from "@/assets/images/skills/tech/back/cors.png";
import crudBack from "@/assets/images/skills/tech/back/crud.png";
import dotenv from "@/assets/images/skills/tech/back/dotenv.png";
import express from "@/assets/images/skills/tech/back/express-js.png";
import firebase from "@/assets/images/skills/tech/back/firebase.png";
import joi from "@/assets/images/skills/tech/back/joi.png";
import jwt from "@/assets/images/skills/tech/back/jwt.png";
import mongo from "@/assets/images/skills/tech/back/mongo-db.png";
import mongoose from "@/assets/images/skills/tech/back/mongoose.png";
import morgan from "@/assets/images/skills/tech/back/morgan.png";
import multer from "@/assets/images/skills/tech/back/multer.png";
import node from "@/assets/images/skills/tech/back/node-js.png";
import nodemailer from "@/assets/images/skills/tech/back/nodemailer.png";
import postman from "@/assets/images/skills/tech/back/postman.png";
import restApiBack from "@/assets/images/skills/tech/back/rest-api.png";
import sendGrid from "@/assets/images/skills/tech/back/send-grid.png";
import swagger from "@/assets/images/skills/tech/back/swagger.png";

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
    title: "js",
    image: js,
  },
  { type: "front", title: "ts", image: ts },
  { type: "front", title: "react", image: react },
  { type: "front", title: "redux", image: redux },
  { type: "front", title: "next", image: next },
  { type: "front", title: "crud frontend", image: crudFront },
  { type: "front", title: "figma", image: figma },
  { type: "front", title: "git", image: git },
  { type: "front", title: "github", image: gitHub },
  { type: "front", title: "html", image: html },
  { type: "front", title: "parcel", image: parcel },
  { type: "front", title: "react native", image: reactNative },
  { type: "front", title: "rest-api frontend", image: restApiFront },
  { type: "front", title: "webpack", image: webpack },
  { type: "front", title: "vite", image: vite },

  { type: "back", title: "crud backend", image: crudBack },
  { type: "back", title: "nodemailer", image: nodemailer },
  { type: "back", title: "morgan", image: morgan },
  { type: "back", title: "joi", image: joi },
  { type: "back", title: "mongoose", image: mongoose },
  { type: "back", title: "cloudinary", image: cloudinary },
  { type: "back", title: "express js", image: express },
  { type: "back", title: "firebase", image: firebase },
  { type: "back", title: "jwt", image: jwt },
  { type: "back", title: "mongo db", image: mongo },
  { type: "back", title: "node js", image: node },
  { type: "back", title: "postman", image: postman },
  { type: "back", title: "rest-api backend", image: restApiBack },
  { type: "back", title: "send-grid", image: sendGrid },
  { type: "back", title: "bcrypt", image: bcrypt },
  { type: "back", title: "swagger", image: swagger },
  { type: "back", title: "multer", image: multer },
  { type: "back", title: "dotenv", image: dotenv },
  { type: "back", title: "cors", image: cors },

  { type: "styles", title: "css", image: css },
  { type: "styles", title: "mui", image: mui },
  { type: "styles", title: "sass", image: sass },
  { type: "styles", title: "tailwind", image: tailwind },

  { type: "soft", title: "atlassian", image: atlassian },
  { type: "soft", title: "jira", image: jira },
  { type: "soft", title: "scrum", image: scrum },
  { type: "soft", title: "trello", image: trello },
];
