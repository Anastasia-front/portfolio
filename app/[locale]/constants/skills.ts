import { StaticImageData } from "next/image";

import js from "@/assets/images/skills/categories/programming-language/js.webp";
import python from "@/assets/images/skills/categories/programming-language/python.webp";
import ts from "@/assets/images/skills/categories/programming-language/ts.webp";

import gitHub from "@/assets/images/skills/categories/system-control/git-hub.webp";
import git from "@/assets/images/skills/categories/system-control/git.webp";

import androidStudio from "@/assets/images/skills/categories/software/android-studio.webp";
import canva from "@/assets/images/skills/categories/software/canva.webp";
import expo from "@/assets/images/skills/categories/software/expo.webp";
import discord from "@/assets/images/skills/categories/software/discord.webp";
import figma from "@/assets/images/skills/categories/software/figma.webp";
import photoshop from "@/assets/images/skills/categories/software/photoshop.webp";
import pyCharm from "@/assets/images/skills/categories/software/py-charm.webp";
import slack from "@/assets/images/skills/categories/software/slack.webp";
import vsCode from "@/assets/images/skills/categories/software/vs-code.webp";

import babel from "@/assets/images/skills/categories/front/babel.webp";
import crudFrontend from "@/assets/images/skills/categories/front/crud.webp";
import framerMotion from "@/assets/images/skills/categories/front/framer-motion.webp";
import html from "@/assets/images/skills/categories/front/html.webp";
import next from "@/assets/images/skills/categories/front/next-js-1.webp";
import parcel from "@/assets/images/skills/categories/front/parcel.webp";
import reactNative from "@/assets/images/skills/categories/front/react-native.webp";
import react from "@/assets/images/skills/categories/front/react.webp";
import redux from "@/assets/images/skills/categories/front/redux.webp";
import restApiFrontend from "@/assets/images/skills/categories/front/rest-api.webp";
import threeJs from "@/assets/images/skills/categories/front/three-js.webp";
import vite from "@/assets/images/skills/categories/front/vite.webp";
import webpack from "@/assets/images/skills/categories/front/webpack.webp";
import eslint from "@/assets/images/skills/categories/front/eslint.webp";
import prettier from "@/assets/images/skills/categories/front/prettier.webp";
import markdown from "@/assets/images/skills/categories/front/markdown.webp";


import bcrypt from "@/assets/images/skills/categories/back/bcrypt.webp";
import cloudinary from "@/assets/images/skills/categories/back/cloudinary.webp";
import cors from "@/assets/images/skills/categories/back/cors.webp";
// import crudBackend from "@/assets/images/skills/categories/back/crud.webp";
import dotenv from "@/assets/images/skills/categories/back/dotenv.webp";
import express from "@/assets/images/skills/categories/back/express-js.webp";
import firebase from "@/assets/images/skills/categories/back/firebase.webp";
import joi from "@/assets/images/skills/categories/back/joi.webp";
import jwt from "@/assets/images/skills/categories/back/jwt.webp";
import mongo from "@/assets/images/skills/categories/back/mongo-db.webp";
import mongoose from "@/assets/images/skills/categories/back/mongoose.webp";
import morgan from "@/assets/images/skills/categories/back/morgan.webp";
import multer from "@/assets/images/skills/categories/back/multer.webp";
import node from "@/assets/images/skills/categories/back/node-js.webp";
import nodemailer from "@/assets/images/skills/categories/back/nodemailer.webp";
import postman from "@/assets/images/skills/categories/back/postman.webp";
import restApiBackend from "@/assets/images/skills/categories/back/rest-api.webp";
import sendGrid from "@/assets/images/skills/categories/back/send-grid.webp";
import swagger from "@/assets/images/skills/categories/back/swagger.webp";

import css from "@/assets/images/skills/categories/styles/css.webp";
import mui from "@/assets/images/skills/categories/styles/mui.webp";
import sass from "@/assets/images/skills/categories/styles/sass.webp";
import tailwind from "@/assets/images/skills/categories/styles/tailwind.webp";

