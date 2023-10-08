import { StaticImageData } from "next/image";

import crudFrontend from "@/assets/images/skills/tech/front/crud.png";
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
import restApiFrontend from "@/assets/images/skills/tech/front/rest-api.png";
import ts from "@/assets/images/skills/tech/front/ts.png";
import vite from "@/assets/images/skills/tech/front/vite.png";
import webpack from "@/assets/images/skills/tech/front/webpack.png";

import bcrypt from "@/assets/images/skills/tech/back/bcrypt.png";
import cloudinary from "@/assets/images/skills/tech/back/cloudinary.png";
import cors from "@/assets/images/skills/tech/back/cors.png";
import crudBackend from "@/assets/images/skills/tech/back/crud.png";
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
import restApiBackend from "@/assets/images/skills/tech/back/rest-api.png";
import sendGrid from "@/assets/images/skills/tech/back/send-grid.png";
import swagger from "@/assets/images/skills/tech/back/swagger.png";

import css from "@/assets/images/skills/tech/styles/css.png";
import mui from "@/assets/images/skills/tech/styles/mui.png";
import sass from "@/assets/images/skills/tech/styles/sass.png";
import tailwind from "@/assets/images/skills/tech/styles/tailwind.png";

import atlassian from "@/assets/images/skills/teamWork/atlassian.png";
import jira from "@/assets/images/skills/teamWork/jira.png";
import scrum from "@/assets/images/skills/teamWork/scrum.png";
import trello from "@/assets/images/skills/teamWork/trello.png";

interface Skill {
  title: string;
  image: StaticImageData;
  type: "team work" | "backend" | "frontend" | "styles";
}

export const skills: Skill[] = [
  {
    type: "frontend",
    title: "js",
    image: js,
  },
  { type: "frontend", title: "ts", image: ts },
  { type: "frontend", title: "react", image: react },
  { type: "frontend", title: "redux", image: redux },
  { type: "frontend", title: "next", image: next },
  { type: "frontend", title: "crud frontendend", image: crudFrontend },
  { type: "frontend", title: "figma", image: figma },
  { type: "frontend", title: "git", image: git },
  { type: "frontend", title: "github", image: gitHub },
  { type: "frontend", title: "html", image: html },
  { type: "frontend", title: "parcel", image: parcel },
  { type: "frontend", title: "react native", image: reactNative },
  { type: "frontend", title: "rest-api frontendend", image: restApiFrontend },
  { type: "frontend", title: "webpack", image: webpack },
  { type: "frontend", title: "vite", image: vite },

  { type: "backend", title: "crud backend", image: crudBackend },
  { type: "backend", title: "nodemailer", image: nodemailer },
  { type: "backend", title: "morgan", image: morgan },
  { type: "backend", title: "joi", image: joi },
  { type: "backend", title: "mongoose", image: mongoose },
  { type: "backend", title: "cloudinary", image: cloudinary },
  { type: "backend", title: "express js", image: express },
  { type: "backend", title: "firebase", image: firebase },
  { type: "backend", title: "jwt", image: jwt },
  { type: "backend", title: "mongo db", image: mongo },
  { type: "backend", title: "node js", image: node },
  { type: "backend", title: "postman", image: postman },
  { type: "backend", title: "rest-api backendend", image: restApiBackend },
  { type: "backend", title: "send-grid", image: sendGrid },
  { type: "backend", title: "bcrypt", image: bcrypt },
  { type: "backend", title: "swagger", image: swagger },
  { type: "backend", title: "multer", image: multer },
  { type: "backend", title: "dotenv", image: dotenv },
  { type: "backend", title: "cors", image: cors },

  { type: "styles", title: "css", image: css },
  { type: "styles", title: "mui", image: mui },
  { type: "styles", title: "sass", image: sass },
  { type: "styles", title: "tailwind", image: tailwind },

  { type: "team work", title: "scrum", image: scrum },
  { type: "team work", title: "jira", image: jira },
  { type: "team work", title: "trello", image: trello },
  { type: "team work", title: "atlassian", image: atlassian },
];

import bg1 from "@/assets/images/skills/bg/bg-1.jpg";
import bg2 from "@/assets/images/skills/bg/bg-2.jpg";
import bg3 from "@/assets/images/skills/bg/bg-3.jpg";
import bg4 from "@/assets/images/skills/bg/bg-4.jpg";
interface SkillBlock {
  id: number;
  image: StaticImageData;
  title: string;
  className: string;
}

export const skillBlocks: SkillBlock[] = [
  {
    id: 1,
    image: bg1,
    title: "frontend",
    className: "bg1",
  },
  {
    id: 2,
    image: bg2,
    title: "backend",
    className: "bg2",
  },
  {
    id: 3,
    image: bg3,
    title: "styles",
    className: "bg3",
  },
  {
    id: 4,
    image: bg4,
    title: "team work",
    className: "bg4",
  },
];
