import { StaticImageData } from "next/image";

import babel from "@/assets/images/skills/tech/front/babel.webp";
import crudFrontend from "@/assets/images/skills/tech/front/crud.webp";
import figma from "@/assets/images/skills/tech/front/figma.webp";
import framerMotion from "@/assets/images/skills/tech/front/framer-motion.webp";
import gitHub from "@/assets/images/skills/tech/front/git-hub.webp";
import git from "@/assets/images/skills/tech/front/git.webp";
import html from "@/assets/images/skills/tech/front/html.webp";
import js from "@/assets/images/skills/tech/front/js.webp";
import next from "@/assets/images/skills/tech/front/next-js-1.webp";
import parcel from "@/assets/images/skills/tech/front/parcel.webp";
import reactNative from "@/assets/images/skills/tech/front/react-native.webp";
import react from "@/assets/images/skills/tech/front/react.webp";
import redux from "@/assets/images/skills/tech/front/redux.webp";
import restApiFrontend from "@/assets/images/skills/tech/front/rest-api.webp";
import threeJs from "@/assets/images/skills/tech/front/three-js.webp";
import ts from "@/assets/images/skills/tech/front/ts.webp";
import vite from "@/assets/images/skills/tech/front/vite.webp";
import webpack from "@/assets/images/skills/tech/front/webpack.webp";

import bcrypt from "@/assets/images/skills/tech/back/bcrypt.webp";
import cloudinary from "@/assets/images/skills/tech/back/cloudinary.webp";
import cors from "@/assets/images/skills/tech/back/cors.webp";
// import crudBackend from "@/assets/images/skills/tech/back/crud.webp";
import dotenv from "@/assets/images/skills/tech/back/dotenv.webp";
import express from "@/assets/images/skills/tech/back/express-js.webp";
import firebase from "@/assets/images/skills/tech/back/firebase.webp";
import joi from "@/assets/images/skills/tech/back/joi.webp";
import jwt from "@/assets/images/skills/tech/back/jwt.webp";
import mongo from "@/assets/images/skills/tech/back/mongo-db.webp";
import mongoose from "@/assets/images/skills/tech/back/mongoose.webp";
import morgan from "@/assets/images/skills/tech/back/morgan.webp";
import multer from "@/assets/images/skills/tech/back/multer.webp";
import node from "@/assets/images/skills/tech/back/node-js.webp";
import nodemailer from "@/assets/images/skills/tech/back/nodemailer.webp";
import postman from "@/assets/images/skills/tech/back/postman.webp";
import restApiBackend from "@/assets/images/skills/tech/back/rest-api.webp";
import sendGrid from "@/assets/images/skills/tech/back/send-grid.webp";
import swagger from "@/assets/images/skills/tech/back/swagger.webp";

import css from "@/assets/images/skills/tech/styles/css.webp";
import mui from "@/assets/images/skills/tech/styles/mui.webp";
import sass from "@/assets/images/skills/tech/styles/sass.webp";
import tailwind from "@/assets/images/skills/tech/styles/tailwind.webp";

import atlassian from "@/assets/images/skills/teamWork/atlassian.webp";
import jira from "@/assets/images/skills/teamWork/jira.webp";
import scrum from "@/assets/images/skills/teamWork/scrum.webp";
import trello from "@/assets/images/skills/teamWork/trello.webp";

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
  { type: "frontend", title: "react native", image: reactNative },
  { type: "frontend", title: "redux", image: redux },
  { type: "frontend", title: "next", image: next },
  { type: "frontend", title: "vite", image: vite },
  { type: "frontend", title: "rest-api frontend", image: restApiFrontend },
  { type: "frontend", title: "github", image: gitHub },
  { type: "frontend", title: "git", image: git },
  { type: "frontend", title: "html", image: html },
  { type: "frontend", title: "crud frontend", image: crudFrontend },
  { type: "frontend", title: "figma", image: figma },
  { type: "frontend", title: "parcel", image: parcel },
  { type: "frontend", title: "babel", image: babel },
  { type: "frontend", title: "webpack", image: webpack },
  { type: "frontend", title: "three js", image: threeJs },
  { type: "frontend", title: "framer motion", image: framerMotion },

  // { type: "backend", title: "crud backend", image: crudBackend },
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

interface SkillBlock {
  id: number;
  type: "team work" | "backend" | "frontend" | "styles";
  title: string;
  className: string;
}

export const skillBlocksEnglish: SkillBlock[] = [
  {
    id: 1,
    type: "frontend",
    title: "frontend",
    className: "bg1",
  },
  {
    id: 2,
    type: "backend",
    title: "backend",
    className: "bg2",
  },
  {
    id: 3,
    type: "styles",
    title: "styles",
    className: "bg3",
  },
  {
    id: 4,
    type: "team work",
    title: "team work",
    className: "bg4",
  },
];

export const skillBlocksUkrainian: SkillBlock[] = [
  {
    id: 1,
    type: "frontend",
    title: "фронтенд",
    className: "bg1",
  },
  {
    id: 2,
    type: "backend",
    title: "бекенд",
    className: "bg2",
  },
  {
    id: 3,
    type: "styles",
    title: "стилі",
    className: "bg3",
  },
  {
    id: 4,
    type: "team work",
    title: "командна робота",
    className: "bg4",
  },
];