import atlassian from "@/assets/images/skills/categories/team-work/atlassian.webp";
import jira from "@/assets/images/skills/categories/team-work/jira.webp";
import scrum from "@/assets/images/skills/categories/team-work/scrum.webp";
import trello from "@/assets/images/skills/categories/team-work/trello.webp";

export type Category =
  | "team work"
  | "backend"
  | "frontend"
  | "styles"
  | "programming language"
  | "system control"
  | "software";

interface Skill {
  title: string;
  image: StaticImageData;
  type: Category;
  isBig?:boolean
}

export const skills: Skill[] = [
  {
    type: "programming language",
    title: "js",
    image: js,
  },
  { type: "programming language", title: "ts", image: ts },
  { type: "programming language", title: "python", image: python },

  { type: "system control", title: "github", image: gitHub },
  { type: "system control", title: "git", image: git },

  { type: "software", title: "figma", image: figma },
  { type: "software",isBig:true, title: "visual studio code", image: vsCode },
  { type: "software",isBig:true, title: "py charm", image: pyCharm },
  { type: "software",isBig:true, title: "discord", image: discord },
  { type: "software",isBig:true, title: "slack", image: slack },
  { type: "software",isBig:true, title: "canva", image: canva },
  { type: "software",isBig:true, title: "photoshop", image: photoshop },
  { type: "software", title: "expo", image: expo },
  // { type: "software",title: "android studio", image: androidStudio },

  { type: "frontend", title: "react", image: react },
  { type: "frontend", title: "react native", image: reactNative },
  { type: "frontend", title: "redux", image: redux },
  { type: "frontend", title: "next", image: next },
  { type: "frontend", title: "vite", image: vite },
  { type: "frontend", title: "rest-api frontend", image: restApiFrontend },
  { type: "frontend", title: "html", image: html },
  { type: "frontend", title: "crud frontend", image: crudFrontend },
  { type: "frontend", title: "parcel", image: parcel },
  { type: "frontend", title: "babel", image: babel },
  { type: "frontend", title: "webpack", image: webpack },
  { type: "frontend", title: "eslint", image: eslint },  
  { type: "frontend", title: "markdown", image: markdown },
  { type: "frontend", title: "prettier", image: prettier,isBig:true },
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
  type: Category;
  title: string;
  className: string;
}

export const skillBlocksEnglish: SkillBlock[] = [
  {
    id: 1,
    type: "programming language",
    title: "languages",
    className: "bg1",
  },
  {
    id: 2,
    type: "frontend",
    title: "frontend",
    className: "bg2",
  },
  {
    id: 3,
    type: "backend",
    title: "backend",
    className: "bg3",
  },
  {
    id: 4,
    type: "styles",
    title: "styles",
    className: "bg4",
  },
  {
    id: 5,
    type: "team work",
    title: "team work",
    className: "bg5",
  },
  {
    id: 6,
    type: "software",
    title: "softwares",
    className: "bg6",
  },
  {
    id: 7,
    type: "system control",
    title: "system controls",
    className: "bg7",
  },
];

export const skillBlocksUkrainian: SkillBlock[] = [
  {
    id: 1,
    type: "programming language",
    title: "мови програмування",
    className: "bg1",
  },
  {
    id: 2,
    type: "frontend",
    title: "фронтенд",
    className: "bg2",
  },
  {
    id: 3,
    type: "backend",
    title: "бекенд",
    className: "bg3",
  },
  {
    id: 4,
    type: "styles",
    title: "стилі",
    className: "bg4",
  },
  {
    id: 5,
    type: "team work",
    title: "командна робота",
    className: "bg5",
  },
  {
    id: 6,
    type: "software",
    title: "програмні забезпечення",
    className: "bg6",
  },
  {
    id: 7,
    type: "system control",
    title: "системи контролю версій",
    className: "bg7",
  },
];
